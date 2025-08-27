'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          온전(Onjeon) - 글로벌 KRW 금융 인프라
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          단순한 리펀드를 넘어, 여행객이 한국 원화를 안전하게 연결할 수 있는 글로벌 금융 인프라입니다.
          환전 없는 글로벌 결제, 스마트 면세 한도관리, 디지털 VAT 환급, 자동 세관 신고까지 완전한 여행 금융 생태계를 제공합니다.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">💱</span>
              <span>환전 게이트웨이</span>
            </CardTitle>
            <CardDescription>
              환전 없이, 카드 수수료 없이 즉시 결제
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              QR 결제와 OTP 현금 인출로 국제 결제의 새로운 표준을 제시합니다.
            </p>
            <div className="space-y-2">
              <Link href="/exchange/qr-payment">
                <Button className="w-full" size="sm">QR 결제</Button>
              </Link>
              <Link href="/exchange/otp-withdrawal">
                <Button className="w-full" size="sm" variant="outline">OTP 인출</Button>
              </Link>
              <Link href="/exchange/pos">
                <Button className="w-full" size="sm" variant="outline">POS 시스템</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">🛂</span>
              <span>면세 한도관리</span>
            </CardTitle>
            <CardDescription>
              스마트 알림으로 면세 혜택 최적화
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              자동 한도 추적으로 초과 위험을 사전에 방지합니다.
            </p>
            <div className="space-y-2">
              <Link href="/duty-free/dashboard">
                <Button className="w-full" size="sm">한도 대시보드</Button>
              </Link>
              <Link href="/duty-free/trip-setup">
                <Button className="w-full" size="sm" variant="outline">여행 설정</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">💸</span>
              <span>디지털 택스 리펀</span>
            </CardTitle>
            <CardDescription>
              공항 줄서기 없이 즉시 VAT 환급
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              자동 계산 후 원화 스테이블코인으로 즉시 지급합니다.
            </p>
            <div className="space-y-2">
              <Link href="/vat-refund/dashboard">
                <Button className="w-full" size="sm">환급 대시보드</Button>
              </Link>
              <Link href="/vat-refund/stamp">
                <Button className="w-full" size="sm" variant="outline">스탬프 처리</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">📋</span>
              <span>자동 세관신고</span>
            </CardTitle>
            <CardDescription>
              NFT 영수증 기반 원클릭 신고
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              KYC 연동으로 모든 구매 내역을 자동으로 관리합니다.
            </p>
            <div className="space-y-2">
              <Link href="/customs/settings">
                <Button className="w-full" size="sm">신고 설정</Button>
              </Link>
              <Link href="/customs/receipts">
                <Button className="w-full" size="sm" variant="outline">NFT 영수증함</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demo Flow */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>데모 플로우 가이드</CardTitle>
          <CardDescription>
            전체 시스템을 체험하는 권장 순서입니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <div className="text-sm font-medium">여행 설정</div>
              <div className="text-xs text-gray-500">목적지와 면세한도 설정</div>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <div className="text-sm font-medium">QR 결제</div>
              <div className="text-xs text-gray-500">현지에서 KRW-C로 결제</div>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <div className="text-sm font-medium">한도 확인</div>
              <div className="text-xs text-gray-500">실시간 면세한도 추적</div>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <div className="text-sm font-medium">VAT 환급</div>
              <div className="text-xs text-gray-500">출국시 즉시 환급 처리</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-blue-600">0%</div>
          <div className="text-sm text-gray-600">환전 수수료</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-green-600">즉시</div>
          <div className="text-sm text-gray-600">VAT 환급</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-purple-600">자동</div>
          <div className="text-sm text-gray-600">한도 추적</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-orange-600">원클릭</div>
          <div className="text-sm text-gray-600">세관 신고</div>
        </div>
      </div>
    </div>
  );
}