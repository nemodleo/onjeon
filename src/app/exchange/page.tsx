'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExchangeProgress } from '@/components/ui/page-progress';
import { CreditCard, Smartphone, MonitorSpeaker, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export default function ExchangePage() {
  return (
    <>
      <ExchangeProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          환전 게이트웨이
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          환전 수수료 0%, 카드 수수료 없이 전 세계 어디서든 원화 스테이블코인으로 즉시 결제하세요
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">QR 결제</CardTitle>
            <CardDescription>QR 코드 스캔으로 3초 결제</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              가맹점에서 QR 코드를 스캔하면 즉시 원화 스테이블코인으로 결제됩니다
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm text-green-600">
                <Zap className="w-4 h-4 mr-2" />
                평균 3초 결제 완료
              </div>
              <div className="flex items-center text-sm text-green-600">
                <Shield className="w-4 h-4 mr-2" />
                블록체인 보안 인증
              </div>
            </div>
            <Link href="/exchange/qr-payment">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                시작하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">OTP 인출</CardTitle>
            <CardDescription>일회용 비밀번호로 안전한 현금 인출</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              ATM이나 제휴 은행에서 OTP 인증으로 현지 통화를 안전하게 인출하세요
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm text-green-600">
                <Shield className="w-4 h-4 mr-2" />
                6자리 OTP 보안
              </div>
              <div className="flex items-center text-sm text-green-600">
                <Globe className="w-4 h-4 mr-2" />
                전 세계 ATM 연동
              </div>
            </div>
            <Link href="/exchange/otp-withdrawal">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                시작하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MonitorSpeaker className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">POS 시스템</CardTitle>
            <CardDescription>가맹점용 통합 결제 단말기</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              가맹점에서 사용하는 전용 POS 시스템으로 모든 결제를 통합 관리합니다
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm text-green-600">
                <Zap className="w-4 h-4 mr-2" />
                실시간 환율 적용
              </div>
              <div className="flex items-center text-sm text-green-600">
                <Shield className="w-4 h-4 mr-2" />
                통합 정산 시스템
              </div>
            </div>
            <Link href="/exchange/pos">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                시작하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">환전 게이트웨이의 장점</h2>
          <p className="text-gray-600">전통적인 환전 서비스와 비교해보세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="text-3xl font-bold text-green-600">0%</div>
            <div className="font-medium">환전 수수료</div>
            <div className="text-sm text-gray-600">은행 환전 수수료 완전 무료</div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="font-medium">서비스 이용</div>
            <div className="text-sm text-gray-600">언제 어디서나 즉시 결제</div>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl font-bold text-purple-600">100+</div>
            <div className="font-medium">지원 국가</div>
            <div className="text-sm text-gray-600">전 세계 주요 국가 지원</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}