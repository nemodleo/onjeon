'use client';

import { DutyFreeProgress } from '@/components/ui/page-progress';

import { VATRefundDashboard } from '@/components/VATRefund';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function VATRefundDashboardPage() {
  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">VAT 환급 대시보드</h1>
        <p className="text-gray-600 text-sm">품목별 환급액 • NFT 영수증</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">예상 VAT 환급액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">$ 33.60</p>
              <p className="text-sm font-medium text-gray-400">~ 44,352 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-base">💰</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          구매액 $ 465 • 즉시 환급 가능
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">완료</div>
          <div className="text-xs text-gray-600">영수증 수집</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">대기중</div>
          <div className="text-xs text-gray-600">세관 승인</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">즉시</div>
          <div className="text-xs text-gray-600">환급 처리</div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <VATRefundDashboard />

      {/* VAT Refund Comparison */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">환급 방식 비교</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">🕐</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">기존 방식</div>
              <div className="text-xs text-gray-600">1-3개월 소요 • 복잡한 서류</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">⚡</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">KRW-C 방식</div>
              <div className="text-xs text-gray-600">즉시 처리 • 완전 자동화 • 수수료 0%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-black">관련 서비스</h3>
        <div className="grid grid-cols-3 gap-2">
          <Link href="/duty-free/vat-refund/stamp">
            <Button variant="outline" className="w-full text-sm">
              스탬프 받기
            </Button>
          </Link>
          <Link href="/customs/receipts">
            <Button variant="outline" className="w-full text-sm">
              NFT 영수증함
            </Button>
          </Link>
          <Link href="/duty-free/duty-free/dashboard">
            <Button variant="outline" className="w-full text-sm">
              면세 대시보드
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}