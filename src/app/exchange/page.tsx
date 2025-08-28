'use client';

import Link from 'next/link';
import { ArrowLeftRight, Smartphone, History, ChevronRight, CreditCard } from 'lucide-react';
import { ExchangeProgress } from '@/components/ui/page-progress';

export default function ExchangePage() {
  const services = [
    {
      id: 'exchange',
      title: '즉시 환전',
      description: '실시간 환율 • 0% 수수료',
      href: '/exchange/instant-exchange',
      icon: ArrowLeftRight,
    },
    {
      id: 'otp-withdrawal',
      title: 'OTP 현금 인출',
      description: '일회용 OTP로 ATM/대리점 인출',
      href: '/exchange/otp-withdrawal',
      icon: Smartphone,
    },
    {
      id: 'history',
      title: '환전 내역',
      description: '거래 이력 • 수수료 절약액',
      href: '/exchange/history',
      icon: History,
    }
  ];

  return (
    <>
      <ExchangeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">온전한 환전</h1>
        <p className="text-gray-600 text-xs">전 세계 0% 환전 수수료</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">사용 가능 잔액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-lg font-bold">₩ 1,234,567</p>
              <p className="text-sm font-medium text-gray-400">~ 1,234,567 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-3 h-3" />
          </div>
        </div>
        <div className="text-xs text-gray-300">KRW-C로 전 세계 어디서든 0% 수수료</div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-black">20-40</span>
            <span className="text-xs text-gray-600 ml-1">bps</span>
          </div>
          <div className="text-xs text-gray-600">FX 스프레드</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-black">120</span>
            <span className="text-xs text-gray-600 ml-1">초</span>
          </div>
          <div className="text-xs text-gray-600">OTP 유효시간</div>
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

      {/* Recent Transactions */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">최근 거래</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">QR 결제</div>
                <div className="text-xs text-gray-600">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">-₩ 45,000</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">💰</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">OTP 출금</div>
                <div className="text-xs text-gray-600">어제</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">-₩ 200,000</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}