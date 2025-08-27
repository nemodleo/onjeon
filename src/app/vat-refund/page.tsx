'use client';

import Link from 'next/link';
import { Receipt, Stamp, ChevronRight } from 'lucide-react';

export default function VATRefundPage() {
  const services = [
    {
      id: 'dashboard',
      title: '환급 대시보드',
      description: '실시간 VAT 환급 현황 및 내역',
      href: '/vat-refund/dashboard',
      icon: Receipt,
    },
    {
      id: 'stamp',
      title: '스탬프 처리',
      description: '출국 시 최종 스탬프 확인 및 처리',
      href: '/vat-refund/stamp',
      icon: Stamp,
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-semibold text-black mb-2">VAT 환급</h1>
        <p className="text-gray-500 text-sm">즉시 환급 • 자동 계산 • 스탬프 처리</p>
      </div>

      {/* Status Overview - Wallet style */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-sm">이번 여행 환급 예정</p>
            <p className="text-2xl font-semibold">₩ 45,600</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Receipt className="w-4 h-4" />
          </div>
        </div>
        <div className="text-sm text-gray-300">
          구매와 동시에 자동 계산
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 rounded-3xl p-6">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-2xl font-semibold text-black">7</div>
            <div className="text-sm text-gray-500">환급 대기</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-black">₩ 234,000</div>
            <div className="text-sm text-gray-500">총 환급액</div>
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

      {/* Recent Refunds */}
      <div className="space-y-4">
        <h3 className="font-semibold text-black">최근 환급 내역</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">롯데면세점</div>
                <div className="text-xs text-gray-500">오늘</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">+₩ 12,600</div>
              <div className="text-xs text-gray-500">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm">⏳</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">명동 백화점</div>
                <div className="text-xs text-gray-500">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">+₩ 33,000</div>
              <div className="text-xs text-gray-500">대기중</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">동화면세점</div>
                <div className="text-xs text-gray-500">3일 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">+₩ 45,800</div>
              <div className="text-xs text-gray-500">완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}