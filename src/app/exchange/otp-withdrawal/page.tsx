'use client';

import { OTPWithdrawalGenerator, OTPVerificationTerminal } from '@/components/OTPWithdrawal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OTPWithdrawalPage() {
  const { user, balance } = useWalletStore();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">OTP 현금 인출</h1>
        <p className="text-gray-600">
          일회용 OTP로 안전하게 현지 통화 현금을 인출하세요
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 지갑 잔액 */}
        <Card>
          <CardHeader>
            <CardTitle>KRW-C 잔액</CardTitle>
            <CardDescription>{user?.name}님의 현재 잔액</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-4">
              {formatCurrency(balance.KRW, 'KRW')}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>USD 환산:</span>
                <span>≈ ${(balance.KRW / 1320).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>JPY 환산:</span>
                <span>≈ ¥{(balance.KRW / 8.9).toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>EUR 환산:</span>
                <span>≈ €{(balance.KRW / 1440).toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* OTP 생성기 */}
        <OTPWithdrawalGenerator />

        {/* 대리점 터미널 */}
        <OTPVerificationTerminal />
      </div>

      {/* 인출 네트워크 정보 */}
      <Card>
        <CardHeader>
          <CardTitle>글로벌 인출 네트워크</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-3xl">🏪</div>
              <h3 className="font-medium">편의점</h3>
              <p className="text-sm text-gray-600">
                세븐일레븐, 로손 등<br/>
                24시간 언제나
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🏧</div>
              <h3 className="font-medium">ATM</h3>
              <p className="text-sm text-gray-600">
                주요 은행 ATM<br/>
                수수료 최저 보장
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">💱</div>
              <h3 className="font-medium">환전소</h3>
              <p className="text-sm text-gray-600">
                공항, 관광지<br/>
                더 나은 환율 제공
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🛡️</div>
              <h3 className="font-medium">보안</h3>
              <p className="text-sm text-gray-600">
                일회용 OTP<br/>
                2분 만료, 위치 제한
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 수수료 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>수수료 비교</CardTitle>
          <CardDescription>기존 방식 vs KRW 스테이블코인</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">기존 환전소</h4>
              <div className="text-2xl font-bold text-red-600 mb-2">3-7%</div>
              <div className="text-sm text-red-600">
                • 환율 마진 5%<br/>
                • 수수료 2%<br/>
                • 대기 시간 10-30분
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">해외카드</h4>
              <div className="text-2xl font-bold text-orange-600 mb-2">2-4%</div>
              <div className="text-sm text-orange-600">
                • 해외수수료 1.5%<br/>
                • ATM 수수료 $3-5<br/>
                • 환율 수수료 1%
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">KRW-C OTP</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">1%</div>
              <div className="text-sm text-green-600">
                • 인출 수수료 1%<br/>
                • 투명한 환율<br/>
                • 즉시 인출 (2분내)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 사용법 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>사용 방법</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="font-medium">금액 입력</h3>
              <p className="text-sm text-gray-600">
                인출할 현지 통화와 금액을 선택합니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="font-medium">OTP 생성</h3>
              <p className="text-sm text-gray-600">
                6자리 일회용 비밀번호가 2분간 유효하게 발급됩니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="font-medium">대리점 방문</h3>
              <p className="text-sm text-gray-600">
                가까운 대리점이나 ATM에서 OTP를 입력합니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                4
              </div>
              <h3 className="font-medium">현금 수령</h3>
              <p className="text-sm text-gray-600">
                검증 완료 후 즉시 현지 통화로 현금을 수령합니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
  );
}