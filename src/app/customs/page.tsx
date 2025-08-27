'use client';

import Link from 'next/link';
import { FileText, Settings, Eye, ChevronRight } from 'lucide-react';

export default function CustomsPage() {
  const services = [
    {
      id: 'settings',
      title: '신고 설정',
      description: '개인 정보 및 신고 옵션 설정',
      href: '/customs/settings',
      icon: Settings,
    },
    {
      id: 'receipts',
      title: 'NFT 영수증함',
      description: '블록체인 기반 구매 증명서 관리',
      href: '/customs/receipts',
      icon: FileText,
    },
    {
      id: 'preview',
      title: '신고 미리보기',
      description: '세관 신고서 검토 및 최종 제출',
      href: '/customs/preview',
      icon: Eye,
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-semibold text-black mb-2">세관 신고</h1>
        <p className="text-gray-500 text-sm">NFT 영수증 • KYC 인증 • 자동 신고</p>
      </div>

      {/* Status Overview - Wallet style */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-sm">이번 여행 총 구매액</p>
            <p className="text-2xl font-semibold">₩ 1,450,000</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
        </div>
        <div className="text-sm text-gray-300">
          자동 신고 준비 완료
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 rounded-3xl p-6">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-2xl font-semibold text-black">12</div>
            <div className="text-sm text-gray-500">NFT 영수증</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-black">₩ 0</div>
            <div className="text-sm text-gray-500">추가 세금</div>
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

      {/* Recent Activity */}
      <div className="space-y-4">
        <h3 className="font-semibold text-black">최근 활동</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">📄</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">NFT 영수증 생성</div>
                <div className="text-xs text-gray-500">30분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">LV 핸드백</div>
              <div className="text-xs text-gray-500">₩ 850,000</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">KYC 인증 완료</div>
                <div className="text-xs text-gray-500">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">신원 확인</div>
              <div className="text-xs text-gray-500">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm">⚙️</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">자동 신고 설정</div>
                <div className="text-xs text-gray-500">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">설정 완료</div>
              <div className="text-xs text-gray-500">활성화</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}