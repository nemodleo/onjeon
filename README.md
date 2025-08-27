# 테라곤 네비게이션 UI

여행자를 위한 종합 서비스 앱의 네비게이션 UI 구현

## 주요 기능

### 하단 네비게이션
- 홈
- 환전 
- 면세점
- VAT 환급
- 세관 신고

### 디자인 요구사항 준수
- ✅ 연한 색상 사용 금지 (연한 회색만 허용)
- ✅ 그라데이션 사용 금지
- ✅ 원색은 아이콘과 작은 섹션에만 사용
- ✅ 폰트 크기, 굵기, 밝기로 강약 조절
- ✅ 우측 프로그레스바 중앙 배치
- ✅ 반응형 프로그레스바 (공간 부족 시 숨김)
- ✅ 한글 우선 사용

## 개발 환경 설정

```bash
npm install
npm run dev
```

## 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사
- `npm run typecheck` - TypeScript 타입 검사

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (커스텀 디자인 시스템)
- Noto Sans KR 폰트