'use client';

import { CustomsSettings } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CustomsSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">자동 세관 신고 설정</h1>
        <p className="text-gray-600">
          KYC 인증을 통해 자동 세관 신고 기능을 활성화하세요
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 설정 패널 */}
        <div>
          <CustomsSettings />
        </div>

        {/* 정보 및 가이드 */}
        <div className="space-y-6">
          {/* 기능 소개 */}
          <Card>
            <CardHeader>
              <CardTitle>자동 세관 신고란?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="text-blue-600">🤖</div>
                  <div>
                    <div className="font-medium">완전 자동화</div>
                    <div className="text-gray-600">
                      KRW-C로 결제한 모든 구매 내역이 NFT 영수증으로 저장되어 자동으로 신고서가 작성됩니다
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">⏰</div>
                  <div>
                    <div className="font-medium">스마트 스케줄링</div>
                    <div className="text-gray-600">
                      귀국 24시간 전 자동으로 신고서를 작성하여 제출하므로 공항에서 별도 절차가 불필요합니다
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="text-purple-600">🔒</div>
                  <div>
                    <div className="font-medium">안전한 인증</div>
                    <div className="text-gray-600">
                      KYC 레벨 2 인증을 통해 신분이 확인된 사용자만 이용할 수 있어 보안이 보장됩니다
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 이용 혜택 */}
          <Card>
            <CardHeader>
              <CardTitle>이용 혜택</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center p-3 bg-blue-50 rounded">
                  <div className="font-bold text-blue-600">100%</div>
                  <div className="text-blue-800">자동화</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded">
                  <div className="font-bold text-green-600">0분</div>
                  <div className="text-green-800">대기시간</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded">
                  <div className="font-bold text-purple-600">0%</div>
                  <div className="text-purple-800">실수율</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded">
                  <div className="font-bold text-orange-600">24H</div>
                  <div className="text-orange-800">사전처리</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* KYC 가이드 */}
          <Card>
            <CardHeader>
              <CardTitle>KYC 인증 가이드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="font-medium text-sm">필요 서류</div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>여권 사진 (신분확인용)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>셀피 사진 (본인확인용)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>휴대폰 본인인증</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium text-sm">인증 절차</div>
                  <div className="text-xs text-gray-600">
                    1. 서류 업로드 → 2. AI 검증 → 3. 휴대폰 인증 → 4. 승인 완료 (약 5분 소요)
                  </div>
                </div>
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
                  <div className="text-red-600">⚠️</div>
                  <div>
                    <div className="font-medium">신고 대상 품목</div>
                    <div className="text-gray-600">
                      전자제품, 주류, 담배, 고가품($600 이상)은 반드시 신고 대상입니다
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="text-yellow-600">💡</div>
                  <div>
                    <div className="font-medium">신고 기한</div>
                    <div className="text-gray-600">
                      입국 24시간 전까지 신고를 완료해야 하며, 늦으면 공항에서 별도 신고가 필요합니다
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="text-blue-600">ℹ️</div>
                  <div>
                    <div className="font-medium">개인정보 보호</div>
                    <div className="text-gray-600">
                      KYC 정보는 암호화되어 저장되며, 세관 신고 목적으로만 사용됩니다
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
  );
}