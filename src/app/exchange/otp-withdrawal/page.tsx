'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { OTPWithdrawalGenerator, OTPVerificationTerminal } from '@/components/OTPWithdrawal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import { ExchangeProgress } from '@/components/ui/page-progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OTPWithdrawalPage() {
  const { user, balance } = useWalletStore();
  const [currentStep, setCurrentStep] = useState(2);
  const [terminalHighlight, setTerminalHighlight] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const otpRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 'start',
      title: '시작 단계',
      description: '환전 시스템 준비',
      href: '/exchange'
    },
    {
      id: 'overview',
      title: '서비스 개요',
      description: '환전 게이트웨이 서비스 탐색',
      href: '/exchange'
    },
    {
      id: 'instant-exchange',
      title: '즉시 환전',
      description: '실시간 환전 서비스',
      href: '/exchange/instant-exchange'
    },
    {
      id: 'otp-generate',
      title: '현금 인출 OTP 생성',
      description: 'OTP로 안전한 현금 출금',
      href: '/exchange/otp-withdrawal',
      ref: otpRef
    },
    {
      id: 'cash-withdrawal',
      title: '현금 인출',
      description: 'ATM/편의점에서 현금 인출',
      href: '/exchange/otp-withdrawal',
      ref: terminalRef
    },
    {
      id: 'history',
      title: '환전 내역',
      description: '거래 내역 확인',
      href: '/exchange/history',
      ref: networkRef
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = steps[stepIndex];
    
    if (step.href && stepIndex !== 3 && stepIndex !== 4) {
      router.push(step.href);
    } else if (step.ref?.current) {
      step.ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // currentStep에 따른 자동 스크롤 및 강조
  useEffect(() => {
    const handleOTPGenerated = () => {
      // OTP 생성 시 터미널 섹션으로 스크롤
      setTerminalHighlight(true);
      if (terminalRef.current) {
        setTimeout(() => {
          terminalRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
          // Force re-render to apply terminal highlighting
          setCurrentStep(3);
        }, 500);
      }
    };

    window.addEventListener('otpGenerated', handleOTPGenerated);
    return () => window.removeEventListener('otpGenerated', handleOTPGenerated);
  }, []);

  // 클라이언트 사이드 마운트 감지
  useEffect(() => {
    setIsClient(true);
  }, []);

  // URL 파라미터 변경 감지
  useEffect(() => {
    if (!isClient) return;
    
    const handleURLChange = () => {
      // Force component re-render when URL changes
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('step') === 'terminal') {
        setCurrentStep(3); // ATM / 대리점 터미널
        setTerminalHighlight(true);
      } else {
        setCurrentStep(2); // OTP 현금 인출 생성
        setTerminalHighlight(false);
      }
    };

    // 초기 URL 상태 확인
    handleURLChange();
    
    window.addEventListener('popstate', handleURLChange);
    return () => window.removeEventListener('popstate', handleURLChange);
  }, [isClient]);

  return (
    <>
      <ExchangeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">OTP 현금 인출</h1>
        <p className="text-gray-600 text-sm">일회용 OTP로 안전하게 현지 통화 현금을 인출하세요</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">사용 가능 잔액</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold">{formatCurrency(balance.KRW, 'KRW')}</p>
              <p className="text-sm font-medium text-gray-400">{balance.KRW?.toLocaleString()} KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm text-white font-bold">💰</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          전 세계 ATM • 편의점 • 환전소
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-xl font-bold text-green-500">1%</div>
          <div className="text-xs text-gray-600">인출수수료</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-2xl font-bold text-black">0+</div>
          <div className="text-xs text-gray-600">지원 국가</div>
        </div>
      </div>

      {/* OTP Generator */}
      <div 
        ref={otpRef}
        className={`transition-all duration-700 ${
          currentStep === 3 ? 'scale-[1.05] shadow-2xl ring-4 ring-orange-500/50 bg-orange-50/50 rounded-2xl p-4' : ''
        }`}
      >
        <OTPWithdrawalGenerator />
      </div>

      {/* Terminal */}
      <div 
        ref={terminalRef}
        className={`transition-all duration-700 ${
          terminalHighlight
            ? 'scale-[1.05] shadow-2xl ring-4 ring-blue-500/50 bg-blue-50/50 rounded-2xl p-4' 
            : ''
        }`}
      >
        <OTPVerificationTerminal />
      </div>

      {/* Global Network */}
      <div ref={networkRef} className="space-y-3">
        <h3 className="text-lg font-bold text-black">글로벌 네트워크</h3>
        <div className="space-y-1">
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center mr-3">
              <span className="text-base">🏪</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">편의점</div>
              <div className="text-xs text-gray-600">세븐일레븐, 로손 24시간</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-8 h-8 bg-green-100 rounded-2xl flex items-center justify-center mr-3">
              <span className="text-base">🏧</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">ATM</div>
              <div className="text-xs text-gray-600">주요 은행 최저 수수료</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-8 h-8 bg-purple-100 rounded-2xl flex items-center justify-center mr-3">
              <span className="text-base">💱</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">환전소</div>
              <div className="text-xs text-gray-600">공항, 관광지 우대 환율</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Comparison */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-black">수수료 비교</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-2xl border border-red-100">
            <div>
              <div className="text-base font-semibold text-black">기존 환전소</div>
              <div className="text-xs text-gray-600">환율 마진 + 수수료</div>
            </div>
            <div className="text-xl font-bold text-red-600">3-7%</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-2xl border border-orange-100">
            <div>
              <div className="text-base font-semibold text-black">해외카드</div>
              <div className="text-xs text-gray-600">해외수수료 + ATM비</div>
            </div>
            <div className="text-xl font-bold text-orange-600">2-4%</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-2xl border border-green-100">
            <div>
              <div className="text-base font-semibold text-black">ONJEON OTP</div>
              <div className="text-xs text-gray-600">인출 수수료만</div>
            </div>
            <div className="text-xl font-bold text-green-600">1%</div>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-black">사용 방법</h3>
        <div className="space-y-1">
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold text-blue-600">1</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">금액 입력</div>
              <div className="text-xs text-gray-600">인출할 현지 통화와 금액 선택</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold text-green-600">2</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">OTP 생성</div>
              <div className="text-xs text-gray-600">6자리 코드 2분간 유효</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold text-purple-600">3</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">ATM 방문</div>
              <div className="text-xs text-gray-600">가까운 ATM에서 OTP 입력</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold text-orange-600">4</span>
            </div>
            <div>
              <div className="text-base font-semibold text-black">현금 수령</div>
              <div className="text-xs text-gray-600">검증 후 즉시 현금 수령</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="grid grid-cols-2 gap-2">
        <Link href="/exchange/instant-exchange">
          <Button variant="outline" className="w-full text-sm">
            즉시 환전
          </Button>
        </Link>
        <Link href="/exchange/history">
          <Button variant="outline" className="w-full text-sm">
            환전 내역
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}