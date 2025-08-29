'use client';

import Link from 'next/link';
import { Package, ChevronRight, Receipt } from 'lucide-react';

export default function DutyFreePage() {
  return (
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

    </div>
  );
}