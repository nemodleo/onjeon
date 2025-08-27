'use client';

import { POSSystem } from '@/components/POSSystem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function POSSystemPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">POS 시스템</h1>
        <p className="text-gray-600">
          가맹점용 KRW 스테이블코인 결제 처리 시스템
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* POS 시스템 */}
        <POSSystem />

        {/* 관리자 대시보드 */}
        <Card>
          <CardHeader>
            <CardTitle>오늘의 거래 현황</CardTitle>
            <CardDescription>실시간 정산 및 거래 통계</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">23</div>
                  <div className="text-sm text-gray-600">총 거래 건수</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">₩2,340,000</div>
                  <div className="text-sm text-gray-600">정산 완료 금액</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">최근 거래</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>$120.00 → ₩158,400</span>
                    <span className="text-green-600">완료</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>€85.50 → ₩123,120</span>
                    <span className="text-green-600">완료</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>¥15,000 → ₩133,500</span>
                    <span className="text-green-600">완료</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">수수료 통계</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>스프레드 수익:</span>
                    <span className="font-medium">₩4,680</span>
                  </div>
                  <div className="flex justify-between">
                    <span>정산 수수료:</span>
                    <span className="font-medium">₩11,700</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 기능 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>POS 시스템 특징</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-3xl">📱</div>
              <h3 className="font-medium">QR 스캔</h3>
              <p className="text-sm text-gray-600">
                고객의 QR 코드를 스캔하여 결제 정보를 자동으로 인식
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">💱</div>
              <h3 className="font-medium">실시간 환율</h3>
              <p className="text-sm text-gray-600">
                최신 환율 정보로 정확한 견적을 즉시 제공
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">⚡</div>
              <h3 className="font-medium">즉시 정산</h3>
              <p className="text-sm text-gray-600">
                블록체인 기반으로 3초 내 정산 완료
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">📊</div>
              <h3 className="font-medium">실시간 대시보드</h3>
              <p className="text-sm text-gray-600">
                거래 현황과 수익을 실시간으로 모니터링
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
  );
}