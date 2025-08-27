'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Plane, 
  CreditCard, 
  Eye, 
  CheckCircle,
  Circle
} from 'lucide-react';

interface FlowStep {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  section: string;
}

const flowSteps: FlowStep[] = [
  {
    id: 'setup',
    title: 'Trip Setup',
    subtitle: 'Destination & Limits',
    icon: Plane,
    color: 'from-blue-500 to-blue-600',
    section: 'setup-section'
  },
  {
    id: 'payment',
    title: 'Instant Payment',
    subtitle: 'QR Code Scan',
    icon: CreditCard,
    color: 'from-green-500 to-emerald-600',
    section: 'payment-section'
  },
  {
    id: 'tracking',
    title: 'Smart Tracking',
    subtitle: 'AI Limit Management',
    icon: Eye,
    color: 'from-purple-500 to-violet-600',
    section: 'tracking-section'
  },
  {
    id: 'completion',
    title: 'Auto Processing',
    subtitle: 'VAT & Customs',
    icon: CheckCircle,
    color: 'from-orange-500 to-amber-600',
    section: 'completion-section'
  }
];

export function ProgressFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // 스크롤 위치에 따른 활성 단계 계산
      const stepProgress = progress * flowSteps.length;
      const currentStep = Math.min(Math.floor(stepProgress), flowSteps.length - 1);
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 설정

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlightElement = (element: HTMLElement) => {
    // Add highlight effect
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute;
      inset: -8px;
      background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
      border-radius: 24px;
      pointer-events: none;
      animation: highlight-fade 3s ease-in-out forwards;
      z-index: -1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(overlay);
    
    // Remove highlight after animation
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 3000);
  };

  const scrollToSection = (sectionId: string, stepIndex: number) => {
    // 실제 섹션이 있다면 해당 섹션으로 스크롤
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 80px offset for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Highlight the element after scroll
      setTimeout(() => {
        highlightElement(element);
      }, 600);
    } else {
      // 섹션이 없다면 전체 진행률 기준으로 스크롤
      const targetProgress = (stepIndex + 0.5) / flowSteps.length;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetScrollTop = targetProgress * docHeight;
      
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-4">
      {/* Progress Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full">
        <div 
          className="w-full bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Flow Steps */}
      {flowSteps.map((step, index) => {
        const Icon = step.icon;
        const isActive = activeStep >= index;
        const isCurrent = activeStep === index;
        const stepProgress = Math.max(0, Math.min(1, (scrollProgress * flowSteps.length) - index));

        return (
          <div
            key={step.id}
            className="relative flex items-center space-x-4 group cursor-pointer"
            onClick={() => scrollToSection(step.section, index)}
          >
            {/* Step Circle */}
            <div className={cn(
              "relative w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10",
              isActive 
                ? `bg-gradient-to-r ${step.color} border-transparent shadow-lg scale-110` 
                : "bg-white border-gray-300 group-hover:border-gray-400 group-hover:scale-105"
            )}>
              <Icon className={cn(
                "w-4 h-4 transition-colors duration-300",
                isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"
              )} />
              
              {/* Progress Ring */}
              {isCurrent && (
                <div className="absolute inset-0 rounded-full">
                  <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-white/30"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 14}`}
                      strokeDashoffset={`${2 * Math.PI * 14 * (1 - stepProgress)}`}
                      className="text-white transition-all duration-500"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Step Info */}
            <div className={cn(
              "bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border transform transition-all duration-300 min-w-[120px]",
              isCurrent 
                ? "opacity-100 translate-x-0 scale-105 shadow-xl border-gray-200" 
                : "opacity-0 translate-x-4 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
            )}>
              <div className={cn(
                "font-medium text-sm transition-colors duration-300",
                isActive ? "text-gray-900" : "text-gray-600"
              )}>
                {step.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {step.subtitle}
              </div>
              
              {/* Progress Indicator */}
              {isCurrent && (
                <div className="mt-2">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full bg-gradient-to-r rounded-full transition-all duration-500", step.color)}
                      style={{ width: `${stepProgress * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Completion Check */}
            {isActive && index < activeStep && (
              <div className="absolute -left-1 -top-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-2 h-2 text-white" />
              </div>
            )}
          </div>
        );
      })}

      {/* Overall Progress Indicator */}
      <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border">
        <div className="text-xs font-medium text-gray-700 mb-1">전체 진행률</div>
        <div className="flex items-center space-x-2">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="text-xs font-bold text-gray-900 min-w-[32px]">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook for scroll-based animations
export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY < window.innerHeight * 3); // Hide after 3 viewport heights
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isVisible };
}