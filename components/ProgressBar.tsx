'use client'

import { useState, useEffect } from 'react'

interface ProgressBarProps {
  progress?: number
  showProgress?: boolean
}

export default function ProgressBar({ 
  progress = 0, 
  showProgress = true 
}: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setScreenWidth(width)
      
      // 화면이 너무 작으면 프로그레스바를 숨김 (768px 이하)
      if (width <= 768) {
        setIsVisible(false)
      } else {
        setIsVisible(showProgress)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [showProgress])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center">
        <div className="w-2 h-32 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
            style={{ 
              height: `${Math.min(Math.max(progress, 0), 100)}%`,
              transform: 'translateY(0)'
            }}
          />
        </div>
        {progress > 0 && (
          <span className="text-xs font-medium text-gray-700 mt-2">
            {Math.round(progress)}%
          </span>
        )}
      </div>
    </div>
  )
}