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
      <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">OTP 현금 인출</h1>
        <p className="text-gray-600">
          일회용 OTP로 안전하게 현지 통화 현금을 인출하세요
        </p>
      </div>

      {/* 지갑 잔액 */}
      <Card>
        <CardHeader>
          <CardTitle>KRW-C 잔액</CardTitle>
          <CardDescription>{user?.name}님의 현재 잔액</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600 mb-4 truncate">
            {formatCurrency(balance.KRW, 'KRW')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-600 text-xs">USD 환산</div>
              <div className="font-semibold truncate">≈ ${(balance.KRW / 1320).toFixed(2)}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-600 text-xs">JPY 환산</div>
              <div className="font-semibold truncate">≈ ¥{(balance.KRW / 8.9).toFixed(0)}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-600 text-xs">EUR 환산</div>
              <div className="font-semibold truncate">≈ €{(balance.KRW / 1440).toFixed(2)}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* OTP 생성기와 터미널 - 2열 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* OTP 생성기 */}
        <OTPWithdrawalGenerator />

        {/* 대리점 터미널 */}
        <OTPVerificationTerminal />
      </div>

      {/* 글로벌 인출 네트워크 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">글로벌 인출 네트워크</h3>
        <div className="space-y-3">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🏪</span>
                </div>
                <div>
                  <div className="font-semibold text-black">편의점</div>
                  <div className="text-sm text-gray-600">세븐일레븐, 로손 24시간</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🏧</span>
                </div>
                <div>
                  <div className="font-semibold text-black">ATM</div>
                  <div className="text-sm text-gray-600">주요 은행 최저 수수료</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg">💱</span>
                </div>
                <div>
                  <div className="font-semibold text-black">환전소</div>
                  <div className="text-sm text-gray-600">공항, 관광지 우대 환율</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🛡️</span>
                </div>
                <div>
                  <div className="font-semibold text-black">보안</div>
                  <div className="text-sm text-gray-600">일회용 OTP 2분 제한</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 수수료 비교 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">수수료 비교</h3>
        <div className="space-y-3">
          {/* 기존 환전소 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-semibold text-black">기존 환전소</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>환율 마진 5% + 수수료 2%</div>
                  <div>대기 시간 10-30분</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">3-7%</div>
                <div className="text-xs text-gray-500">총 비용</div>
              </div>
            </div>
          </div>
          
          {/* 해외카드 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold text-black">해외카드</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>해외수수료 1.5% + ATM $3-5</div>
                  <div>환율 수수료 추가 1%</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">2-4%</div>
                <div className="text-xs text-gray-500">총 비용</div>
              </div>
            </div>
          </div>
          
          {/* KRW-C OTP */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-5">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-black">ONJEON OTP</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">추천</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>인출 수수료 단 1%</div>
                  <div>투명한 실시간 환율 • 즉시 인출</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">1%</div>
                <div className="text-xs text-gray-500">총 비용</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 사용 방법 - Apple Style */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-black">사용 방법</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">1</span>
              </div>
              <span className="font-semibold text-black">금액 입력</span>
            </div>
            <div className="text-sm text-gray-600">
              인출할 현지 통화와 금액 선택
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-green-600">2</span>
              </div>
              <span className="font-semibold text-black">OTP 생성</span>
            </div>
            <div className="text-sm text-gray-600">
              6자리 코드 2분간 유효
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-purple-600">3</span>
              </div>
              <span className="font-semibold text-black">대리점 방문</span>
            </div>
            <div className="text-sm text-gray-600">
              가까운 ATM에서 OTP 입력
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-orange-600">4</span>
              </div>
              <span className="font-semibold text-black">현금 수령</span>
            </div>
            <div className="text-sm text-gray-600">
              검증 후 즉시 현금 수령
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <div className="flex justify-center space-x-4">
        <Link href="/exchange/qr-payment">
          <Button variant="outline">QR 결제</Button>
        </Link>
        <Link href="/exchange/pos">
          <Button variant="outline">POS 시스템</Button>
        </Link>
      </div>
      </div>
    </>
  );
}