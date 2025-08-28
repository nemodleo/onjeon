'use client';

import { POSSystem } from '@/components/POSSystem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExchangeProgress } from '@/components/ui/page-progress';

export default function POSSystemPage() {
  return (
    <>
      <ExchangeProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold text-black mb-3">POS 시스템</h1>
        <p className="text-gray-600 text-base">
          가맹점용 결제 • KRW-C 정산 • 실시간 처리
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* POS 시스템 */}
        <POSSystem />

        {/* 관리자 대시보드 - Apple Style */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-black">오늘의 거래 현황</h3>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl">
                  <div className="text-2xl font-bold text-black">23</div>
                  <div className="text-sm text-gray-600">총 거래 건수</div>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <div className="text-xl font-bold text-black">₩2,340,000</div>
                  <div className="text-sm text-gray-600">정산 완료 금액</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-black">최근 거래</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-white rounded-xl">
                    <span>$120.00 → ₩158,400</span>
                    <span className="text-gray-600">완료</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-xl">
                    <span>€85.50 → ₩123,120</span>
                    <span className="text-gray-600">완료</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-xl">
                    <span>¥15,000 → ₩133,500</span>
                    <span className="text-gray-600">완료</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-black mb-2">수수료 통계</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">스프레드 수익:</span>
                    <span className="font-medium">₩4,680</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">정산 수수료:</span>
                    <span className="font-medium">₩11,700</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POS 시스템 특징 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">POS 시스템 특징</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-lg">📱</span>
              </div>
              <div className="font-semibold text-black">QR 스캔</div>
            </div>
            <div className="text-sm text-gray-600">고객 QR 자동 인식</div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-lg">💱</span>
              </div>
              <div className="font-semibold text-black">실시간 환율</div>
            </div>
            <div className="text-sm text-gray-600">최신 환율 즉시 적용</div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-lg">⚡</span>
              </div>
              <div className="font-semibold text-black">즉시 정산</div>
            </div>
            <div className="text-sm text-gray-600">3초 내 완료</div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <div className="font-semibold text-black">대시보드</div>
            </div>
            <div className="text-sm text-gray-600">실시간 거래 모니터링</div>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <div className="flex justify-center space-x-4">
        <Link href="/exchange/qr-payment">
          <Button variant="outline">고객용 QR 생성</Button>
        </Link>
        <Link href="/exchange/otp-withdrawal">
          <Button variant="outline">OTP 현금 인출</Button>
        </Link>
      </div>
      </div>
    </>
  );
}