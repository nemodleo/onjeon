'use client';

import Link from 'next/link';
import { Download, Receipt } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function PurchaseHistoryPage() {
  const purchases = [
    {
      id: '1',
      storeName: '롯데면세점',
      time: '2시간 전',
      category: '화장품',
      items: ['설화수 자음생 세트', 'SK-II 피테라 에센스'],
      amount: 150,
      status: '한도 차감',
      icon: '🛍️',
      color: 'blue'
    },
    {
      id: '2',
      storeName: '신라면세점',
      time: '어제',
      category: '향수',
      items: ['CHANEL No.5', 'Dior Sauvage'],
      amount: 330,
      status: '한도 차감',
      icon: '🛍️',
      color: 'purple'
    },
    {
      id: '3',
      storeName: '인천공항면세점',
      time: '3일 전',
      category: '주류',
      items: ['Johnnie Walker Blue', 'Hennessy Paradis'],
      amount: 80,
      status: '한도 차감',
      icon: '🍷',
      color: 'amber'
    },
    {
      id: '4',
      storeName: '신세계면세점',
      time: '1주일 전',
      category: '전자제품',
      items: ['Apple AirPods Pro', 'Galaxy Watch'],
      amount: 450,
      status: '한도 초과',
      icon: '📱',
      color: 'red'
    }
  ];

  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black">구매 내역</h1>
          <p className="text-gray-600 text-sm">면세품 구매 이력 • 영수증 관리</p>
        </div>

        {/* Summary Card */}
        <div className="bg-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-300 text-sm">총 구매액</p>
              <div className="flex items-baseline space-x-1">
                <p className="text-3xl font-bold">$ 1,010</p>
                <p className="text-sm font-medium text-gray-400">~ 1,333,200 KRW-C</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-sm">이번 달</p>
              <p className="text-3xl font-bold">$ 480</p>
            </div>
          </div>
          <div className="text-xs text-gray-300">
            면세 한도 $ 560 사용 • NFT 영수증 12건
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">4</div>
            <div className="text-xs text-gray-600">전체 구매 건수</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="text-2xl font-bold text-black">2</div>
            <div className="text-xs text-gray-600">NFT 영수증</div>
          </div>
        </div>

        {/* 월별 구매 현황 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">월별 구매 현황</h2>
            <p className="text-gray-600 text-sm">각 월별 누적 금액 • 건수</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="text-xs text-gray-600 mb-1">1월</div>
              <div className="text-base font-bold">$480</div>
              <div className="text-sm text-gray-500">8건</div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="text-xs text-gray-600 mb-1">12월</div>
              <div className="text-base font-bold">$320</div>
              <div className="text-sm text-gray-500">6건</div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="text-xs text-gray-600 mb-1">11월</div>
              <div className="text-base font-bold">$210</div>
              <div className="text-sm text-gray-500">10건</div>
            </div>
          </div>
        </div>

        {/* 최근 구매 내역 */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-black mb-1">최근 구매 내역</h2>
              <p className="text-gray-600 text-sm">면세점 구매 • 한도 차감</p>
            </div>
            <button className="flex items-center text-xs text-gray-600">
              <Download className="w-3 h-3 mr-1" />
              내보내기
            </button>
          </div>
          
          <div className="space-y-2">
            {purchases.map((purchase) => (
              <div key={purchase.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-${purchase.color}-100 rounded-full flex items-center justify-center`}>
                    <span className="text-base">{purchase.icon}</span>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-black">{purchase.storeName} 구매</div>
                    <div className="text-xs text-gray-600">{purchase.time} • {purchase.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-semibold text-black">-$ {purchase.amount}</div>
                  <div className="text-xs text-gray-600">{purchase.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 카테고리별 구매 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">카테고리별 구매</h2>
            <p className="text-gray-600 text-sm">품목별 분류 • 사용률</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">💄</span>
                  <span className="text-base font-semibold">화장품</span>
                </div>
                <span className="text-base font-bold">$350</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">10건</span>
                <span className="text-xs text-gray-600">35%</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🌸</span>
                  <span className="text-base font-semibold">향수</span>
                </div>
                <span className="text-base font-bold">$330</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '33%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">5건</span>
                <span className="text-xs text-gray-600">33%</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🍷</span>
                  <span className="text-base font-semibold">주류</span>
                </div>
                <span className="text-base font-bold">$80</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '8%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">2건</span>
                <span className="text-xs text-gray-600">8%</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-base">📱</span>
                  <span className="text-base font-semibold">전자제품</span>
                </div>
                <span className="text-base font-bold">$250</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">7건</span>
                <span className="text-xs text-gray-600">25%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* NFT 영수증 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-black mb-1">NFT 영수증</h2>
            <p className="text-gray-600 text-sm">블록체인 기록 • 투명 거래</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Receipt className="w-4 h-4 text-gray-600" />
                <span className="text-base font-semibold">블록체인 영수증</span>
              </div>
              <span className="text-sm text-green-600 font-medium">12건 발급</span>
            </div>
            <div className="text-xs text-gray-600">
              모든 구매 내역이 NFT로 발급되어 블록체인에 기록됩니다
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <div className="font-mono text-sm text-gray-500">지갑 주소: 0x7a9f...3d2c</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}