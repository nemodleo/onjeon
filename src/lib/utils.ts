import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 통화 포맷팅
export function formatCurrency(amount: number, currency: string): string {
  if (currency === 'KRW') {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(amount);
  }
  
  // 스테이블코인이나 기타 암호화폐의 경우 커스텀 포맷팅
  if (currency === 'USDT' || currency === 'USDC') {
    return `${amount.toFixed(2)} ${currency}`;
  }
  
  // 표준 ISO 통화 코드만 사용
  const standardCurrency = ['USD', 'EUR', 'JPY', 'GBP', 'CAD', 'AUD', 'CHF'].includes(currency) 
    ? currency 
    : 'USD';
    
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: standardCurrency,
  }).format(amount);
}

// 환율 계산
export function calculateExchange(
  amount: number, 
  rate: number, 
  spread: number = 0.002
): { exchanged: number; spreadCost: number; total: number } {
  const spreadCost = amount * spread;
  const exchanged = amount * rate;
  const total = exchanged - spreadCost;
  
  return { exchanged, spreadCost, total };
}

// QR 코드 생성용 데이터
export function generateQRData(paymentId: string, amount: number, currency: string): string {
  return JSON.stringify({
    type: 'krw-payment',
    paymentId,
    amount,
    currency,
    timestamp: Date.now(),
  });
}

// OTP 생성
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// 날짜 포맷팅
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

// UUID 생성 (간단한 버전)
export function generateId(): string {
  return 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}