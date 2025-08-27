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
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">세관 승인 및 환급 처리</h1>
        <p className="text-gray-600">
          출국 전 마지막 단계: 세관 승인 후 즉시 VAT 환급을 받으세요
        </p>
      </div>

      {/* 진행 상황 */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600">영수증 수집</span>
          </div>
          <div className="w-8 h-0.5 bg-green-500"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600">환급액 계산</span>
          </div>
          <div className={`w-8 h-0.5 ${currentStep === 'payout' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${currentStep === 'payout' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className={`text-sm ${currentStep === 'payout' ? 'text-green-600' : 'text-yellow-600'}`}>세관 승인</span>
          </div>
          <div className={`w-8 h-0.5 ${currentStep === 'payout' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${currentStep === 'payout' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className={`text-sm ${currentStep === 'payout' ? 'text-green-600' : 'text-gray-500'}`}>환급 완료</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 메인 컨텐츠 */}
        <div className="lg:col-span-2 flex justify-center">
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

        {/* 사이드바 */}
        <div className="space-y-6">
          {/* 환급 요약 */}
          <Card>
            <CardHeader>
              <CardTitle>환급 요약</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">₩44,352</div>
                  <div className="text-sm text-gray-600">총 환급 금액</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>구매 총액:</span>
                    <span>$420.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>부가세:</span>
                    <span>$42.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>환급률:</span>
                    <span>80%</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>환급액:</span>
                    <span>$33.60</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 공항 정보 */}
          <Card>
            <CardHeader>
              <CardTitle>공항 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>공항:</span>
                  <span>인천국제공항</span>
                </div>
                <div className="flex justify-between">
                  <span>터미널:</span>
                  <span>제1터미널</span>
                </div>
                <div className="flex justify-between">
                  <span>위치:</span>
                  <span>출국장 세관</span>
                </div>
                <div className="flex justify-between">
                  <span>운영시간:</span>
                  <span>24시간</span>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
                💡 KRW-C 사용자는 전용 창구에서 더 빠른 처리가 가능합니다
              </div>
            </CardContent>
          </Card>

          {/* 주의사항 */}
          <Card>
            <CardHeader>
              <CardTitle>주의사항</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="text-yellow-600">⚠️</div>
                  <div>
                    <div className="font-medium">탑승 전 필수</div>
                    <div className="text-gray-600">보안검색대 통과 전에 승인받으세요</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-blue-600">ℹ️</div>
                  <div>
                    <div className="font-medium">신분증 지참</div>
                    <div className="text-gray-600">여권과 탑승권을 준비해주세요</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">✅</div>
                  <div>
                    <div className="font-medium">즉시 처리</div>
                    <div className="text-gray-600">승인과 동시에 지갑 입금됩니다</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 도움말 */}
          {currentStep === 'verification' && (
            <Card>
              <CardHeader>
                <CardTitle>도움말</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium mb-1">QR 스캔 방식</div>
                    <div className="text-gray-600">
                      세관 직원이 QR 코드를 스캔하여 모든 영수증을 한번에 확인합니다.
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-1">셀프 인증 (데모)</div>
                    <div className="text-gray-600">
                      실제 서비스 체험을 위한 데모 기능입니다. 탑승권 번호를 입력하세요.
                    </div>
                  </div>

                  <div className="p-2 bg-gray-50 border border-gray-200 rounded text-xs">
                    문의사항이 있으시면 공항 KRW-C 전용 데스크로 문의하세요.
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
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