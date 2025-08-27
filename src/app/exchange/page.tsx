'use client';

import Link from 'next/link';
import { CreditCard, Smartphone, MonitorSpeaker, ChevronRight } from 'lucide-react';
import { ExchangeProgress } from '@/components/ui/page-progress';

export default function ExchangePage() {
  const services = [
    {
      id: 'qr-payment',
      title: 'QR 결제',
      description: '결제 QR 생성 → 가맹점 스캔',
      href: '/exchange/qr-payment',
      icon: CreditCard,
    },
    {
      id: 'otp-withdrawal',
      title: 'OTP 현금 인출',
      description: '일회용 OTP로 ATM/대리점 인출',
      href: '/exchange/otp-withdrawal',
      icon: Smartphone,
    },
    {
      id: 'pos-system',
      title: 'POS 가맹점 관리',
      description: '실시간 정산 • 거래 로그',
      href: '/exchange/pos',
      icon: MonitorSpeaker,
    }
  ];

  return (
    <>
      <ExchangeProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-3xl font-bold text-black mb-3">환전 게이트웨이</h1>
        <p className="text-gray-600 text-base">전 세계 0% 수수료 결제</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-3xl p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-300 text-base">사용 가능 잔액</p>
            <p className="text-3xl font-bold">₩ 1,234,567</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-4 h-4" />
          </div>
        </div>
        <div className="text-base text-gray-300">
          전 세계 어디서든 0% 수수료
        </div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-black">20-40bps</div>
          <div className="text-sm text-gray-600">FX 스프레드</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="text-2xl font-bold text-black">120초</div>
          <div className="text-sm text-gray-600">OTP 유효시간</div>
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

      {/* Recent Transactions */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">최근 거래</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">QR 결제</div>
                <div className="text-sm text-gray-600">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">-₩ 45,000</div>
              <div className="text-sm text-gray-600">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">💰</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">OTP 출금</div>
                <div className="text-sm text-gray-600">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">-₩ 200,000</div>
              <div className="text-sm text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}