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
      <div id="setup" className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">QR 결제</h1>
        <p className="text-gray-600">
          원화 스테이블코인으로 해외에서 환전 없이 즉시 결제하세요
        </p>
      </div>

      <div id="generate" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 지갑 정보 */}
        <Card>
          <CardHeader>
            <CardTitle>지갑 정보</CardTitle>
            <CardDescription>
              {user?.name}님의 현재 잔액
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(balance).map(([currency, amount]) => (
                <div key={currency} className="flex justify-between items-center">
                  <span className="font-medium">{currency}</span>
                  <span className="text-lg">{formatCurrency(amount, currency)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* QR 생성기 */}
        <QRPaymentGenerator />
      </div>

      {/* 사용법 안내 */}
      <Card id="scan">
        <CardHeader>
          <CardTitle>사용 방법</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center space-y-2">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="font-medium">QR 생성</h3>
              <p className="text-sm text-gray-600">
                결제할 금액과 통화를 선택하여 QR 코드를 생성합니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="font-medium">가맹점 스캔</h3>
              <p className="text-sm text-gray-600">
                가맹점에서 QR 코드를 스캔하고 현지 통화로 금액을 입력합니다
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="font-medium">즉시 정산</h3>
              <p className="text-sm text-gray-600">
                환율 적용 후 자동으로 현지 통화로 정산됩니다
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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