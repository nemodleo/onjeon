'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWalletStore } from '@/store/wallet';
import { formatCurrency } from '@/lib/utils';
import { ArrowLeftRight } from 'lucide-react';
import { ExchangeProgress } from '@/components/ui/page-progress';
import { Currency } from '@/types';

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
  const [toAmount, setToAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [exchangeResult, setExchangeResult] = useState<{from: string, to: string} | null>(null);
  const [currentStep, setCurrentStep] = useState(2);
  const router = useRouter();
  const chartRef = useRef<HTMLDivElement>(null);
  const exchangeRef = useRef<HTMLDivElement>(null);
  const exchangeButtonRef = useRef<HTMLButtonElement>(null);
  const ratesRef = useRef<HTMLDivElement>(null);
  const [hoverData, setHoverData] = useState<{x: number, y: number, date: string, price: string} | null>(null);
  
  // Get today's date and calculate date ranges
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  
  // Calculate dates for 7, 14, 21, 28 days ago
  const get7DaysAgo = () => {
    const date = new Date(today);
    date.setDate(date.getDate() - 7);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  
  const get14DaysAgo = () => {
    const date = new Date(today);
    date.setDate(date.getDate() - 14);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  
  const get21DaysAgo = () => {
    const date = new Date(today);
    date.setDate(date.getDate() - 21);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  
  const get28DaysAgo = () => {
    const date = new Date(today);
    date.setDate(date.getDate() - 28);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const steps = [
    {
      id: 'start',
      title: '시작 단계',
      description: '환전 시스템 준비',
      href: '/exchange'
    },
    {
      id: 'overview',
      title: '서비스 개요',
      description: '환전 게이트웨이 서비스 탐색',
      href: '/exchange'
    },
    {
      id: 'exchange', 
      title: '즉시 환전',
      description: '실시간 환전 서비스',
      href: '/exchange/instant-exchange',
      ref: exchangeRef
    },
    {
      id: 'otp-generate',
      title: '현금 인출 OTP 생성',
      description: 'OTP로 안전한 현금 출금',
      href: '/exchange/otp-withdrawal',
      ref: ratesRef
    },
    {
      id: 'cash-withdrawal',
      title: '현금 인출',
      description: 'ATM/편의점에서 현금 인출',
      href: '/exchange/otp-withdrawal',
      ref: ratesRef
    },
    {
      id: 'history',
      title: '환전 내역',
      description: '거래 내역 확인',
      href: '/exchange/history',
      ref: ratesRef
    }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    const step = steps[stepIndex];
    
    if (step.href && stepIndex !== 2) {
      router.push(step.href);
    } else if (step.ref?.current) {
      step.ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // currentStep이 2일 때 환전 섹션으로 스크롤
  useEffect(() => {
    if (currentStep === 2 && exchangeRef.current) {
      exchangeRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [currentStep]);

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

  // Handle from amount change
  const handleFromAmountChange = (value: string) => {
    setAmount(value);
    if (value) {
      const calculated = parseFloat(value) * getExchangeRate(fromCurrency, toCurrency);
      setToAmount(calculated > 0 ? calculated.toFixed(2) : '');
    } else {
      setToAmount('');
    }
  };

  // Handle to amount change
  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    if (value) {
      const rate = getExchangeRate(fromCurrency, toCurrency);
      const calculated = rate !== 0 ? parseFloat(value) / rate : 0;
      setAmount(calculated > 0 ? calculated.toFixed(2) : '');
    } else {
      setAmount('');
    }
  };

  const handleExchange = async () => {
    const inputAmount = parseFloat(amount);
    if (isNaN(inputAmount) || inputAmount <= 0) return;
    if ((balance[fromCurrency] || 0) < inputAmount) {
      alert('잔액이 부족합니다.');
      return;
    }

    setIsProcessing(true);
    
    // 시뮬레이션: 실제로는 서버 API 호출
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const exchangedAmount = calculateExchange();
    updateBalance(fromCurrency, (balance[fromCurrency] || 0) - inputAmount);
    updateBalance(toCurrency, (balance[toCurrency] || 0) + exchangedAmount);
    
    setExchangeResult({
      from: `${formatCurrency(inputAmount, fromCurrency)}`,
      to: `${formatCurrency(exchangedAmount, toCurrency)}`
    });
    
    setIsProcessing(false);
    setIsSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setAmount('');
      setToAmount('');
      setIsSuccess(false);
      setExchangeResult(null);
    }, 3000);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // Swap amounts as well
    const tempAmount = amount;
    setAmount(toAmount);
    setToAmount(tempAmount);
  };

  // Calculate price and date based on cursor position
  const getHoverDataFromPosition = (x: number): {date: string, price: string} => {
    const chartWidth = 400;
    const progress = x / chartWidth;
    
    // Calculate date (28 days ago to today)
    const daysAgo = Math.round(28 * (1 - progress));
    const hoverDate = new Date(today);
    hoverDate.setDate(hoverDate.getDate() - daysAgo);
    const dateString = `${hoverDate.getMonth() + 1}/${hoverDate.getDate()}`;
    
    // Calculate price based on chart curve (interpolate between points)
    const chartPoints = [50, 44, 48, 38, 40, 35, 31, 28, 25, 23, 19];
    const prices = ["1,310", "1,315", "1,312", "1,318", "1,316", "1,319", "1,320", "1,320", "1,321", "1,321", "1,322"];
    
    const pointIndex = (progress * (chartPoints.length - 1));
    const baseIndex = Math.floor(pointIndex);
    const nextIndex = Math.min(baseIndex + 1, chartPoints.length - 1);
    
    // Simple interpolation for price display
    const basePrice = parseInt(prices[baseIndex].replace(',', ''));
    const nextPrice = parseInt(prices[nextIndex].replace(',', ''));
    const interpolatedPrice = Math.round(basePrice + (nextPrice - basePrice) * (pointIndex - baseIndex));
    
    return {
      date: dateString,
      price: interpolatedPrice.toLocaleString()
    };
  };

  const handleChartMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const hoverInfo = getHoverDataFromPosition(x);
    setHoverData({
      x,
      y,
      date: hoverInfo.date,
      price: hoverInfo.price
    });
  };

  const handleChartMouseLeave = () => {
    setHoverData(null);
  };

  return (
    <>
      <ExchangeProgress />
      <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black">즉시 환전</h1>
        <p className="text-gray-600 text-sm">스테이블코인 환전 • KRW-C ↔ USDT • 실시간 차트</p>
      </div>

      {/* USDT/KRW-C Real-time Chart Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-300 text-sm">USDT/KRW-C 실시간 차트</p>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm text-white font-bold">📊</span>
            </div>
          </div>
          <div>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">₩ 1,320</p>
              <p className="text-sm font-medium text-green-400">▲ +1.20%</p>
            </div>
          </div>
        </div>
        
        {/* Mini Chart with Hover */}
        <div className="h-24 relative group">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 400 100" 
            preserveAspectRatio="none" 
            className="cursor-crosshair"
            onMouseMove={handleChartMouseMove}
            onMouseLeave={handleChartMouseLeave}
          >
            <defs>
              <linearGradient id="miniGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
            
            {/* Chart path */}
            <path
              d="M 0 50 L 40 44 L 80 48 L 120 38 L 160 40 L 200 35 L 240 31 L 280 28 L 320 25 L 360 23 L 400 19"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <path
              d="M 0 50 L 40 44 L 80 48 L 120 38 L 160 40 L 200 35 L 240 31 L 280 28 L 320 25 L 360 23 L 400 19 L 400 100 L 0 100 Z"
              fill="url(#miniGradient)"
            />
            
            {/* Hover indicator based on cursor position */}
            {hoverData && (
              <g>
                {/* Vertical line */}
                <line 
                  x1={hoverData.x} 
                  y1="0" 
                  x2={hoverData.x} 
                  y2="100" 
                  stroke="#6b7280" 
                  strokeWidth="1" 
                  strokeDasharray="2,2" 
                  opacity="0.8"
                />
                {/* Circle indicator - calculate Y position from chart curve */}
                <circle 
                  cx={hoverData.x} 
                  cy={(() => {
                    // Calculate Y position based on chart curve
                    const progress = hoverData.x / 400;
                    const chartPoints = [50, 44, 48, 38, 40, 35, 31, 28, 25, 23, 19];
                    const pointIndex = progress * (chartPoints.length - 1);
                    const baseIndex = Math.floor(pointIndex);
                    const nextIndex = Math.min(baseIndex + 1, chartPoints.length - 1);
                    const baseY = chartPoints[baseIndex];
                    const nextY = chartPoints[nextIndex];
                    return baseY + (nextY - baseY) * (pointIndex - baseIndex);
                  })()} 
                  r="4" 
                  fill="#10b981" 
                  stroke="white" 
                  strokeWidth="2"
                />
                {/* Tooltip - above or below the chart curve */}
                <rect 
                  x={Math.max(5, Math.min(335, hoverData.x - 32.5))} 
                  y={(() => {
                    const progress = hoverData.x / 400;
                    const chartPoints = [50, 44, 48, 38, 40, 35, 31, 28, 25, 23, 19];
                    const pointIndex = progress * (chartPoints.length - 1);
                    const baseIndex = Math.floor(pointIndex);
                    const nextIndex = Math.min(baseIndex + 1, chartPoints.length - 1);
                    const baseY = chartPoints[baseIndex];
                    const nextY = chartPoints[nextIndex];
                    const y = baseY + (nextY - baseY) * (pointIndex - baseIndex);
                    // Try to place above first, if it would be cut off, place below
                    const aboveY = y - 40;
                    return aboveY < 0 ? y + 10 : aboveY;
                  })()}
                  width="65" 
                  height="28" 
                  fill="#1f2937" 
                  rx="4" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1"
                />
                <text 
                  x={Math.max(37.5, Math.min(367.5, hoverData.x))} 
                  y={(() => {
                    const progress = hoverData.x / 400;
                    const chartPoints = [50, 44, 48, 38, 40, 35, 31, 28, 25, 23, 19];
                    const pointIndex = progress * (chartPoints.length - 1);
                    const baseIndex = Math.floor(pointIndex);
                    const nextIndex = Math.min(baseIndex + 1, chartPoints.length - 1);
                    const baseY = chartPoints[baseIndex];
                    const nextY = chartPoints[nextIndex];
                    const y = baseY + (nextY - baseY) * (pointIndex - baseIndex);
                    // Date text position - above or below based on space
                    const aboveY = y - 40;
                    return aboveY < 0 ? y + 20 : y - 30;
                  })()}
                  textAnchor="middle" 
                  fontSize="9" 
                  fill="#9ca3af"
                >
                  {hoverData.date}
                </text>
                <text 
                  x={Math.max(37.5, Math.min(367.5, hoverData.x))} 
                  y={(() => {
                    const progress = hoverData.x / 400;
                    const chartPoints = [50, 44, 48, 38, 40, 35, 31, 28, 25, 23, 19];
                    const pointIndex = progress * (chartPoints.length - 1);
                    const baseIndex = Math.floor(pointIndex);
                    const nextIndex = Math.min(baseIndex + 1, chartPoints.length - 1);
                    const baseY = chartPoints[baseIndex];
                    const nextY = chartPoints[nextIndex];
                    const y = baseY + (nextY - baseY) * (pointIndex - baseIndex);
                    // Price text position - above or below based on space
                    const aboveY = y - 40;
                    return aboveY < 0 ? y + 32 : y - 18;
                  })()}
                  textAnchor="middle" 
                  fontSize="11" 
                  fill="white" 
                  fontWeight="bold"
                >
                  ₩{hoverData.price}
                </text>
              </g>
            )}
            
            {/* Invisible overlay for mouse tracking */}
            <rect 
              x="0" 
              y="0" 
              width="400" 
              height="100" 
              fill="transparent"
              style={{ pointerEvents: 'all' }}
            />
          </svg>
        </div>
        
        {/* Date labels */}
        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
          <span>{get28DaysAgo()}</span>
          <span>{get21DaysAgo()}</span>
          <span>{get14DaysAgo()}</span>
          <span>{get7DaysAgo()}</span>
          <span>{todayMonth}/{todayDate}</span>
        </div>
        
        <div className="text-xs text-gray-300 mt-4">
          실시간 환율 • 0% 수수료 • 즉시 환전
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-2xl font-bold text-black">0%</div>
          <div className="text-xs text-gray-600">수수료</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-xl font-bold text-black">즉시</div>
          <div className="text-xs text-gray-600">처리</div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="text-xl font-bold text-black">실시간</div>
          <div className="text-xs text-gray-600">환율</div>
        </div>
      </div>


      {/* Main Exchange Card - Compact UI */}
      <Card 
        ref={exchangeRef}
        className={`transition-all duration-700 ${
          currentStep === 2 ? 'shadow-xl ring-2 ring-green-500/30 bg-gradient-to-b from-white to-green-50/20' : ''
        }`}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">환전</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {isSuccess && exchangeResult ? (
            // Success State UI
            <div className="space-y-4 py-8">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-black">환전 완료!</h3>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <div>{exchangeResult.from}</div>
                  <div className="text-xl">→</div>
                  <div className="font-bold text-green-600">{exchangeResult.to}</div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Compact Exchange Form */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-12">
                  {/* From Currency */}
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <div className="text-xs text-gray-500 mb-1">보내는 통화</div>
                    <select 
                      value={fromCurrency}
                      onChange={(e) => {
                        setFromCurrency(e.target.value as Currency);
                        if (amount) {
                          const calculated = parseFloat(amount) * getExchangeRate(e.target.value as Currency, toCurrency);
                          setToAmount(calculated > 0 ? calculated.toFixed(2) : '');
                        }
                      }}
                      className="w-full p-2 bg-gray-50 border-0 rounded-lg text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="KRW-C">KRW-C</option>
                      <option value="USDT">USDT</option>
                      <option value="USDC">USDC</option>
                      <option value="DAI">DAI</option>
                    </select>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => handleFromAmountChange(e.target.value)}
                      className="w-full mt-2 text-lg font-bold border-0 bg-transparent p-0 focus:ring-0 placeholder:text-gray-300"
                    />
                    <div className="text-[10px] text-gray-400 mt-1">
                      보유: {formatCurrency(balance[fromCurrency] || 0, fromCurrency)}
                    </div>
                  </div>

                  {/* To Currency */}
                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-3">
                    <div className="text-xs text-gray-500 mb-1">받는 통화</div>
                    <select 
                      value={toCurrency}
                      onChange={(e) => {
                        setToCurrency(e.target.value as Currency);
                        if (amount) {
                          const calculated = parseFloat(amount) * getExchangeRate(fromCurrency, e.target.value as Currency);
                          setToAmount(calculated > 0 ? calculated.toFixed(2) : '');
                        }
                      }}
                      className="w-full p-2 bg-white border-0 rounded-lg text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="KRW-C">KRW-C</option>
                      <option value="USDT">USDT</option>
                      <option value="USDC">USDC</option>
                      <option value="DAI">DAI</option>
                    </select>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={toAmount}
                      onChange={(e) => handleToAmountChange(e.target.value)}
                      className="w-full mt-2 text-lg font-bold border-0 bg-transparent p-0 focus:ring-0 placeholder:text-gray-300"
                    />
                    <div className="text-[10px] text-gray-400 mt-1">
                      보유: {formatCurrency(balance[toCurrency] || 0, toCurrency)}
                    </div>
                  </div>
                </div>

                {/* Swap Button - Center between cards */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={swapCurrencies}
                    className="rounded-full bg-white border border-gray-100 hover:bg-gray-50 transition-all duration-300 h-8 w-8 shadow-sm"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Exchange Rate Info - Compact */}
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">환율</span>
                  <span className="font-mono font-semibold text-gray-900">
                    1 {fromCurrency} = {getExchangeRate(fromCurrency, toCurrency).toFixed(fromCurrency === 'KRW-C' ? 6 : 2)} {toCurrency}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-gray-600">수수료</span>
                  <span className="font-semibold text-green-600">0% (무료)</span>
                </div>
                {amount && toAmount && (
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">예상 환전</span>
                      <span className="text-sm font-bold text-gray-900">
                        {formatCurrency(parseFloat(toAmount), toCurrency)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Exchange Button */}
              <Button 
                ref={exchangeButtonRef}
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
            </>
          )}
        </CardContent>
      </Card>

      {/* Bottom Spacer */}
      <div className="h-10"></div>

      </div>
      
      {/* Stablecoin Ticker - Stock Exchange Style */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black text-white overflow-hidden h-6 mb-[57px]">
        <div className="ticker-wrap h-full flex items-center">
          <div className="ticker">
            {/* First set of ticker items */}
            <div className="ticker-content">
              <span className="ticker-item">
                <span className="text-[11px] font-medium">USDT/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,320</span>
                <span className="text-[11px] text-green-400 ml-1">▲+1.20%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">USDC/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,318</span>
                <span className="text-[11px] text-red-400 ml-1">▼-0.50%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">DAI/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,319</span>
                <span className="text-[11px] text-green-400 ml-1">▲+0.80%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">BUSD/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,321</span>
                <span className="text-[11px] text-gray-400 ml-1">0.00%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">TUSD/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,317</span>
                <span className="text-[11px] text-green-400 ml-1">▲+0.30%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">USDP/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,316</span>
                <span className="text-[11px] text-red-400 ml-1">▼-0.15%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">FRAX/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,322</span>
                <span className="text-[11px] text-green-400 ml-1">▲+0.45%</span>
              </span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="ticker-content">
              <span className="ticker-item">
                <span className="text-[11px] font-medium">USDT/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,320</span>
                <span className="text-[11px] text-green-400 ml-1">▲+1.20%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">USDC/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,318</span>
                <span className="text-[11px] text-red-400 ml-1">▼-0.50%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">DAI/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,319</span>
                <span className="text-[11px] text-green-400 ml-1">▲+0.80%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">BUSD/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,321</span>
                <span className="text-[11px] text-gray-400 ml-1">0.00%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">TUSD/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,317</span>
                <span className="text-[11px] text-green-400 ml-1">▲+0.30%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">USDP/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,316</span>
                <span className="text-[11px] text-red-400 ml-1">▼-0.15%</span>
              </span>
              <span className="ticker-item">
                <span className="text-[11px] font-medium">FRAX/KRW-C</span>
                <span className="text-[11px] font-bold ml-1.5">1,322</span>
                <span className="text-[11px] text-green-400 ml-1">▲+0.45%</span>
              </span>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .ticker-wrap {
            width: 100%;
            overflow: hidden;
          }
          
          .ticker {
            display: flex;
            animation: scroll 30s linear infinite;
          }
          
          .ticker-content {
            display: flex;
            flex-shrink: 0;
            white-space: nowrap;
          }
          
          .ticker-item {
            display: inline-flex;
            align-items: center;
            padding: 0 1.5rem;
            font-size: 11px;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .ticker:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </>
  );
}