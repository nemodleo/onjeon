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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 메인 컨텐츠 */}
        <div className="lg:col-span-3">
          <NFTReceiptWallet />
        </div>

        {/* 사이드바 */}
        <div className="space-y-6">
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

          {/* 신고 현황 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">신고 현황</h3>
            <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
              <div className="text-center p-3 bg-white rounded-xl">
                <div className="text-2xl font-bold text-black">$420</div>
                <div className="text-sm text-gray-600">신고 포함 금액</div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">총 영수증 수:</span>
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
          </div>

          {/* 카테고리별 분석 - Apple Style */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">카테고리별 구매</h3>
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
              <div className="flex justify-between p-2 bg-white rounded-xl">
                <span className="text-sm">화장품/패션:</span>
                <span className="font-medium">$240</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded-xl">
                <span className="text-sm">전자제품:</span>
                <span className="font-medium">$180</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded-xl">
                <span className="text-sm">기념품:</span>
                <span className="font-medium">$45</span>
              </div>
            </div>
          </div>

          {/* 빠른 액션 */}
          <Card>
            <CardHeader>
              <CardTitle>빠른 액션</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/customs/preview">
                <Button className="w-full" size="sm">
                  신고서 미리보기
                </Button>
              </Link>
              <Link href="/exchange/qr-payment">
                <Button className="w-full" size="sm" variant="outline">
                  추가 구매하기
                </Button>
              </Link>
              <Link href="/customs/settings">
                <Button className="w-full" size="sm" variant="outline">
                  설정 변경
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* NFT 기술 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>NFT 영수증의 기술적 장점</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center space-y-2">
              <div className="text-3xl">🔐</div>
              <h3 className="font-medium">암호학적 보안</h3>
              <p className="text-sm text-gray-600">
                해시 함수와 디지털 서명으로 영수증의 무결성을 보장합니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🌐</div>
              <h3 className="font-medium">분산 저장</h3>
              <p className="text-sm text-gray-600">
                여러 노드에 분산 저장되어 단일 장애점이 없습니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🔍</div>
              <h3 className="font-medium">실시간 검증</h3>
              <p className="text-sm text-gray-600">
                세관에서 블록체인을 통해 즉시 진위를 확인할 수 있습니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 사용법 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>NFT 영수증 관리법</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="font-medium">자동 발행</h3>
              <p className="text-sm text-gray-600">
                KRW-C 결제 완료 시 NFT 영수증이 자동으로 지갑에 저장됩니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="font-medium">분류 관리</h3>
              <p className="text-sm text-gray-600">
                구매 카테고리별로 자동 분류되어 관리가 쉽습니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="font-medium">신고 선택</h3>
              <p className="text-sm text-gray-600">
                각 영수증별로 세관 신고 포함 여부를 자유롭게 선택할 수 있습니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                4
              </div>
              <h3 className="font-medium">자동 신고</h3>
              <p className="text-sm text-gray-600">
                선택된 영수증들이 자동으로 세관 신고서에 포함됩니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </>
  );
}