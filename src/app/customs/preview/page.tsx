'use client';

import { CustomsProgress } from '@/components/ui/page-progress';

import { DeclarationPreview } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CustomsPreviewPage() {
  return (
    <>
      <CustomsProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">세관 신고서 미리보기</h1>
        <p className="text-gray-600 text-xs">
          NFT 기반 자동 생성 • 즉시 제출 • 사전 승인
        </p>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex justify-center mb-6">
        <DeclarationPreview />
      </div>

      {/* 하단 정보 카드들 - 2열 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {/* 세금 정보 - Apple Style */}
        <div className="bg-gray-50 rounded-xl p-3">
          <h3 className="font-semibold text-sm text-black mb-2">세금 계산</h3>
          <div className="space-y-2">
            <div className="text-center p-2 bg-white rounded-lg">
              <div className="text-lg font-bold text-black">$18</div>
              <div className="text-xs text-gray-600">납부할 세금</div>
            </div>
            
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">면세 한도:</span>
                <span>$600</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">총 구매액:</span>
                <span>$420</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">한도 내 금액:</span>
                <span>$240</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">과세 대상:</span>
                <span>$180</span>
              </div>
              <div className="flex justify-between font-medium border-t pt-1">
                <span>세율 (10%):</span>
                <span>$18</span>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 방법 - Apple Style */}
        <div className="bg-gray-50 rounded-xl p-3">
          <h3 className="font-semibold text-sm text-black mb-2">세금 결제</h3>
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 p-2 bg-white rounded-lg">
                <input type="radio" name="payment" defaultChecked className="w-3 h-3" />
                <div className="flex-1">
                  <div className="font-medium text-xs">KRW-C 지갑</div>
                  <div className="text-xs text-gray-600">₩23,760 (즉시 차감)</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white rounded-lg">
                <input type="radio" name="payment" className="w-3 h-3" />
                <div className="flex-1">
                  <div className="font-medium text-xs">신용카드</div>
                  <div className="text-xs text-gray-600">공항에서 직접 결제</div>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 p-2 bg-white rounded-lg">
              KRW-C 결제 시 환율 우대 혜택
            </div>
          </div>
        </div>

        {/* 제출 후 안내 - Apple Style */}
        <div className="bg-gray-50 rounded-xl p-3">
          <h3 className="font-semibold text-sm text-black mb-2">제출 후 절차</h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-start space-x-2">
              <span>✅</span>
              <div>
                <div className="font-medium text-black">즉시 접수</div>
                <div className="text-gray-600">세관 시스템 자동 등록</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <span>📱</span>
              <div>
                <div className="font-medium text-black">알림 발송</div>
                <div className="text-gray-600">접수번호 및 처리 결과</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <span>🛫</span>
              <div>
                <div className="font-medium text-black">공항 통관</div>
                <div className="text-gray-600">사전 신고로 빠른 통관</div>
              </div>
            </div>
          </div>
        </div>

        {/* 도움말 - Apple Style */}
        <div className="bg-gray-50 rounded-xl p-3">
          <h3 className="font-semibold text-sm text-black mb-2">도움말</h3>
          <div className="space-y-2 text-xs">
            <div>
              <div className="font-medium mb-1 text-black">수정이 필요한 경우</div>
              <div className="text-gray-600">
                NFT 영수증함에서 신고 포함 항목 변경 후 재생성
              </div>
            </div>
            
            <div>
              <div className="font-medium mb-1 text-black">추가 구매가 있는 경우</div>
              <div className="text-gray-600">
                귀국 전까지 언제든지 신고서 재생성 가능
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg text-gray-600">
              문제 발생 시 KRW-C 고객센터 연락
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <div className="flex justify-center space-x-4">
        <Link href="/customs/receipts">
          <Button variant="outline">영수증함 돌아가기</Button>
        </Link>
        <Link href="/customs/settings">
          <Button variant="outline">설정 변경</Button>
        </Link>
      </div>
      </div>
    </>
  );
}