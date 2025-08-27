'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DutyFreeWidget, PaymentWarningBanner, ReceiptBreakdown } from '@/components/DutyFreeDashboard';
import { useTripStore } from '@/store/trip';
import Link from 'next/link';

export default function DutyFreeDashboardPage() {
  const { currentTrip, receipts } = useTripStore();
  const [simulatedPayment, setSimulatedPayment] = useState<number | null>(null);
  
  // 모의 알림 데이터
  const notifications = [
    {
      id: '1',
      type: 'duty_free_warning',
      message: '면세 한도의 70%를 사용했습니다. 남은 한도: $180',
      time: '2시간 전',
      isNew: true
    },
    {
      id: '2', 
      type: 'payment_completed',
      message: '명품 향수 구매 완료 - $120 (면세 적용)',
      time: '3시간 전',
      isNew: false
    }
  ];

  const simulatePayment = (amount: number) => {
    setSimulatedPayment(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">면세 한도 대시보드</h1>
        <p className="text-gray-600">
          실시간으로 면세 한도를 추적하고 스마트한 쇼핑을 계획하세요
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 메인 위젯 */}
        <div className="lg:col-span-2 space-y-6">
          <DutyFreeWidget />
          
          {/* 결제 시뮬레이션 */}
          {currentTrip && (
            <Card>
              <CardHeader>
                <CardTitle>결제 시뮬레이션</CardTitle>
                <CardDescription>가상의 결제로 한도 초과 경고를 테스트해보세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {simulatedPayment && (
                  <PaymentWarningBanner 
                    amount={simulatedPayment}
                    onProceed={() => {
                      alert('결제가 진행됩니다. (실제 데모에서는 결제 플로우로 이동)');
                      setSimulatedPayment(null);
                    }}
                    onCancel={() => setSimulatedPayment(null)}
                    onAlternative={() => {
                      alert('현지카드 결제로 변경됩니다.');
                      setSimulatedPayment(null);
                    }}
                  />
                )}
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Button size="sm" onClick={() => simulatePayment(50)} variant="outline">
                    $50 결제
                  </Button>
                  <Button size="sm" onClick={() => simulatePayment(150)} variant="outline">
                    $150 결제
                  </Button>
                  <Button size="sm" onClick={() => simulatePayment(300)} variant="outline">
                    $300 결제
                  </Button>
                  <Button size="sm" onClick={() => simulatePayment(700)} variant="destructive">
                    $700 결제
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <ReceiptBreakdown />
        </div>

        {/* 사이드바 */}
        <div className="space-y-6">
          {/* 알림 센터 */}
          <Card>
            <CardHeader>
              <CardTitle>스마트 알림</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`p-3 rounded-lg border ${
                    notif.isNew ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="text-sm">{notif.message}</div>
                    <div className="text-xs text-gray-500 mt-1">{notif.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 빠른 액션 */}
          <Card>
            <CardHeader>
              <CardTitle>빠른 액션</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/exchange/qr-payment">
                <Button className="w-full" size="sm">QR 결제하기</Button>
              </Link>
              <Link href="/vat-refund/dashboard">
                <Button className="w-full" size="sm" variant="outline">VAT 환급 확인</Button>
              </Link>
              <Link href="/duty-free/trip-setup">
                <Button className="w-full" size="sm" variant="outline">새 여행 설정</Button>
              </Link>
            </CardContent>
          </Card>

          {/* 통계 */}
          <Card>
            <CardHeader>
              <CardTitle>이번 여행 통계</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">총 거래 건수:</span>
                  <span className="font-medium">12건</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">평균 결제액:</span>
                  <span className="font-medium">$85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">절약된 수수료:</span>
                  <span className="font-medium text-green-600">$34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">예상 VAT 환급:</span>
                  <span className="font-medium text-blue-600">₩89,400</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 카테고리별 분석 */}
      <Card>
        <CardHeader>
          <CardTitle>카테고리별 소비 분석</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { category: '화장품', amount: 240, limit: 300, color: 'blue' },
              { category: '패션', amount: 180, limit: 200, color: 'green' },
              { category: '전자제품', amount: 0, limit: 100, color: 'gray' },
              { category: '식음료', amount: 45, limit: 0, color: 'orange' },
              { category: '기타', amount: 30, limit: 50, color: 'purple' }
            ].map((item) => (
              <div key={item.category} className="text-center p-4 border rounded-lg">
                <div className="text-sm text-gray-600 mb-2">{item.category}</div>
                <div className="text-lg font-bold">${item.amount}</div>
                {item.limit > 0 && (
                  <>
                    <div className="text-xs text-gray-500">한도: ${item.limit}</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                      <div 
                        className={`bg-${item.color}-500 h-1 rounded-full`}
                        style={{ width: `${Math.min((item.amount / item.limit) * 100, 100)}%` }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}