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
      title: '환전 게이트웨이',
      description: '0% 수수료 • QR 결제 • OTP 현금 인출',
      href: '/exchange',
      icon: CreditCard,
    },
    {
      id: 'duty-free',
      title: '스마트 면세 관리',
      description: '자동 한도 추적 • 초과 알림 • 실시간 계산',
      href: '/duty-free',
      icon: ShoppingBag,
    },
    {
      id: 'vat-refund',
      title: '디지털 택스 리펀',
      description: '즉시 환급 • 줄 서지 않고 • 지갑 입금',
      href: '/vat-refund',
      icon: Receipt,
    },
    {
      id: 'customs',
      title: '자동 세관 신고',
      description: 'NFT 영수증 • 원클릭 제출 • KYC 연동',
      href: '/customs',
      icon: FileText,
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center pt-8">
        <h1 className="text-3xl font-bold text-black mb-3">
          스마트 여행 지갑
        </h1>
        <p className="text-gray-600 text-base">
          환전 없이, 수수료 없이, 즉시 환급
        </p>
      </div>

      {/* Balance Card - Wallet style */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-base">KRW-C 잔액</p>
            <p className="text-3xl font-bold">₩ 1,234,567</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-4 h-4" />
          </div>
        </div>
        <div className="text-base text-gray-300">
          마지막 업데이트: 방금 전
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <Link href="/exchange/qr-payment" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">📱</div>
            <div className="text-base font-semibold text-black">QR 결제</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
        <Link href="/exchange/otp-withdrawal" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">💰</div>
            <div className="text-base font-semibold text-black">현금 인출</div>
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
                  <div className="font-semibold text-black text-lg">{service.title}</div>
                  <div className="text-base text-gray-600">{service.description}</div>
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