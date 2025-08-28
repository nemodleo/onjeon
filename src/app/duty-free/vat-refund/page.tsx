'use client';

import Link from 'next/link';
import { Receipt, Stamp, ChevronRight } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function VATRefundPage() {
  const services = [
    {
      id: 'dashboard',
      title: '리펀 대시보드',
      description: '품목별 환급액 • NFT 영수증',
      href: '/duty-free/vat-refund/dashboard',
      icon: Receipt,
    },
    {
      id: 'stamp',
      title: '공항 스탬프',
      description: 'QR 스캔 → 즉시 입금 확인',
      href: '/duty-free/vat-refund/stamp',
      icon: Stamp,
    }
  ];

  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">온전한 VAT 환급</h1>
        <p className="text-gray-600 text-xs">리펀 대시보드 • 공항 스탬프</p>
      </div>

      {/* Status Overview - Wallet style */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">환급 가능액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-lg font-bold">₩ 78,300</p>
              <p className="text-sm font-medium text-gray-400">~ 78,300 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Receipt className="w-3 h-3" />
          </div>
        </div>
        <div className="text-xs text-gray-300">
          공항에서 스탬프 받기 → 즉시 입금
        </div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-green-500">10%</div>
          <div className="text-xs text-gray-600">부가세 세율</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">5초</div>
          <div className="text-xs text-gray-600">NFT 처리시간</div>
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

    </div>
    </>
  );
}