'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight, Receipt, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { DutyFreeProgress } from '@/components/ui/page-progress';

export default function RefundPage() {
  return (
    <>
      <DutyFreeProgress />
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <Link href="/duty-free">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-black">환급</h1>
            <p className="text-gray-600 text-xs">VAT 환급 • 공항 스탬프 • 즉시 지급</p>
          </div>
        </div>

        {/* VAT 환급 현황 */}
        <div className="bg-black rounded-xl p-4 text-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-gray-300 text-xs">환급 가능액</p>
              <div className="flex items-baseline space-x-1">
                <p className="text-lg font-bold">₩ 78,300</p>
                <p className="text-sm font-medium text-gray-400">~ 78,300 KRW-C</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <Receipt className="w-3 h-3" />
            </div>
          </div>
          <div className="text-xs text-gray-300">
            공항에서 스탬프 받기 → 즉시 입금
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-lg font-bold text-green-500">10%</div>
            <div className="text-xs text-gray-600">부가세 세율</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-lg font-bold text-black">5초</div>
            <div className="text-xs text-gray-600">NFT 처리시간</div>
          </div>
        </div>

        {/* VAT 환급 서비스 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-black mb-1">환급 서비스</h2>
            <p className="text-gray-600 text-xs">리펀 대시보드 • 공항 스탬프 • 즉시 지급</p>
          </div>
          
          <div className="space-y-1">
            <Link
              href="/duty-free/vat-refund"
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Receipt className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-sm">VAT 환급 대시보드</div>
                  <div className="text-xs text-gray-600">리펀 내역 • 환급률 확인</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
            
            <Link
              href="/duty-free/vat-refund/stamp"
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-black text-sm">공항 스탬프</div>
                  <div className="text-xs text-gray-600">디지털 승인 • QR 인증</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* 환급 대기 내역 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-black mb-1">환급 대기 내역</h2>
            <p className="text-gray-600 text-xs">처리 중 • 서류 보완 필요</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">신세계 강남점</div>
                  <div className="text-xs text-gray-600">2시간 전 • 의류</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-black">₩35,000</div>
                <div className="text-xs text-blue-600">처리 중</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">롯데백화점 명동점</div>
                  <div className="text-xs text-gray-600">어제 • 화장품</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-black">₩18,500</div>
                <div className="text-xs text-blue-600">처리 중</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-3 h-3 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">현대백화점 무역센터</div>
                  <div className="text-xs text-gray-600">3일 전 • 전자제품</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-black">₩31,500</div>
                <div className="text-xs text-orange-600">서류 보완</div>
              </div>
            </div>
          </div>
        </div>

        {/* 환급 완료 내역 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-black mb-1">최근 환급 완료</h2>
            <p className="text-gray-600 text-xs">완료된 환급 내역</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">갤러리아 명품관</div>
                  <div className="text-xs text-gray-600">1주일 전 • 가방</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-green-600">+₩45,000</div>
                <div className="text-xs text-gray-600">환급 완료</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">신세계 본점</div>
                  <div className="text-xs text-gray-600">2주일 전 • 화장품</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-green-600">+₩28,000</div>
                <div className="text-xs text-gray-600">환급 완료</div>
              </div>
            </div>
          </div>
        </div>

        {/* 환급률 안내 */}
        <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
          <div className="flex items-start space-x-2">
            <Receipt className="w-4 h-4 text-blue-600 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-blue-900">환급률 안내</div>
              <div className="text-xs text-blue-700 mt-1">
                일반 상품 7-10% • 명품 12% • 전자제품 8%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}