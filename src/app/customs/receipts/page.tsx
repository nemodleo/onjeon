'use client';

import { CustomsProgress } from '@/components/ui/page-progress';

import { NFTReceiptWallet } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NFTReceiptsPage() {
  return (
    <>
      <CustomsProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold text-black mb-3">NFT 영수증함</h1>
        <p className="text-gray-600 text-base">카드 그리드 • 신고 포함 선택</p>
      </div>

      {/* 신고 금액 합계 */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-black">$420</div>
          <div className="text-sm text-gray-600 mt-1">신고 포함 금액</div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <NFTReceiptWallet />

      {/* 하단 정보 카드들 - 3열 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* NFT 정보 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">NFT 영수증이란?</h3>
            <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
              <div className="flex items-start space-x-2">
                <span>🔗</span>
                <div>
                  <div className="font-medium text-black">블록체인 저장</div>
                  <div className="text-sm text-gray-600">
                    모든 구매 내역이 블록체인에 안전하게 저장됩니다
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span>🛡️</span>
                <div>
                  <div className="font-medium text-black">위변조 방지</div>
                  <div className="text-sm text-gray-600">
                    NFT 기술로 영수증 위변조가 불가능합니다
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span>🔍</span>
                <div>
                  <div className="font-medium text-black">투명한 추적</div>
                  <div className="text-sm text-gray-600">
                    세관에서 실시간으로 진위를 확인할 수 있습니다
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 신고 현황 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">신고 현황</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">총 영수증:</span>
              <span className="font-medium">3개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">신고 포함:</span>
              <span className="font-medium">2개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">신고 제외:</span>
              <span className="font-medium">1개</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-gray-600">예상 세금:</span>
              <span className="font-medium">$18</span>
            </div>
          </div>
        </div>

        {/* 카테고리별 구매 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">카테고리별 구매</h3>
          <div className="space-y-2">
            <div className="flex justify-between p-2 bg-white rounded-xl text-sm">
              <span>화장품/패션:</span>
              <span className="font-medium">$240</span>
            </div>
            <div className="flex justify-between p-2 bg-white rounded-xl text-sm">
              <span>전자제품:</span>
              <span className="font-medium">$180</span>
            </div>
            <div className="flex justify-between p-2 bg-white rounded-xl text-sm">
              <span>기념품:</span>
              <span className="font-medium">$45</span>
            </div>
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <h3 className="font-semibold text-black mb-3">빠른 액션</h3>
          <div className="space-y-2">
            <Link href="/customs/preview" className="block">
              <div className="bg-black text-white rounded-xl py-2 px-3 text-sm text-center font-medium hover:opacity-90 transition-opacity">
                신고서 미리보기
              </div>
            </Link>
            <Link href="/exchange/qr-payment" className="block">
              <div className="bg-white border border-gray-200 rounded-xl py-2 px-3 text-sm text-center font-medium hover:bg-gray-50 transition-colors">
                추가 구매하기
              </div>
            </Link>
            <Link href="/customs/settings" className="block">
              <div className="bg-white border border-gray-200 rounded-xl py-2 px-3 text-sm text-center font-medium hover:bg-gray-50 transition-colors">
                설정 변경
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* NFT 기술 설명 - Apple Style */}
      <div className="space-y-4 mt-8">
        <h3 className="text-xl font-bold text-black">NFT 영수증의 기술적 장점</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="font-medium text-black mb-2">암호학적 보안</h3>
            <p className="text-xs text-gray-600">
              해시 함수와 디지털 서명으로 영수증의 무결성을 보장합니다
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-medium text-black mb-2">분산 저장</h3>
            <p className="text-xs text-gray-600">
              여러 노드에 분산 저장되어 단일 장애점이 없습니다
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-medium text-black mb-2">실시간 검증</h3>
            <p className="text-xs text-gray-600">
              세관에서 블록체인을 통해 즉시 진위를 확인할 수 있습니다
            </p>
          </div>
        </div>
      </div>

      {/* 사용법 안내 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">NFT 영수증 관리법</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h3 className="font-medium text-black mb-2">자동 발행</h3>
            <p className="text-xs text-gray-600">
              KRW-C 결제 완료 시 NFT 영수증 자동 저장
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h3 className="font-medium text-black mb-2">분류 관리</h3>
            <p className="text-xs text-gray-600">
              구매 카테고리별 자동 분류
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h3 className="font-medium text-black mb-2">신고 선택</h3>
            <p className="text-xs text-gray-600">
              세관 신고 포함 여부 자유 선택
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
              4
            </div>
            <h3 className="font-medium text-black mb-2">자동 신고</h3>
            <p className="text-xs text-gray-600">
              선택된 영수증 자동 신고서 포함
            </p>
          </div>
        </div>
      </div>
    </>
  );
}