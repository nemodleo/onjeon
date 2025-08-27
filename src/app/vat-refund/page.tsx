'use client';

import Link from 'next/link';
import { Receipt, Stamp, ChevronRight } from 'lucide-react';
import { VATRefundProgress } from '@/components/ui/page-progress';

export default function VATRefundPage() {
  const services = [
    {
      id: 'dashboard',
      title: '리펀 대시보드',
      description: '품목별 환급액 • NFT 영수증',
      href: '/vat-refund/dashboard',
      icon: Receipt,
    },
    {
      id: 'stamp',
      title: '공항 스탬프',
      description: 'QR 스캔 → 즉시 입금 확인',
      href: '/vat-refund/stamp',
      icon: Stamp,
    }
  ];

  return (
    <>
      <VATRefundProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="pt-6">
        <h1 className="text-3xl font-bold text-black mb-3">디지털 택스 리펀</h1>
        <p className="text-gray-600 text-base">공항 줄 없이 • 즉시 지갑 입금</p>
      </div>

      {/* Status Overview - Wallet style */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-400 text-sm">환급 예상액</p>
            <p className="text-2xl font-semibold mt-1">₩ 78,300</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Receipt className="w-4 h-4" />
          </div>
        </div>
        <div className="text-sm text-gray-400">
          공항에서 스탬프 받기 → 즉시 입금
        </div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-green-500">10%</div>
          <div className="text-sm text-gray-600">부가세 세율</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-black">₩ 30,000</div>
          <div className="text-sm text-gray-600">최소 구매액</div>
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

      {/* Recent Refunds */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">최근 환급 내역</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">롯데면세점</div>
                <div className="text-sm text-gray-600">오늘</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">+₩ 12,600</div>
              <div className="text-sm text-gray-600">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm">⏳</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">명동 백화점</div>
                <div className="text-sm text-gray-600">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">+₩ 33,000</div>
              <div className="text-sm text-gray-600">대기중</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">동화면세점</div>
                <div className="text-sm text-gray-600">3일 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">+₩ 45,800</div>
              <div className="text-sm text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}