'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface PageStep {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface PageProgressProps {
  steps: PageStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export function PageProgress({ steps, currentStep, onStepClick, className }: PageProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn("fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block", className)}>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border p-4 min-w-[280px]">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-1">진행 단계</h3>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + scrollProgress) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-gray-600 min-w-[40px]">
              {Math.round(((currentStep + scrollProgress) / steps.length) * 100)}%
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isActive = currentStep >= index;
            const isCurrent = currentStep === index;
            const isCompleted = step.isCompleted || currentStep > index;

            return (
              <div
                key={step.id}
                className={cn(
                  "flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-300",
                  isCurrent 
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200" 
                    : "hover:bg-gray-50",
                  onStepClick && "cursor-pointer"
                )}
                onClick={() => onStepClick?.(index)}
              >
                {/* Step Icon */}
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  isCompleted
                    ? "bg-green-500 border-green-500"
                    : isActive 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent"
                      : "border-gray-300 bg-white"
                )}>
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-white" />
                  ) : isActive ? (
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  ) : (
                    <Circle className="w-3 h-3 text-gray-400" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <div className={cn(
                    "font-medium text-sm transition-colors duration-300",
                    isActive ? "text-gray-900" : "text-gray-600"
                  )}>
                    {step.title}
                  </div>
                  <div className={cn(
                    "text-xs mt-1 transition-colors duration-300",
                    isActive ? "text-gray-700" : "text-gray-500"
                  )}>
                    {step.description}
                  </div>

                  {/* Current Step Progress */}
                  {isCurrent && (
                    <div className="mt-2">
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${scrollProgress * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Arrow */}
                {isCurrent && (
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-blue-500 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>단계 {currentStep + 1}/{steps.length}</span>
            <span>스크롤하여 진행</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exchange section progress components
export function ExchangeProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'overview',
      title: 'Service Overview',
      description: 'Explore exchange gateway services'
    },
    {
      id: 'qr-payment',
      title: 'QR Payment',
      description: 'Generate QR for instant payment'
    },
    {
      id: 'otp-withdrawal',
      title: 'OTP Withdrawal',
      description: 'Secure cash withdrawal with OTP'
    },
    {
      id: 'pos-system',
      title: 'POS Integration',
      description: 'Merchant POS system setup'
    }
  ];

  useEffect(() => {
    const updateStepBasedOnScroll = () => {
      // Check if we're on specific pages
      if (window.location.pathname === '/exchange/qr-payment') {
        setCurrentStep(1);
      } else if (window.location.pathname === '/exchange/otp-withdrawal') {
        setCurrentStep(2);
      } else if (window.location.pathname === '/exchange/pos') {
        setCurrentStep(3);
      } else {
        setCurrentStep(0);
      }
    };

    const handleScroll = () => {
      updateStepBasedOnScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateStepBasedOnScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (stepIndex: number) => {
    const routes = ['/exchange', '/exchange/qr-payment', '/exchange/otp-withdrawal', '/exchange/pos'];
    window.location.href = routes[stepIndex];
  };

  return (
    <PageProgress 
      steps={steps} 
      currentStep={currentStep} 
      onStepClick={handleStepClick}
    />
  );
}

// Duty Free section progress
export function DutyFreeProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'overview',
      title: 'Service Overview',
      description: 'Smart duty-free management'
    },
    {
      id: 'trip-setup',
      title: 'Trip Setup',
      description: 'Configure destination and limits'
    },
    {
      id: 'dashboard',
      title: 'Live Dashboard',
      description: 'Monitor real-time usage'
    },
    {
      id: 'optimization',
      title: 'AI Optimization',
      description: 'Smart purchase recommendations'
    }
  ];

  useEffect(() => {
    const updateStepBasedOnScroll = () => {
      if (window.location.pathname === '/duty-free/trip-setup') {
        setCurrentStep(1);
      } else if (window.location.pathname === '/duty-free/dashboard') {
        setCurrentStep(2);
      } else {
        setCurrentStep(0);
      }
    };

    updateStepBasedOnScroll();
    window.addEventListener('scroll', updateStepBasedOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateStepBasedOnScroll);
  }, []);

  const handleStepClick = (stepIndex: number) => {
    const routes = ['/duty-free', '/duty-free/trip-setup', '/duty-free/dashboard', '/duty-free/dashboard'];
    window.location.href = routes[stepIndex];
  };

  return (
    <PageProgress 
      steps={steps} 
      currentStep={currentStep} 
      onStepClick={handleStepClick}
    />
  );
}

// VAT Refund section progress
export function VATRefundProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'overview',
      title: 'Service Overview',
      description: 'Instant VAT refund system'
    },
    {
      id: 'auto-calculation',
      title: 'Auto Calculation',
      description: 'Purchase-time VAT calculation'
    },
    {
      id: 'dashboard',
      title: 'Refund Dashboard',
      description: 'Track refund status'
    },
    {
      id: 'stamp-process',
      title: 'Exit Stamp',
      description: 'Final stamp processing'
    }
  ];

  useEffect(() => {
    const updateStepBasedOnScroll = () => {
      if (window.location.pathname === '/vat-refund/dashboard') {
        setCurrentStep(2);
      } else if (window.location.pathname === '/vat-refund/stamp') {
        setCurrentStep(3);
      } else {
        setCurrentStep(0);
      }
    };

    updateStepBasedOnScroll();
    window.addEventListener('scroll', updateStepBasedOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateStepBasedOnScroll);
  }, []);

  const handleStepClick = (stepIndex: number) => {
    const routes = ['/vat-refund', '/vat-refund', '/vat-refund/dashboard', '/vat-refund/stamp'];
    window.location.href = routes[stepIndex];
  };

  return (
    <PageProgress 
      steps={steps} 
      currentStep={currentStep} 
      onStepClick={handleStepClick}
    />
  );
}

// Customs section progress
export function CustomsProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'overview',
      title: 'Service Overview',
      description: 'Automated customs declaration'
    },
    {
      id: 'kyc-setup',
      title: 'KYC Setup',
      description: 'Identity verification'
    },
    {
      id: 'nft-receipts',
      title: 'NFT Receipts',
      description: 'Blockchain-based receipts'
    },
    {
      id: 'auto-declaration',
      title: 'Auto Declaration',
      description: 'One-click customs filing'
    }
  ];

  useEffect(() => {
    const updateStepBasedOnScroll = () => {
      if (window.location.pathname === '/customs/settings') {
        setCurrentStep(1);
      } else if (window.location.pathname === '/customs/receipts') {
        setCurrentStep(2);
      } else if (window.location.pathname === '/customs/preview') {
        setCurrentStep(3);
      } else {
        setCurrentStep(0);
      }
    };

    updateStepBasedOnScroll();
    window.addEventListener('scroll', updateStepBasedOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateStepBasedOnScroll);
  }, []);

  const handleStepClick = (stepIndex: number) => {
    const routes = ['/customs', '/customs/settings', '/customs/receipts', '/customs/preview'];
    window.location.href = routes[stepIndex];
  };

  return (
    <PageProgress 
      steps={steps} 
      currentStep={currentStep} 
      onStepClick={handleStepClick}
    />
  );
}

// QR Payment specific progress component
export function QRPaymentProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'setup',
      title: '결제 설정',
      description: '금액과 통화를 선택하세요'
    },
    {
      id: 'generate',
      title: 'QR 코드 생성',
      description: 'QR 코드를 생성합니다'
    },
    {
      id: 'scan',
      title: '가맹점 스캔',
      description: '가맹점에서 QR 코드 스캔'
    },
    {
      id: 'complete',
      title: '결제 완료',
      description: '자동 정산 및 완료'
    }
  ];

  useEffect(() => {
    const updateStepBasedOnScroll = () => {
      const stepElements = steps.map(step => document.getElementById(step.id)).filter(Boolean);
      
      if (stepElements.length === 0) {
        // Fallback to scroll-based calculation
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / docHeight;
        const stepIndex = Math.floor(progress * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        return;
      }

      // Find the current step based on element positions
      let activeStep = 0;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < stepElements.length; i++) {
        const element = stepElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          activeStep = i;
        }
      }

      setCurrentStep(activeStep);
    };

    const handleScroll = () => {
      updateStepBasedOnScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateStepBasedOnScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps]);

  const highlightElement = (element: HTMLElement) => {
    // Add highlight effect
    element.classList.add('highlight-element');
    element.style.cssText = `
      animation: highlight-pulse 2s ease-in-out;
      position: relative;
    `;
    
    // Create highlight overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute;
      inset: -4px;
      background: linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15));
      border-radius: 16px;
      pointer-events: none;
      animation: highlight-fade 2s ease-in-out forwards;
      z-index: -1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(overlay);
    
    // Remove highlight after animation
    setTimeout(() => {
      element.classList.remove('highlight-element');
      element.style.animation = '';
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 2000);
  };

  const handleStepClick = (stepIndex: number) => {
    const stepId = steps[stepIndex].id;
    const element = document.getElementById(stepId);
    
    if (element) {
      const offsetTop = element.offsetTop - 100; // 100px offset for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Highlight the element after scroll
      setTimeout(() => {
        highlightElement(element);
      }, 500);
    } else {
      // Fallback
      const targetProgress = stepIndex / steps.length;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetScrollTop = targetProgress * docHeight;
      
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <PageProgress 
      steps={steps} 
      currentStep={currentStep} 
      onStepClick={handleStepClick}
    />
  );
}