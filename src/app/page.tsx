'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  CreditCard,
  ShoppingBag,
  Receipt,
  FileText,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      id: 'exchange',
      title: '환전',
      description: 'QR 결제 • OTP 출금 • POS 연동',
      href: '/exchange',
      icon: CreditCard,
    },
    {
      id: 'duty-free',
      title: '면세점',
      description: '한도 추적 • 여행 설정 • 실시간 모니터링',
      href: '/duty-free',
      icon: ShoppingBag,
    },
    {
      id: 'vat-refund',
      title: 'VAT 환급',
      description: '즉시 환급 • 자동 계산 • 스탬프 처리',
      href: '/vat-refund',
      icon: Receipt,
    },
    {
      id: 'customs',
      title: '세관 신고',
      description: 'NFT 영수증 • KYC 인증 • 자동 신고',
      href: '/customs',
      icon: FileText,
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center pt-8">
        <h1 className="text-2xl font-semibold text-black mb-2">
          온전한 여행 금융
        </h1>
        <p className="text-gray-500 text-sm">
          모든 서비스를 한 곳에서
        </p>
      </div>

      {/* Balance Card - Wallet style */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-sm">KRW-C 잔액</p>
            <p className="text-2xl font-semibold">₩ 1,234,567</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-4 h-4" />
          </div>
        </div>
        <div className="text-sm text-gray-300">
          마지막 업데이트: 방금 전
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <Link href="/exchange/qr-payment" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">📱</div>
            <div className="text-sm font-medium text-black">QR 결제</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
        <Link href="/exchange/otp-withdrawal" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">💰</div>
            <div className="text-sm font-medium text-black">현금 인출</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
      </div>

      {/* Service Menu - iOS Settings style */}
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

    </div>
  );
}