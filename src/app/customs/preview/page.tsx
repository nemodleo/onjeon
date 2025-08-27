'use client';

import { DeclarationPreview } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CustomsPreviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">세관 신고서 미리보기</h1>
        <p className="text-gray-600">
          NFT 영수증을 기반으로 자동 생성된 세관 신고서를 확인하고 제출하세요
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 메인 컨텐츠 */}
        <div className="lg:col-span-2 flex justify-center">
          <DeclarationPreview />
        </div>

        {/* 사이드바 */}
        <div className="space-y-6">
          {/* 신고서 정보 */}
          <Card>
            <CardHeader>
              <CardTitle>신고서 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>생성 방식:</span>
                  <span className="font-medium text-blue-600">자동 생성</span>
                </div>
                <div className="flex justify-between">
                  <span>기반 데이터:</span>
                  <span className="font-medium">NFT 영수증</span>
                </div>
                <div className="flex justify-between">
                  <span>포함 품목:</span>
                  <span className="font-medium">2개 카테고리</span>
                </div>
                <div className="flex justify-between">
                  <span>신고 형태:</span>
                  <span className="font-medium">전자 신고</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>처리 예상 시간:</span>
                  <span className="font-medium text-green-600">즉시</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 세금 정보 */}
          <Card>
            <CardHeader>
              <CardTitle>세금 계산</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center p-3 bg-red-50 border border-red-200 rounded">
                  <div className="text-xl font-bold text-red-600">$18</div>
                  <div className="text-sm text-red-800">납부할 세금</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>면세 한도:</span>
                    <span>$600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>총 구매액:</span>
                    <span>$420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>한도 내 금액:</span>
                    <span className="text-green-600">$240</span>
                  </div>
                  <div className="flex justify-between">
                    <span>과세 대상:</span>
                    <span className="text-red-600">$180</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>세율 (10%):</span>
                    <span className="text-red-600">$18</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 결제 방법 */}
          <Card>
            <CardHeader>
              <CardTitle>세금 결제</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm font-medium">결제 옵션</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 border rounded selected">
                    <input type="radio" name="payment" defaultChecked className="w-3 h-3" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">KRW-C 지갑</div>
                      <div className="text-xs text-gray-600">₩23,760 (즉시 차감)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 border rounded">
                    <input type="radio" name="payment" className="w-3 h-3" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">신용카드</div>
                      <div className="text-xs text-gray-600">공항에서 직접 결제</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                  KRW-C 결제 시 환율 우대 혜택이 적용됩니다
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 제출 후 안내 */}
          <Card>
            <CardHeader>
              <CardTitle>제출 후 절차</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="text-green-600">✅</div>
                  <div>
                    <div className="font-medium">즉시 접수</div>
                    <div className="text-gray-600">제출과 동시에 세관 시스템에 등록됩니다</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="text-blue-600">📱</div>
                  <div>
                    <div className="font-medium">알림 발송</div>
                    <div className="text-gray-600">접수번호와 처리 결과를 알려드립니다</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="text-purple-600">🛫</div>
                  <div>
                    <div className="font-medium">공항 통관</div>
                    <div className="text-gray-600">사전 신고로 빠른 통관이 가능합니다</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 도움말 */}
          <Card>
            <CardHeader>
              <CardTitle>도움말</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-medium mb-1">수정이 필요한 경우</div>
                  <div className="text-gray-600">
                    NFT 영수증함에서 신고 포함 항목을 변경한 후 다시 생성하세요.
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-1">추가 구매가 있는 경우</div>
                  <div className="text-gray-600">
                    귀국 전까지는 언제든지 신고서를 다시 생성할 수 있습니다.
                  </div>
                </div>

                <div className="p-2 bg-gray-50 border border-gray-200 rounded text-xs">
                  문제가 발생하면 KRW-C 고객센터로 연락주세요.
                </div>
              </div>
            </CardContent>
          </Card>
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
  );
}