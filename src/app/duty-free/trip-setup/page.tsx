'use client';

import { DutyFreeProgress } from '@/components/ui/page-progress';

import { TripSetupForm, TripHistory } from '@/components/TripSetup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTripStore } from '@/store/trip';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TripSetupPage() {
  const { currentTrip } = useTripStore();

  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">여행 설정</h1>
        <p className="text-gray-600">
          여행 정보를 설정하여 맞춤형 면세 한도 관리를 시작하세요
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 여행 설정 폼 */}
        <div className="space-y-6">
          {currentTrip ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✅ 현재 여행</CardTitle>
                <CardDescription>진행 중인 여행이 있습니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium mb-2">
                    {currentTrip.fromCountry} → {currentTrip.toCountry}
                  </div>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>출발: {currentTrip.departureDate.toLocaleDateString('ko-KR')}</div>
                    <div>귀국: {currentTrip.returnDate.toLocaleDateString('ko-KR')}</div>
                    <div>면세 한도: ${currentTrip.dutyFreeLimit}</div>
                    <div>사용 금액: ${currentTrip.usedAmount}</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link href="/duty-free/dashboard">
                    <Button className="flex-1">대시보드 보기</Button>
                  </Link>
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    새 여행 설정
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <TripSetupForm />
          )}

          {/* 국가별 면세 한도 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">국가별 면세 한도</h3>
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="space-y-3">
                {[
                  { route: '🇰🇷 한국 → 🇺🇸 미국', limit: '$800' },
                  { route: '🇰🇷 한국 → 🇯🇵 일본', limit: '$600' },
                  { route: '🇰🇷 한국 → 🇩🇪 독일', limit: '$700' },
                  { route: '🇺🇸 미국 → 🇰🇷 한국', limit: '$600' },
                  { route: '🇯🇵 일본 → 🇰🇷 한국', limit: '$500' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium">{item.route}</span>
                    <span className="text-lg font-bold text-black">{item.limit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 여행 기록 및 팁 */}
        <div className="space-y-6">
          <TripHistory />

          {/* 스마트 쇼핑 가이드 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">스마트 쇼핑 가이드</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg">💡</span>
                  <span className="font-semibold text-black">절약 팁</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 한도 70% 사용 시 계획적 구매</div>
                  <div>• 화장품/향수 면세점 최저가</div>
                  <div>• 전자제품 현지 세금 확인</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl border border-blue-200 p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg">⚡</span>
                  <span className="font-semibold text-black">KRW-C 혜택</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 환전 수수료 0%</div>
                  <div>• 실시간 한도 초과 방지</div>
                  <div>• 자동 VAT 환급</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border border-purple-200 p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg">📱</span>
                  <span className="font-semibold text-black">스마트 기능</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 결제 전 한도 경고</div>
                  <div>• 카테고리별 분석</div>
                  <div>• NFT 자동 세관 신고</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 면세 한도 관리 프로세스 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">면세 한도 관리 프로세스</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">1</span>
              </div>
              <span className="font-semibold text-black">여행 설정</span>
            </div>
            <div className="text-sm text-gray-600">
              출발/목적지 자동 계산
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-green-600">2</span>
              </div>
              <span className="font-semibold text-black">실시간 추적</span>
            </div>
            <div className="text-sm text-gray-600">
              결제 즉시 한도 업데이트
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-yellow-600">3</span>
              </div>
              <span className="font-semibold text-black">스마트 알림</span>
            </div>
            <div className="text-sm text-gray-600">
              70/90% 초과 경고
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-purple-600">4</span>
              </div>
              <span className="font-semibold text-black">자동 처리</span>
            </div>
            <div className="text-sm text-gray-600">
              VAT/세관 자동 완료
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}