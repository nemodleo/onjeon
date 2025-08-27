'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CustomsProgress } from '@/components/ui/page-progress';
import { FileText, Settings, Eye, ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react';

export default function CustomsPage() {
  return (
    <>
      <CustomsProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
          자동 세관신고
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          NFT 영수증과 KYC 연동으로 모든 구매 내역을 자동 관리하고 원클릭으로 세관 신고를 완료하세요
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">신고 설정</CardTitle>
            <CardDescription>개인 정보 및 신고 옵션 설정</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              KYC 인증을 통해 신원을 확인하고 자동 신고를 위한 설정을 완료하세요
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                KYC 신원 인증
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                자동 신고 설정
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                개인정보 보호
              </div>
            </div>
            <Link href="/customs/settings">
              <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
                설정하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">NFT 영수증함</CardTitle>
            <CardDescription>블록체인 기반 구매 증명서 관리</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              모든 구매마다 생성되는 NFT 영수증을 확인하고 세관 신고용 자료로 활용하세요
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                NFT 영수증 자동 생성
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                블록체인 위변조 방지
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                구매 내역 통합 관리
              </div>
            </div>
            <Link href="/customs/receipts">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                영수증함 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">신고 미리보기</CardTitle>
            <CardDescription>세관 신고서 검토 및 최종 제출</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              자동 생성된 세관 신고서를 미리 확인하고 원클릭으로 최종 제출하세요
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                자동 신고서 생성
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                실시간 미리보기
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                원클릭 제출
              </div>
            </div>
            <Link href="/customs/preview">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                미리보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">자동 세관신고의 장점</h2>
          <p className="text-gray-600">복잡한 세관 절차를 혁신적으로 간소화</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold">원클릭 신고</h3>
            <p className="text-sm text-gray-600">
              복잡한 서류 작성 없이 한 번의 클릭으로 모든 세관 신고가 완료됩니다
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold">100% 정확성</h3>
            <p className="text-sm text-gray-600">
              NFT 영수증 기반으로 위변조가 불가능한 정확한 구매 내역을 제공합니다
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold">자동화</h3>
            <p className="text-sm text-gray-600">
              KYC 인증 후 모든 구매가 자동으로 기록되고 신고서에 반영됩니다
            </p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">자동 세관신고 프로세스</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="font-medium">KYC 인증</div>
            <div className="text-sm text-gray-600">신원 확인 및 자동 신고 설정을 완료합니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="font-medium">자동 기록</div>
            <div className="text-sm text-gray-600">모든 구매가 NFT 영수증으로 자동 기록됩니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="font-medium">신고서 생성</div>
            <div className="text-sm text-gray-600">출국 전 자동으로 세관 신고서가 생성됩니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">4</span>
            </div>
            <div className="font-medium">원클릭 제출</div>
            <div className="text-sm text-gray-600">확인 후 한 번의 클릭으로 세관에 제출 완료</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}