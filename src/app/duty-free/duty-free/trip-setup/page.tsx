'use client';

import { DutyFreeProgress } from '@/components/ui/page-progress';

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
      <DutyFreeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">여행 설정</h1>
        <p className="text-gray-600 text-sm">
          여행 정보를 설정하여 맞춤형 면세 한도 관리를 시작하세요
        </p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">사용 가능 잔액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">$ 600</p>
              <p className="text-sm font-medium text-gray-400">~ 792,000 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-base">🛍️</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          실시간 한도 추적 • 스마트 알림
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-3xl font-bold text-black">$ 200</div>
          <div className="text-xs text-gray-600">사용 금액</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-3xl font-bold text-black">$ 400</div>
          <div className="text-xs text-gray-600">남은 한도</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-2xl font-bold text-black">7%</div>
          <div className="text-xs text-gray-600">한도 활용</div>
        </div>
      </div>

      {/* Current Trip Status or Setup Form */}
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
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">국가별 면세 한도</h3>
        {[
          { route: '🇰🇷 한국 → 🇺🇸 미국', limit: '$ 800' },
          { route: '🇰🇷 한국 → 🇯🇵 일본', limit: '$ 600' },
          { route: '🇰🇷 한국 → 🇩🇪 독일', limit: '$ 700' },
          { route: '🇺🇸 미국 → 🇰🇷 한국', limit: '$ 600' },
          { route: '🇯🇵 일본 → 🇰🇷 한국', limit: '$ 500' },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="text-base font-semibold text-black">{item.route}</div>
            </div>
            <div className="text-base font-bold text-black">{item.limit}</div>
          </div>
        ))}
      </div>

      {/* Trip History */}
      <div className="space-y-1">
        <TripHistory />
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