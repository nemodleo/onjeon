'use client';

import { CustomsProgress } from '@/components/ui/page-progress';

import { DeclarationPreview } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function CustomsPreviewPage() {
  return (
    <>
      <CustomsProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">세관 신고서 미리보기</h1>
        <p className="text-gray-600 text-sm">
          NFT 기반 자동 생성 • 즉시 제출 • 사전 승인
        </p>
      </div>


      {/* Main Content */}
      <div className="flex justify-center mb-6">
        <DeclarationPreview />
      </div>

      {/* Tax Calculation */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">세금 계산</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">💰</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">총 구매액</div>
              <div className="text-xs text-gray-600">면세 한도 내: $ 240 • 한도 초과: $ 180</div>
            </div>
          </div>
          <div className="text-base font-bold text-black">$ 420</div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">📊</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">납부할 세금</div>
              <div className="text-xs text-gray-600">과세대상 $ 180 × 세율 10%</div>
            </div>
          </div>
          <div className="text-base font-bold text-black">$ 18</div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">결제 방법</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <input type="radio" name="payment" defaultChecked className="w-3 h-3" />
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">🪙</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">KRW-C 지갑</div>
              <div className="text-xs text-gray-600">₩23,760 즉시 차감 • 환율 우대 혜택</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <input type="radio" name="payment" className="w-3 h-3" />
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">💳</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">신용카드</div>
              <div className="text-xs text-gray-600">공항에서 직접 결제</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">제출 후 절차</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">✅</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">즉시 접수</div>
              <div className="text-xs text-gray-600">세관 시스템 자동 등록</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">📱</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">알림 발송</div>
              <div className="text-xs text-gray-600">접수번호 및 처리 결과 안내</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">🛫</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">공항 통관</div>
              <div className="text-xs text-gray-600">사전 신고로 빠른 통관 가능</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-black">관련 서비스</h3>
        <div className="grid grid-cols-3 gap-2">
          <Link href="/customs/receipts">
            <Button variant="outline" className="w-full text-sm">
              영수증함
            </Button>
          </Link>
          <Link href="/customs/settings">
            <Button variant="outline" className="w-full text-sm">
              설정 변경
            </Button>
          </Link>
          <Link href="/duty-free">
            <Button variant="outline" className="w-full text-sm">
              면세 / 환급
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}