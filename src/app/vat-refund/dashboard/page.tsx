'use client';

import { VATRefundProgress } from '@/components/ui/page-progress';

import { VATRefundDashboard } from '@/components/VATRefund';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VATRefundDashboardPage() {
  return (
    <>
      <VATRefundProgress />
      <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">디지털 VAT 환급</h1>
        <p className="text-gray-600">
          공항에서 줄서기 없이 즉시 부가세를 환급받으세요
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 메인 컨텐츠 */}
        <div className="lg:col-span-2">
          <VATRefundDashboard />
        </div>

        {/* 사이드바 */}
        <div className="space-y-6">
          {/* 빠른 액션 */}
          <Card>
            <CardHeader>
              <CardTitle>VAT 환급 처리</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/vat-refund/stamp">
                <Button className="w-full">
                  🎫 공항에서 스탬프 받기
                </Button>
              </Link>
              <div className="text-xs text-gray-500 text-center">
                출국 전 세관에서 승인 필요
              </div>
            </CardContent>
          </Card>

          {/* 환급 진행 상황 */}
          <Card>
            <CardHeader>
              <CardTitle>환급 진행 상황</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">영수증 수집 완료</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">환급 금액 계산 완료</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">세관 승인 대기 중</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-500">환급 처리 대기</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 환급 통계 */}
          <Card>
            <CardHeader>
              <CardTitle>환급 통계</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>이번 여행 구매액:</span>
                  <span className="font-medium">$465</span>
                </div>
                <div className="flex justify-between">
                  <span>환급 가능 금액:</span>
                  <span className="font-medium text-green-600">$33.60</span>
                </div>
                <div className="flex justify-between">
                  <span>예상 수령 시간:</span>
                  <span className="font-medium text-blue-600">즉시</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>기존 환급 대비:</span>
                  <span className="font-medium text-purple-600">7일 단축</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 환급 혜택 */}
          <Card>
            <CardHeader>
              <CardTitle>KRW-C 환급 혜택</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">✅</div>
                  <div className="text-sm">
                    <div className="font-medium">즉시 처리</div>
                    <div className="text-gray-600">공항에서 바로 지갑 입금</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">✅</div>
                  <div className="text-sm">
                    <div className="font-medium">자유로운 활용</div>
                    <div className="text-gray-600">다른 코인으로 스왑 가능</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">✅</div>
                  <div className="text-sm">
                    <div className="font-medium">투명한 처리</div>
                    <div className="text-gray-600">블록체인으로 내역 확인</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">✅</div>
                  <div className="text-sm">
                    <div className="font-medium">수수료 절약</div>
                    <div className="text-gray-600">환전 수수료 없음</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 비교표 */}
      <Card>
        <CardHeader>
          <CardTitle>기존 VAT 환급 vs KRW-C 환급</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-3">기존 방식</h4>
              <div className="space-y-2 text-sm text-red-600">
                <div>🕐 처리 시간: 1-3개월</div>
                <div>📋 서류 작업 복잡</div>
                <div>🏛️ 공항 창구 대기</div>
                <div>💳 카드/계좌 환급만</div>
                <div>💰 환전 수수료 발생</div>
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-3">개선된 디지털</h4>
              <div className="space-y-2 text-sm text-orange-600">
                <div>⏱️ 처리 시간: 7-14일</div>
                <div>📱 앱으로 신청</div>
                <div>✉️ 우편 서류 제출</div>
                <div>🏦 계좌 이체</div>
                <div>💸 일부 수수료 절약</div>
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-3">KRW-C 방식</h4>
              <div className="space-y-2 text-sm text-green-600">
                <div>⚡ 처리 시간: 즉시</div>
                <div>🤖 완전 자동화</div>
                <div>📱 QR 스캔 완료</div>
                <div>🪙 스테이블코인 지급</div>
                <div>🆓 수수료 0%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 프로세스 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>VAT 환급 프로세스</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="font-medium">자동 계산</h3>
              <p className="text-sm text-gray-600">
                KRW-C 결제 시 VAT 환급 대상이 자동으로 계산됩니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="font-medium">영수증 번들</h3>
              <p className="text-sm text-gray-600">
                모든 환급 대상 영수증이 QR 코드로 번들링됩니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-yellow-100 text-yellow-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="font-medium">세관 승인</h3>
              <p className="text-sm text-gray-600">
                출국 시 QR 스캔으로 간단하게 승인받습니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="font-medium">즉시 환급</h3>
              <p className="text-sm text-gray-600">
                승인과 동시에 KRW-C가 지갑으로 즉시 입금됩니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </>
  );
}