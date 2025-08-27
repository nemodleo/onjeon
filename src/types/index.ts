// 기본 통화 타입
export type Currency = 'KRW' | 'USD' | 'JPY' | 'EUR' | 'USDT' | 'USDC';

// 결제 상태
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'expired';

// QR 결제 관련 타입
export interface QRPayment {
  id: string;
  userId: string;
  merchantId?: string;
  amount: number;
  currency: Currency;
  targetCurrency: Currency;
  exchangeRate: number;
  finalAmount: number;
  status: PaymentStatus;
  qrCode: string;
  expiresAt: Date;
  createdAt: Date;
  completedAt?: Date;
  fees: {
    spread: number;
    settlement: number;
    total: number;
  };
}

// QR 결제 견적
export interface PaymentQuote {
  amount: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  exchangeRate: number;
  spread: number;
  fees: number;
  finalAmount: number;
  expiresAt: Date;
}

// OTP 현금 인출
export interface OTPWithdrawal {
  id: string;
  userId: string;
  otp: string;
  amount: number;
  currency: Currency;
  location?: string;
  status: 'active' | 'used' | 'expired';
  expiresAt: Date;
  createdAt: Date;
  usedAt?: Date;
}

// 사용자 정보
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  kycLevel: number;
  passport?: string;
  nationality: string;
  walletAddress: string;
  balance: Record<Currency, number>;
}

// 여행 정보 (면세 한도 관리용)
export interface Trip {
  id: string;
  userId: string;
  fromCountry: string;
  toCountry: string;
  departureDate: Date;
  returnDate: Date;
  dutyFreeLimit: number;
  usedAmount: number;
  status: 'active' | 'completed';
  createdAt: Date;
}

// 영수증
export interface Receipt {
  id: string;
  userId: string;
  tripId?: string;
  paymentId: string;
  merchantName: string;
  items: ReceiptItem[];
  totalAmount: number;
  currency: Currency;
  taxAmount: number;
  isDutyFreeEligible: boolean;
  isVatRefundEligible: boolean;
  createdAt: Date;
  nftTokenId?: string;
}

export interface ReceiptItem {
  name: string;
  category: string;
  hsCode?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  taxRate: number;
  isDutyFreeEligible: boolean;
}

// VAT 환급
export interface VATRefund {
  id: string;
  userId: string;
  receipts: string[]; // Receipt IDs
  totalAmount: number;
  refundAmount: number;
  status: 'pending' | 'verified' | 'paid';
  verifiedAt?: Date;
  paidAt?: Date;
  createdAt: Date;
}

// 세관 신고
export interface CustomsDeclaration {
  id: string;
  userId: string;
  tripId: string;
  receipts: string[]; // Receipt IDs
  totalAmount: number;
  declarationData: any;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  submittedAt?: Date;
  createdAt: Date;
}

// 알림
export interface Notification {
  id: string;
  userId: string;
  type: 'duty_free_warning' | 'duty_free_exceeded' | 'vat_refund' | 'payment_completed' | 'otp_expired';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}