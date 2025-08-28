'use client';

import { QRPaymentGenerator } from '@/components/QRPayment';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PaymentProgress } from '@/components/ui/page-progress';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function QRPaymentPage() {
  const { user, balance } = useWalletStore();

  return (
    <>
      <PaymentProgress />
      <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">QR 결제</h1>
        <p className="text-gray-600 text-xs">원화 스테이블코인 • 환전 수수료 0% • 즉시 결제</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-xl p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gray-300 text-xs">사용 가능 잔액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-lg font-bold">₩ 1,234,567</p>
              <p className="text-sm font-medium text-gray-400">~ 1,234,567 KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">QR</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          전 세계 어디서든 즉시 결제
        </div>
      </div>

      {/* QR Generator */}
      <QRPaymentGenerator />

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">0%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">2초</div>
          <div className="text-xs text-gray-600">처리시간</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">190</div>
          <div className="text-xs text-gray-600">지원 국가</div>
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
              <div className="text-sm font-semibold text-black">QR 코드 생성</div>
              <div className="text-xs text-gray-600">결제할 금액 입력</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-green-600">2</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">가맹점 스캔</div>
              <div className="text-xs text-gray-600">QR 코드 제시</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs font-bold text-purple-600">3</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-black">즉시 정산</div>
              <div className="text-xs text-gray-600">자동 환율 적용</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="grid grid-cols-2 gap-2">
        <Link href="/payment/pos">
          <Button variant="outline" className="w-full text-xs">
            POS 시스템
          </Button>
        </Link>
        <Link href="/payment/history">
          <Button variant="outline" className="w-full text-xs">
            결제 내역
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}