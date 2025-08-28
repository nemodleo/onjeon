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
      id: 'payment',
      title: '온전한 결제',
      description: '0% 수수료 • QR/NFC • 전 세계 사용',
      href: '/payment',
      icon: CreditCard,
    },
    {
      id: 'exchange',
      title: '온전한 환전',
      description: '실시간 환율 • ATM 출금 • 즉시 전환',
      href: '/exchange',
      icon: ArrowRight,
    },
    {
      id: 'duty-free',
      title: '온전한 면세',
      description: '한도 관리 • VAT 환급 • NFT 영수증',
      href: '/duty-free',
      icon: ShoppingBag,
    },
    {
      id: 'customs',
      title: '온전한 세관신고',
      description: '자동 계산 • 원클릭 제출 • 사전 승인',
      href: '/customs',
      icon: FileText,
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl mb-1 relative inline-block">
          <span className="font-bold text-black">온전</span>
          <span className="text-sm font-light text-gray-400 ml-0.5">穩錢</span>
        </h1>
        <p className="text-gray-600 text-xs">
          결제·환전·세금 환급·세관신고까지, 온전한 여행 인프라
        </p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">KRW-C 사용 가능 잔액</p>
            <p className="text-lg font-bold">₩ 1,234,567</p>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-3 h-3" />
          </div>
        </div>
        <div className="text-xs text-gray-300">
          전 세계 어디서든 0% 수수료
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-1">
        <Link href="/payment/qr-payment" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-2">
            <div className="text-base">📱</div>
            <div className="text-xs font-semibold text-black">QR 결제</div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </Link>
        <Link href="/exchange/otp-withdrawal" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-2">
            <div className="text-base">💰</div>
            <div className="text-xs font-semibold text-black">ATM 출금</div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </Link>
      </div>

      {/* Service Menu */}
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

    </div>
  );
}