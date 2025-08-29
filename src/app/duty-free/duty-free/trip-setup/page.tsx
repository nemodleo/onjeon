'use client';

import { DutyFreeShoppingProgress } from '@/components/ui/page-progress';

import { TripSetupForm, TripHistory } from '@/components/TripSetup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTripStore } from '@/store/trip';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function TripSetupPage() {
  const { currentTrip } = useTripStore();

  return (
    <>
      <DutyFreeShoppingProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">여행 설정</h1>
        <p className="text-gray-600 text-sm">
          여행 정보를 설정하여 맞춤형 면세 한도 관리를 시작하세요
        </p>
      </div>



      {/* Trip Setup Section */}
      <div className="space-y-1">
        {currentTrip ? (
          <>
            <Link href="/duty-free/duty-free/dashboard" className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-base">✈️</span>
                </div>
                <div>
                  <div className="font-semibold text-black text-base">현재 여행: {currentTrip.fromCountry} → {currentTrip.toCountry}</div>
                  <div className="text-xs text-gray-600">출발: {currentTrip.departureDate.toLocaleDateString('ko-KR')} • 한도: ${currentTrip.dutyFreeLimit}</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            <button onClick={() => window.location.reload()} className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-base">➕</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-black text-base">새 여행 설정</div>
                  <div className="text-xs text-gray-600">다른 여행 일정 추가</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </>
        ) : (
          <TripSetupForm />
        )}
      </div>

      {/* Duty-Free Limits Section */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h3 className="text-lg font-bold text-black mb-3">면세 한도 참고</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { from: '🇰🇷', to: '🇺🇸', limit: '$800' },
            { from: '🇰🇷', to: '🇯🇵', limit: '$600' },
            { from: '🇰🇷', to: '🇩🇪', limit: '$700' },
            { from: '🇺🇸', to: '🇰🇷', limit: '$600' },
            { from: '🇯🇵', to: '🇰🇷', limit: '$500' },
            { from: '🇩🇪', to: '🇰🇷', limit: '$550' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-2 text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="text-base">{item.from}</span>
                <span className="text-xs text-gray-400">→</span>
                <span className="text-base">{item.to}</span>
              </div>
              <div className="text-xs font-bold text-black">{item.limit}</div>
            </div>
          ))}
        </div>
      </div>


      {/* Smart Shopping Guide */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">스마트 쇼핑 가이드</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">💡</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">절약 팁</div>
              <div className="text-xs text-gray-600">한도 70% 사용 시 계획적 구매</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">⚡</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">KRW-C 혜택</div>
              <div className="text-xs text-gray-600">환전 수수료 0% • 실시간 한도 초과 방지</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">📱</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">스마트 기능</div>
              <div className="text-xs text-gray-600">결제 전 한도 경고 • NFT 자동 세관 신고</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-black">관련 서비스</h3>
        <div className="grid grid-cols-3 gap-2">
          <Link href="/duty-free/duty-free/dashboard">
            <Button variant="outline" className="w-full text-sm">
              면세 대시보드
            </Button>
          </Link>
          <Link href="/duty-free/refund">
            <Button variant="outline" className="w-full text-sm">
              VAT 환급
            </Button>
          </Link>
          <Link href="/customs">
            <Button variant="outline" className="w-full text-sm">
              세관 신고
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}