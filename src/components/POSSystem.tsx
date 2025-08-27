'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatCurrency, calculateExchange } from '@/lib/utils';
import { Currency, PaymentQuote } from '@/types';

interface POSSystemProps {
  merchantName?: string;
}

export function POSSystem({ merchantName = "테스트 매장" }: POSSystemProps) {
  const [scannedData, setScannedData] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [quote, setQuote] = useState<PaymentQuote | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // 모의 환율 데이터
  const exchangeRates: Record<string, number> = {
    'USD-KRW': 1320,
    'JPY-KRW': 8.9,
    'EUR-KRW': 1440,
    'KRW-USD': 0.000758,
    'KRW-JPY': 0.112,
    'KRW-EUR': 0.000694,
  };

  const simulateScan = () => {
    // 모의 QR 스캔 데이터
    const mockQRData = {
      type: 'krw-payment',
      paymentId: 'id_demo123',
      amount: 100000,
      currency: 'KRW',
      timestamp: Date.now(),
    };
    setScannedData(JSON.stringify(mockQRData));
  };

  const getQuote = async () => {
    if (!amount || !scannedData) return;

    const parsedData = JSON.parse(scannedData);
    const fromCurrency = parsedData.currency as Currency;
    const toCurrency = currency;
    const paymentAmount = parseFloat(amount);
    
    // 환율 가져오기
    const rateKey = `${fromCurrency}-${toCurrency}`;
    const exchangeRate = exchangeRates[rateKey] || 1;
    
    const { exchanged, spreadCost, total } = calculateExchange(paymentAmount, exchangeRate, 0.002);
    
    const newQuote: PaymentQuote = {
      amount: paymentAmount,
      fromCurrency: toCurrency,
      toCurrency: fromCurrency,
      exchangeRate,
      spread: 0.002,
      fees: spreadCost,
      finalAmount: total,
      expiresAt: new Date(Date.now() + 60000), // 1분
    };

    setQuote(newQuote);
  };

  const processPayment = async () => {
    if (!quote) return;
    
    setIsProcessing(true);
    
    // 3초 후 결제 완료 시뮬레이션
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 3000);
  };

  const reset = () => {
    setScannedData('');
    setAmount('');
    setQuote(null);
    setIsProcessing(false);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">결제 완료</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-6xl">✅</div>
          <div className="space-y-2">
            <div className="text-lg font-semibold">{merchantName}</div>
            <div className="text-2xl font-bold">
              {quote && formatCurrency(quote.amount, quote.fromCurrency)}
            </div>
            <div className="text-sm text-gray-500">
              정산 완료: {quote && formatCurrency(quote.finalAmount, quote.toCurrency)}
            </div>
          </div>
          <Button onClick={reset} className="w-full">
            새 결제
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (isProcessing) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">결제 처리 중...</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-4xl animate-spin">⏳</div>
          <div className="text-sm text-gray-500">
            환전 및 정산 진행 중
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>POS 시스템 - {merchantName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">QR 스캔</label>
          <div className="space-y-2">
            <Button onClick={simulateScan} variant="outline" className="w-full">
              📱 QR 코드 스캔 (시뮬레이션)
            </Button>
            {scannedData && (
              <div className="p-2 bg-green-50 border border-green-200 rounded text-xs font-mono">
                스캔 완료: {scannedData.substring(0, 50)}...
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">결제 금액</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="결제할 금액을 입력"
            disabled={!scannedData}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">현지 통화</label>
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm"
            disabled={!scannedData}
          >
            <option value="USD">USD (달러)</option>
            <option value="JPY">JPY (엔화)</option>
            <option value="EUR">EUR (유로)</option>
            <option value="KRW">KRW (원화)</option>
          </select>
        </div>

        {quote && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-sm font-medium text-blue-800 mb-2">견적</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>결제 금액:</span>
                <span className="font-medium">{formatCurrency(quote.amount, quote.fromCurrency)}</span>
              </div>
              <div className="flex justify-between">
                <span>환율:</span>
                <span className="font-medium">{quote.exchangeRate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>수수료 (0.2%):</span>
                <span className="font-medium">{formatCurrency(quote.fees, quote.toCurrency)}</span>
              </div>
              <div className="flex justify-between border-t pt-1 font-bold">
                <span>정산 금액:</span>
                <span>{formatCurrency(quote.finalAmount, quote.toCurrency)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Button 
            onClick={getQuote} 
            className="w-full"
            variant="outline"
            disabled={!scannedData || !amount}
          >
            견적 조회
          </Button>
          
          {quote && (
            <Button 
              onClick={processPayment} 
              className="w-full"
            >
              결제 승인
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}