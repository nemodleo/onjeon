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
      title: '온전한 결제',
      description: '0% 수수료 • QR/NFC • ATM 인출',
      href: '/exchange',
      icon: CreditCard,
    },
    {
      id: 'vat-refund',
      title: '온전한 환급',
      description: 'NFT 영수증 • 즉시 처리 • 지갑 입금',
      href: '/vat-refund',
      icon: Receipt,
    },
    {
      id: 'customs',
      title: '온전한 세관 신고',
      description: '자동 계산 • 원클릭 제출 • QR 통과',
      href: '/customs',
      icon: FileText,
    },
    {
      id: 'duty-free',
      title: '온전한 투명성',
      description: '블록체인 기록 • 세수 자동화 • 데이터 분석',
      href: '/duty-free',
      icon: ShoppingBag,
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header - 80% scaled */}
      <div className="pt-5">
        <h1 className="text-2xl font-bold text-black mb-2">
          온전(穩錢)
        </h1>
        <p className="text-gray-600 text-sm">
          결제·환전·세금 환급·세관신고까지, 온전한 여행 인프라
        </p>
      </div>

      {/* Balance Card - 80% scaled */}
      <div className="bg-black rounded-2xl p-5 text-white">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-gray-300 text-sm">KRW-C 사용 가능 잔액</p>
            <p className="text-2xl font-bold">₩ 1,234,567</p>
          </div>
          <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="text-sm text-gray-300">
          전 세계 어디서든 0% 수수료
        </div>
      </div>

      {/* Quick Actions - 80% scaled */}
      <div className="space-y-2">
        <Link href="/exchange/qr-payment" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-2">
            <div className="text-xl">📱</div>
            <div className="text-sm font-semibold text-black">QR 결제</div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </Link>
        <Link href="/exchange/otp-withdrawal" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-2">
            <div className="text-xl">💰</div>
            <div className="text-sm font-semibold text-black">ATM 인출</div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </Link>
      </div>

      {/* Service Menu - 80% scaled */}
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
                  <div className="font-semibold text-black text-base">{service.title}</div>
                  <div className="text-sm text-gray-600">{service.description}</div>
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