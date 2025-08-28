'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExchangeProgress } from '@/components/ui/page-progress';
import { ArrowUpDown, CheckCircle, Clock, TrendingUp, Download, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

type TransactionStatus = 'completed' | 'pending' | 'processing';
type Currency = 'KRW' | 'USD' | 'JPY' | 'EUR';

interface ExchangeTransaction {
  id: string;
  fromCurrency: Currency;
  toCurrency: Currency;
  fromAmount: number;
  toAmount: number;
  rate: number;
  status: TransactionStatus;
  timestamp: Date;
  savedFee: number;
}

export default function ExchangeHistoryPage() {
  const [filter, setFilter] = useState<'all' | '1W' | '1M' | '3M'>('1M');
  
  const [transactions] = useState<ExchangeTransaction[]>([
    {
      id: 'EX-001',
      fromCurrency: 'USD',
      toCurrency: 'KRW',
      fromAmount: 1000,
      toAmount: 1320000,
      rate: 1320,
      status: 'completed',
      timestamp: new Date(Date.now() - 3600000), // 1시간 전
      savedFee: 19800 // 1.5% 절약
    },
    {
      id: 'EX-002',
      fromCurrency: 'KRW',
      toCurrency: 'JPY',
      fromAmount: 500000,
      toAmount: 56180,
      rate: 0.11236,
      status: 'completed',
      timestamp: new Date(Date.now() - 86400000), // 어제
      savedFee: 7500
    },
    {
      id: 'EX-003',
      fromCurrency: 'EUR',
      toCurrency: 'KRW',
      fromAmount: 500,
      toAmount: 720000,
      rate: 1440,
      status: 'completed',
      timestamp: new Date(Date.now() - 172800000), // 2일 전
      savedFee: 10800
    },
    {
      id: 'EX-004',
      fromCurrency: 'KRW',
      toCurrency: 'USD',
      fromAmount: 2640000,
      toAmount: 2000,
      rate: 0.000758,
      status: 'processing',
      timestamp: new Date(Date.now() - 259200000), // 3일 전
      savedFee: 39600
    }
  ]);

  const totalSaved = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.savedFee, 0);

  const totalVolume = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => {
      // KRW 기준으로 변환
      if (t.toCurrency === 'KRW') return sum + t.toAmount;
      if (t.fromCurrency === 'KRW') return sum + t.fromAmount;
      // 다른 통화는 대략적으로 KRW로 변환
      return sum + (t.fromAmount * 1320); // USD 기준
    }, 0);

  const getStatusIcon = (status: TransactionStatus) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusText = (status: TransactionStatus) => {
    switch(status) {
      case 'completed': return '완료';
      case 'processing': return '처리중';
      case 'pending': return '대기중';
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) {
      const minutes = Math.floor(diff / (1000 * 60));
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (hours < 48) {
      return '어제';
    } else {
      const days = Math.floor(hours / 24);
      return `${days}일 전`;
    }
  };

  return (
    <>
      <ExchangeProgress />
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black">환전 내역</h1>
          <p className="text-gray-600 text-sm">거래 이력 • 수수료 절약액 확인</p>
        </div>

        {/* Balance Card */}
        <div className="bg-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-300 text-sm">이번 달 환전액</p>
              <div className="flex items-baseline space-x-2">
                <p className="text-3xl font-bold">{formatCurrency(totalVolume, 'KRW')}</p>
                <p className="text-sm font-medium text-gray-400">{totalVolume.toLocaleString()} KRW-C</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm text-white font-bold">💱</span>
            </div>
          </div>
          <div className="text-xs text-gray-300">
            {transactions.length}건 거래 • {formatCurrency(totalSaved, 'KRW')} 절약
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">{transactions.filter(t => t.status === 'completed').length}</div>
            <div className="text-xs text-gray-600">완료</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-orange-500">{transactions.filter(t => t.status === 'processing').length}</div>
            <div className="text-xs text-gray-600">처리중</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-3xl font-bold text-green-500">{formatCurrency(totalSaved, 'KRW')}</div>
            <div className="text-xs text-gray-600">절약액</div>
          </div>
        </div>

        {/* Filter */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-black">기간별 조회</h3>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className="text-sm"
            >
              전체
            </Button>
            <Button
              size="sm"
              variant={filter === '1W' ? 'default' : 'outline'}
              onClick={() => setFilter('1W')}
              className="text-sm"
            >
              1주일
            </Button>
            <Button
              size="sm"
              variant={filter === '1M' ? 'default' : 'outline'}
              onClick={() => setFilter('1M')}
              className="text-sm"
            >
              1개월
            </Button>
            <Button
              size="sm"
              variant={filter === '3M' ? 'default' : 'outline'}
              onClick={() => setFilter('3M')}
              className="text-sm"
            >
              3개월
            </Button>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-black">최근 거래</h3>
            <Button size="sm" variant="ghost" className="text-sm">
              <Download className="w-3 h-3 mr-1" />
              내보내기
            </Button>
          </div>
          <div className="space-y-1">
            {transactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.status === 'completed' ? 'bg-green-100' : 
                    transaction.status === 'processing' ? 'bg-blue-100' : 'bg-yellow-100'
                  }`}>
                    {getStatusIcon(transaction.status)}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-black">
                      {transaction.fromCurrency} → {transaction.toCurrency}
                    </div>
                    <div className="text-xs text-gray-600">
                      {formatDate(transaction.timestamp)} • {transaction.rate < 1 ? transaction.rate.toFixed(6) : transaction.rate.toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${
                    transaction.status === 'completed' ? 'text-black' : 'text-gray-400'
                  }`}>
                    {formatCurrency(transaction.fromAmount, transaction.fromCurrency)}
                  </div>
                  <div className="text-sm text-green-600">+{formatCurrency(transaction.savedFee, 'KRW')} 절약</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Summary */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-black">수수료 절약 분석</h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-2xl border border-green-100">
              <div>
                <div className="text-base font-semibold text-black">이번 달 절약</div>
                <div className="text-xs text-gray-600">은행 대비 1.5% 절약</div>
              </div>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(totalSaved, 'KRW')}
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <div>
                <div className="text-base font-semibold text-black">연간 예상 절약</div>
                <div className="text-xs text-gray-600">현재 사용량 기준</div>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(totalSaved * 12, 'KRW')}
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="grid grid-cols-2 gap-2">
          <Link href="/exchange/instant-exchange">
            <Button variant="outline" className="w-full text-sm">
              즉시 환전
            </Button>
          </Link>
          <Link href="/exchange/otp-withdrawal">
            <Button variant="outline" className="w-full text-sm">
              OTP 현금 인출
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}