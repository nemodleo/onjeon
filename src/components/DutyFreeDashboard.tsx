'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTripStore } from '@/store/trip';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

interface DutyFreeWidgetProps {
  onPaymentWarning?: (isOverLimit: boolean, remainingAmount: number) => void;
}

export function DutyFreeWidget({ onPaymentWarning }: DutyFreeWidgetProps) {
  const { currentTrip, calculateDutyFreeRemaining } = useTripStore();
  const [paymentAmount, setPaymentAmount] = useState(0);

  if (!currentTrip) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>면세 한도 관리</CardTitle>
          <CardDescription>여행을 시작하여 면세 한도를 추적하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/duty-free/trip-setup">
            <Button className="w-full">여행 설정하기</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  const remaining = calculateDutyFreeRemaining();
  const usagePercentage = (currentTrip.usedAmount / currentTrip.dutyFreeLimit) * 100;
  
  // 결제 전 한도 초과 확인
  const checkPaymentLimit = (amount: number) => {
    const willExceed = (currentTrip.usedAmount + amount) > currentTrip.dutyFreeLimit;
    const remainingAfter = remaining - amount;
    
    if (onPaymentWarning) {
      onPaymentWarning(willExceed, remainingAfter);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>면세 한도 현황</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {currentTrip.fromCountry} → {currentTrip.toCountry}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 한도 현황 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">
              ${remaining.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">남은 한도</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                usagePercentage > 90 ? 'bg-red-500' : 
                usagePercentage > 70 ? 'bg-yellow-500' : 'bg-blue-500'
              }`}
              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>사용: ${currentTrip.usedAmount.toFixed(2)}</span>
            <span>한도: ${currentTrip.dutyFreeLimit.toFixed(2)}</span>
          </div>
        </div>

        {/* 알림 */}
        {usagePercentage > 90 && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-red-800 text-sm font-medium">⚠️ 한도 초과 위험</div>
            <div className="text-red-600 text-xs">
              면세 한도의 90%를 초과했습니다. 추가 구매시 세금이 부과될 수 있습니다.
            </div>
          </div>
        )}
        
        {usagePercentage > 70 && usagePercentage <= 90 && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="text-yellow-800 text-sm font-medium">⚡ 한도 주의</div>
            <div className="text-yellow-600 text-xs">
              면세 한도의 70%를 사용했습니다. 남은 구매를 계획적으로 진행하세요.
            </div>
          </div>
        )}

        {/* 여행 정보 */}
        <div className="pt-2 border-t space-y-1 text-xs text-gray-500">
          <div>출발일: {currentTrip.departureDate.toLocaleDateString('ko-KR')}</div>
          <div>귀국일: {currentTrip.returnDate.toLocaleDateString('ko-KR')}</div>
          <div>여행 기간: {Math.ceil((currentTrip.returnDate.getTime() - currentTrip.departureDate.getTime()) / (1000 * 60 * 60 * 24))}일</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PaymentWarningBanner({ 
  amount, 
  currency = 'USD',
  onProceed,
  onCancel,
  onAlternative 
}: {
  amount: number;
  currency?: string;
  onProceed?: () => void;
  onCancel?: () => void;
  onAlternative?: () => void;
}) {
  const { currentTrip, calculateDutyFreeRemaining } = useTripStore();
  
  if (!currentTrip) return null;

  const remaining = calculateDutyFreeRemaining();
  const willExceed = amount > remaining;
  const exceedAmount = amount - remaining;

  if (!willExceed) {
    return (
      <div className="p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
        <div className="text-green-800 text-sm font-medium">✅ 한도 내 결제</div>
        <div className="text-green-600 text-xs">
          이 결제 후 남은 한도: ${(remaining - amount).toFixed(2)}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
      <div className="text-red-800 text-sm font-medium mb-2">
        ⚠️ 면세 한도 초과 예상
      </div>
      <div className="text-red-600 text-xs mb-3">
        <div>결제 금액: {formatCurrency(amount, currency)}</div>
        <div>남은 한도: ${remaining.toFixed(2)}</div>
        <div className="font-medium">초과 금액: ${exceedAmount.toFixed(2)} (세금 부과 대상)</div>
      </div>
      
      <div className="flex space-x-2">
        <Button size="sm" variant="destructive" onClick={onProceed}>
          그래도 진행
        </Button>
        <Button size="sm" variant="outline" onClick={onAlternative}>
          현지카드 결제
        </Button>
        <Button size="sm" variant="ghost" onClick={onCancel}>
          취소
        </Button>
      </div>
    </div>
  );
}

export function ReceiptBreakdown({ 
  items = [
    { name: "명품 향수", category: "화장품", price: 120, isDutyFree: true },
    { name: "브랜드 가방", category: "패션", price: 350, isDutyFree: true },
    { name: "현지 음식", category: "식음료", price: 25, isDutyFree: false },
  ]
}: {
  items?: Array<{
    name: string;
    category: string;
    price: number;
    isDutyFree: boolean;
  }>;
}) {
  const dutyFreeTotal = items.filter(item => item.isDutyFree).reduce((sum, item) => sum + item.price, 0);
  const regularTotal = items.filter(item => !item.isDutyFree).reduce((sum, item) => sum + item.price, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>영수증 상세</CardTitle>
        <CardDescription>품목별 면세 한도 적용 현황</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-gray-50">
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-gray-500">{item.category}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">${item.price}</div>
                <div className={`text-xs px-2 py-1 rounded ${
                  item.isDutyFree 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.isDutyFree ? '면세 포함' : '면세 제외'}
                </div>
              </div>
            </div>
          ))}
          
          <div className="border-t pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span>면세 적용 금액:</span>
              <span className="font-medium text-blue-600">${dutyFreeTotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>일반 결제 금액:</span>
              <span className="font-medium">${regularTotal}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>총 결제 금액:</span>
              <span>${dutyFreeTotal + regularTotal}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}