'use client';

import { OTPWithdrawalGenerator, OTPVerificationTerminal } from '@/components/OTPWithdrawal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import { ExchangeProgress } from '@/components/ui/page-progress';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OTPWithdrawalPage() {
  const { user, balance } = useWalletStore();

  return (
    <>
      <ExchangeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">OTP 현금 인출</h1>
        <p className="text-gray-600 text-xs">일회용 OTP로 안전하게 현지 통화 현금을 인출하세요</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">사용 가능 잔액</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-lg font-bold">{formatCurrency(balance.KRW, 'KRW')}</p>
              <p className="text-sm font-medium text-gray-400">{balance.KRW?.toLocaleString()} KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">💰</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          전 세계 ATM • 편의점 • 환전소
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-green-500">1%</div>
          <div className="text-xs text-gray-600">인출수수료</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">120초</div>
          <div className="text-xs text-gray-600">OTP 유효시간</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">50+</div>
          <div className="text-xs text-gray-600">지원 국가</div>
        </div>
      </div>

      {/* OTP Generator */}
      <OTPWithdrawalGenerator />

      {/* Terminal */}
      <OTPVerificationTerminal />

      {/* Global Network */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">글로벌 네트워크</h3>
        <div className="space-y-1">
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
              <span className="text-sm">🏪</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">편의점</div>
              <div className="text-xs text-gray-600">세븐일레븐, 로손 24시간</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center mr-3">
              <span className="text-sm">🏧</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">ATM</div>
              <div className="text-xs text-gray-600">주요 은행 최저 수수료</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
              <span className="text-sm">💱</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">환전소</div>
              <div className="text-xs text-gray-600">공항, 관광지 우대 환율</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Comparison */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">수수료 비교</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
            <div>
              <div className="text-sm font-semibold text-black">기존 환전소</div>
              <div className="text-xs text-gray-600">환율 마진 + 수수료</div>
            </div>
            <div className="text-lg font-bold text-red-600">3-7%</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-orange-100">
            <div>
              <div className="text-sm font-semibold text-black">해외카드</div>
              <div className="text-xs text-gray-600">해외수수료 + ATM비</div>
            </div>
            <div className="text-lg font-bold text-orange-600">2-4%</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
            <div>
              <div className="text-sm font-semibold text-black">ONJEON OTP</div>
              <div className="text-xs text-gray-600">인출 수수료만</div>
            </div>
            <div className="text-lg font-bold text-green-600">1%</div>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-black">사용 방법</h3>
        <div className="space-y-1">
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-blue-600">1</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">금액 입력</div>
              <div className="text-xs text-gray-600">인출할 현지 통화와 금액 선택</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-green-600">2</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">OTP 생성</div>
              <div className="text-xs text-gray-600">6자리 코드 2분간 유효</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-purple-600">3</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">ATM 방문</div>
              <div className="text-xs text-gray-600">가까운 ATM에서 OTP 입력</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-orange-600">4</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">현금 수령</div>
              <div className="text-xs text-gray-600">검증 후 즉시 현금 수령</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="grid grid-cols-2 gap-2">
        <Link href="/exchange/instant-exchange">
          <Button variant="outline" className="w-full text-xs">
            즉시 환전
          </Button>
        </Link>
        <Link href="/exchange/history">
          <Button variant="outline" className="w-full text-xs">
            환전 내역
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}