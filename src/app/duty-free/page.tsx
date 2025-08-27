'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DutyFreeProgress } from '@/components/ui/page-progress';
import { ShoppingBag, Settings, ArrowRight, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export default function DutyFreePage() {
  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
          스마트 면세관리
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI 기반 한도 추적으로 면세 혜택을 최대화하고, 초과 위험을 사전에 방지하세요
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">한도 대시보드</CardTitle>
            <CardDescription>실시간 면세 한도 모니터링</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              현재 면세 사용량을 실시간으로 추적하고 최적의 쇼핑 전략을 제안받으세요
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                실시간 한도 추적
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                AI 기반 구매 추천
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                초과 위험 알림
              </div>
            </div>
            <Link href="/duty-free/dashboard">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                대시보드 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">여행 설정</CardTitle>
            <CardDescription>목적지별 면세 한도 자동 설정</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              여행 목적지와 기간을 설정하면 해당 국가의 면세 규정을 자동으로 적용합니다
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                국가별 면세 규정
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                자동 한도 계산
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                여행 일정 연동
              </div>
            </div>
            <Link href="/duty-free/trip-setup">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                여행 설정
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* How it works */}
      <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">면세관리 시스템 작동 방식</h2>
          <p className="text-gray-600">스마트한 면세 한도 관리로 혜택을 최대화하세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="font-medium">목적지 설정</div>
            <div className="text-sm text-gray-600">여행 국가와 기간을 입력하면 자동으로 면세 규정을 적용합니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="font-medium">실시간 추적</div>
            <div className="text-sm text-gray-600">모든 구매가 자동으로 기록되고 면세 한도와 실시간 비교됩니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="font-medium">스마트 알림</div>
            <div className="text-sm text-gray-600">한도 초과 위험이 있을 때 사전에 알림을 보내드립니다</div>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold">4</span>
            </div>
            <div className="font-medium">최적화 제안</div>
            <div className="text-sm text-gray-600">AI가 분석한 최적의 구매 전략을 제안합니다</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
          <div className="font-medium mb-1">정확도</div>
          <div className="text-sm text-gray-600">AI 기반 한도 계산</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
          <div className="font-medium mb-1">지원 국가</div>
          <div className="text-sm text-gray-600">주요 여행 목적지</div>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
          <div className="text-3xl font-bold text-purple-600 mb-2">즉시</div>
          <div className="font-medium mb-1">실시간 업데이트</div>
          <div className="text-sm text-gray-600">구매와 동시에 반영</div>
        </div>
      </div>
      </div>
    </>
  );
}