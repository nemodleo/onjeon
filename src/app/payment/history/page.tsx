'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageProgress } from '@/components/ui/page-progress';
import { Clock, CheckCircle, XCircle, AlertCircle, Filter, Download, Receipt } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

type TransactionStatus = 'completed' | 'pending' | 'failed' | 'cancelled';
type TransactionType = 'qr' | 'pos' | 'nfc' | 'transfer';

interface Transaction {
  id: string;
  type: TransactionType;
  merchantName: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  timestamp: Date;
  fee: number;
  receiptUrl?: string;
}

export default function PaymentHistoryPage() {
  const [filter, setFilter] = useState<'all' | TransactionType>('all');
  const [currentStep, setCurrentStep] = useState(3);
  const router = useRouter();
  const historyRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 'start',
      title: '시작 단계',
      description: '결제 시스템 준비',
      href: '/payment',
      isCompleted: true
    },
    {
      id: 'generate', 
      title: '결제 QR 생성',
      description: '금액 입력 및 QR 코드 생성',
      href: '/payment/qr-payment',
      isCompleted: true
    },
    {
      id: 'scan',
      title: '가맹점 스캔',
      description: '가맹점에서 QR 코드 스캔',
      href: '/payment/pos',
      isCompleted: true
    },
    {
      id: 'approve',
      title: '결제 완료',
      description: '자동 승인 완료',
      href: '/payment/history',
      isCompleted: true
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = steps[stepIndex];
    
    if (step.href && stepIndex !== 3) {
      router.push(step.href);
    } else if (historyRef.current) {
      historyRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  const [transactions] = useState<Transaction[]>([
    {
      id: 'TXN-001',
      type: 'qr',
      merchantName: '스타벅스 강남점',
      amount: 5500,
      currency: 'KRW',
      status: 'completed',
      timestamp: new Date(Date.now() - 1800000), // 30분 전
      fee: 0,
      receiptUrl: '#'
    },
    {
      id: 'TXN-002',
      type: 'pos',
      merchantName: '롯데마트 서울역점',
      amount: 125000,
      currency: 'KRW',
      status: 'completed',
      timestamp: new Date(Date.now() - 7200000), // 2시간 전
      fee: 0,
      receiptUrl: '#'
    },
    {
      id: 'TXN-003',
      type: 'qr',
      merchantName: 'CU 편의점',
      amount: 3200,
      currency: 'KRW',
      status: 'completed',
      timestamp: new Date(Date.now() - 86400000), // 어제
      fee: 0,
      receiptUrl: '#'
    },
    {
      id: 'TXN-004',
      type: 'pos',
      merchantName: '올리브영 명동점',
      amount: 48500,
      currency: 'KRW',
      status: 'pending',
      timestamp: new Date(Date.now() - 172800000), // 2일 전
      fee: 0
    },
    {
      id: 'TXN-005',
      type: 'transfer',
      merchantName: '김철수',
      amount: 50000,
      currency: 'KRW',
      status: 'completed',
      timestamp: new Date(Date.now() - 259200000), // 3일 전
      fee: 0
    },
    {
      id: 'TXN-006',
      type: 'qr',
      merchantName: '파리바게뜨',
      amount: 8900,
      currency: 'KRW',
      status: 'failed',
      timestamp: new Date(Date.now() - 345600000), // 4일 전
      fee: 0
    }
  ]);

  const getStatusIcon = (status: TransactionStatus) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'cancelled':
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: TransactionStatus) => {
    switch(status) {
      case 'completed': return '완료';
      case 'pending': return '대기중';
      case 'failed': return '실패';
      case 'cancelled': return '취소됨';
    }
  };

  const getTypeLabel = (type: TransactionType) => {
    switch(type) {
      case 'qr': return 'QR 결제';
      case 'pos': return 'POS';
      case 'nfc': return 'NFC';
      case 'transfer': return '송금';
    }
  };

  const getTypeColor = (type: TransactionType) => {
    switch(type) {
      case 'qr': return 'bg-blue-100 text-blue-700';
      case 'pos': return 'bg-green-100 text-green-700';
      case 'nfc': return 'bg-purple-100 text-purple-700';
      case 'transfer': return 'bg-orange-100 text-orange-700';
    }
  };

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.type === filter);

  const totalAmount = filteredTransactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

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
      return date.toLocaleDateString();
    }
  };

  return (
    <>
      <PageProgress 
        steps={steps} 
        currentStep={currentStep} 
        onStepClick={handleStepClick}
      />
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black">결제 내역</h1>
          <p className="text-gray-600 text-sm">모든 거래 내역 • 영수증 확인</p>
        </div>

        {/* Balance Card */}
        <div className="bg-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-300 text-sm">이번 달 결제</p>
              <div className="flex items-baseline space-x-2">
                <p className="text-3xl font-bold">{formatCurrency(totalAmount, 'KRW')}</p>
                <p className="text-sm font-medium text-gray-400">{totalAmount.toLocaleString()} KRW-C</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm text-white font-bold">📋</span>
            </div>
          </div>
          <div className="text-xs text-gray-300">
            {filteredTransactions.length}건 거래 • 0% 수수료
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">{filteredTransactions.filter(t => t.status === 'completed').length}</div>
            <div className="text-xs text-gray-600">완료</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-orange-500">{filteredTransactions.filter(t => t.status === 'pending').length}</div>
            <div className="text-xs text-gray-600">대기중</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-3xl font-bold text-green-500">₩0</div>
            <div className="text-xs text-gray-600">절약액</div>
          </div>
        </div>

        {/* Filter */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-black">거래 유형</h3>
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
              variant={filter === 'qr' ? 'default' : 'outline'}
              onClick={() => setFilter('qr')}
              className="text-sm"
            >
              QR 결제
            </Button>
            <Button
              size="sm"
              variant={filter === 'pos' ? 'default' : 'outline'}
              onClick={() => setFilter('pos')}
              className="text-sm"
            >
              POS
            </Button>
            <Button
              size="sm"
              variant={filter === 'transfer' ? 'default' : 'outline'}
              onClick={() => setFilter('transfer')}
              className="text-sm"
            >
              송금
            </Button>
          </div>
        </div>

        {/* Transaction List */}
        <div 
          ref={historyRef}
          className={`space-y-3 transition-all duration-700 ${
            currentStep === 3 ? 'scale-[1.05] shadow-2xl ring-4 ring-green-500/50 bg-green-50/50 rounded-2xl p-4' : ''
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-black">최근 거래</h3>
            <Button size="sm" variant="ghost" className="text-sm">
              <Download className="w-3 h-3 mr-1" />
              내보내기
            </Button>
          </div>
          <div className="space-y-1">
            {filteredTransactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.status === 'completed' ? 'bg-green-100' : 
                    transaction.status === 'pending' ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    {getStatusIcon(transaction.status)}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-black">{transaction.merchantName}</div>
                    <div className="text-xs text-gray-600">
                      {formatDate(transaction.timestamp)} • {getTypeLabel(transaction.type)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${
                    transaction.status === 'completed' ? 'text-black' : 'text-gray-400'
                  }`}>
                    {transaction.status === 'completed' ? '-' : ''}{formatCurrency(transaction.amount, transaction.currency)}
                  </div>
                  <div className="text-xs text-gray-600">{getStatusText(transaction.status)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="grid grid-cols-2 gap-2">
          <Link href="/payment/qr-payment">
            <Button variant="outline" className="w-full text-sm">
              QR 결제
            </Button>
          </Link>
          <Link href="/payment/pos">
            <Button variant="outline" className="w-full text-sm">
              POS 시스템
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}