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
          <h1 className="text-xl font-bold text-black mb-1">온전한 세관 신고</h1>
          <p className="text-gray-600 text-xs">NFT 영수증 • 원클릭 제출</p>
        </div>

        {/* Status Overview - Wallet style */}
        <div className="bg-black rounded-xl p-4 text-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-gray-300 text-xs">신고 대상 금액</p>
              <p className="text-lg font-bold">$1,220</p>
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
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-lg font-bold text-black">12</div>
            <div className="text-xs text-gray-600">NFT 영수증</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-lg font-bold text-green-500">✓</div>
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
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            );
          })}
        </div>

        {/* 최근 활동 */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-black">최근 활동</h3>
          <div className="space-y-1">
            {/* NFT 영수증 생성 */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">📄</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">NFT 영수증 생성</div>
                  <div className="text-xs text-gray-600">30분 전 • LV 핸드백</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-black">₩ 850,000</div>
                <div className="text-xs text-gray-600">블록체인</div>
              </div>
            </div>
          
            {/* KYC 인증 완료 */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">✅</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">KYC 인증 완료</div>
                  <div className="text-xs text-gray-600">2시간 전 • 신원 확인</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-black">인증완료</div>
                <div className="text-xs text-gray-600">활성화</div>
              </div>
            </div>
          
            {/* 자동 신고 설정 */}
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">⚙️</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">자동 신고 설정</div>
                  <div className="text-xs text-gray-600">어제 • 귀국 24시간 전 자동</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-black">설정완료</div>
                <div className="text-xs text-gray-600">ON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}