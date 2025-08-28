'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { POSSystem } from '@/components/POSSystem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageProgress } from '@/components/ui/page-progress';
import Link from 'next/link';

export default function POSSystemPage() {
  const [currentStep, setCurrentStep] = useState(2);
  const router = useRouter();
  const posRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 'setup',
      title: '결제 정보 입력',
      description: '금액과 통화를 선택하세요',
      href: '/payment/qr-payment'
    },
    {
      id: 'generate', 
      title: '결제 QR 생성',
      description: 'QR 코드를 생성합니다',
      href: '/payment/qr-payment'
    },
    {
      id: 'scan',
      title: '가맹점 스캔',
      description: '가맹점에서 QR 코드 스캔',
      href: '/payment/pos'
    },
    {
      id: 'approve',
      title: '자동 승인',
      description: '곧바로 자동 승인 처리',
      href: '/payment/history'
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = steps[stepIndex];
    
    if (step.href && stepIndex !== 2) {
      router.push(step.href);
    } else if (posRef.current) {
      posRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <PageProgress 
        steps={steps} 
        currentStep={currentStep} 
        onStepClick={handleStepClick}
      />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">POS 시스템</h1>
        <p className="text-gray-600 text-sm">가맹점용 결제 • KRW-C 정산 • 실시간 처리</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">오늘의 매출</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">₩ 2,340,000</p>
              <p className="text-sm font-medium text-gray-400">~ 2,340,000 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">POS</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          23건 거래 완료 • 실시간 정산
        </div>
      </div>

      {/* POS System */}
      <div 
        ref={posRef}
        className={`transition-all duration-700 ${
          currentStep === 2 ? 'scale-[1.05] shadow-2xl ring-4 ring-purple-500/50 bg-purple-50/50 rounded-2xl p-4' : ''
        }`}
      >
        <POSSystem />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-2xl font-bold text-black">즉시</div>
          <div className="text-xs text-gray-600">정산시간</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-xl font-bold text-green-500">0.5% / ZeroPay0%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-black">최근 거래</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-base">✓</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">$ 120.00</div>
                <div className="text-xs text-gray-600">5분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">₩158,400</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-base">✓</span>
              </div>
              <div>
                <div className="text-base font-semibold text-black">€85.50</div>
                <div className="text-xs text-gray-600">12분 전</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-black">₩123,120</div>
              <div className="text-xs text-gray-600">완료</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="grid grid-cols-2 gap-2">
        <Link href="/payment/qr-payment">
          <Button variant="outline" className="w-full text-sm">
            QR 결제
          </Button>
        </Link>
        <Link href="/payment/history">
          <Button variant="outline" className="w-full text-sm">
            결제 내역
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}