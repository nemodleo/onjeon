'use client';

import { useState, useEffect } from 'react';
 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency, generateQRData, generateId } from '@/lib/utils';
import { Currency, QRPayment as QRPaymentType } from '@/types';

export function QRPaymentGenerator() {
  const { user, setCurrentPayment } = useWalletStore();
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>('KRW');
  const [qrPayment, setQRPayment] = useState<QRPaymentType | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // 타이머 효과
  useEffect(() => {
    if (qrPayment && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && qrPayment) {
      handleExpire();
    }
  }, [qrPayment, timeLeft]);

  const generateQR = () => {
    if (!amount || !user) return;
    
    const payment: QRPaymentType = {
      id: generateId(),
      userId: user.id,
      amount: parseFloat(amount),
      currency,
      targetCurrency: currency,
      exchangeRate: 1,
      finalAmount: parseFloat(amount),
      status: 'pending',
      qrCode: '',
      expiresAt: new Date(Date.now() + 120000), // 2분
      createdAt: new Date(),
      fees: {
        spread: 0,
        settlement: 0,
        total: 0,
      },
    };

    payment.qrCode = generateQRData(payment.id, payment.amount, payment.currency);
    
    setQRPayment(payment);
    setCurrentPayment(payment);
    setTimeLeft(120); // 2분 타이머
  };

  const handleExpire = () => {
    if (qrPayment) {
      const expiredPayment = { ...qrPayment, status: 'expired' as const };
      setQRPayment(expiredPayment);
      setCurrentPayment(expiredPayment);
    }
  };

  const resetQR = () => {
    setQRPayment(null);
    setCurrentPayment(null);
    setAmount('');
    setTimeLeft(0);
  };

  if (qrPayment) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {qrPayment.status === 'expired' ? '만료된 QR 코드' : '결제 QR 코드'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center p-4 bg-white rounded-lg">
            {qrPayment.status !== 'expired' ? (
              <div className="text-center">
                <div className="mb-2 font-mono text-xs text-gray-500">
                  {qrPayment.qrCode}
                </div>
                <div className="w-48 h-48 border-2 border-gray-300 flex items-center justify-center text-xs text-gray-500">
                  QR 코드 영역<br/>
                  {qrPayment.qrCode.substring(0, 20)}...
                </div>
              </div>
            ) : (
              <div className="w-48 h-48 border-2 border-red-300 bg-red-50 flex items-center justify-center text-red-500">
                만료됨
              </div>
            )}
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold">
              {formatCurrency(qrPayment.amount, qrPayment.currency)}
            </div>
            
            {qrPayment.status !== 'expired' && (
              <div className="text-sm text-gray-500">
                남은 시간: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
            )}
            
            <div className="text-xs text-gray-400">
              결제 ID: {qrPayment.id}
            </div>
          </div>

          <Button 
            onClick={resetQR} 
            className="w-full"
            variant={qrPayment.status === 'expired' ? 'destructive' : 'outline'}
          >
            {qrPayment.status === 'expired' ? '새로 생성' : '취소'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>결제 QR 생성</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">금액</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="금액을 입력하세요"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">통화</label>
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm"
          >
            <option value="KRW">KRW (원화)</option>
            <option value="USD">USD (달러)</option>
            <option value="JPY">JPY (엔화)</option>
            <option value="EUR">EUR (유로)</option>
          </select>
        </div>

        {amount && (
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">결제 금액</div>
            <div className="font-bold">
              {formatCurrency(parseFloat(amount), currency)}
            </div>
          </div>
        )}

        <Button 
          onClick={generateQR} 
          className="w-full"
          disabled={!amount || parseFloat(amount) <= 0}
        >
          QR 코드 생성
        </Button>
      </CardContent>
    </Card>
  );
}