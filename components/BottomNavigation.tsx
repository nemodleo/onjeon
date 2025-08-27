'use client'

import { useState } from 'react'

interface NavItem {
  id: string
  label: string
  icon: string
  path: string
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: '홈',
    icon: '🏠',
    path: '/'
  },
  {
    id: 'exchange',
    label: '환전',
    icon: '💱',
    path: '/exchange'
  },
  {
    id: 'duty-free',
    label: '면세점',
    icon: '🛍️',
    path: '/duty-free'
  },
  {
    id: 'vat-refund',
    label: 'VAT 환급',
    icon: '💰',
    path: '/vat-refund'
  },
  {
    id: 'customs',
    label: '세관 신고',
    icon: '📋',
    path: '/customs'
  }
]

export default function BottomNavigation() {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-4 py-2">
      <div className="flex justify-around items-center max-w-screen-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 ${
              activeItem === item.id
                ? 'text-gray-900'
                : 'text-gray-600'
            }`}
          >
            <span 
              className={`text-xl mb-1 ${
                activeItem === item.id ? 'primary-blue' : ''
              }`}
            >
              {item.icon}
            </span>
            <span 
              className={`text-xs font-medium leading-tight text-center ${
                activeItem === item.id 
                  ? 'font-bold text-gray-900' 
                  : 'font-normal text-gray-600'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}