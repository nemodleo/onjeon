'use client';

import Link from 'next/link';
import { TrendingUp, Package, AlertCircle } from 'lucide-react';
import { DutyFreeShoppingProgress } from '@/components/ui/page-progress';

export default function DutyFreeDashboardPage() {
  return (
    <>
      <DutyFreeShoppingProgress />
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black">면세 한도 대시보드</h1>
          <p className="text-gray-600 text-sm">실시간 한도 집계 • 품목별 분류</p>
        </div>

        {/* 사용액 현황 */}
        <div className="bg-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-300 text-sm">사용액</p>
              <div className="flex items-baseline space-x-1">
                <p className="text-3xl font-bold">$ 480</p>
                <p className="text-sm font-medium text-gray-400">~ 633,600 KRW-C</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-sm">총 한도</p>
              <p className="text-3xl font-bold">$ 600</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
            <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <div className="text-xs text-gray-300">
            한도 사용률 80% • 블록체인 자동 기록
          </div>
        </div>

        {/* 품목별 사용 현황 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">품목별 사용 현황</h2>
            <p className="text-gray-600 text-sm">카테고리별 한도 • 잔여 금액</p>
          </div>
          
          <div className="space-y-2">
            {/* 향수 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🌸</span>
                  <span className="text-base font-semibold">향수 / 화장품</span>
                </div>
                <span className="text-base font-bold">$350 / $600</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '58%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">58% 사용</span>
                <span className="text-xs text-gray-600">잔여 $250</span>
              </div>
            </div>

            {/* 주류 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🍷</span>
                  <span className="text-base font-semibold">주류</span>
                </div>
                <span className="text-base font-bold">$80 / $400</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">20% 사용</span>
                <span className="text-xs text-gray-600">잔여 $320</span>
              </div>
            </div>

            {/* 담배 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🚬</span>
                  <span className="text-base font-semibold">담배</span>
                </div>
                <span className="text-base font-bold">$50 / $200</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">25% 사용</span>
                <span className="text-xs text-gray-600">잔여 $150</span>
              </div>
            </div>

            {/* 기타 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">📦</span>
                  <span className="text-base font-semibold">기타 품목</span>
                </div>
                <span className="text-base font-bold">$0 / $600</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">0% 사용</span>
                <span className="text-xs text-gray-600">잔여 $600</span>
              </div>
            </div>
          </div>
        </div>

        {/* 한도 초과 경고 */}
        <div className="bg-orange-50 rounded-2xl p-3 border border-orange-200">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
            <div>
              <div className="text-base font-semibold text-orange-900">한도 80% 도달</div>
              <div className="text-sm text-orange-700 mt-1">
                면세 한도의 80%를 사용하셨습니다. 
                초과 구매시 입국시 세금이 부과됩니다.
              </div>
            </div>
          </div>
        </div>

        {/* NFT 영수증 현황 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">NFT 영수증</h2>
            <p className="text-gray-600 text-sm">블록체인 기록 • 투명 거래</p>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="text-2xl font-bold text-black">2</div>
              <div className="text-xs text-gray-600">전체 영수증</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-3">
              <div className="text-xl font-bold text-blue-600">3</div>
              <div className="text-xs text-gray-600">이번 달 발급</div>
            </div>
          </div>

          <div className="text-center py-4 bg-gray-50 rounded-2xl">
            <div className="text-xs text-gray-600 mb-1">블록체인 주소</div>
            <div className="font-mono text-sm text-black">0x7a9f...3d2c</div>
          </div>
        </div>

        {/* 통계 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">구매 통계</h2>
            <p className="text-gray-600 text-sm">이번 달 구매 • 건수</p>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-xs text-gray-600">이번 달 구매</span>
              </div>
              <div className="text-3xl font-bold">$480</div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center space-x-2 mb-1">
                <Package className="w-3 h-3 text-blue-600" />
                <span className="text-xs text-gray-600">구매 건수</span>
              </div>
              <div className="text-2xl font-bold">8건</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}