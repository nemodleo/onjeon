'use client';

import Link from 'next/link';
import { ChevronRight, TrendingUp, Package, Settings, AlertCircle } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function DutyFreeSubPage() {
  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black">온전한 면세</h1>
          <p className="text-gray-600 text-sm">면세 한도 관리 • 구매 내역 • 여행 설정</p>
        </div>

        {/* Current Status Card */}
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

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-xl font-bold text-orange-500">80%</div>
            <div className="text-xs text-gray-600">한도 사용률</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">2</div>
            <div className="text-xs text-gray-600">NFT 영수증</div>
          </div>
        </div>

        {/* 면세 관련 서비스 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">면세 서비스</h2>
            <p className="text-gray-600 text-sm">실시간 한도 • 구매 내역 • 여행 설정</p>
          </div>
          
          <div className="space-y-1">
            <Link
              href="/duty-free/duty-free/dashboard"
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-base">면세 한도 대시보드</div>
                  <div className="text-xs text-gray-600">실시간 한도 집계 • 품목별 분류</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            
            <Link
              href="/duty-free/duty-free/purchase-history"
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Package className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-base">구매 내역</div>
                  <div className="text-xs text-gray-600">면세품 구매 이력 • 영수증 관리</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            
            <Link
              href="/duty-free/duty-free/trip-setup"
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Settings className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-base">여행 설정</div>
                  <div className="text-xs text-gray-600">출발/귀국일 • 목적지 한도 규칙</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* 품목별 사용 현황 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">품목별 사용 현황</h2>
            <p className="text-gray-600 text-sm">카테고리별 한도 • 잔여 금액</p>
          </div>
          
          <div className="space-y-2">
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
      </div>
    </>
  );
}