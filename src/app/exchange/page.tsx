'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftRight, Smartphone, History, ChevronRight, CreditCard } from 'lucide-react';
import { ExchangeProgress } from '@/components/ui/page-progress';

export default function ExchangePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const balanceRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 'start',
      title: '시작 단계',
      description: '환전 시스템 준비',
      href: '/exchange',
      ref: balanceRef
    },
    {
      id: 'exchange', 
      title: '환전',
      description: '통화 선택 및 즉시 환전',
      href: '/exchange/instant-exchange',
      ref: servicesRef
    },
    {
      id: 'otp-generate',
      title: '현금 인출 OTP 생성',
      description: '인출 설정 및 OTP 생성',
      href: '/exchange/otp-withdrawal',
      ref: historyRef
    },
    {
      id: 'cash-withdrawal',
      title: '현금 인출',
      description: 'ATM/편의점에서 현금 인출',
      href: '/exchange/otp-withdrawal',
      ref: historyRef
    },
    {
      id: 'complete',
      title: '거래 완료',
      description: '환전 내역 확인',
      href: '/exchange/history',
      ref: historyRef
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = steps[stepIndex];
    
    if (step.href) {
      router.push(step.href);
    } else if (step.ref?.current) {
      step.ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

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
        <h1 className="text-3xl font-bold text-black mb-1">온전한 환전</h1>
        <p className="text-gray-600 text-sm">전 세계 0% 환전 수수료</p>
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
        <div className="text-xs text-gray-300">KRW-C로 전 세계 어디서든 0% 수수료</div>
      </div>

      {/* Quick Stats - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-black">0-40</span>
            <span className="text-xs text-gray-600 ml-1">bps</span>
          </div>
          <div className="text-xs text-gray-600">FX 스프레드</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-black">20</span>
            <span className="text-xs text-gray-600 ml-1">초</span>
          </div>
          <div className="text-xs text-gray-600">OTP 유효시간</div>
        </div>
      </div>

      {/* Services */}
      <div ref={servicesRef} className="space-y-1">
        {services.map((service) => {
          const Icon = service.icon;
          const isHighlighted = (currentStep >= 2 && currentStep <= 4) && service.id === 'otp-withdrawal' ||
                               currentStep === 5 && service.id === 'history';
          return (
            <Link
              key={service.id}
              href={service.href}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${
                isHighlighted 
                  ? 'bg-green-50 border-green-200 ring-2 ring-green-100' 
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
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          );
        })}
      </div>

      </div>
    </>
  );
}