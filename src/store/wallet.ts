import { create } from 'zustand';
import { Currency, QRPayment, OTPWithdrawal, User } from '@/types';

interface WalletState {
  user: User | null;
  currentPayment: QRPayment | null;
  currentWithdrawal: OTPWithdrawal | null;
  balance: Record<Currency, number>;
  
  // Actions
  setUser: (user: User) => void;
  updateBalance: (currency: Currency, amount: number) => void;
  setCurrentPayment: (payment: QRPayment | null) => void;
  setCurrentWithdrawal: (withdrawal: OTPWithdrawal | null) => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  user: {
    id: 'user_demo_001',
    name: '김테스트',
    email: 'test@example.com',
    phone: '+82-10-1234-5678',
    kycLevel: 2,
    passport: 'M12345678',
    nationality: 'KR',
    walletAddress: '0x1234...abcd',
    balance: {
      'KRW-C': 1234567,
      KRW: 1000000,
      USD: 500,
      JPY: 50000,
      EUR: 200,
      USDT: 1000,
      USDC: 800,
      DAI: 1100,
    }
  },
  currentPayment: null,
  currentWithdrawal: null,
  balance: {
    'KRW-C': 1234567,
    KRW: 1000000,
    USD: 500,
    JPY: 50000,
    EUR: 200,
    USDT: 1000,
    USDC: 800,
    DAI: 1100,
  },
  
  setUser: (user) => set({ user }),
  updateBalance: (currency, amount) => {
    const currentBalance = get().balance;
    set({
      balance: {
        ...currentBalance,
        [currency]: currentBalance[currency] + amount,
      }
    });
  },
  setCurrentPayment: (payment) => set({ currentPayment: payment }),
  setCurrentWithdrawal: (withdrawal) => set({ currentWithdrawal: withdrawal }),
}));