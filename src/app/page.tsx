'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressFlow } from '@/components/ui/progress-flow';
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Shield, 
  Sparkles,
  CreditCard,
  ShoppingBag,
  Receipt,
  FileText,
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <ProgressFlow />
      <div className="space-y-16">
        {/* Hero Section */}
        <section id="setup-section" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl" />
        <div className="relative px-8 py-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Next-Generation Global Financial Infrastructure</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ONJEON
            </span>
            <span className="block text-3xl md:text-4xl mt-2 text-gray-700">
              Global KRW Stablecoin Ecosystem
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            From zero-fee global payments to instant VAT refunds, smart duty-free management, and automated customs declarations<br />
            <span className="font-semibold text-gray-800">Complete travel financial ecosystem in one place</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/exchange/qr-payment">
              <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Zap className="w-5 h-5 mr-2" />
                지금 시작하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-gray-200 hover:border-gray-300 rounded-xl">
              <Users className="w-5 h-5 mr-2" />
              데모 체험하기
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">0%</div>
              <div className="text-sm text-gray-600">환전 수수료</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">즉시</div>
              <div className="text-sm text-gray-600">VAT 환급</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">자동</div>
              <div className="text-sm text-gray-600">세관신고</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="payment-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 서비스</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            전통적인 여행 금융의 한계를 뛰어넘는 혁신적인 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">환전 게이트웨이</CardTitle>
              <CardDescription className="text-base text-gray-600">
                환전 수수료 없이 전 세계 어디서든 즉시 결제
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">QR 코드 스캔으로 3초 결제</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">OTP 인증으로 안전한 현금 인출</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">POS 시스템 완전 연동</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Link href="/exchange/qr-payment">
                  <Button className="w-full text-sm bg-blue-600 hover:bg-blue-700">
                    QR 결제
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/exchange/otp-withdrawal">
                  <Button variant="outline" className="w-full text-sm">
                    OTP 인출
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">스마트 면세관리</CardTitle>
              <CardDescription className="text-base text-gray-600">
                AI 기반 한도 추적으로 면세 혜택 최대화
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">실시간 한도 모니터링</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">초과 위험 사전 알림</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">최적 구매 전략 제안</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Link href="/duty-free/dashboard">
                  <Button className="w-full text-sm bg-green-600 hover:bg-green-700">
                    대시보드
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/duty-free/trip-setup">
                  <Button variant="outline" className="w-full text-sm">
                    여행 설정
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Receipt className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">즉시 VAT 환급</CardTitle>
              <CardDescription className="text-base text-gray-600">
                공항 대기 없이 구매와 동시에 환급 처리
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">구매 즉시 자동 계산</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">KRW-C로 즉시 지급</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">공항 줄서기 완전 생략</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Link href="/vat-refund/dashboard">
                  <Button className="w-full text-sm bg-purple-600 hover:bg-purple-700">
                    환급 현황
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/vat-refund/stamp">
                  <Button variant="outline" className="w-full text-sm">
                    스탬프 처리
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">자동 세관신고</CardTitle>
              <CardDescription className="text-base text-gray-600">
                NFT 영수증 기반 원클릭 세관 신고 시스템
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">NFT 영수증 자동 생성</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">KYC 연동 신원 확인</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">원클릭 세관 신고</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Link href="/customs/settings">
                  <Button className="w-full text-sm bg-orange-600 hover:bg-orange-700">
                    신고 설정
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/customs/receipts">
                  <Button variant="outline" className="w-full text-sm">
                    NFT 영수증
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="tracking-section" className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">여행 금융의 새로운 경험</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            번거로운 환전과 복잡한 절차 없이, 스마트하고 간편한 여행 금융 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">여행 설정</h3>
            <p className="text-sm text-gray-600">목적지 선택과 면세한도를 자동으로 설정합니다</p>
            <Link href="/duty-free/trip-setup">
              <Button variant="outline" size="sm" className="mt-2">
                설정하기 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-purple-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">즉시 결제</h3>
            <p className="text-sm text-gray-600">QR 코드 스캔으로 현지에서 바로 KRW-C 결제</p>
            <Link href="/exchange/qr-payment">
              <Button variant="outline" size="sm" className="mt-2">
                체험하기 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-orange-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">스마트 추적</h3>
            <p className="text-sm text-gray-600">AI가 실시간으로 면세한도와 VAT를 관리</p>
            <Link href="/duty-free/dashboard">
              <Button variant="outline" size="sm" className="mt-2">
                확인하기 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">자동 처리</h3>
            <p className="text-sm text-gray-600">VAT 환급과 세관 신고를 원클릭으로 완료</p>
            <Link href="/vat-refund/dashboard">
              <Button variant="outline" size="sm" className="mt-2">
                처리하기 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="completion-section" className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">혁신적인 성과</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              0%
            </div>
            <div className="text-gray-600 font-medium">환전 수수료</div>
            <div className="text-sm text-gray-500">완전 무료 환전</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              3초
            </div>
            <div className="text-gray-600 font-medium">결제 속도</div>
            <div className="text-sm text-gray-500">QR 스캔 즉시</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">정확도</div>
            <div className="text-sm text-gray-500">AI 기반 계산</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-600 font-medium">서비스 제공</div>
            <div className="text-sm text-gray-500">언제든지 이용</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          번거로운 환전과 복잡한 절차는 이제 그만. 온전과 함께 스마트한 여행 금융을 경험하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/duty-free/trip-setup">
            <Button size="lg" variant="secondary" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-semibold">
              <Globe className="w-5 h-5 mr-2" />
              여행 계획 세우기
            </Button>
          </Link>
          <Link href="/exchange/qr-payment">
            <Button size="lg" variant="outline" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl font-semibold">
              <Zap className="w-5 h-5 mr-2" />
              바로 결제하기
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}