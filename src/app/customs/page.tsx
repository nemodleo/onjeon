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
      icon: Settings,
    },
    {
      id: 'receipts',
      title: 'NFT 영수증함',
      description: '카드 그리드 • 신고 포함 선택',
      href: '/customs/receipts',
      icon: FileText,
    },
    {
      id: 'preview',
      title: '미리보기 & 제출',
      description: '신고서 요약 • 접수번호 확인',
      href: '/customs/preview',
      icon: Eye,
    }
  ];

  return (
    <>
      <CustomsProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="pt-6">
        <h1 className="text-3xl font-bold text-black mb-3">자동 세관 신고</h1>
        <p className="text-gray-600 text-base">NFT 영수증 • 원클릭 제출</p>
      </div>

      {/* Status Overview - Wallet style */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-base">신고 대상 금액</p>
            <p className="text-3xl font-bold">$1,220</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
        </div>
        <div className="text-base text-gray-300">
          KYC 완료 → 귀국 24시간 전 자동 제출
        </div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-black">12</div>
          <div className="text-sm text-gray-600">NFT 영수증</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-green-500">✓</div>
          <div className="text-sm text-gray-600">KYC 인증</div>
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

      {/* 최근 활동 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">최근 활동</h3>
        <div className="space-y-3">
          {/* NFT 영수증 생성 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">📄</span>
                </div>
                <div>
                  <div className="font-semibold text-black">NFT 영수증 생성</div>
                  <div className="text-sm text-gray-600">30분 전 • LV 핸드백</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-black">₩ 850,000</div>
                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full inline-block">블록체인</div>
              </div>
            </div>
          </div>
          
          {/* KYC 인증 완료 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <div>
                  <div className="font-semibold text-black">KYC 인증 완료</div>
                  <div className="text-sm text-gray-600">2시간 전 • 신원 확인</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-black">인증완료</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full inline-block">활성화</div>
              </div>
            </div>
          </div>
          
          {/* 자동 신고 설정 */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <div className="font-semibold text-black">자동 신고 설정</div>
                  <div className="text-sm text-gray-600">어제 • 귀국 24시간 전 자동</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-black">설정완료</div>
                <div className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full inline-block">ON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}