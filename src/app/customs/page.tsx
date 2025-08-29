'use client';

import Link from 'next/link';
import { FileText, Settings, Eye, ChevronRight } from 'lucide-react';
import { CustomsProgress } from '@/components/ui/page-progress';

export default function CustomsPage() {
  const services = [
    {
      id: 'settings',
      title: '자동 신고 설정',
      description: 'KYC 연동 • ON/OFF 토글',
      href: '/customs/settings',
      icon: Settings
    },
    {
      id: 'receipts',
      title: 'NFT 영수증함',
      description: '카드 그리드 • 신고 포함 선택',
      href: '/customs/receipts',
      icon: FileText
    },
    {
      id: 'preview',
      title: '미리보기 & 제출',
      description: '신고서 요약 • 접수번호 확인',
      href: '/customs/preview',
      icon: Eye
    }
  ];

  return (
    <>
      <CustomsProgress />
      <div className="space-y-4">
        {/* Header */}
        <div className="pt-2">
          <h1 className="text-3xl font-bold text-black mb-1">온전한 세관신고</h1>
          <p className="text-gray-600 text-sm">NFT 영수증 • 원클릭 제출</p>
        </div>

        {/* Status Overview - Wallet style */}
        <div className="bg-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-300 text-sm">신고 대상 금액</p>
              <div className="flex items-baseline space-x-1">
                <p className="text-3xl font-bold">$ 1,220</p>
                <p className="text-sm font-medium text-gray-400">~ 1,610,400 KRW-C</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <FileText className="w-3 h-3" />
            </div>
          </div>
          <div className="text-xs text-gray-300">
            KYC 완료 → 귀국 24시간 전 자동 제출
          </div>
        </div>

        {/* Quick Stats - 2 Column Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">2</div>
            <div className="text-xs text-gray-600">NFT 영수증</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-xl font-bold text-green-500">✓</div>
            <div className="text-xs text-gray-600">KYC 인증</div>
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
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg">{service.title}</div>
                    <div className="text-xs text-gray-600">{service.description}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            );
          })}
        </div>

      </div>
    </>
  );
}