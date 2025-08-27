import { create } from 'zustand';
import { Trip, Receipt, VATRefund, CustomsDeclaration } from '@/types';

interface TripState {
  currentTrip: Trip | null;
  receipts: Receipt[];
  vatRefunds: VATRefund[];
  customsDeclarations: CustomsDeclaration[];
  
  // Actions
  setCurrentTrip: (trip: Trip | null) => void;
  addReceipt: (receipt: Receipt) => void;
  updateDutyFreeUsage: (amount: number) => void;
  calculateDutyFreeRemaining: () => number;
  calculateVATRefund: () => number;
}

export const useTripStore = create<TripState>((set, get) => ({
  currentTrip: null,
  receipts: [],
  vatRefunds: [],
  customsDeclarations: [],
  
  setCurrentTrip: (trip) => set({ currentTrip: trip }),
  
  addReceipt: (receipt) => {
    set(state => ({ receipts: [...state.receipts, receipt] }));
    
    // Update duty free usage if applicable
    if (receipt.isDutyFreeEligible && get().currentTrip) {
      get().updateDutyFreeUsage(receipt.totalAmount);
    }
  },
  
  updateDutyFreeUsage: (amount) => {
    const trip = get().currentTrip;
    if (!trip) return;
    
    set({
      currentTrip: {
        ...trip,
        usedAmount: trip.usedAmount + amount,
      }
    });
  },
  
  calculateDutyFreeRemaining: () => {
    const trip = get().currentTrip;
    if (!trip) return 0;
    
    return Math.max(0, trip.dutyFreeLimit - trip.usedAmount);
  },
  
  calculateVATRefund: () => {
    const receipts = get().receipts;
    return receipts
      .filter(r => r.isVatRefundEligible)
      .reduce((total, receipt) => total + (receipt.taxAmount * 0.8), 0); // 80% refund rate
  },
}));