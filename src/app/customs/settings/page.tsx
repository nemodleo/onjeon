'use client';

import { useState } from 'react';
import { CustomsProgress } from '@/components/ui/page-progress';

import { CustomsSettings } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function CustomsSettingsPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <CustomsProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">자동 세관 신고 설정</h1>
        <p className="text-gray-600 text-xs">KYC 연동 • ON/OFF 토글</p>
      </div>

      {/* Balance Card with Toggle */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">자동 세관 신고 상태</p>
            <p className="text-lg font-bold mt-1">{isActive ? '활성화' : '비활성화'}</p>
          </div>
          <div className="flex items-center space-x-3">
            {/* Toggle Switch */}
            <button 
              onClick={() => setIsActive(!isActive)}
              className={`w-12 h-6 rounded-full cursor-pointer relative transition-colors duration-300 ${isActive ? 'bg-green-500' : 'bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${isActive ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm">⚙️</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          KYC 레벨 2 인증 • 24시간 전 자동 신고
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
          <div className="text-sm font-bold text-black">100%</div>
          <div className="text-xs text-gray-600">자동화</div>
        </div>
        <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
          <div className="text-sm font-bold text-black">0분</div>
          <div className="text-xs text-gray-600">대기시간</div>
        </div>
        <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
          <div className="text-sm font-bold text-black">24H</div>
          <div className="text-xs text-gray-600">사전처리</div>
        </div>
      </div>


      {/* Feature Info */}
      <div className="space-y-1">
        <h3 className="text-base font-bold text-black">자동 세관 신고란?</h3>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-sm">🤖</span>
            </div>
            <div>
              <div className="font-semibold text-black text-sm">완전 자동화</div>
              <div className="text-xs text-gray-600">KRW-C 결제 → NFT 영수증 → 자동 신고서</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-sm">⏰</span>
            </div>
            <div>
              <div className="font-semibold text-black text-sm">스마트 스케줄링</div>
              <div className="text-xs text-gray-600">귀국 24시간 전 자동 작성/제출</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-sm">🔒</span>
            </div>
            <div>
              <div className="font-semibold text-black text-sm">안전한 인증</div>
              <div className="text-xs text-gray-600">KYC 레벨 2 인증 필수</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="space-y-2">
        <h3 className="text-base font-bold text-black">관련 서비스</h3>
        <div className="grid grid-cols-3 gap-2">
          <Link href="/customs/receipts">
            <Button variant="outline" className="w-full text-xs">
              NFT 영수증함
            </Button>
          </Link>
          <Link href="/customs/preview">
            <Button variant="outline" className="w-full text-xs">
              신고서 미리보기
            </Button>
          </Link>
          <Link href="/duty-free">
            <Button variant="outline" className="w-full text-xs">
              면세 / 환급
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}