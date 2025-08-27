'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';

export function CustomsSettings() {
  const { user } = useWalletStore();
  const [autoDeclaration, setAutoDeclaration] = useState(false);
  const [kycCompleted, setKycCompleted] = useState(user?.kycLevel === 2);

  const handleKycUpgrade = () => {
    // 모의 KYC 업그레이드
    setTimeout(() => {
      setKycCompleted(true);
      alert('KYC 인증이 완료되었습니다! (데모)');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* KYC 상태 */}
      <Card>
        <CardHeader>
          <CardTitle>KYC 인증 상태</CardTitle>
          <CardDescription>
            자동 세관 신고를 위해서는 KYC 레벨 2 인증이 필요합니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border ${
              kycCompleted ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                <div className={`text-2xl ${kycCompleted ? 'text-green-600' : 'text-yellow-600'}`}>
                  {kycCompleted ? '✅' : '⚠️'}
                </div>
                <div className="font-medium">
                  KYC 레벨 {kycCompleted ? '2 - 완료' : '1 - 기본'}
                </div>
              </div>
              
              {kycCompleted ? (
                <div className="text-sm text-green-700">
                  <div>• 신분 확인 완료</div>
                  <div>• 여권 정보 연동</div>
                  <div>• 자동 세관 신고 가능</div>
                </div>
              ) : (
                <div className="text-sm text-yellow-700">
                  <div>• 추가 신분 인증 필요</div>
                  <div>• 여권 정보 업로드 필요</div>
                  <div>• 자동 신고 기능 제한</div>
                </div>
              )}
            </div>
            
            {!kycCompleted && (
              <Button onClick={handleKycUpgrade} className="w-full">
                KYC 레벨 2로 업그레이드 (데모)
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 자동 신고 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>자동 세관 신고 설정</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="font-medium">자동 세관 신고</div>
                <div className="text-sm text-gray-600">
                  귀국 24시간 전 자동으로 신고서를 작성하고 제출합니다
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoDeclaration}
                    onChange={(e) => setAutoDeclaration(e.target.checked)}
                    disabled={!kycCompleted}
                    className="sr-only peer"
                  />
                  <div className={`w-11 h-6 rounded-full peer ${
                    !kycCompleted ? 'bg-gray-300' : 'bg-gray-200 peer-checked:bg-blue-600'
                  } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 relative`}>
                    <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 border-gray-300 rounded-full h-5 w-5 transition-all ${
                      autoDeclaration ? 'translate-x-full border-white' : ''
                    }`}></div>
                  </div>
                </label>
              </div>
            </div>

            {autoDeclaration && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                <div className="font-medium mb-1">자동 신고 활성화</div>
                <div>귀국 예정일 24시간 전에 모든 NFT 영수증을 기반으로 자동으로 세관 신고서가 작성되어 제출됩니다.</div>
              </div>
            )}
            
            {!kycCompleted && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                KYC 레벨 2 인증을 완료하면 자동 세관 신고 기능을 사용할 수 있습니다.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 신고 규칙 */}
      <Card>
        <CardHeader>
          <CardTitle>신고 규칙</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>면세 한도 초과시:</span>
              <span className="font-medium">자동 신고 필수</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>신고 기준 금액:</span>
              <span className="font-medium">$600 이상</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>전자제품:</span>
              <span className="font-medium">$100 이상</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>주류/담배:</span>
              <span className="font-medium">모든 구매</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function NFTReceiptWallet() {
  // 모의 NFT 영수증 데이터
  const [nftReceipts, setNftReceipts] = useState([
    {
      id: 'nft_001',
      tokenId: 'KRW_NFT_001',
      merchantName: 'Luxury Department Store',
      amount: 240,
      items: ['명품 향수', '브랜드 가방'],
      date: '2024-01-15',
      includedInDeclaration: true,
      category: '화장품/패션'
    },
    {
      id: 'nft_002',
      tokenId: 'KRW_NFT_002', 
      merchantName: 'Electronics Shop',
      amount: 180,
      items: ['무선 이어폰', '휴대폰 케이스'],
      date: '2024-01-16',
      includedInDeclaration: true,
      category: '전자제품'
    },
    {
      id: 'nft_003',
      tokenId: 'KRW_NFT_003',
      merchantName: 'Local Souvenir Shop',
      amount: 45,
      items: ['기념품', '엽서'],
      date: '2024-01-16',
      includedInDeclaration: false,
      category: '기념품'
    }
  ]);

  const toggleDeclaration = (id: string) => {
    setNftReceipts(receipts => 
      receipts.map(receipt => 
        receipt.id === id 
          ? { ...receipt, includedInDeclaration: !receipt.includedInDeclaration }
          : receipt
      )
    );
  };

  const declarationTotal = nftReceipts
    .filter(r => r.includedInDeclaration)
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="space-y-6">
      {/* 신고 금액 합계 */}
      <Card>
        <CardHeader>
          <CardTitle>신고 금액 합계</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-blue-600">
              ${declarationTotal.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">
              {nftReceipts.filter(r => r.includedInDeclaration).length}개 품목 포함
            </div>
          </div>
        </CardContent>
      </Card>

      {/* NFT 영수증 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nftReceipts.map((receipt) => (
          <Card key={receipt.id} className={`cursor-pointer transition-all ${
            receipt.includedInDeclaration 
              ? 'border-blue-300 bg-blue-50' 
              : 'border-gray-200 bg-white'
          }`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium">
                  {receipt.merchantName}
                </CardTitle>
                <div className={`text-xs px-2 py-1 rounded ${
                  receipt.includedInDeclaration 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  NFT
                </div>
              </div>
              <CardDescription className="text-xs">
                {receipt.date} • {receipt.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-lg font-bold">${receipt.amount}</div>
              
              <div className="text-xs text-gray-600">
                <div className="truncate">구매: {receipt.items.join(', ')}</div>
                <div className="font-mono mt-1">ID: {receipt.tokenId}</div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs">신고 포함</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={receipt.includedInDeclaration}
                    onChange={() => toggleDeclaration(receipt.id)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function DeclarationPreview() {
  const { user } = useWalletStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 모의 신고서 데이터
  const declarationData = {
    personalInfo: {
      name: user?.name || '김테스트',
      passport: user?.passport || 'M12345678',
      nationality: '대한민국',
      flightNumber: 'KE123',
      arrivalDate: '2024-01-17'
    },
    purchases: [
      { category: '화장품/패션', amount: 240, taxDue: 0 },
      { category: '전자제품', amount: 180, taxDue: 18 }
    ],
    totalAmount: 420,
    totalTax: 18,
    declarationNumber: 'DECL_' + Math.random().toString(36).substr(2, 9).toUpperCase()
  };

  const submitDeclaration = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 3000);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">신고서 제출 완료</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-6xl text-green-600">📋</div>
          <div className="space-y-2">
            <div className="font-medium">세관 신고가 완료되었습니다</div>
            <div className="text-sm text-gray-600">
              접수번호를 확인해주세요
            </div>
          </div>
          
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-sm text-green-800 space-y-1">
              <div className="font-medium">접수번호: {declarationData.declarationNumber}</div>
              <div>제출시간: {new Date().toLocaleString('ko-KR')}</div>
              <div>처리상태: 접수완료</div>
              <div>예상 처리시간: 즉시</div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500">
            블록체인 해시: 0x{Math.random().toString(16).substr(2, 40)}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isSubmitting) {
    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-center">신고서 제출 중...</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="text-4xl animate-spin">📋</div>
          <div className="text-sm text-gray-500">
            세관 시스템으로 전송 중입니다
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>세관 신고서 미리보기</CardTitle>
        <CardDescription>제출 전 신고 내용을 확인하세요</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 개인정보 */}
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="text-sm font-medium mb-2">개인정보</div>
          <div className="space-y-1 text-sm text-gray-600">
            <div>성명: {declarationData.personalInfo.name}</div>
            <div>여권번호: {declarationData.personalInfo.passport}</div>
            <div>국적: {declarationData.personalInfo.nationality}</div>
            <div>항공편: {declarationData.personalInfo.flightNumber}</div>
            <div>입국일: {declarationData.personalInfo.arrivalDate}</div>
          </div>
        </div>

        {/* 구매 내역 */}
        <div className="space-y-2">
          <div className="text-sm font-medium">구매 내역</div>
          {declarationData.purchases.map((item, index) => (
            <div key={index} className="flex justify-between p-3 bg-blue-50 border border-blue-200 rounded">
              <div>
                <div className="font-medium text-sm">{item.category}</div>
                <div className="text-xs text-gray-600">${item.amount}</div>
              </div>
              <div className="text-right">
                <div className="text-sm">세금: ${item.taxDue}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 합계 */}
        <div className="border-t pt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span>총 구매금액:</span>
            <span className="font-medium">${declarationData.totalAmount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>납부할 세금:</span>
            <span className="font-medium text-red-600">${declarationData.totalTax}</span>
          </div>
        </div>

        <Button onClick={submitDeclaration} className="w-full">
          세관 신고서 제출
        </Button>

        <div className="text-xs text-gray-500 text-center">
          제출 후에는 수정할 수 없으니 내용을 정확히 확인해주세요
        </div>
      </CardContent>
    </Card>
  );
}