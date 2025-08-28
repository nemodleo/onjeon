'use client';

import { VATRefundProgress } from '@/components/ui/page-progress';

import { VATRefundDashboard } from '@/components/VATRefund';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VATRefundDashboardPage() {
  return (
    <>
      <VATRefundProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="pt-6">
        <h1 className="text-3xl font-bold text-black mb-3">리펀 대시보드</h1>
        <p className="text-gray-600 text-base">품목별 환급액 • NFT 영수증</p>
      </div>

      {/* 상단 정보 카드들 - 3열 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* VAT 환급 처리 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">VAT 환급 처리</h3>
          <Link href="/vat-refund/stamp" className="block">
            <div className="bg-black text-white rounded-xl py-3 px-4 text-center text-sm font-medium hover:opacity-90 transition-opacity">
              🎫 공항에서 스탬프 받기
            </div>
          </Link>
          <div className="text-xs text-gray-500 text-center mt-2">
            출국 전 세관에서 승인 필요
          </div>
        </div>

        {/* 환급 진행 상황 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">진행 상황</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-xs">영수증 수집 완료</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-xs">환급 금액 계산 완료</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">세관 승인 대기 중</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span className="text-xs text-gray-500">환급 처리 대기</span>
            </div>
          </div>
        </div>

        {/* 환급 통계 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">환급 통계</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">구매액:</span>
              <span className="font-medium">$465</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">환급 가능:</span>
              <span className="font-medium">$33.60</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">수령 시간:</span>
              <span className="font-medium">즉시</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-gray-600">기존 대비:</span>
              <span className="font-medium">7일 단축</span>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <VATRefundDashboard />

      {/* 비교표 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">기존 VAT 환급 vs KRW-C 환급</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-2xl p-4">
            <h4 className="font-medium text-black mb-3 text-center">기존 방식</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>🕐 처리 시간: 1-3개월</div>
              <div>📋 서류 작업 복잡</div>
              <div>🏛️ 공항 창구 대기</div>
              <div>💳 카드/계좌 환급만</div>
              <div>💰 환전 수수료 발생</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <h4 className="font-medium text-black mb-3 text-center">개선된 디지털</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>⏱️ 처리 시간: 7-14일</div>
              <div>📱 앱으로 신청</div>
              <div>✉️ 우편 서류 제출</div>
              <div>🏦 계좌 이체</div>
              <div>💸 일부 수수료 절약</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <h4 className="font-medium text-black mb-3 text-center">KRW-C 방식</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>⚡ 처리 시간: 즉시</div>
              <div>🤖 완전 자동화</div>
              <div>📱 QR 스캔 완료</div>
              <div>🪙 스테이블코인 지급</div>
              <div>🆓 수수료 0%</div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로세스 안내 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">VAT 환급 프로세스</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h3 className="font-medium text-black mb-2">자동 계산</h3>
            <p className="text-xs text-gray-600">
              KRW-C 결제 시 VAT 환급 대상 자동 계산
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h3 className="font-medium text-black mb-2">영수증 번들</h3>
            <p className="text-xs text-gray-600">
              환급 대상 영수증 QR 코드로 번들링
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h3 className="font-medium text-black mb-2">세관 승인</h3>
            <p className="text-xs text-gray-600">
              출국 시 QR 스캔으로 간단 승인
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              4
            </div>
            <h3 className="font-medium text-black mb-2">즉시 환급</h3>
            <p className="text-xs text-gray-600">
              승인과 동시에 KRW-C 지갑 입금
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}