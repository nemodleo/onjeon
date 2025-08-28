'use client';

import Link from 'next/link';
import { CreditCard, Smartphone, Clock, ChevronRight } from 'lucide-react';

export default function PaymentPage() {
  const services = [
    {
      id: 'qr-payment',
      title: 'QR 결제',
      description: '결제 QR 생성 • 가맹점 스캔',
      href: '/payment/qr-payment',
      icon: Smartphone
    },
    {
      id: 'nfc-payment',
      title: 'NFC 결제',
      description: '탭 결제 • 비접촉 간편 결제',
      href: '/payment/nfc-payment',
      icon: CreditCard
    },
    {
      id: 'history',
      title: '결제 내역',
      description: '거래 내역 • 영수증 확인',
      href: '/payment/history',
      icon: Clock
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">온전한 결제</h1>
        <p className="text-gray-600 text-xs">전 세계 0% 수수료 결제</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">사용 가능 잔액</p>
            <p className="text-lg font-bold">₩ 1,234,567</p>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-3 h-3" />
          </div>
        </div>
        <div className="text-xs text-gray-300">
          KRW-C로 전 세계 어디서든
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">0%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-green-500">즉시</div>
          <div className="text-xs text-gray-600">결제 처리</div>
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

      {/* Recent Transactions */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">최근 결제</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">스타벅스</div>
                <div className="text-xs text-gray-600">30분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">-₩ 5,500</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">💳</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-black">롯데마트</div>
                <div className="text-xs text-gray-600">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-black">-₩ 125,000</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}