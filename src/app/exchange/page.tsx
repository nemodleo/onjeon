'use client';

import Link from 'next/link';
import { CreditCard, Smartphone, MonitorSpeaker, ChevronRight } from 'lucide-react';
import { ExchangeProgress } from '@/components/ui/page-progress';

export default function ExchangePage() {
  const services = [
    {
      id: 'qr-payment',
      title: 'QR 결제',
      description: '스캔으로 즉시 결제',
      href: '/exchange/qr-payment',
      icon: CreditCard,
    },
    {
      id: 'otp-withdrawal',
      title: 'OTP 출금',
      description: '안전한 현금 인출',
      href: '/exchange/otp-withdrawal',
      icon: Smartphone,
    },
    {
      id: 'pos-system',
      title: 'POS 시스템',
      description: '가맹점 통합 결제',
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
        <h1 className="text-2xl font-semibold text-black mb-2">환전</h1>
        <p className="text-gray-500 text-sm">수수료 없는 글로벌 결제</p>
      </div>

      {/* Balance Overview */}
      <div className="bg-gray-50 rounded-3xl p-6">
        <div className="text-center space-y-4">
          <div>
            <div className="text-3xl font-bold text-black">₩ 1,234,567</div>
            <div className="text-sm text-gray-500">사용 가능 잔액</div>
          </div>
          <div className="flex justify-between text-center">
            <div>
              <div className="text-lg font-semibold text-black">0%</div>
              <div className="text-xs text-gray-500">수수료</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-black">24/7</div>
              <div className="text-xs text-gray-500">서비스</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-black">100+</div>
              <div className="text-xs text-gray-500">지원국가</div>
            </div>
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

      {/* Recent Transactions */}
      <div className="space-y-4">
        <h3 className="font-semibold text-black">최근 거래</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">QR 결제</div>
                <div className="text-xs text-gray-500">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">-₩ 45,000</div>
              <div className="text-xs text-gray-500">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">💰</span>
              </div>
              <div>
                <div className="text-sm font-medium text-black">OTP 출금</div>
                <div className="text-xs text-gray-500">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">-₩ 200,000</div>
              <div className="text-xs text-gray-500">완료</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}