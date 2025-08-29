'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency, generateOTP, generateId } from '@/lib/utils';
import { Currency, OTPWithdrawal } from '@/types';

export function OTPWithdrawalGenerator() {
  const { user, setCurrentWithdrawal } = useWalletStore();
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [location, setLocation] = useState<string>('');
  const [withdrawal, setWithdrawal] = useState<OTPWithdrawal | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (withdrawal && timeLeft > 0 && withdrawal.status === 'active') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && withdrawal?.status === 'active') {
      handleExpire();
    }
  }, [withdrawal, timeLeft]);

  const generateOTPWithdrawal = () => {
    if (!amount || !user) return;

    const newWithdrawal: OTPWithdrawal = {
      id: generateId(),
      userId: user.id,
      otp: generateOTP(),
      amount: parseFloat(amount),
      currency,
      location: location || '가까운 대리점',
      status: 'active',
      expiresAt: new Date(Date.now() + 120000), // 2분
      createdAt: new Date(),
    };

    setWithdrawal(newWithdrawal);
    setCurrentWithdrawal(newWithdrawal);
    setTimeLeft(120);
    
    // Trigger terminal session highlighting
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('step', 'terminal');
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
    
    // Trigger a custom event to update progress
    window.dispatchEvent(new Event('otpGenerated'));
  };

  const handleExpire = () => {
    if (withdrawal) {
      const expiredWithdrawal = { ...withdrawal, status: 'expired' as const };
      setWithdrawal(expiredWithdrawal);
      setCurrentWithdrawal(expiredWithdrawal);
    }
  };

  const reset = () => {
    setWithdrawal(null);
    setCurrentWithdrawal(null);
    setAmount('');
    setLocation('');
    setTimeLeft(0);
  };

  if (withdrawal) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {withdrawal.status === 'expired' ? '만료된 OTP' : 
             withdrawal.status === 'used' ? '사용 완료' : 'OTP 인출 코드'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {withdrawal.status === 'active' && (
            <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="text-4xl font-mono font-bold text-blue-600 mb-2">
                {withdrawal.otp}
              </div>
              <div className="text-base text-blue-500 mb-2">
                남은 시간: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-500">
                이 코드를 대리점이나 ATM에서 입력하세요
              </div>
            </div>
          )}

          {withdrawal.status === 'expired' && (
            <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="text-4xl text-red-400 mb-2">⏰</div>
              <div className="text-red-600 font-medium">OTP가 만료되었습니다</div>
            </div>
          )}

          {withdrawal.status === 'used' && (
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="text-4xl text-green-600 mb-2">✅</div>
              <div className="text-green-600 font-medium">인출이 완료되었습니다</div>
            </div>
          )}

          <div className="space-y-2 text-base">
            <div className="flex justify-between">
              <span>인출 금액:</span>
              <span className="font-medium">
                {formatCurrency(withdrawal.amount, withdrawal.currency)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>인출 위치:</span>
              <span className="font-medium">{withdrawal.location}</span>
            </div>
            <div className="flex justify-between">
              <span>OTP ID:</span>
              <span className="font-mono text-sm">{withdrawal.id}</span>
            </div>
          </div>

          <Button 
            onClick={reset} 
            className="w-full"
            variant={withdrawal.status === 'active' ? 'outline' : 'default'}
          >
            {withdrawal.status === 'active' ? '취소' : '새 OTP 생성'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>OTP 현금 인출</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-base font-medium mb-2">인출 금액</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="인출할 금액을 입력하세요"
          />
        </div>
        
        <div>
          <label className="block text-base font-medium mb-2">현지 통화</label>
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-base"
          >
            <option value="USD">USD (달러)</option>
            <option value="JPY">JPY (엔화)</option>
            <option value="EUR">EUR (유로)</option>
          </select>
        </div>

        <div>
          <label className="block text-base font-medium mb-2">인출 위치 (선택)</label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="특정 대리점이나 ATM 위치"
          />
        </div>

        {amount && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg space-y-2">
            <div className="text-base text-blue-800">인출 정보</div>
            <div className="flex justify-between text-base">
              <span>인출 금액:</span>
              <span className="font-medium">{formatCurrency(parseFloat(amount), currency)}</span>
            </div>
            <div className="flex justify-between text-base">
              <span>수수료 (1%):</span>
              <span className="font-medium">{formatCurrency(parseFloat(amount) * 0.01, currency)}</span>
            </div>
            <div className="flex justify-between text-base font-bold border-t pt-2">
              <span>차감 KRW-C:</span>
              <span>₩{(parseFloat(amount) * 1320 * 1.01).toLocaleString()}</span>
            </div>
          </div>
        )}

        <Button 
          onClick={generateOTPWithdrawal} 
          className="w-full"
          disabled={!amount || parseFloat(amount) <= 0}
        >
          OTP 생성
        </Button>

        <div className="text-sm text-gray-500 text-center">
          생성된 OTP는 2분간 유효하며, 일회용입니다.
        </div>
      </CardContent>
    </Card>
  );
}

export function OTPVerificationTerminal() {
  const { currentWithdrawal } = useWalletStore();
  const [otpInput, setOtpInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const verifyOTP = async () => {
    if (!otpInput || otpInput.length !== 6) return;

    setIsProcessing(true);
    
    // 3초 후 검증 결과 시뮬레이션
    setTimeout(() => {
      setIsProcessing(false);
      // 실제 OTP와 비교하여 검증
      const success = currentWithdrawal && currentWithdrawal.otp === otpInput && currentWithdrawal.status === 'active';
      setResult({
        success: !!success,
        message: success 
          ? '인출이 승인되었습니다. 현금을 지급해주세요.' 
          : currentWithdrawal 
            ? (currentWithdrawal.status === 'expired' ? 'OTP가 만료되었습니다.' : '유효하지 않은 OTP입니다.')
            : 'OTP를 먼저 생성해주세요.'
      });
    }, 3000);
  };

  const reset = () => {
    setOtpInput('');
    setResult(null);
    setIsProcessing(false);
  };

  if (result) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {result.success ? '인출 승인' : '인출 실패'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className={`text-6xl ${result.success ? 'text-green-600' : 'text-red-600'}`}>
            {result.success ? '✅' : '❌'}
          </div>
          <div className={`font-medium ${result.success ? 'text-green-600' : 'text-red-600'}`}>
            {result.message}
          </div>
          
          {result.success && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-base text-green-800 space-y-1">
                <div>인출 금액: {currentWithdrawal ? formatCurrency(currentWithdrawal.amount, currentWithdrawal.currency) : '$100.00'}</div>
                <div>수수료: {currentWithdrawal ? formatCurrency(currentWithdrawal.amount * 0.01, currentWithdrawal.currency) : '$1.00'}</div>
                <div>지급할 현금: {currentWithdrawal ? formatCurrency(currentWithdrawal.amount * 0.99, currentWithdrawal.currency) : '$99.00'}</div>
              </div>
            </div>
          )}

          <Button onClick={reset} className="w-full">
            다음 인출
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (isProcessing) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">OTP 검증 중...</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-4xl animate-spin">⏳</div>
          <div className="text-base text-gray-500">
            OTP 유효성 및 잔액을 확인하고 있습니다
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>ATM / 대리점 터미널</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-base font-medium mb-2">OTP 입력</label>
          <Input
            type="text"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="6자리 OTP를 입력하세요"
            maxLength={6}
            className="text-center text-xl font-mono tracking-wide"
          />
        </div>

        <div className="text-center text-sm text-gray-500 bg-yellow-50 p-2 rounded">
          💡 데모용: 123456 입력하면 성공, 다른 숫자면 실패
        </div>

        <Button 
          onClick={verifyOTP} 
          className="w-full"
          disabled={otpInput.length !== 6}
        >
          OTP 확인 및 인출
        </Button>
      </CardContent>
    </Card>
  );
}