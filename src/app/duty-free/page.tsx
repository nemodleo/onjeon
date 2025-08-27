'use client';

import Link from 'next/link';
import { Settings, TrendingUp, ChevronRight } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function DutyFreePage() {
  const services = [
    {
      id: 'dashboard',
      title: '대시보드',
      description: '실시간 한도 추적',
      href: '/duty-free/dashboard',
      icon: TrendingUp,
    },
    {
      id: 'trip-setup',
      title: '여행 설정',
      description: '목적지 및 한도 설정',
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
        <h1 className="text-2xl font-semibold text-black mb-2">면세점</h1>
        <p className="text-gray-500 text-sm">스마트 한도 관리</p>
      </div>

      {/* Current Status Card */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-sm">면세 한도</p>
            <p className="text-2xl font-semibold">$600 / $800</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 text-sm">남은 한도</p>
            <p className="text-lg font-semibold text-green-400">$200</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="text-sm text-gray-300">
          일본 여행 • 3일 남음
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-black">$450</div>
            <div className="text-sm text-gray-500">오늘 사용</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">5</div>
            <div className="text-sm text-gray-500">구매 건수</div>
          </div>
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
                  <div className="font-medium text-black">{service.title}</div>
                  <div className="text-sm text-gray-500">{service.description}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          );
        })}
      </div>

      {/* Recent Purchases */}
      <div className="space-y-4">
        <h3 className="font-semibold text-black">최근 구매</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🛍️</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">명품 가방</div>
                <div className="text-xs text-gray-500">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">$320</div>
              <div className="text-xs text-gray-500">면세</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🥃</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">위스키</div>
                <div className="text-xs text-gray-500">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">$130</div>
              <div className="text-xs text-gray-500">면세</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}