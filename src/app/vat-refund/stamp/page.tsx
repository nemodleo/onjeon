'use client';

import { VATRefundProgress } from '@/components/ui/page-progress';

import { useState } from 'react';
import { VATStampVerification, VATPayoutConfirmation } from '@/components/VATRefund';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      <VATRefundProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold text-black mb-3">세관 승인 및 환급 처리</h1>
        <p className="text-gray-600 text-base">
          세관 승인 • QR 스캔 • 즉시 환급
        </p>
      </div>

      {/* 스탬프 받기 - 1열 */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <Link href="/vat-refund/stamp" className="block">
          <div className="bg-black text-white rounded-xl py-4 px-6 text-center font-medium hover:opacity-90 transition-opacity">
            🎫 공항에서 스탬프 받기
          </div>
        </Link>
        <div className="text-xs text-gray-500 text-center mt-3">
          출국 전 세관에서 승인 필요
        </div>
      </div>

      {/* 진행 상황 */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-xs">영수증 수집</span>
          </div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-xs">환급액 계산</span>
          </div>
          <div className={`w-8 h-0.5 ${currentStep === 'payout' ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${currentStep === 'payout' ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
            <span className={`text-xs ${currentStep === 'payout' ? '' : 'font-medium'}`}>세관 승인</span>
          </div>
          <div className={`w-8 h-0.5 ${currentStep === 'payout' ? 'bg-gray-400' : 'bg-gray-300'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${currentStep === 'payout' ? 'bg-gray-400' : 'bg-gray-300'}`}></div>
            <span className={`text-xs ${currentStep === 'payout' ? '' : 'text-gray-500'}`}>환급 완료</span>
          </div>
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

      {/* 하단 정보 카드들 - 3열 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 환급 요약 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">환급 요약</h3>
          <div className="space-y-3">
            <div className="text-center p-3 bg-white rounded-xl">
              <div className="text-xl font-bold text-black">₩44,352</div>
              <div className="text-xs text-gray-600">총 환급 금액</div>
            </div>
            
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">구매 총액:</span>
                <span>$420.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">부가세:</span>
                <span>$42.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">환급률:</span>
                <span>80%</span>
              </div>
              <div className="flex justify-between font-medium pt-1 border-t">
                <span>환급액:</span>
                <span>$33.60</span>
              </div>
            </div>
          </div>
        </div>

        {/* 공항 정보 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">공항 정보</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">공항:</span>
              <span>인천국제공항</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">터미널:</span>
              <span>제1터미널</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">위치:</span>
              <span>출국장 세관</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">운영시간:</span>
              <span>24시간</span>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-white rounded-xl text-xs text-gray-600">
            💡 KRW-C 전용 창구에서 빠른 처리 가능
          </div>
        </div>

        {/* 주의사항 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">주의사항</h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-start space-x-2">
              <span>⚠️</span>
              <div>
                <div className="font-medium text-black">탑승 전 필수</div>
                <div className="text-gray-600">보안검색대 통과 전 승인</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span>ℹ️</span>
              <div>
                <div className="font-medium text-black">신분증 지참</div>
                <div className="text-gray-600">여권과 탑승권 준비</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span>✅</span>
              <div>
                <div className="font-medium text-black">즉시 처리</div>
                <div className="text-gray-600">승인 후 지갑 입금</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      {currentStep === 'payout' && (
        <div className="flex justify-center space-x-4">
          <Link href="/vat-refund/dashboard">
            <Button variant="outline">환급 내역 보기</Button>
          </Link>
          <Link href="/exchange/qr-payment">
            <Button variant="outline">추가 결제하기</Button>
          </Link>
          <Link href="/">
            <Button>홈으로 돌아가기</Button>
          </Link>
        </div>
      )}
      </div>
    </>
  );
}