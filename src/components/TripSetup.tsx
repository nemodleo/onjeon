'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTripStore } from '@/store/trip';
import { useWalletStore } from '@/store/wallet';
import { generateId } from '@/lib/utils';
import { Trip } from '@/types';

const DUTY_FREE_LIMITS = {
  'KR-US': 800,  // 한국 → 미국
  'KR-JP': 600,  // 한국 → 일본
  'KR-EU': 700,  // 한국 → 유럽
  'US-KR': 600,  // 미국 → 한국
  'JP-KR': 500,  // 일본 → 한국
  'EU-KR': 550,  // 유럽 → 한국
};

const COUNTRIES = [
  { code: 'KR', name: '대한민국', flag: '🇰🇷' },
  { code: 'US', name: '미국', flag: '🇺🇸' },
  { code: 'JP', name: '일본', flag: '🇯🇵' },
  { code: 'EU', name: '독일', flag: '🇩🇪' },
  { code: 'FR', name: '프랑스', flag: '🇫🇷' },
  { code: 'UK', name: '영국', flag: '🇬🇧' },
];

export function TripSetupForm() {
  const { user } = useWalletStore();
  const { setCurrentTrip } = useTripStore();
  
  const [fromCountry, setFromCountry] = useState('KR');
  const [toCountry, setToCountry] = useState('US');
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );

  const calculateDutyFreeLimit = () => {
    const key = `${fromCountry}-${toCountry}`;
    return DUTY_FREE_LIMITS[key as keyof typeof DUTY_FREE_LIMITS] || 600;
  };

  const handleCreateTrip = () => {
    if (!user) return;

    const trip: Trip = {
      id: generateId(),
      userId: user.id,
      fromCountry: COUNTRIES.find(c => c.code === fromCountry)?.name || fromCountry,
      toCountry: COUNTRIES.find(c => c.code === toCountry)?.name || toCountry,
      departureDate: new Date(departureDate),
      returnDate: new Date(returnDate),
      dutyFreeLimit: calculateDutyFreeLimit(),
      usedAmount: 0,
      status: 'active',
      createdAt: new Date(),
    };

    setCurrentTrip(trip);
  };

  const fromCountryData = COUNTRIES.find(c => c.code === fromCountry);
  const toCountryData = COUNTRIES.find(c => c.code === toCountry);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>여행 설정</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">출발국</label>
            <select
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
              className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm"
            >
              {COUNTRIES.map(country => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">목적지</label>
            <select
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
              className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm"
            >
              {COUNTRIES.filter(c => c.code !== fromCountry).map(country => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">출발일</label>
            <Input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">귀국일</label>
            <Input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>

        {/* 여행 정보 미리보기 */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-sm text-blue-800 font-medium mb-2">여행 정보</div>
          <div className="space-y-1 text-sm text-blue-600">
            <div className="flex items-center justify-between">
              <span>{fromCountryData?.flag} {fromCountryData?.name}</span>
              <span>→</span>
              <span>{toCountryData?.flag} {toCountryData?.name}</span>
            </div>
            <div>
              여행 기간: {Math.ceil((new Date(returnDate).getTime() - new Date(departureDate).getTime()) / (1000 * 60 * 60 * 24))}일
            </div>
            <div className="font-medium">
              면세 한도: ${calculateDutyFreeLimit()}
            </div>
          </div>
        </div>

        <Button onClick={handleCreateTrip} className="w-full">
          여행 시작하기
        </Button>
      </CardContent>
    </Card>
  );
}

export function TripHistory() {
  // 모의 여행 기록 데이터
  const tripHistory = [
    {
      id: '1',
      fromCountry: '대한민국',
      toCountry: '일본',
      departureDate: new Date('2024-01-15'),
      returnDate: new Date('2024-01-22'),
      dutyFreeLimit: 600,
      usedAmount: 543,
      status: 'completed'
    },
    {
      id: '2',
      fromCountry: '대한민국',
      toCountry: '미국',
      departureDate: new Date('2023-11-10'),
      returnDate: new Date('2023-11-20'),
      dutyFreeLimit: 800,
      usedAmount: 756,
      status: 'completed'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 여행 기록</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tripHistory.map((trip) => (
            <div key={trip.id} className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">
                  {trip.fromCountry} → {trip.toCountry}
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  trip.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {trip.status === 'completed' ? '완료' : '진행중'}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 space-y-1">
                <div>
                  {trip.departureDate.toLocaleDateString('ko-KR')} ~ {trip.returnDate.toLocaleDateString('ko-KR')}
                </div>
                <div className="flex justify-between">
                  <span>면세 사용:</span>
                  <span>${trip.usedAmount} / ${trip.dutyFreeLimit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-blue-500 h-1 rounded-full"
                    style={{ width: `${(trip.usedAmount / trip.dutyFreeLimit) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}