'use client';

import { DutyFreeProgress } from '@/components/ui/page-progress';

import { useState } from 'react';
import { VATStampVerification, VATPayoutConfirmation } from '@/components/VATRefund';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function VATStampPage() {
  const [currentStep, setCurrentStep] = useState<'verification' | 'payout'>('verification');

  // 스탬프 완료 후 환급 처리로 이동
  const handleStampComplete = () => {
    setTimeout(() => {
      setCurrentStep('payout');
    }, 1000);
  };

  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">세관 승인 및 환급 처리</h1>
        <p className="text-gray-600 text-sm">
          세관 승인 • QR 스캔 • 즉시 환급
        </p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">VAT 환급 대기액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">₩44,352</p>
              <p className="text-sm font-medium text-gray-400">~ 44,352 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-base">🎫</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          세관 승인 후 즉시 지급
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">완료</div>
          <div className="text-xs text-gray-600">영수증 수집</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className={`text-sm font-bold ${currentStep === 'payout' ? 'text-green-600' : 'text-orange-600'}`}>
            {currentStep === 'payout' ? '완료' : '진행중'}
          </div>
          <div className="text-xs text-gray-600">세관 승인</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className={`text-sm font-bold ${currentStep === 'payout' ? 'text-green-600' : 'text-gray-400'}`}>
            {currentStep === 'payout' ? '완료' : '대기중'}
          </div>
          <div className="text-xs text-gray-600">환급 처리</div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex justify-center mb-6">
        {currentStep === 'verification' ? (
          <div className="w-full max-w-md">
            <VATStampVerification />
            {/* 자동으로 다음 단계로 이동하는 숨겨진 핸들러 */}
            <div className="hidden" onLoad={handleStampComplete}></div>
          </div>
        ) : (
          <VATPayoutConfirmation />
        )}
      </div>


      {/* Refund Summary */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">환급 요약</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">💰</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">총 환급 금액</div>
              <div className="text-xs text-gray-600">구매액 $ 420 • 부가세 $ 42 • 환급률 80%</div>
            </div>
          </div>
          <div className="text-base font-bold text-black">$ 33.60</div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">✈️</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">인천국제공항 제1터미널</div>
              <div className="text-xs text-gray-600">출국장 세관 24시간 운영</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      {currentStep === 'payout' && (
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-black">관련 서비스</h3>
          <Link href="/duty-free/vat-refund/dashboard" className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-base">📊</span>
              </div>
              <div>
                <div className="font-semibold text-black text-base">환급 내역 보기</div>
                <div className="text-xs text-gray-600">VAT 환급 대시보드</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
          <Link href="/exchange/qr-payment" className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-base">📱</span>
              </div>
              <div>
                <div className="font-semibold text-black text-base">추가 결제하기</div>
                <div className="text-xs text-gray-600">QR 결제로 쇼핑 계속</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
          <Link href="/" className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl active:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-base">🏠</span>
              </div>
              <div>
                <div className="font-semibold text-black text-base">홈으로 돌아가기</div>
                <div className="text-xs text-gray-600">메인 대시보드</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      )}
      </div>
    </>
  );
}