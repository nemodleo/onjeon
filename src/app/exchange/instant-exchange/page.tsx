'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import { ArrowDownUp, TrendingUp, Zap, Clock } from 'lucide-react';

type Currency = 'KRW-C' | 'USDT' | 'USDC' | 'DAI';

const exchangeRates: Record<string, number> = {
  'KRW-C_USDT': 0.00076,
  'USDT_KRW-C': 1320,
  'KRW-C_USDC': 0.00076,
  'USDC_KRW-C': 1320,
  'KRW-C_DAI': 0.00076,
  'DAI_KRW-C': 1320,
  'USDT_USDC': 1.0,
  'USDC_USDT': 1.0,
  'USDT_DAI': 1.0,
  'DAI_USDT': 1.0,
  'USDC_DAI': 1.0,
  'DAI_USDC': 1.0,
};

export default function InstantExchangePage() {
  const { balance, updateBalance } = useWalletStore();
  const [fromCurrency, setFromCurrency] = useState<Currency>('KRW-C');
  const [toCurrency, setToCurrency] = useState<Currency>('USDT');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const getExchangeRate = (from: Currency, to: Currency): number => {
    if (from === to) return 1;
    const key = `${from}_${to}`;
    return exchangeRates[key] || 1;
  };

  const calculateExchange = () => {
    const inputAmount = parseFloat(amount);
    if (isNaN(inputAmount) || inputAmount <= 0) return 0;
    return inputAmount * getExchangeRate(fromCurrency, toCurrency);
  };

  const handleExchange = async () => {
    const inputAmount = parseFloat(amount);
    if (isNaN(inputAmount) || inputAmount <= 0) return;
    if (balance[fromCurrency] < inputAmount) {
      alert('잔액이 부족합니다.');
      return;
    }

    setIsProcessing(true);
    
    // 시뮬레이션: 실제로는 서버 API 호출
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const exchangedAmount = calculateExchange();
    updateBalance(fromCurrency, balance[fromCurrency] - inputAmount);
    updateBalance(toCurrency, balance[toCurrency] + exchangedAmount);
    
    setIsProcessing(false);
    setAmount('');
    alert(`환전 완료: ${formatCurrency(inputAmount, fromCurrency)} → ${formatCurrency(exchangedAmount, toCurrency)}`);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold text-black mb-1">즉시 환전</h1>
        <p className="text-gray-600 text-xs">스테이블코인 환전 • KRW-C ↔ USDT • 실시간 차트</p>
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
            <span className="text-xs text-white font-bold">🔄</span>
          </div>
        </div>
        <div className="text-xs text-gray-300">
          스테이블코인 환전 • 실시간 차트
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">0%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">즉시</div>
          <div className="text-xs text-gray-600">처리</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-lg font-bold text-black">실시간</div>
          <div className="text-xs text-gray-600">환율</div>
        </div>
      </div>

      {/* Price Chart */}
      <Card>
        <CardHeader>
          <CardTitle>USDT/KRW-C 실시간 차트</CardTitle>
          <CardDescription>최근 1개월 가격 변동</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Price Info */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-black">₩1,320</div>
                <div className="text-sm text-green-600">+1.2% (24h)</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">30d Volume</div>
                <div className="font-semibold">₩ 72B</div>
              </div>
            </div>
            
            {/* Line Chart */}
            <div className="w-full h-40 bg-gray-50 rounded-lg border border-gray-200 relative">
              <svg width="100%" height="100%" viewBox="0 0 400 160" className="absolute inset-0">
                <defs>
                  {/* Grid pattern */}
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                  </pattern>
                  
                  {/* Price line gradient */}
                  <linearGradient id="priceGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.02"/>
                  </linearGradient>
                </defs>

                {/* Background grid */}
                <rect x="50" y="20" width="330" height="120" fill="url(#grid)" />
                
                {/* Y-axis labels */}
                <g fontSize="11" fill="#6b7280">
                  <text x="45" y="30" textAnchor="end">1350</text>
                  <text x="45" y="80" textAnchor="end">1325</text>
                  <text x="45" y="130" textAnchor="end">1300</text>
                </g>
                
                {/* X-axis labels */}
                <g fontSize="11" fill="#6b7280">
                  <text x="60" y="155" textAnchor="middle">8/1</text>
                  <text x="130" y="155" textAnchor="middle">8/8</text>
                  <text x="200" y="155" textAnchor="middle">8/15</text>
                  <text x="270" y="155" textAnchor="middle">8/22</text>
                  <text x="340" y="155" textAnchor="middle">8/29</text>
                </g>
                
                {/* Chart data within defined area */}
                <g clipPath="url(#chartClip)">
                  <defs>
                    <clipPath id="chartClip">
                      <rect x="50" y="20" width="330" height="120" />
                    </clipPath>
                  </defs>
                  
                  {(() => {
                    const dataPoints = [...Array(30)].map((_, i) => {
                      const x = 50 + (i / 29) * 330; // Map to chart area (50 to 380)
                      const basePrice = 1320;
                      // Create realistic price movement
                      const trend = Math.sin(i * 0.15) * 8 + Math.cos(i * 0.08) * 12;
                      const noise = (Math.random() - 0.5) * 6;
                      const price = basePrice + trend + noise;
                      const y = 20 + (1 - (price - 1300) / (1350 - 1300)) * 120; // Map to chart height (20 to 140)
                      return { x, y: Math.max(25, Math.min(135, y)), price };
                    });
                    
                    const pathData = dataPoints.map((point, i) => 
                      `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                    ).join(' ');

                    return (
                      <>
                        {/* Area under curve */}
                        <path
                          d={`${pathData} L ${dataPoints[dataPoints.length - 1].x} 140 L 50 140 Z`}
                          fill="url(#priceGradient)"
                        />
                        
                        {/* Main price line */}
                        <path
                          d={pathData}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Data points with hover */}
                        {dataPoints.map((point, i) => (
                          <g key={i}>
                            {/* Hover area */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="6"
                              fill="transparent"
                              className="hover:fill-blue-100"
                            />
                            
                            {/* Visible point on hover */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="3"
                              fill="#10b981"
                              stroke="white"
                              strokeWidth="2"
                              className="opacity-0 hover:opacity-100 transition-opacity"
                            />
                            
                            {/* Tooltip */}
                            <g className="opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                              <rect
                                x={point.x - 25}
                                y={point.y - 25}
                                width="50"
                                height="18"
                                fill="#1f2937"
                                rx="3"
                              />
                              <text
                                x={point.x}
                                y={point.y - 12}
                                textAnchor="middle"
                                fontSize="11"
                                fill="white"
                              >
                                ₩{Math.round(point.price)}
                              </text>
                            </g>
                          </g>
                        ))}
                        
                        {/* Current price indicator */}
                        <circle
                          cx={dataPoints[dataPoints.length - 1].x}
                          cy={dataPoints[dataPoints.length - 1].y}
                          r="4"
                          fill="#10b981"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </>
                    );
                  })()}
                </g>
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Exchange Card */}
      <Card>
        <CardHeader>
          <CardTitle>즉시 환전</CardTitle>
          <CardDescription>실시간 환율로 즉시 환전됩니다</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* From Currency */}
          <div className="space-y-3">
            <div className="text-sm font-medium text-gray-900">보내는 통화</div>
            <div className="flex gap-3">
              <select 
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value as Currency)}
                className="flex-1 p-3 border rounded-xl text-sm"
              >
                <option value="KRW-C">KRW-C (온전코인)</option>
                <option value="USDT">USDT (테더)</option>
                <option value="USDC">USDC (USD 코인)</option>
                <option value="DAI">DAI (다이)</option>
              </select>
              <Input
                type="number"
                placeholder="금액 입력"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 p-3"
              />
            </div>
            <div className="text-sm text-gray-600">
              보유: {formatCurrency(balance[fromCurrency], fromCurrency)}
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={swapCurrencies}
              className="rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>

          {/* To Currency */}
          <div className="space-y-3">
            <div className="text-sm font-medium text-gray-900">받는 통화</div>
            <div className="flex gap-3">
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value as Currency)}
                className="flex-1 p-3 border rounded-xl text-sm"
              >
                <option value="KRW-C">KRW-C (온전코인)</option>
                <option value="USDT">USDT (테더)</option>
                <option value="USDC">USDC (USD 코인)</option>
                <option value="DAI">DAI (다이)</option>
              </select>
              <div className="flex-1 p-3 bg-gray-50 rounded-xl text-right">
                <div className="font-semibold">
                  {amount ? formatCurrency(calculateExchange(), toCurrency) : '0'}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              보유: {formatCurrency(balance[toCurrency], toCurrency)}
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>현재 환율</span>
                <span className="font-semibold">
                  1 {fromCurrency} = {getExchangeRate(fromCurrency, toCurrency).toFixed(fromCurrency === 'KRW' ? 6 : 2)} {toCurrency}
                </span>
              </div>
              <div className="flex justify-between">
                <span>수수료</span>
                <span className="font-semibold text-green-600">0% (무료)</span>
              </div>
              {amount && (
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">받을 금액</span>
                  <span className="font-bold text-lg">
                    {formatCurrency(calculateExchange(), toCurrency)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Exchange Button */}
          <Button 
            className="w-full py-3"
            onClick={handleExchange}
            disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
            size="lg"
          >
            {isProcessing ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>환전 처리중...</span>
              </div>
            ) : (
              '즉시 환전하기'
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Current Exchange Rates */}
      <Card>
        <CardHeader>
          <CardTitle>스테이블코인 시세</CardTitle>
          <CardDescription>주요 스테이블코인 환율 (실시간 업데이트)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">KRW-C</span>
                </div>
                <div>
                  <div className="font-semibold">USDT/KRW-C</div>
                  <div className="text-xs text-gray-600">테더-온전코인</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">1,320</div>
                <div className="text-xs text-green-600">+1.2%</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">USDC</span>
                </div>
                <div>
                  <div className="font-semibold">USDC/KRW-C</div>
                  <div className="text-xs text-gray-600">USD코인-온전코인</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">1,320.00</div>
                <div className="text-xs text-green-600">+0.05%</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">DAI</span>
                </div>
                <div>
                  <div className="font-semibold">DAI/KRW-C</div>
                  <div className="text-xs text-gray-600">다이-온전코인</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">1,318.50</div>
                <div className="text-xs text-red-600">-0.12%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>스테이블코인 환전 혜택</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-black">최저 수수료</div>
                <div className="text-sm text-gray-600">스테이블코인 간 초저비용 환전</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-black">실시간 차트</div>
                <div className="text-sm text-gray-600">24시간 가격 변동 모니터링</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-black">즉시 처리</div>
                <div className="text-sm text-gray-600">블록체인 기반 즉시 환전</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              </div>
              <div>
                <div className="font-semibold text-black">안전한 거래</div>
                <div className="text-sm text-gray-600">스마트 컨트랙트 기반 보안</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}