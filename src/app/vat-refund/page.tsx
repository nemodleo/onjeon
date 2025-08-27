'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VATRefundProgress } from '@/components/ui/page-progress';
import { Receipt, Stamp, ArrowRight, Clock, DollarSign, CheckCircle } from 'lucide-react';

export default function VATRefundPage() {
  return (
    <>
      <VATRefundProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4">
          즉시 VAT 환급
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          공항에서 줄 서지 마세요. 구매와 동시에 VAT가 자동 계산되어 원화 스테이블코인으로 즉시 지급됩니다
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Receipt className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">환급 대시보드</CardTitle>
            <CardDescription>실시간 VAT 환급 현황 및 내역</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              모든 VAT 환급 내역을 실시간으로 확인하고 예상 환급액을 미리 계산해보세요
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                실시간 환급 내역
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                자동 VAT 계산
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                KRW-C 즉시 지급
              </div>
            </div>
            <Link href="/vat-refund/dashboard">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                환급 현황 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Stamp className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">스탬프 처리</CardTitle>
            <CardDescription>출국 시 최종 스탬프 확인 및 처리</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              출국 시 세관에서 간단한 스탬프 확인만 하면 모든 환급 처리가 자동으로 완료됩니다
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                QR 코드 스캔
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                자동 스탬프 처리
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                최종 환급 완료
              </div>
            </div>
            <Link href="/vat-refund/stamp">
              <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
                스탬프 처리
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Comparison */}
      <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기존 VAT 환급 vs ONJEON</h2>
          <p className="text-gray-600">혁신적인 차이를 직접 경험해보세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">기존 방식</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                공항에서 30분+ 대기
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                복잡한 서류 작성
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                환급까지 수 주 소요
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                현금 또는 카드 환급
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600">ONJEON 방식</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                구매 즉시 자동 계산
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                서류 작성 불필요
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                출국 시 QR 스캔으로 완료
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                KRW-C로 즉시 지급
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">VAT 환급 프로세스</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="font-medium">구매 시 자동 계산</div>
            <div className="text-sm text-gray-600">결제와 동시에 VAT 환급액이 자동으로 계산됩니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto">
              <Receipt className="w-6 h-6 text-white" />
            </div>
            <div className="font-medium">NFT 영수증 생성</div>
            <div className="text-sm text-gray-600">블록체인 기반 NFT 영수증이 자동으로 생성됩니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto">
              <Stamp className="w-6 h-6 text-white" />
            </div>
            <div className="font-medium">출국 시 스탬프</div>
            <div className="text-sm text-gray-600">출국 시 QR 코드 스캔으로 간단히 스탬프 처리</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="font-medium">즉시 환급 완료</div>
            <div className="text-sm text-gray-600">KRW-C로 즉시 지갑에 환급금이 지급됩니다</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}