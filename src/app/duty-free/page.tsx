'use client';

import Link from 'next/link';
import { Package, ChevronRight, Receipt } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function DutyFreePage() {

  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
      {/* 온전한 면세 / 환급 */}
      <div className="space-y-4">
        <div className="pt-2">
          <h1 className="text-3xl font-bold text-black mb-1">온전한 면세 / 환급</h1>
          <p className="text-gray-600 text-sm">면세 한도 관리 • VAT 환급 • 블록체인 기록</p>
        </div>
      </div>

      {/* 주요 서비스 */}
      <div className="space-y-1">
        <Link
          href="/duty-free/duty-free"
          className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Package className="w-4 h-4 text-black" />
            </div>
            <div>
              <div className="font-semibold text-black text-lg">면세</div>
              <div className="text-xs text-gray-600">한도 관리 • 구매 내역 • 여행 설정</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
        
        <Link
          href="/duty-free/refund"
          className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Receipt className="w-4 h-4 text-black" />
            </div>
            <div>
              <div className="font-semibold text-black text-lg">환급</div>
              <div className="text-xs text-gray-600">VAT 환급 • 공항 스탬프 • 즉시 지급</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
      </div>

      {/* 최근 내역 섹션 */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-black mb-1">최근 내역</h2>
          <p className="text-gray-600 text-sm">면세 구매 • VAT 환급 • 블록체인 기록</p>
        </div>
        
        <div className="space-y-2">
          {/* 면세 구매 내역 */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-base">🛍️</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">롯데면세점 구매</div>
                <div className="text-xs text-gray-600">2시간 전 • 화장품</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">-$ 150</div>
              <div className="text-xs text-gray-600">면세 한도 차감</div>
            </div>
          </div>
          
          {/* VAT 환급 내역 */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-base">💰</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">VAT 환급 완료</div>
                <div className="text-xs text-gray-600">3시간 전 • 신세계 강남점</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-green-600">+₩25,000</div>
              <div className="text-xs text-gray-600">환급 완료</div>
            </div>
          </div>
          
          {/* 면세 구매 내역 */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-base">🛍️</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">신라면세점 구매</div>
                <div className="text-xs text-gray-600">어제 • 향수</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">-$ 330</div>
              <div className="text-xs text-gray-600">면세 한도 차감</div>
            </div>
          </div>

          {/* VAT 환급 내역 */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-base">📋</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">VAT 환급 신청</div>
                <div className="text-xs text-gray-600">어제 • 롯데백화점 명동점</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-blue-600">₩18,500</div>
              <div className="text-xs text-gray-600">처리 대기중</div>
            </div>
          </div>

          {/* 블록체인 기록 상태 */}
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="text-base">🔗</div>
                <span className="font-semibold text-base">블록체인 투명 기록</span>
              </div>
              <span className="text-sm text-green-600 font-medium">활성화</span>
            </div>
            <div className="text-xs text-gray-600">모든 거래 내역이 블록체인에 투명하게 기록됩니다</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}