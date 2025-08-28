'use client';

import { POSSystem } from '@/components/POSSystem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PaymentProgress } from '@/components/ui/page-progress';

export default function POSSystemPage() {
  return (
    <>
      <PaymentProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">POS 시스템</h1>
        <p className="text-gray-600 text-xs">가맹점용 결제 • KRW-C 정산 • 실시간 처리</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">오늘의 매출</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-lg font-bold">₩ 2,340,000</p>
              <p className="text-sm font-medium text-gray-400">~ 2,340,000 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">POS</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          23건 거래 완료 • 실시간 정산
        </div>
      </div>

      {/* POS System */}
      <POSSystem />

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">3초</div>
          <div className="text-xs text-gray-600">정산시간</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-green-500">0.5%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">24/7</div>
          <div className="text-xs text-gray-600">운영시간</div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">최근 거래</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">$ 120.00</div>
                <div className="text-xs text-gray-600">5분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">₩158,400</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">€85.50</div>
                <div className="text-xs text-gray-600">12분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">₩123,120</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="grid grid-cols-2 gap-2">
        <Link href="/payment/qr-payment">
          <Button variant="outline" className="w-full text-xs">
            QR 결제
          </Button>
        </Link>
        <Link href="/payment/history">
          <Button variant="outline" className="w-full text-xs">
            결제 내역
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}