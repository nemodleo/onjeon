'use client';

import Link from 'next/link';
import { ChevronRight, Receipt, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { VATRefundProgress } from '@/components/ui/page-progress';

export default function RefundPage() {
  return (
    <>
      <VATRefundProgress />
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black">온전한 환급</h1>
          <p className="text-gray-600 text-sm">VAT 환급 • 공항 스탬프 • 즉시 지급</p>
        </div>

        {/* VAT 환급 현황 */}
        <div className="bg-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-300 text-sm">환급 가능액</p>
              <div className="flex items-baseline space-x-1">
                <p className="text-3xl font-bold">₩ 78,300</p>
                <p className="text-sm font-medium text-gray-400">~ 78,300 KRW-C</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <Receipt className="w-3 h-3" />
            </div>
          </div>
          <div className="text-xs text-gray-300">
            공항에서 스탬프 받기 → 즉시 입금
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-xl font-bold text-green-500">10%</div>
            <div className="text-xs text-gray-600">부가세 세율</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">즉시</div>
            <div className="text-xs text-gray-600">NFT 처리시간</div>
          </div>
        </div>

        {/* VAT 환급 서비스 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">환급 서비스</h2>
            <p className="text-gray-600 text-sm">리펀 대시보드 • 공항 스탬프 • 즉시 지급</p>
          </div>
          
          <div className="space-y-1">
            <Link
              href="/duty-free/refund/dashboard"
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Receipt className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">VAT 환급 대시보드</div>
                  <div className="text-xs text-gray-600">리펀 내역 • 환급률 확인</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            
            <Link
              href="/duty-free/refund/stamp"
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">공항 스탬프</div>
                  <div className="text-xs text-gray-600">디지털 승인 • QR 인증</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>


        {/* 환급률 안내 */}
        <div className="bg-blue-50 rounded-2xl p-3 border border-blue-200">
          <div className="flex items-start space-x-2">
            <Receipt className="w-4 h-4 text-blue-600 mt-0.5" />
            <div>
              <div className="text-base font-semibold text-blue-900">환급률 안내</div>
              <div className="text-sm text-blue-700 mt-1">
                일반 상품 7-10% • 명품 12% • 전자제품 8%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}