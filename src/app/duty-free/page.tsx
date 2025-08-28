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
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">면세점</h1>
        <p className="text-gray-600 text-xs">유저 면세 현황 • 한도 사용 • 블록체인 기록</p>
      </div>

      {/* Current Status Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">사용 가능 한도</p>
            <p className="text-lg font-bold">$120</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 text-xs">총 한도</p>
            <p className="text-lg font-bold">$600</p>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
          <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <div className="text-xs text-gray-300">
          한도 사용률 80% • 블록체인 자동 기록
        </div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-orange-500">80%</div>
          <div className="text-xs text-gray-600">한도 사용률</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">12</div>
          <div className="text-xs text-gray-600">NFT 영수증</div>
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
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-sm">{service.title}</div>
                  <div className="text-xs text-gray-600">{service.description}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">블록체인 기록</h3>
        <div className="space-y-2">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="text-sm">🔗</div>
                <span className="font-semibold text-sm">투명 거래</span>
              </div>
              <span className="text-xs text-green-600 font-medium">활성화</span>
            </div>
            <div className="text-xs text-gray-600 mb-2">세수 자동화 활성화</div>
            <div className="text-xs text-gray-500">실시간 데이터 분석 • 세관 자동 리포팅</div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm">💼</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">롯데면세점</div>
                <div className="text-xs text-gray-600">2시간 전 • 구매 기록</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">-$150</div>
              <div className="text-xs text-gray-600">블록체인 기록</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🛍️</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">신라면세점</div>
                <div className="text-xs text-gray-600">어제 • 구매 기록</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">-$330</div>
              <div className="text-xs text-gray-600">블록체인 기록</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}