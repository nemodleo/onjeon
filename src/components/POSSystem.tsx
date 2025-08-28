'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency, calculateExchange } from '@/lib/utils';
import { Currency, PaymentQuote } from '@/types';

interface POSSystemProps {
  merchantName?: string;
}

interface ScannedQRData {
  type: string;
  paymentId: string;
  amount: number;
  currency: Currency;
  timestamp: number;
}

export function POSSystem({ merchantName = "테스트 매장" }: POSSystemProps) {
  const [scannedData, setScannedData] = useState<ScannedQRData | null>(null);
  const [quote, setQuote] = useState<PaymentQuote | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // 모의 환율 데이터
  const exchangeRates: Record<string, number> = {
    'KRW-USD': 0.000758,
    'KRW-JPY': 0.112,
    'KRW-EUR': 0.000694,
    'USD-KRW': 1320,
    'JPY-KRW': 8.9,
    'EUR-KRW': 1440,
  };

  const simulateScan = () => {
    // 모의 QR 스캔 데이터
    const mockQRData: ScannedQRData = {
      type: 'krw-payment',
      paymentId: 'id_demo123',
      amount: 45000,
      currency: 'KRW',
      timestamp: Date.now(),
    };
    setScannedData(mockQRData);
    
    // 자동으로 견적 생성
    generateQuote(mockQRData);
  };

  const generateQuote = (data: ScannedQRData) => {
    const fromCurrency = data.currency;
    const toCurrency = 'USD'; // 기본 정산 통화
    
    // 환율 가져오기
    const rateKey = `${fromCurrency}-${toCurrency}`;
    const exchangeRate = exchangeRates[rateKey] || 1;
    
    const { exchanged, spreadCost, total } = calculateExchange(data.amount, exchangeRate, 0.002);
    
    const newQuote: PaymentQuote = {
      amount: data.amount,
      fromCurrency,
      toCurrency,
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
    setScannedData(null);
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
        {!scannedData ? (
          <>
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📱</div>
              <div className="text-lg font-semibold mb-2">QR 코드를 스캔하세요</div>
              <div className="text-sm text-gray-500 mb-4">
                고객의 결제 QR 코드를 스캔하면<br />
                결제 정보가 자동으로 표시됩니다
              </div>
              <Button onClick={simulateScan} variant="outline" className="w-full max-w-xs">
                QR 코드 스캔 (시뮬레이션)
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-800">QR 스캔 완료</span>
                <span className="text-xs text-gray-500">ID: {scannedData.paymentId}</span>
              </div>
              <div className="text-xs text-gray-600">
                타임스탬프: {new Date(scannedData.timestamp).toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">결제 요청 금액</div>
              <div className="text-2xl font-bold">
                {formatCurrency(scannedData.amount, scannedData.currency)}
              </div>
            </div>

            {quote && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-sm font-medium text-blue-800 mb-2">정산 정보</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>결제 금액:</span>
                    <span className="font-medium">{formatCurrency(quote.amount, quote.fromCurrency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>적용 환율:</span>
                    <span className="font-medium">1 {quote.fromCurrency} = {quote.exchangeRate.toFixed(4)} {quote.toCurrency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>수수료 (0.2%):</span>
                    <span className="font-medium">{formatCurrency(quote.fees, quote.toCurrency)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-bold">
                    <span>정산 예정액:</span>
                    <span>{formatCurrency(quote.finalAmount, quote.toCurrency)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Button 
                onClick={processPayment} 
                className="w-full"
                disabled={!quote}
              >
                결제 승인
              </Button>
              
              <Button 
                onClick={reset} 
                className="w-full"
                variant="outline"
              >
                취소
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}