'use client';

import { useState } from 'react';
import { CustomsProgress } from '@/components/ui/page-progress';

import { NFTReceiptWallet, NFTReceipt } from '@/components/CustomsDeclaration';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function NFTReceiptsPage() {
  // NFT 영수증 데이터를 직접 관리
  const [nftReceipts, setNftReceipts] = useState<NFTReceipt[]>([
    {
      id: 'nft_001',
      tokenId: 'KRW_NFT_001',
      merchantName: 'Luxury Department Store',
      amount: 240,
      items: ['명품 향수', '브랜드 가방'],
      date: '2025-8-29',
      includedInDeclaration: true,
      category: '화장품/패션'
    },
    {
      id: 'nft_002',
      tokenId: 'KRW_NFT_002', 
      merchantName: 'Electronics Shop',
      amount: 180,
      items: ['무선 이어폰', '휴대폰 케이스'],
      date: '2025-8-29',
      includedInDeclaration: true,
      category: '전자제품'
    },
    {
      id: 'nft_003',
      tokenId: 'KRW_NFT_003',
      merchantName: 'Local Souvenir Shop',
      amount: 45,
      items: ['기념품', '엽서'],
      date: '2025-8-29',
      includedInDeclaration: false,
      category: '기념품'
    },
    {
      id: 'nft_004',
      tokenId: 'KRW_NFT_004',
      merchantName: 'Test Shop',
      amount: 100,
      items: ['테스트 아이템'],
      date: '2025-8-29',
      includedInDeclaration: true,
      category: '테스트'
    }
  ]);
  
  const declarableAmount = nftReceipts
    .filter(receipt => receipt.includedInDeclaration)
    .reduce((sum, receipt) => sum + receipt.amount, 0);
    
  const krwAmount = Math.round(declarableAmount * 1320); // 1 USD = 1320 KRW 가정
  
  const includedCount = nftReceipts.filter(receipt => receipt.includedInDeclaration).length;
  const totalCount = nftReceipts.length;

  const toggleDeclaration = (id: string) => {
    setNftReceipts(receipts => 
      receipts.map(receipt => 
        receipt.id === id 
          ? { ...receipt, includedInDeclaration: !receipt.includedInDeclaration }
          : receipt
      )
    );
  };
  return (
    <>
      <CustomsProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">NFT 영수증함</h1>
        <p className="text-gray-600 text-sm">카드 그리드 • 신고 포함 선택</p>
      </div>

      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-300 text-sm">신고할 금액</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">$ {declarableAmount}</p>
              <p className="text-sm font-medium text-gray-400">~ {krwAmount.toLocaleString()} KRW-C</p>
            </div>
          </div>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-base">📄</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          신고할 영수증 {includedCount}개 • 블록체인 저장
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">{totalCount}개</div>
          <div className="text-xs text-gray-600">총 영수증</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">{includedCount}개</div>
          <div className="text-xs text-gray-600">신고 포함</div>
        </div>
        <div className="text-center p-4 bg-white rounded-2xl border border-gray-100">
          <div className="text-base font-bold text-black">$ 18</div>
          <div className="text-xs text-gray-600">예상 세금</div>
        </div>
      </div>

      {/* Main Content */}
      <NFTReceiptWallet 
        nftReceipts={nftReceipts} 
        onToggleDeclaration={toggleDeclaration} 
      />


      {/* NFT Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black">NFT 영수증이란?</h3>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">🔗</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">블록체인 저장</div>
              <div className="text-xs text-gray-600">모든 구매 내역이 블록체인에 안전하게 저장</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">🛡️</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">위변조 방지</div>
              <div className="text-xs text-gray-600">NFT 기술로 영수증 위변조가 불가능</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-base">🔍</span>
            </div>
            <div>
              <div className="font-semibold text-black text-base">투명한 추적</div>
              <div className="text-xs text-gray-600">세관에서 실시간으로 진위를 확인 가능</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-black">관련 서비스</h3>
        <div className="grid grid-cols-3 gap-2">
          <Link href="/customs/preview">
            <Button variant="outline" className="w-full text-sm">
              신고서 미리보기
            </Button>
          </Link>
          <Link href="/payment/qr-payment">
            <Button variant="outline" className="w-full text-sm">
              추가 구매하기
            </Button>
          </Link>
          <Link href="/customs/settings">
            <Button variant="outline" className="w-full text-sm">
              설정 변경
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}