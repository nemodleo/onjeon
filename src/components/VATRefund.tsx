'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatCurrency, generateId } from '@/lib/utils';
import { VATRefund } from '@/types';

export function VATRefundDashboard() {
  // 모의 영수증 데이터
  const mockReceipts = [
    {
      id: 'receipt_001',
      merchantName: 'Luxury Department Store',
      amount: 240,
      taxAmount: 24,
      isVatRefundEligible: true,
      date: '2024-01-15',
      items: ['명품 향수', '브랜드 가방']
    },
    {
      id: 'receipt_002', 
      merchantName: 'Electronics Shop',
      amount: 180,
      taxAmount: 18,
      isVatRefundEligible: true,
      date: '2024-01-16',
      items: ['무선 이어폰', '휴대폰 케이스']
    },
    {
      id: 'receipt_003',
      merchantName: 'Local Restaurant', 
      amount: 45,
      taxAmount: 4.5,
      isVatRefundEligible: false,
      date: '2024-01-16',
      items: ['현지 음식', '음료']
    }
  ];

  const eligibleReceipts = mockReceipts.filter(r => r.isVatRefundEligible);
  const totalRefundAmount = eligibleReceipts.reduce((sum, receipt) => sum + (receipt.taxAmount * 0.8), 0);

  return (
    <div className="space-y-6">
      {/* 환급 예상액 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">VAT 환급 예상액</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-green-600">
              ₩{(totalRefundAmount * 1320).toLocaleString()}
            </div>
            <div className="text-lg text-gray-600">
              ${totalRefundAmount.toFixed(2)} USD
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center p-3 bg-blue-50 rounded">
                <div className="font-medium text-blue-800">구매 총액</div>
                <div className="text-blue-600">${eligibleReceipts.reduce((sum, r) => sum + r.amount, 0)}</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded">
                <div className="font-medium text-green-800">부가세</div>
                <div className="text-green-600">${eligibleReceipts.reduce((sum, r) => sum + r.taxAmount, 0).toFixed(2)}</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded">
                <div className="font-medium text-purple-800">환급률</div>
                <div className="text-purple-600">80%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 환급 가능 영수증 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>환급 대상 영수증</CardTitle>
          <CardDescription>VAT 환급이 가능한 구매 내역입니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {eligibleReceipts.map((receipt) => (
              <div key={receipt.id} className="p-4 border border-green-200 bg-green-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">{receipt.merchantName}</div>
                    <div className="text-sm text-gray-600">{receipt.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${receipt.amount}</div>
                    <div className="text-sm text-green-600">환급: ${(receipt.taxAmount * 0.8).toFixed(2)}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  구매 품목: {receipt.items.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 환급 불가 영수증 */}
      {mockReceipts.filter(r => !r.isVatRefundEligible).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>환급 제외 항목</CardTitle>
            <CardDescription>환급 대상에서 제외된 구매 내역입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockReceipts.filter(r => !r.isVatRefundEligible).map((receipt) => (
                <div key={receipt.id} className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium text-gray-600">{receipt.merchantName}</div>
                      <div className="text-sm text-gray-500">{receipt.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-600">${receipt.amount}</div>
                      <div className="text-xs text-gray-500">환급 불가</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    구매 품목: {receipt.items.join(', ')}
                  </div>
                  <div className="text-xs text-red-600 mt-1">
                    식음료는 VAT 환급 대상에서 제외됩니다
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function VATStampVerification() {
  const [isStampProcessing, setIsStampProcessing] = useState(false);
  const [isStamped, setIsStamped] = useState(false);
  const [boardingNumber, setBoardingNumber] = useState('');

  const processStamp = () => {
    setIsStampProcessing(true);
    
    // 3초 후 스탬프 완료 시뮬레이션
    setTimeout(() => {
      setIsStampProcessing(false);
      setIsStamped(true);
    }, 3000);
  };

  const selfVerification = () => {
    if (!boardingNumber.trim()) {
      alert('탑승권 번호를 입력해주세요.');
      return;
    }
    
    setIsStampProcessing(true);
    setTimeout(() => {
      setIsStampProcessing(false);
      setIsStamped(true);
    }, 2000);
  };

  if (isStamped) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">스탬프 완료</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-6xl text-green-600">✅</div>
          <div className="space-y-2">
            <div className="font-medium">검증이 완료되었습니다</div>
            <div className="text-sm text-gray-600">
              VAT 환급 처리가 진행됩니다
            </div>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-sm text-green-800 space-y-1">
              <div>검증 시간: {new Date().toLocaleString('ko-KR')}</div>
              <div>탑승권: {boardingNumber || 'QR 스캔 완료'}</div>
              <div>상태: 승인됨</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isStampProcessing) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">검증 처리 중...</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-4xl animate-spin">⏳</div>
          <div className="text-sm text-gray-500">
            영수증 정보를 검증하고 있습니다
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>스탬프 받기</CardTitle>
        <CardDescription>출국 전 VAT 환급 승인을 받으세요</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* QR 스캔 방식 */}
        <div className="space-y-3">
          <div className="text-sm font-medium">방법 1: QR 코드 스캔</div>
          <div className="p-4 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg text-center">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-sm text-blue-600">
              공항 직원이 스캔할 QR 코드
            </div>
            <div className="font-mono text-xs mt-2 text-gray-500">
              QR_REFUND_BUNDLE_001
            </div>
          </div>
          <Button onClick={processStamp} className="w-full">
            QR 스캔 완료 (시뮬레이션)
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="text-xs text-gray-500">또는</div>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* 셀프 인증 방식 */}
        <div className="space-y-3">
          <div className="text-sm font-medium">방법 2: 셀프 인증 (데모용)</div>
          <div>
            <Input
              placeholder="탑승권 번호 입력"
              value={boardingNumber}
              onChange={(e) => setBoardingNumber(e.target.value)}
            />
          </div>
          <Button 
            onClick={selfVerification} 
            variant="outline" 
            className="w-full"
            disabled={!boardingNumber.trim()}
          >
            셀프 인증하기
          </Button>
        </div>

        <div className="text-xs text-gray-500 text-center">
          💡 실제 서비스에서는 공항 세관에서 진행됩니다
        </div>
      </CardContent>
    </Card>
  );
}

export function VATPayoutConfirmation() {
  const [swapOption, setSwapOption] = useState<string>('KRW-C');
  const refundAmount = 33.6; // $33.60

  const exchangeRates = {
    'KRW-C': 1,
    'USDT': 1320,
    'USDC': 1320,
    'USD': 1320,
    'EUR': 1200
  };

  const getSwapAmount = () => {
    const krwAmount = refundAmount * 1320;
    if (swapOption === 'KRW-C') return `₩${krwAmount.toLocaleString()}`;
    if (swapOption === 'USDT' || swapOption === 'USDC') return `${refundAmount.toFixed(2)} ${swapOption}`;
    if (swapOption === 'USD') return `$${refundAmount.toFixed(2)}`;
    if (swapOption === 'EUR') return `€${(refundAmount * 1320 / 1200).toFixed(2)}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-green-600">환급 완료</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <div className="text-4xl">💰</div>
          <div className="font-medium">VAT 환급이 완료되었습니다</div>
          <div className="text-2xl font-bold text-green-600">
            ₩{(refundAmount * 1320).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">
            지갑에 즉시 입금되었습니다
          </div>
        </div>

        {/* 스왑 옵션 */}
        <div className="space-y-3">
          <div className="text-sm font-medium">다른 통화로 교환하기</div>
          <select 
            value={swapOption}
            onChange={(e) => setSwapOption(e.target.value)}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm"
          >
            <option value="KRW-C">KRW-C (그대로 보관)</option>
            <option value="USDT">USDT (테더)</option>
            <option value="USDC">USDC (USD 코인)</option>
            <option value="USD">USD (달러)</option>
            <option value="EUR">EUR (유로)</option>
          </select>

          {swapOption !== 'KRW-C' && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-sm text-blue-800">스왑 견적</div>
              <div className="flex justify-between text-sm mt-1">
                <span>받을 금액:</span>
                <span className="font-medium">{getSwapAmount()}</span>
              </div>
              <div className="flex justify-between text-xs text-blue-600 mt-1">
                <span>수수료 (0.1%):</span>
                <span>₩{((refundAmount * 1320) * 0.001).toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        <Button className="w-full" disabled={swapOption === 'KRW-C'}>
          {swapOption === 'KRW-C' ? 'KRW-C 보관 중' : `${swapOption}로 스왑하기`}
        </Button>

        {/* 거래 내역 */}
        <div className="border-t pt-4 space-y-2 text-xs">
          <div className="font-medium">거래 상세</div>
          <div className="space-y-1 text-gray-600">
            <div className="flex justify-between">
              <span>환급 기준 금액:</span>
              <span>$420.00</span>
            </div>
            <div className="flex justify-between">
              <span>부가세 (10%):</span>
              <span>$42.00</span>
            </div>
            <div className="flex justify-between">
              <span>환급률 (80%):</span>
              <span>$33.60</span>
            </div>
            <div className="flex justify-between">
              <span>처리 시간:</span>
              <span>{new Date().toLocaleString('ko-KR')}</span>
            </div>
            <div className="flex justify-between">
              <span>트랜잭션 ID:</span>
              <span className="font-mono">TX_VAT_001</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}