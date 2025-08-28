'use client';

import { QRPaymentGenerator } from '@/components/QRPayment';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QRPaymentProgress } from '@/components/ui/page-progress';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function QRPaymentPage() {
  const { user, balance } = useWalletStore();

  return (
    <>
      <QRPaymentProgress />
      <div className="space-y-6">
      {/* Header */}
      <div id="setup" className="pt-8">
        <h1 className="text-3xl font-bold text-black mb-3">QR 결제</h1>
        <p className="text-gray-600 text-base">
          원화 스테이블코인 • 환전 수수료 0% • 즉시 결제
        </p>
      </div>

      <div id="generate" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 지갑 정보 - Apple Style */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-black">지갑 정보</h3>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-sm text-gray-600 mb-3">{user?.name}님의 현재 잔액</div>
            <div className="space-y-3">
              {Object.entries(balance).map(([currency, amount]) => (
                <div key={currency} className="flex justify-between items-center p-2 bg-white rounded-xl">
                  <span className="font-medium">{currency}</span>
                  <span className="text-lg font-bold">{formatCurrency(amount, currency)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QR 생성기 */}
        <QRPaymentGenerator />
      </div>

      {/* 사용법 안내 - Apple Style */}
      <div id="scan" className="space-y-4">
        <h3 className="text-xl font-bold text-black">사용 방법</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-medium text-black mb-2">QR 생성</h3>
            <p className="text-sm text-gray-600">
              결제할 금액과 통화를 선택하여 QR 코드를 생성합니다
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-medium text-black mb-2">가맹점 스캔</h3>
            <p className="text-sm text-gray-600">
              가맹점에서 QR 코드를 스캔하고 현지 통화로 금액을 입력합니다
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 text-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-medium text-black mb-2">즉시 정산</h3>
            <p className="text-sm text-gray-600">
              환율 적용 후 자동으로 현지 통화로 정산됩니다
            </p>
          </div>
        </div>
      </div>

      {/* 관련 링크 */}
      <div id="complete" className="flex justify-center space-x-4">
        <Link href="/exchange/pos">
          <Button variant="outline">가맹점용 POS 시스템</Button>
        </Link>
        <Link href="/exchange/otp-withdrawal">
          <Button variant="outline">OTP 현금 인출</Button>
        </Link>
      </div>
      </div>
    </>
  );
}