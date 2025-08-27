'use client';

import { TripSetupForm, TripHistory } from '@/components/TripSetup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTripStore } from '@/store/trip';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TripSetupPage() {
  const { currentTrip } = useTripStore();

  return (
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

          {/* 면세 한도 안내 */}
          <Card>
            <CardHeader>
              <CardTitle>국가별 면세 한도</CardTitle>
              <CardDescription>주요 노선의 면세 구매 한도 안내</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                {[
                  { route: '🇰🇷 한국 → 🇺🇸 미국', limit: '$800' },
                  { route: '🇰🇷 한국 → 🇯🇵 일본', limit: '$600' },
                  { route: '🇰🇷 한국 → 🇩🇪 독일', limit: '$700' },
                  { route: '🇺🇸 미국 → 🇰🇷 한국', limit: '$600' },
                  { route: '🇯🇵 일본 → 🇰🇷 한국', limit: '$500' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>{item.route}</span>
                    <span className="font-medium">{item.limit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 여행 기록 및 팁 */}
        <div className="space-y-6">
          <TripHistory />

          {/* 스마트 쇼핑 가이드 */}
          <Card>
            <CardHeader>
              <CardTitle>스마트 쇼핑 가이드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-green-600">💡 절약 팁</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 면세 한도 70% 사용 시점에서 계획적 구매</li>
                    <li>• 화장품, 향수는 면세점에서 가장 저렴</li>
                    <li>• 전자제품은 현지 세금 확인 필수</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-600">⚡ KRW-C 혜택</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 환전 수수료 0% (기존 3-7% 절약)</li>
                    <li>• 실시간 한도 추적으로 초과 방지</li>
                    <li>• 자동 VAT 환급 처리</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-purple-600">📱 스마트 기능</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 결제 전 한도 초과 경고</li>
                    <li>• 카테고리별 소비 분석</li>
                    <li>• NFT 영수증으로 자동 세관 신고</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 프로세스 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>면세 한도 관리 프로세스</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="font-medium">여행 설정</h3>
              <p className="text-sm text-gray-600">
                출발지와 목적지를 선택하여 자동으로 면세 한도가 계산됩니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="font-medium">실시간 추적</h3>
              <p className="text-sm text-gray-600">
                KRW-C로 결제할 때마다 면세 한도 사용량이 자동으로 업데이트됩니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-yellow-100 text-yellow-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="font-medium">스마트 알림</h3>
              <p className="text-sm text-gray-600">
                한도 70%, 90% 도달 시 자동 알림으로 초과를 방지합니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="font-medium">자동 처리</h3>
              <p className="text-sm text-gray-600">
                VAT 환급과 세관 신고가 자동으로 처리되어 편리합니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}