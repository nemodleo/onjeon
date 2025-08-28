'use client';

import { DutyFreeProgress } from '@/components/ui/page-progress';

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
    <>
      <DutyFreeProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold text-black mb-3">면세 한도 대시보드</h1>
        <p className="text-gray-600 text-base">
          실시간 추적 • 스마트 알림 • 자동 계산
        </p>
      </div>

      {/* 상단 정보 카드들 - 3열 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 스마트 알림 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">스마트 알림</h3>
          <div className="space-y-2">
            {notifications.slice(0, 2).map((notif) => (
              <div key={notif.id} className={`rounded-xl p-3 text-sm ${
                notif.isNew ? 'bg-white border border-gray-200' : 'bg-gray-100'
              }`}>
                <div className="font-medium text-black mb-1 line-clamp-2">{notif.message}</div>
                <div className="text-xs text-gray-500">{notif.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">빠른 액션</h3>
          <div className="space-y-2">
            <Link href="/exchange/qr-payment" className="block">
              <div className="bg-black text-white rounded-xl py-2 px-3 text-sm text-center font-medium hover:opacity-90 transition-opacity">
                QR 결제하기
              </div>
            </Link>
            <Link href="/vat-refund/dashboard" className="block">
              <div className="bg-white border border-gray-200 rounded-xl py-2 px-3 text-sm text-center font-medium hover:bg-gray-50 transition-colors">
                VAT 환급 확인
              </div>
            </Link>
            <Link href="/duty-free/trip-setup" className="block">
              <div className="bg-white border border-gray-200 rounded-xl py-2 px-3 text-sm text-center font-medium hover:bg-gray-50 transition-colors">
                새 여행 설정
              </div>
            </Link>
          </div>
        </div>

        {/* 이번 여행 통계 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">이번 여행 통계</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">총 거래</span>
              <span className="font-bold text-black">12건</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">평균 결제</span>
              <span className="font-bold text-black">$85</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">절약 수수료</span>
              <span className="font-bold text-green-600">$34</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">VAT 환급</span>
              <span className="font-bold text-blue-600">₩89,400</span>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="space-y-6">
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

        {/* 카테고리별 소비 분석 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-black">카테고리별 소비 분석</h3>
          <div className="grid grid-cols-5 gap-2">
            {[
              { category: '화장품', amount: 240, limit: 300, emoji: '💄' },
              { category: '패션', amount: 180, limit: 200, emoji: '👗' },
              { category: '전자제품', amount: 0, limit: 100, emoji: '📱' },
              { category: '식음료', amount: 45, limit: 0, emoji: '🍴' },
              { category: '기타', amount: 30, limit: 50, emoji: '🛒' }
            ].map((item) => (
              <div key={item.category} className="bg-gray-50 rounded-xl p-2">
                <div className="text-center">
                  <span className="text-lg">{item.emoji}</span>
                </div>
                <div className="text-xs font-medium text-black text-center">{item.category}</div>
                <div className="text-base font-bold text-black text-center">${item.amount}</div>
                {item.limit > 0 && (
                  <>
                    <div className="text-xs text-gray-500 text-center">/${item.limit}</div>
                    <div className="w-full bg-white rounded-full h-1 mt-1">
                      <div 
                        className="bg-gray-400 h-1 rounded-full transition-all"
                        style={{ width: `${Math.min((item.amount / item.limit) * 100, 100)}%` }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}