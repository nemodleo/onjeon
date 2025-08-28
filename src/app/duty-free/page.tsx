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
      <div className="space-y-5">
      {/* Header - 80% scaled */}
      <div className="pt-3">
        <h1 className="text-2xl font-bold text-black mb-2">온전한 투명성</h1>
        <p className="text-gray-600 text-sm">블록체인 기록 • 세수 자동화 • 데이터 분석</p>
      </div>

      {/* Current Status Card - 80% scaled */}
      <div className="bg-black rounded-2xl p-5 text-white">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-gray-300 text-sm">블록체인 기록</p>
            <p className="text-2xl font-bold">투명 거래</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 text-sm">세수 자동화</p>
            <p className="text-xl font-bold text-green-400">활성화</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
          <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <div className="text-sm text-gray-300">
          실시간 데이터 분석 • 세관 자동 리포팅
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
                  <div className="font-semibold text-black text-base">{service.title}</div>
                  <div className="text-sm text-gray-600">{service.description}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-black">블록체인 활동</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🔗</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">블록 기록</div>
                <div className="text-xs text-gray-600">2시간 전 • 거래 해시</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">확인됨</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm">📊</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">데이터 분석</div>
                <div className="text-xs text-gray-600">어제 • 세수 리포트</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">자동 완료</div>
              <div className="text-xs text-gray-600">전송됨</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}