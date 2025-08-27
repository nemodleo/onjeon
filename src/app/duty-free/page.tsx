'use client';

import Link from 'next/link';
import { Settings, TrendingUp, ChevronRight } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function DutyFreePage() {
  const services = [
    {
      id: 'dashboard',
      title: '한도 대시보드',
      description: '실시간 한도 집계 • 품목별 분류',
      href: '/duty-free/dashboard',
      icon: TrendingUp,
    },
    {
      id: 'trip-setup',
      title: '여행 설정',
      description: '출발/귀국일 • 목적지 한도 규칙',
      href: '/duty-free/trip-setup',
      icon: Settings,
    }
  ];

  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-3xl font-bold text-black mb-3">스마트 면세 관리</h1>
        <p className="text-gray-600 text-base">한도 자동 추적 • 초과 알림</p>
      </div>

      {/* Current Status Card */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-base">이번 여행 한도</p>
            <p className="text-3xl font-bold">$540 / $800</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 text-base">남은 한도</p>
            <p className="text-2xl font-bold text-green-400">$260</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div className="bg-white h-2 rounded-full" style={{ width: '67.5%' }}></div>
        </div>
        <div className="text-base text-gray-300">
          한도 80% 사용 시 알림 • 초과 위험 자동 경고
        </div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-orange-500">80%</div>
          <div className="text-sm text-gray-600">한도 사용률</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-black">12</div>
          <div className="text-sm text-gray-600">NFT 영수증</div>
        </div>
      </div>

      {/* Services */}
      <div className="space-y-1">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              href={service.href}
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">{service.title}</div>
                  <div className="text-base text-gray-600">{service.description}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          );
        })}
      </div>

      {/* Recent Purchases */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">최근 구매</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🛍️</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">명품 가방</div>
                <div className="text-sm text-gray-600">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">$320</div>
              <div className="text-sm text-gray-600">면세</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🥃</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">위스키</div>
                <div className="text-sm text-gray-600">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">$130</div>
              <div className="text-sm text-gray-600">면세</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}