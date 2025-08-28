'use client';

import { CustomsProgress } from '@/components/ui/page-progress';

import { CustomsSettings } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CustomsSettingsPage() {
  return (
    <>
      <CustomsProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">자동 세관 신고 설정</h1>
        <p className="text-gray-600 text-xs">KYC 연동 • ON/OFF 토글</p>
      </div>

      <div className="space-y-4">
        {/* 설정 패널 */}
        <div>
          <CustomsSettings />
        </div>

        {/* 정보 및 가이드 */}
        <div className="space-y-4">
          {/* 기능 소개 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-black">자동 세관 신고란?</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm">🤖</span>
                  <span className="font-semibold text-sm text-black">완전 자동화</span>
                </div>
                <div className="text-xs text-gray-600">
                  KRW-C 결제 → NFT 영수증 → 자동 신고서
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm">⏰</span>
                  <span className="font-semibold text-sm text-black">스마트 스케줄링</span>
                </div>
                <div className="text-xs text-gray-600">
                  귀국 24시간 전 자동 작성/제출
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm">🔒</span>
                  <span className="font-semibold text-sm text-black">안전한 인증</span>
                </div>
                <div className="text-xs text-gray-600">
                  KYC 레벨 2 인증 필수
                </div>
              </div>
            </div>
          </div>

          {/* 이용 혜택 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-black">이용 혜택</h3>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center p-2 bg-white rounded-lg">
                  <div className="font-bold text-sm text-black">100%</div>
                  <div className="text-gray-600">자동화</div>
                </div>
                <div className="text-center p-2 bg-white rounded-lg">
                  <div className="font-bold text-sm text-black">0분</div>
                  <div className="text-gray-600">대기시간</div>
                </div>
                <div className="text-center p-2 bg-white rounded-lg">
                  <div className="font-bold text-sm text-black">0%</div>
                  <div className="text-gray-600">실수율</div>
                </div>
                <div className="text-center p-2 bg-white rounded-lg">
                  <div className="font-bold text-sm text-black">24H</div>
                  <div className="text-gray-600">사전처리</div>
                </div>
              </div>
            </div>
          </div>

          {/* KYC 가이드 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-black">KYC 인증 가이드</h3>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="font-medium text-sm text-black">필요 서류</div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700">여권 사진 (신분확인용)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700">셀피 사진 (본인확인용)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700">휴대폰 본인인증</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium text-sm text-black">인증 절차</div>
                  <div className="text-xs text-gray-600">
                    1. 서류 업로드 → 2. AI 검증 → 3. 휴대폰 인증 → 4. 승인 완료 (약 5분 소요)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 주의사항 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-black">주의사항</h3>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <span>⚠️</span>
                  <div>
                    <div className="font-medium text-black">신고 대상 품목</div>
                    <div className="text-gray-600">
                      전자제품, 주류, 담배, 고가품($600 이상)은 반드시 신고 대상입니다
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span>💡</span>
                  <div>
                    <div className="font-medium text-black">신고 기한</div>
                    <div className="text-gray-600">
                      입국 24시간 전까지 신고를 완료해야 하며, 늦으면 공항에서 별도 신고가 필요합니다
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span>ℹ️</span>
                  <div>
                    <div className="font-medium text-black">개인정보 보호</div>
                    <div className="text-gray-600">
                      KYC 정보는 암호화되어 저장되며, 세관 신고 목적으로만 사용됩니다
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <div className="flex justify-center space-x-4">
        <Link href="/customs/receipts">
          <Button variant="outline">NFT 영수증함 보기</Button>
        </Link>
        <Link href="/customs/preview">
          <Button variant="outline">신고서 미리보기</Button>
        </Link>
      </div>
      </div>
    </>
  );
}