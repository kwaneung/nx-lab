# NxLab

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## 프로젝트 개요

NxLab은 다양한 신기술 실험과 코드 스니펫을 보관하기 위한 개인 연구소입니다. Nx 모노레포를 기반으로 새로운 기술들을 테스트하고 검증하는 테스트베드 역할을 합니다.

### 목적

- 새로운 기술 스택의 실험 및 검증
- 재사용 가능한 코드 스니펫 보관소
- 다양한 아키텍처 패턴 학습 및 적용
- Nx 모노레포를 활용한 효율적인 개발 환경 구축

## 프로젝트 구조

### 현재 구조

```
nx-lab/
├── apps/
│   ├── web-main/          # 메인 Next.js 애플리케이션
│   └── web-main-e2e/      # E2E 테스트 (Playwright)
├── libs/                  # 라이브러리들 (향후 확장 예정)
├── nx.json                # Nx 워크스페이스 설정
├── package.json           # 루트 패키지 설정
├── tsconfig.base.json     # TypeScript 기본 설정
└── pnpm-workspace.yaml    # pnpm 워크스페이스 설정
```

### Nx 표준 라이브러리 구조 (향후 확장 계획)

```
libs/
├── shared/                    # 전체 워크스페이스에서 공통으로 사용하는 라이브러리들
│   ├── ui/                    # [UI] 공통 프레젠테이션 컴포넌트 (Button, Modal, Input 등)
│   ├── utils/                 # [Utility] 공통 유틸리티 함수 (date, string, validation 등)
│   ├── types/                 # [Utility] 공통 타입 정의 및 인터페이스
│   ├── constants/             # [Utility] 공통 상수 및 환경 설정
│   └── data-access/           # [Data-access] 공통 API 클라이언트, HTTP 설정
└── feature/                   # 비즈니스 도메인별 기능 라이브러리들
    ├── auth/                  # [Feature] 인증 관련 (로그인/로그아웃 페이지, 가드 등)
    │   ├── data-access/       # [Data-access] 인증 API, 토큰 관리, 상태 관리
    │   └── ui/                # [UI] 인증 관련 UI 컴포넌트 (LoginForm, SignupForm)
    ├── user/                  # [Feature] 사용자 관리 기능
    │   ├── data-access/       # [Data-access] 사용자 API, 프로필 상태 관리
    │   └── ui/                # [UI] 사용자 관련 UI (UserProfile, UserList)
    └── dashboard/             # [Feature] 대시보드 기능
        ├── data-access/       # [Data-access] 대시보드 데이터 API
        └── ui/                # [UI] 대시보드 UI 컴포넌트들
```

### Nx 4가지 핵심 라이브러리 타입

#### 🎯 **Feature Libraries** (`feature/*`)

- **목적**: 특정 비즈니스 기능을 위한 컨테이너 컴포넌트와 페이지
- **포함**: 라우트 컴포넌트, 비즈니스 로직, 스마트 컴포넌트
- **예시**: 로그인 페이지, 대시보드 화면, 사용자 관리 화면
- **의존성**: UI, Data-access, Utility 라이브러리에 의존 가능

#### 🎨 **UI Libraries** (`*/ui`)

- **목적**: 순수한 프레젠테이션 컴포넌트들 (dumb components)
- **포함**: 재사용 가능한 UI 컴포넌트, 스타일링
- **예시**: Button, Modal, Input, Card, Table 등
- **의존성**: 다른 라이브러리에 의존하지 않음 (가장 하위 레벨)

#### 🔄 **Data-access Libraries** (`*/data-access`)

- **목적**: 외부 시스템과의 통신 및 상태 관리
- **포함**: API 호출, 상태 관리, 캐싱, WebSocket 등
- **예시**: UserService, AuthAPI, Redux store, React Query hooks
- **의존성**: Utility 라이브러리에만 의존

#### 🛠️ **Utility Libraries** (`*/utils`, `shared/types`, `shared/constants`)

- **목적**: 로우레벨 유틸리티와 공통 설정
- **포함**: 헬퍼 함수, 상수, 타입 정의, 설정값
- **예시**: 날짜 포맷터, 유효성 검사, API 상수, 타입 정의
- **의존성**: 다른 라이브러리에 의존하지 않음

### 라이브러리 의존성 규칙 (Nx 권장)

#### 전체 아키텍처 계층 구조

```
┌─────────────────────┐
│   Applications      │ ← 실행 가능한 앱들 (apps/*)
│  (apps/web-main,    │   모든 libs를 자유롭게 사용 가능
│   apps/api, etc.)   │
└──────────┬──────────┘
           ↓ can use any libs
═══════════════════════════════════════════════════════
             libs/ 폴더 내부 의존성 규칙
═══════════════════════════════════════════════════════
┌─────────────────────┐
│  Feature Libraries  │ ← libs 내에서 최상위 (비즈니스 로직)
│   (feature/*)       │
└──────────┬──────────┘
           ↓ can depend on
┌──────────────────────────────────────────┐
│  UI Libraries  +  Data-access Libraries  │ ← 중간 레벨
│    (*/ui)           (*/data-access)      │
└────────────────┬─────────────────────────┘
                 ↓ can depend on
┌─────────────────────┐
│  Utility Libraries  │ ← 최하위 (순수 함수, 상수)
│ (*/utils, types,    │
│  constants)         │
└─────────────────────┘
```

#### 📱 **Apps vs Libs 의존성**

**Apps (애플리케이션들)**:

- `apps/` 폴더의 모든 애플리케이션은 **libs의 모든 라이브러리를 자유롭게 사용 가능**
- 실행 가능한 최종 제품 (웹앱, API 서버, 모바일 앱 등)
- 라이브러리들을 조합해서 최종 사용자 경험을 제공

**Libs (라이브러리들)**:

- `libs/` 폴더 내부에서만 **계층적 의존성 규칙**을 따름
- 다른 라이브러리들에게 기능을 제공하는 재사용 가능한 코드
- **libs끼리는 서로 엄격한 의존성 규칙을 따름**

```typescript
// ✅ apps에서는 libs의 어떤 라이브러리든 자유롭게 import 가능
// apps/web-main/src/app/page.tsx
import { LoginPage } from '@nx-lab/feature/auth'; // Feature lib
import { Button } from '@nx-lab/shared/ui'; // UI lib
import { AuthService } from '@nx-lab/feature/auth/data-access'; // Data-access lib
import { formatDate } from '@nx-lab/shared/utils'; // Utility lib

// ✅ apps/api/src/main.ts
import { UserController } from '@nx-lab/feature/user'; // Feature lib 직접 사용
import { DatabaseService } from '@nx-lab/shared/data-access'; // Data-access lib 직접 사용
```

#### 🚫 **금지된 의존성 (libs 폴더 내부에서만)**

- **UI → Feature**: ❌ UI 컴포넌트가 비즈니스 로직을 알면 안됨
- **Data-access → Feature**: ❌ API 레이어가 비즈니스 로직을 알면 안됨
- **Utility → 상위 레벨**: ❌ 유틸리티는 독립적이어야 함
- **UI ↔ Data-access**: ❌ 서로 직접 의존하면 안됨

#### ✅ **허용된 의존성 (libs 폴더 내부에서만, 단방향)**

##### Feature Libraries가 의존할 수 있는 것들:

```typescript
// ✅ Feature에서 UI 컴포넌트 사용
import { Button } from '@nx-lab/shared/ui';
import { LoginForm } from '@nx-lab/feature/auth/ui';

// ✅ Feature에서 Data-access 사용
import { AuthService } from '@nx-lab/feature/auth/data-access';
import { ApiClient } from '@nx-lab/shared/data-access';

// ✅ Feature에서 Utility 사용
import { formatDate } from '@nx-lab/shared/utils';
import { API_ENDPOINTS } from '@nx-lab/shared/constants';
```

##### UI Libraries가 의존할 수 있는 것들:

```typescript
// ✅ UI에서 Utility만 사용 가능
import { cn } from '@nx-lab/shared/utils'; // 클래스명 유틸리티
import { COLORS } from '@nx-lab/shared/constants'; // 색상 상수

// ❌ UI에서 Feature나 Data-access 사용 금지
// import { AuthService } from '@nx-lab/feature/auth/data-access'; // 금지!
```

##### Data-access Libraries가 의존할 수 있는 것들:

```typescript
// ✅ Data-access에서 Utility만 사용 가능
import { ApiClient } from '@nx-lab/shared/data-access'; // 공통 HTTP 클라이언트
import { API_ENDPOINTS } from '@nx-lab/shared/constants'; // API URL들

// ❌ Data-access에서 Feature나 UI 사용 금지
// import { LoginPage } from '@nx-lab/feature/auth'; // 금지!
```

#### 📋 **Apps와 Libs 의존성 실제 예시**

##### Apps에서 Libs 사용 (자유롭게 모든 라이브러리 사용 가능):

```typescript
// apps/web-main/src/app/login/page.tsx (애플리케이션 코드)
import { LoginPage } from '@nx-lab/feature/auth'; // ✅ Feature lib 직접 사용
import { Button } from '@nx-lab/shared/ui'; // ✅ UI lib 직접 사용
import { AuthService } from '@nx-lab/feature/auth/data-access'; // ✅ Data-access lib 직접 사용
import { formatDate } from '@nx-lab/shared/utils'; // ✅ Utility lib 직접 사용
```

##### Libs 내부에서의 계층적 의존성 (엄격한 규칙):

```typescript
// libs/feature/auth/src/lib/login-page.tsx (Feature 라이브러리)
import { LoginForm } from '@nx-lab/feature/auth/ui'; // ✅ 같은 도메인 UI
import { Button } from '@nx-lab/shared/ui'; // ✅ 공통 UI
import { AuthService } from '@nx-lab/feature/auth/data-access'; // ✅ 같은 도메인 Data-access

// libs/feature/auth/ui/src/lib/login-form.tsx (UI 라이브러리)
import { cn } from '@nx-lab/shared/utils'; // ✅ Utility만 사용 가능
// import { AuthService } from '../data-access'; // ❌ UI에서 Data-access 사용 금지!

// libs/feature/auth/data-access/src/lib/auth.service.ts (Data-access 라이브러리)
import { ApiClient } from '@nx-lab/shared/data-access'; // ✅ 공통 API 클라이언트 (Utility)
import { API_ENDPOINTS } from '@nx-lab/shared/constants'; // ✅ 상수 (Utility)
// import { LoginForm } from '../ui'; // ❌ Data-access에서 UI 사용 금지!
```

#### 🎯 **이 규칙의 장점**

1. **순환 의존성 방지**: 라이브러리 간 무한 참조 방지
2. **명확한 책임 분리**: 각 레이어의 역할이 명확함
3. **테스트 용이성**: 하위 레벨부터 독립적으로 테스트 가능
4. **재사용성 향상**: UI와 Data-access를 독립적으로 재사용 가능
5. **코드 품질 향상**: 강제된 구조로 인해 더 나은 아키텍처

## 기술 스택

- **모노레포**: Nx 21.3.11
- **프레임워크**: Next.js 15.4.6
- **언어**: TypeScript 5.9.2
- **스타일링**: Tailwind CSS 4.1.11
- **테스팅**: Jest, Playwright
- **린팅**: ESLint, Prettier
- **패키지 매니저**: pnpm

## 개발 가이드

### 프로젝트 실행

개발 서버 시작:

```sh
pnpm nx dev web-main
```

프로덕션 빌드:

```sh
pnpm nx build web-main
```

E2E 테스트 실행:

```sh
pnpm nx e2e web-main-e2e
```

### 새 프로젝트 추가

새 Next.js 애플리케이션 생성:

```sh
pnpm nx g @nx/next:app <app-name>
```

새 React 라이브러리 생성:

```sh
pnpm nx g @nx/react:lib <lib-name>
```

### 프로젝트 정보 확인

사용 가능한 타겟 확인:

```sh
pnpm nx show project web-main
```

프로젝트 그래프 시각화:

```sh
pnpm nx graph
```

## 개발 워크플로우

### 신기술 실험 프로세스

1. **컨셉 검증**: 새로운 기술에 대한 기초 연구 및 학습
2. **프로토타입 개발**: 간단한 예제를 통한 기능 검증
3. **라이브러리화**: 재사용 가능한 형태로 추상화
4. **문서화**: 학습 내용과 사용법 정리
5. **테스트**: 단위 테스트 및 통합 테스트 작성

### 코드 스니펫 관리

- **카테고리별 분류**: 기술 스택 및 용도에 따른 체계적 관리
- **문서화**: 각 스니펫의 용도, 사용법, 주의사항 기록
- **테스트 케이스**: 스니펫의 정상 작동 보장을 위한 테스트 작성

## 향후 계획

### 단기 목표

- [ ] 공통 UI 라이브러리 구축
- [ ] 유용한 유틸리티 함수 모음 작성
- [ ] 타입 정의 라이브러리 구성

### 중기 목표

- [ ] 마이크로프론트엔드 아키텍처 실험
- [ ] 모듈 페더레이션 적용
- [ ] 다양한 상태 관리 솔루션 비교 연구

### 장기 목표

- [ ] 멀티 플랫폼 지원 (웹, 모바일, 데스크톱)
- [ ] 자동화된 테스트 및 배포 파이프라인 구축
- [ ] 코드 품질 자동 검사 시스템 도입

## 유용한 링크

- [Nx 문서](https://nx.dev)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Playwright 문서](https://playwright.dev)

## 커뮤니티

Nx 커뮤니티에 참여하세요:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [블로그](https://nx.dev/blog)
