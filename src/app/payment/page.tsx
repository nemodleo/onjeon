'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CreditCard, Smartphone, Clock, ChevronRight } from 'lucide-react';
import { PageProgress } from '@/components/ui/page-progress';

export default function PaymentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const balanceRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 'setup',
      title: '결제 정보 입력',
      description: '금액과 통화를 선택하세요',
      href: '/payment/qr-payment',
      ref: balanceRef
    },
    {
      id: 'generate', 
      title: '결제 QR 생성',
      description: 'QR 코드를 생성합니다',
      href: '/payment/qr-payment',
      ref: servicesRef
    },
    {
      id: 'scan',
      title: '가맹점 스캔',
      description: '가맹점에서 QR 코드 스캔',
      href: '/payment/pos',
      ref: historyRef
    },
    {
      id: 'approve',
      title: '자동 승인',
      description: '곧바로 자동 승인 처리',
      href: '/payment/history',
      ref: historyRef
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = steps[stepIndex];
    
    // Navigate to the corresponding page
    if (step.href) {
      router.push(step.href);
    } else if (step.ref?.current) {
      // Fallback to scroll behavior if no href
      step.ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      id: 'qr-payment',
      title: 'QR 결제',
      description: '결제 QR 생성 • 가맹점 스캔',
      href: '/payment/qr-payment',
      icon: Smartphone
    },
    {
      id: 'pos',
      title: 'POS 시스템',
      description: '가맹점용 결제 • 실시간 정산',
      href: '/payment/pos',
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
      {/* Progress Bar */}
      <PageProgress 
        steps={steps} 
        currentStep={currentStep} 
        onStepClick={handleStepClick}
      />

      {/* Header */}
      <div className="pt-2">
        <h1 className="text-3xl font-bold text-black mb-1">온전한 결제</h1>
        <p className="text-gray-600 text-sm">전 세계 어디든 자동 환전 결제</p>
      </div>

      {/* Balance Card */}
      <div ref={balanceRef} className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">사용 가능 잔액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">₩ 1,234,567</p>
              <p className="text-sm font-medium text-gray-400">~ 1,234,567 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-3 h-3" />
          </div>
        </div>
        <div className="text-xs text-gray-300">
          KRW-C로 전 세계 어디서든 0% 수수료
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-2xl font-bold text-black">0%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-xl font-bold text-green-500">즉시</div>
          <div className="text-xs text-gray-600">결제 처리</div>
        </div>
      </div>

      {/* Services */}
      <div ref={servicesRef} className="space-y-1">
        {services.map((service) => {
          const Icon = service.icon;
          const isHighlighted = currentStep === 1 && service.id === 'qr-payment' || 
                               currentStep === 2 && service.id === 'pos' ||
                               currentStep === 3 && service.id === 'history';
          return (
            <Link
              key={service.id}
              href={service.href}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${
                isHighlighted 
                  ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100' 
                  : 'bg-white border-gray-100 active:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Icon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">{service.title}</div>
                  <div className="text-xs text-gray-600">{service.description}</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          );
        })}
      </div>

      {/* Recent Transactions */}
      <div ref={historyRef} className="space-y-3">
        <h3 className="text-lg font-bold text-black">최근 결제</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-base">✓</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">스타벅스</div>
                <div className="text-xs text-gray-600">30분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">-₩ 5,500</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-base">💳</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">롯데마트</div>
                <div className="text-xs text-gray-600">2시간 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">-₩ 125,000</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}