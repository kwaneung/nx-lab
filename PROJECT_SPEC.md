# 🏗️ TODO → 팀 대시보드 진화 프로젝트

> NX 모노레포 + 모듈 페더레이션을 활용한 마이크로프론트엔드 아키텍처로 구축하는 6주간의 개발 계획

---

## 🎯 **프로젝트 개요**

### **🚀 프로젝트 목표**

- 간단한 TODO 앱에서 시작해서 **팀 협업 대시보드**로 진화
- **마이크로프론트엔드** 아키텍처 실전 경험
- **모던 웹 개발** 기술 스택 마스터
- **실무 적용 가능한** 포트폴리오 구축

### **✨ 핵심 특징**

- 🔐 **인증 우선**: 1주차부터 사용자 인증으로 확장성 확보
- 🏗️ **모듈 페더레이션**: 도메인별 앱 분리로 독립적 개발/배포
- ⚡ **실시간 협업**: Supabase Realtime으로 실시간 기능
- 🎨 **디자인 시스템**: 공통 UI 라이브러리로 일관성 확보

---

## 🏗️ **시스템 아키텍처**

### **📁 모듈 페더레이션 구조**

```
📁 nx-lab (NX 모노레포)
├── 🏠 apps/web-main (Shell App - Host)
│   ├── 글로벌 라우팅 & 레이아웃
│   ├── 사용자 인증 시스템
│   ├── 전역 상태 관리
│   ├── Module Federation Host 설정
│   └── 공통 헤더/네비게이션
│
├── 📝 apps/todo-app (Remote App)
│   ├── TODO CRUD 기능
│   ├── 검색/필터링/정렬
│   ├── 개인 통계 대시보드
│   └── 카테고리/우선순위 관리
│
├── 📊 apps/project-app (Remote App)
│   ├── 프로젝트 생성/관리
│   ├── 진행률 시각화
│   ├── 파일 업로드/관리
│   └── 프로젝트 템플릿
│
├── 👥 apps/team-app (Remote App)
│   ├── 팀 생성/관리
│   ├── 팀원 초대/권한 관리
│   ├── 실시간 협업 기능
│   └── 팀 성과 분석
│
├── 🎨 libs/shared-ui
│   ├── 디자인 시스템 (shadcn/ui 기반)
│   ├── 공통 UI 컴포넌트
│   ├── 테마 & 스타일 관리
│   └── 아이콘/애셋
│
├── 🛠️ libs/shared-utils
│   ├── Supabase 클라이언트
│   ├── API 유틸리티
│   ├── 공통 훅 (useAuth, useRealtime)
│   └── 헬퍼 함수
│
├── 🗄️ libs/shared-types
│   ├── TypeScript 타입 정의
│   ├── API 인터페이스
│   ├── 도메인 모델
│   └── 공통 Enums
│
└── 🧪 apps/*-e2e
    ├── web-main-e2e (통합 E2E 테스트)
    ├── todo-app-e2e (TODO 기능 테스트)
    ├── project-app-e2e (프로젝트 기능 테스트)
    └── team-app-e2e (팀 협업 테스트)
```

### **⚡ 모듈 페더레이션의 장점**

- ✅ **독립적 개발**: 도메인별 독립적인 개발 사이클
- ✅ **독립적 배포**: 앱별 독립 배포로 위험도 분산
- ✅ **팀 확장성**: 팀별 담당 앱 분리로 협업 효율성
- ✅ **성능 최적화**: 필요한 모듈만 동적 로딩
- ✅ **코드 재사용**: 공통 라이브러리로 중복 제거
- ✅ **테스트 격리**: 앱별 독립적인 테스트 환경
- ✅ **실무 경험**: 기업급 마이크로프론트엔드 아키텍처

---

## 🔐 **인증 시스템 전략**

### **💡 왜 1주차부터 인증이 필요한가?**

- 🗄️ **데이터 소유권**: 사용자별 데이터 분리 (나중 마이그레이션 방지)
- 🛡️ **보안 기반**: Supabase RLS로 데이터베이스 레벨 보안
- 🚀 **확장성**: 개인 → 팀 협업으로 자연스러운 진화
- 📊 **개인화**: 사용자별 통계 및 맞춤 기능

### **📅 인증 기능 진화 로드맵**

```
🔐 인증 시스템 6주 진화
├── 1주차: 기본 인증 (이메일/패스워드) + RLS
├── 2주차: OAuth (Google, GitHub) + 프로필 관리
├── 3주차: 프로젝트-사용자 연결 + 공유 권한
├── 4주차: 파일 업로드 권한 + 댓글 작성자
├── 5주차: 팀 초대/관리 + 역할 기반 권한
└── 6주차: 실시간 협업 + 온라인 상태 표시
```

### **🛡️ Supabase Auth 선택 이유**

- ✅ **빠른 구현**: 복잡한 인증 로직 없이 즉시 사용
- ✅ **보안성**: JWT, 해싱, 세션 관리 자동화
- ✅ **OAuth 통합**: 주요 플랫폼 간편 로그인 지원
- ✅ **RLS 연동**: DB 레벨 권한 관리 자동화
- ✅ **실시간**: 인증 상태 변화 즉시 감지
- ✅ **확장성**: 팀 기능까지 완벽 지원

---

## 📅 **6주 개발 로드맵**

```
🚀 전체 개발 일정 (인증 우선 + 모듈 페더레이션)
├── 1주차: 기초 인프라 + TODO MVP + 기본 인증
├── 2주차: TODO 고급 기능 + OAuth + 프로필 시스템
├── 3주차: 프로젝트 앱 분리 + 사용자 연동
├── 4주차: 파일 시스템 + 댓글 + 권한 관리
├── 5주차: 팀 앱 분리 + 협업 기능
└── 6주차: 실시간 기능 + 성능 최적화 + 배포
```

---

## 🚀 **1단계: 기초 인프라 + TODO MVP + 기본 인증** (1주차)

> **핵심 전략**: 탄탄한 기초 구축 - 인증, 공통 라이브러리, 기본 기능

### **📅 Day 1-2: 환경 설정**

#### **🛠️ 개발 환경 구축**

- [ ] Supabase 프로젝트 생성 및 기본 설정
- [ ] 환경변수 설정 (.env.local, .env.example)
- [ ] NX 라이브러리 생성
  ```bash
  nx g @nx/react:library shared-types --bundler=vite
  nx g @nx/react:library shared-utils --bundler=vite
  nx g @nx/react:library shared-ui --bundler=vite
  ```

#### **🗄️ 기본 데이터베이스 설정**

- [ ] Supabase Auth 활성화
- [ ] 기본 테이블 생성 및 RLS 설정

  ```sql
  -- 사용자 프로필 테이블
  CREATE TABLE profiles (
    id UUID REFERENCES auth.users PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- 사용자별 TODO 테이블
  CREATE TABLE todos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  -- Row Level Security 설정
  ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
  ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

  -- 사용자별 데이터 접근 정책
  CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

  CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

  CREATE POLICY "Users can manage own todos" ON todos
    FOR ALL USING (auth.uid() = user_id);

  -- 실시간 구독 활성화
  ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
  ALTER PUBLICATION supabase_realtime ADD TABLE todos;

  -- 자동 프로필 생성 트리거
  CREATE OR REPLACE FUNCTION handle_new_user()
  RETURNS TRIGGER AS $$
  BEGIN
    INSERT INTO profiles (id, email, name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'name');
    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql SECURITY DEFINER;

  CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE handle_new_user();
  ```

### **📅 Day 3-4: 공통 라이브러리 구축**

#### **🗄️ shared-types 구축**

- [ ] 기본 타입 정의

  ```typescript
  // User 관련 타입
  export interface User {
    id: string;
    email: string;
    name?: string;
    avatar_url?: string;
  }

  // TODO 관련 타입
  export interface Todo {
    id: string;
    user_id: string;
    title: string;
    description?: string;
    completed: boolean;
    created_at: string;
    updated_at: string;
  }

  export type TodoCreate = Omit<Todo, 'id' | 'user_id' | 'created_at' | 'updated_at'>;
  export type TodoUpdate = Partial<TodoCreate>;

  // API 응답 타입
  export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
  }
  ```

#### **🛠️ shared-utils 구축**

- [ ] Supabase 클라이언트 설정

  ```typescript
  // supabase.ts
  import { createClient } from '@supabase/supabase-js';

  export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  ```

- [ ] 인증 헬퍼 함수
  ```typescript
  // auth.ts
  export const authHelpers = {
    signUp: (email: string, password: string) => supabase.auth.signUp({ email, password }),
    signIn: (email: string, password: string) =>
      supabase.auth.signInWithPassword({ email, password }),
    signOut: () => supabase.auth.signOut(),
    getUser: () => supabase.auth.getUser(),
  };
  ```
- [ ] TODO 서비스 함수
  ```typescript
  // todos.ts
  export const todoService = {
    getAll: () => supabase.from('todos').select('*').order('created_at', { ascending: false }),
    create: (todo: TodoCreate) => supabase.from('todos').insert(todo),
    update: (id: string, todo: TodoUpdate) => supabase.from('todos').update(todo).eq('id', id),
    delete: (id: string) => supabase.from('todos').delete().eq('id', id),
  };
  ```
- [ ] 실시간 구독 훅
  ```typescript
  // useRealtime.ts
  export const useTodos = () => {
    // Supabase 실시간 구독 로직
  };
  ```

#### **🎨 shared-ui 기초 구축**

- [ ] Tailwind CSS 설정 및 기본 스타일
- [ ] 기본 컴포넌트 구축
  - [ ] `Button`: 다양한 variant와 size 지원
  - [ ] `Input`: 라벨, 에러 상태 포함
  - [ ] `Card`: 그림자와 hover 효과
  - [ ] `Checkbox`: 커스텀 스타일
  - [ ] `Layout`: 기본 페이지 레이아웃
  - [ ] `LoadingSpinner`: 로딩 상태 표시

### **📅 Day 5-7: 인증 + TODO 기능 구현**

#### **🔐 인증 시스템 구현**

- [ ] 인증 상태 관리 (AuthContext)
- [ ] 인증 UI 컴포넌트
  - [ ] `LoginForm`: 로그인 폼
  - [ ] `SignupForm`: 회원가입 폼
  - [ ] `AuthModal`: 로그인/회원가입 모달
  - [ ] `UserMenu`: 사용자 드롭다운 메뉴
  - [ ] `ProtectedRoute`: 인증 보호 래퍼
- [ ] 인증 페이지 라우팅 설정

#### **✅ TODO 기능 구현 (web-main 내)**

- [ ] TODO 관련 페이지 생성 (`/todos`)
- [ ] TODO 컴포넌트 구현
  - [ ] `TodoForm`: 새 할일 입력
  - [ ] `TodoItem`: 개별 할일 표시 + 편집
  - [ ] `TodoList`: 할일 목록 + 필터
  - [ ] `TodoStats`: 완료율 통계
- [ ] CRUD 기능 연동 (생성, 읽기, 수정, 삭제)
- [ ] 실시간 동기화 적용

#### **🧪 기본 테스트 구축**

- [ ] 인증 플로우 E2E 테스트
- [ ] TODO CRUD 기능 E2E 테스트
- [ ] 공통 컴포넌트 유닛 테스트

### **🎯 1주차 완료 목표**

```
✅ 완성된 TODO 앱 (인증 포함)
├── 사용자 회원가입/로그인
├── 사용자별 TODO 관리
├── 실시간 동기화
├── 반응형 UI
└── 기본 E2E 테스트
```

---

## 📊 **2단계: TODO 고급 기능 + OAuth + 프로필 시스템** (2주차)

> **핵심 전략**: 기본 기능을 확장하고 사용자 경험 개선

### **🔐 인증 시스템 확장**

- [ ] OAuth 인증 추가 (Google, GitHub)
- [ ] 프로필 관리 페이지 구현
- [ ] 계정 연동 기능 (이메일 + OAuth)
- [ ] 프로필 이미지 업로드 (Supabase Storage)
- [ ] 계정 설정 (비밀번호 변경, 계정 삭제)
- [ ] 이메일 인증 및 비밀번호 재설정

### **🔥 TODO 기능 확장**

- [ ] 카테고리 시스템 구현
- [ ] 우선순위 설정 (High, Medium, Low)
- [ ] 마감일 설정 및 만료 알림
- [ ] 실시간 검색 기능 (디바운싱 적용)
- [ ] 고급 필터링 (완료여부, 카테고리, 우선순위, 날짜)
- [ ] 정렬 기능 (생성일, 마감일, 우선순위)
- [ ] 드래그앤드롭으로 순서 변경
- [ ] 벌크 작업 (일괄 완료, 삭제, 카테고리 변경)

### **📊 개인 대시보드 구현**

- [ ] 완료율 통계 차트
- [ ] 카테고리별 분포 차트
- [ ] 일일/주간/월간 활동 추이
- [ ] 생산성 지표 (완료 속도, 지연율 등)

### **🎨 디자인 시스템 확장**

- [ ] `SearchBar`: 실시간 검색 + 필터 통합
- [ ] `FilterPanel`: 고급 필터 옵션
- [ ] `Badge`: 카테고리/우선순위 표시
- [ ] `DatePicker`: 마감일 선택
- [ ] `Chart`: 다양한 차트 컴포넌트
- [ ] `Modal`: 확인, 정보, 경고 모달
- [ ] `Dropdown`: 다중 선택 지원
- [ ] `DragDropList`: 순서 변경 리스트
- [ ] `BulkActions`: 일괄 작업 툴바

### **🗄️ DB 스키마 확장**

- [ ] todos 테이블 확장
  ```sql
  ALTER TABLE todos ADD COLUMN category_id UUID REFERENCES categories(id);
  ALTER TABLE todos ADD COLUMN priority VARCHAR(10) DEFAULT 'medium';
  ALTER TABLE todos ADD COLUMN due_date TIMESTAMP;
  ALTER TABLE todos ADD COLUMN order_index INTEGER;
  ALTER TABLE todos ADD COLUMN tags TEXT[];
  ```
- [ ] categories 테이블 생성

  ```sql
  CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users NOT NULL,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(7) DEFAULT '#3b82f6',
    icon VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
  );

  ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
  CREATE POLICY "Users can manage own categories" ON categories
    FOR ALL USING (auth.uid() = user_id);
  ```

---

## 📁 **3단계: 프로젝트 관리 앱 분리** (3주차)

> **핵심 전략**: Module Federation 도입으로 첫 번째 Remote App 분리

### **🏗️ Module Federation 설정**

- [ ] `@nx/webpack` 플러그인 설치 및 설정
- [ ] web-main을 Host App으로 설정
- [ ] project-app Remote App 생성
- [ ] Module Federation 설정

  ```javascript
  // project-app webpack.config.js
  const ModuleFederationPlugin = require('@module-federation/webpack');

  module.exports = {
    plugins: [
      new ModuleFederationPlugin({
        name: 'projectApp',
        filename: 'remoteEntry.js',
        exposes: {
          './ProjectModule': './src/app/project-module',
        },
        shared: ['react', 'react-dom', '@shared/ui', '@shared/utils'],
      }),
    ],
  };
  ```

### **📂 프로젝트 앱 기능 구현**

- [ ] 프로젝트 CRUD 기능
  - [ ] 프로젝트 생성/편집/삭제
  - [ ] 프로젝트 상태 관리 (계획중, 진행중, 완료, 보류)
  - [ ] 프로젝트 설명 및 목표 설정
- [ ] 프로젝트별 TODO 그룹핑
- [ ] 프로젝트 진행률 시각화
- [ ] 프로젝트 타임라인 뷰
- [ ] 프로젝트 대시보드 (여러 프로젝트 한눈에)
- [ ] 프로젝트 템플릿 시스템

### **🔄 앱 간 데이터 연동**

- [ ] TODO-Project 관계 설정
- [ ] 크로스 앱 상태 관리 (Zustand 전역 store)
- [ ] 이벤트 기반 통신 (Custom Events)

### **🎨 프로젝트 전용 UI 컴포넌트**

- [ ] `ProjectCard`: 프로젝트 요약 카드
- [ ] `ProjectForm`: 프로젝트 생성/편집 폼
- [ ] `ProgressChart`: 진행률 시각화 (원형, 막대)
- [ ] `ProjectTimeline`: 간트 차트 스타일 타임라인
- [ ] `ProjectDashboard`: 여러 프로젝트 대시보드
- [ ] `TemplateSelector`: 프로젝트 템플릿 선택

### **🗄️ DB 스키마 확장**

- [ ] projects 테이블 생성

  ```sql
  CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'active',
    priority VARCHAR(10) DEFAULT 'medium',
    start_date DATE,
    end_date DATE,
    color VARCHAR(7) DEFAULT '#3b82f6',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
  CREATE POLICY "Users can manage own projects" ON projects
    FOR ALL USING (auth.uid() = user_id);

  -- todos 테이블에 project 연결
  ALTER TABLE todos ADD COLUMN project_id UUID REFERENCES projects(id);
  ```

---

## 📎 **4단계: 파일 시스템 + 댓글 + 권한 관리** (4주차)

> **핵심 전략**: 협업을 위한 기본 인프라 구축

### **📁 파일 관리 시스템**

- [ ] Supabase Storage 버킷 설정
- [ ] 파일 업로드 UI 컴포넌트
  - [ ] `FileUpload`: 드래그앤드롭 업로드
  - [ ] `FilePreview`: 파일 미리보기 (이미지, PDF)
  - [ ] `FileList`: 첨부 파일 목록
- [ ] 파일 권한 관리 (개인, 프로젝트별)
- [ ] 파일 크기 제한 및 타입 검증
- [ ] 이미지 자동 리사이징

### **💬 댓글 시스템**

- [ ] TODO/프로젝트별 댓글 기능
- [ ] 실시간 댓글 업데이트
- [ ] 댓글 CRUD (생성, 편집, 삭제)
- [ ] 댓글 스레드 (대댓글)
- [ ] 멘션 기능 (@사용자명)
- [ ] 댓글 UI 컴포넌트
  - [ ] `CommentSection`: 댓글 영역 전체
  - [ ] `CommentForm`: 댓글 작성 폼
  - [ ] `CommentItem`: 개별 댓글
  - [ ] `CommentThread`: 댓글 스레드

### **🔒 권한 관리 시스템**

- [ ] 리소스별 권한 설정 (개인, 공유, 공개)
- [ ] 프로젝트 공유 기능
- [ ] 권한 레벨 정의 (소유자, 편집자, 뷰어)
- [ ] 권한 기반 UI 렌더링

### **🗄️ DB 스키마 확장**

- [ ] 파일 시스템 테이블
  ```sql
  CREATE TABLE attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users NOT NULL,
    todo_id UUID REFERENCES todos(id),
    project_id UUID REFERENCES projects(id),
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_size INTEGER,
    mime_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
  );
  ```
- [ ] 댓글 시스템 테이블
  ```sql
  CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users NOT NULL,
    todo_id UUID REFERENCES todos(id),
    project_id UUID REFERENCES projects(id),
    parent_id UUID REFERENCES comments(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );
  ```

---

## 👥 **5단계: 팀 협업 앱 분리** (5주차)

> **핵심 전략**: 개인 도구에서 팀 협업 도구로 진화

### **🏗️ 팀 앱 생성 및 연동**

- [ ] team-app Remote App 생성
- [ ] Module Federation으로 web-main에 통합
- [ ] 팀 관련 독립 라우팅 설정

### **👥 팀 관리 기능**

- [ ] 팀 생성/편집/삭제
- [ ] 팀원 초대 시스템 (이메일 초대)
- [ ] 팀원 역할 관리 (Owner, Admin, Member)
- [ ] 팀원 권한 설정 (프로젝트별 접근 권한)
- [ ] 팀 설정 및 프로필

### **🔄 협업 기능**

- [ ] 팀 프로젝트 공유
- [ ] 팀원간 TODO 할당
- [ ] 팀 내 실시간 알림
- [ ] 팀 활동 피드
- [ ] 팀 통계 및 리포트

### **🎨 팀 협업 UI 컴포넌트**

- [ ] `TeamInvite`: 팀원 초대 모달
- [ ] `MemberList`: 팀원 목록 + 권한 관리
- [ ] `RoleSelector`: 역할 선택 드롭다운
- [ ] `TeamStats`: 팀 성과 대시보드
- [ ] `ActivityFeed`: 실시간 활동 피드
- [ ] `AssigneeSelect`: 담당자 배정

### **🗄️ 팀 관련 DB 스키마**

- [ ] 팀 시스템 테이블

  ```sql
  -- 팀 테이블
  CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    avatar_url TEXT,
    owner_id UUID REFERENCES auth.users NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  );

  -- 팀 멤버십 테이블
  CREATE TABLE team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID REFERENCES teams(id) NOT NULL,
    user_id UUID REFERENCES auth.users NOT NULL,
    role VARCHAR(20) DEFAULT 'member', -- owner, admin, member
    permissions JSONB DEFAULT '{}',
    joined_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(team_id, user_id)
  );

  -- 기존 테이블에 팀 연결
  ALTER TABLE projects ADD COLUMN team_id UUID REFERENCES teams(id);
  ALTER TABLE todos ADD COLUMN assignee_id UUID REFERENCES auth.users;
  ```

---

## ⚡ **6단계: 실시간 기능 + 성능 최적화 + 배포** (6주차)

> **핵심 전략**: 완성도 높이기 - 실시간, 성능, 배포

### **🔔 실시간 협업 기능**

- [ ] 실시간 알림 시스템
- [ ] 온라인 사용자 상태 표시
- [ ] 실시간 댓글/채팅
- [ ] 동시 편집 충돌 방지
- [ ] 브라우저 푸시 알림
- [ ] 이메일 알림 (중요한 이벤트)

### **📊 고급 대시보드**

- [ ] 팀 성과 분석 대시보드
- [ ] 칸반보드 뷰 (드래그앤드롭)
- [ ] 팀 캘린더 뷰
- [ ] 생산성 리포트 자동 생성
- [ ] 데이터 내보내기 (CSV, PDF)

### **⚡ 성능 최적화**

- [ ] 코드 스플리팅 최적화
- [ ] 이미지 최적화 (Next.js Image)
- [ ] API 응답 캐싱 (React Query)
- [ ] 실시간 구독 최적화
- [ ] 번들 크기 분석 및 최적화
- [ ] Lighthouse 성능 점수 90+ 달성

### **🚀 배포 및 모니터링**

- [ ] 각 앱별 독립 배포 파이프라인
- [ ] Vercel/Netlify 배포 설정
- [ ] 환경별 설정 (dev, staging, prod)
- [ ] 에러 모니터링 (Sentry)
- [ ] 성능 모니터링 (Web Vitals)
- [ ] 사용자 행동 분석 (Google Analytics)

### **🧪 최종 테스트 및 QA**

- [ ] 전체 시나리오 E2E 테스트
- [ ] 모바일 반응형 테스트
- [ ] 크로스 브라우저 테스트
- [ ] 접근성 테스트 (WCAG 2.1 AA)
- [ ] 보안 검토 (OWASP Top 10)
- [ ] 성능 테스트 (Lighthouse CI)

---

## 🛠️ **기술 스택 구성**

### **Frontend (Micro Frontend)**

- ✅ **NX 19+**: 모노레포 워크스페이스 관리
- ✅ **Module Federation**: 마이크로프론트엔드 아키텍처
- ✅ **Next.js 14**: App Router + Server Components
- ✅ **TypeScript**: 엄격한 타입 시스템
- ✅ **Tailwind CSS**: 유틸리티 퍼스트 스타일링
- [ ] **shadcn/ui**: 모던 UI 컴포넌트 시스템
- [ ] **TanStack Query**: 서버 상태 관리
- [ ] **Zustand**: 클라이언트 상태 관리
- [ ] **React Hook Form**: 폼 상태 관리
- [ ] **Zod**: 런타임 타입 검증
- [ ] **Framer Motion**: 애니메이션 라이브러리
- [ ] **React DnD**: 드래그앤드롭 기능

### **Backend & Database**

- [ ] **Supabase**: BaaS 플랫폼 (PostgreSQL + Auth + Storage + Realtime)
- [ ] **Supabase RLS**: Row Level Security로 데이터 보안
- [ ] **Supabase Edge Functions**: 서버리스 함수 (필요시)

### **Development & Testing**

- ✅ **Playwright**: E2E 테스트 프레임워크
- ✅ **Jest**: 유닛 테스트 프레임워크
- [ ] **Storybook**: 컴포넌트 문서화
- [ ] **Chromatic**: 시각적 회귀 테스트
- [ ] **ESLint + Prettier**: 코드 품질 관리
- [ ] **Husky**: Git 훅 관리
- [ ] **Commitizen**: 커밋 메시지 표준화

### **Deployment & Monitoring**

- [ ] **Vercel**: Frontend 배포 (Module Federation 지원)
- [ ] **GitHub Actions**: CI/CD 파이프라인
- [ ] **Sentry**: 에러 추적 및 성능 모니터링
- [ ] **Google Analytics**: 사용자 행동 분석
- [ ] **Lighthouse CI**: 성능 모니터링

---

## 📈 **학습 효과 및 포트폴리오 가치**

### **🏗️ 아키텍처 역량**

- **마이크로프론트엔드**: 실제 기업에서 사용하는 확장 가능한 아키텍처
- **모듈 간 통신**: 복잡한 앱 간 데이터 공유 패턴 학습
- **도메인 주도 설계**: 비즈니스 로직별 앱 분리 경험
- **성능 최적화**: 번들 사이즈, 로딩 시간 최적화 실전

### **🔐 보안 및 인증**

- **인증 시스템**: JWT, OAuth, 세션 관리 전반
- **권한 관리**: 역할 기반 접근 제어 (RBAC) 구현
- **데이터 보안**: RLS를 통한 DB 레벨 보안
- **보안 베스트 프랙티스**: OWASP 보안 가이드라인 적용

### **⚡ 실시간 & 협업**

- **실시간 기능**: WebSocket을 통한 실시간 협업
- **동시성 제어**: 여러 사용자 동시 편집 처리
- **상태 동기화**: 복잡한 상태 관리 패턴
- **사용자 경험**: 매끄러운 실시간 UX 구현

### **📊 데이터 관리**

- **복잡한 관계형 DB**: 다양한 테이블 간 관계 설계
- **실시간 데이터**: 구독 기반 데이터 업데이트
- **캐싱 전략**: 성능을 위한 데이터 캐싱
- **데이터 시각화**: 차트와 대시보드 구현

---

## 🎯 **개발 단계별 체크리스트**

### **Phase 1: 기초 구축** (1-2주차)

- [ ] ✅ 동작하는 TODO 앱 (인증 포함)
- [ ] ✅ 공통 라이브러리 구축 완료
- [ ] ✅ 기본 UI 컴포넌트 시스템
- [ ] ✅ Supabase 연동 및 RLS 설정
- [ ] ✅ 기본 E2E 테스트 작성

### **Phase 2: 기능 확장** (3-4주차)

- [ ] ✅ Module Federation 설정 완료
- [ ] ✅ 첫 번째 Remote App 분리
- [ ] ✅ 파일 업로드 및 댓글 시스템
- [ ] ✅ 앱 간 통신 패턴 구현
- [ ] ✅ 권한 관리 시스템

### **Phase 3: 협업 및 완성** (5-6주차)

- [ ] ✅ 팀 기능 완전 구현
- [ ] ✅ 실시간 협업 기능
- [ ] ✅ 성능 최적화 완료
- [ ] ✅ 배포 파이프라인 구축
- [ ] ✅ 포트폴리오 문서화

---

## 📝 **개발 가이드라인**

### **🌳 Git 브랜치 전략**

```
main (프로덕션)
├── develop (개발 통합)
├── feature/auth-system (인증 시스템)
├── feature/todo-app (TODO 앱)
├── feature/project-app (프로젝트 앱)
├── feature/team-app (팀 앱)
├── feature/shared-ui (공통 UI)
└── hotfix/security-patch (긴급 수정)
```

### **📋 커밋 컨벤션**

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드
chore: 빌드 업무 수정, 패키지 매니저 설정
```

### **🚀 배포 전략**

- **개발**: 매일 자동 배포 (develop 브랜치)
- **스테이징**: 주간 배포 (release 브랜치)
- **프로덕션**: 2주 단위 배포 (main 브랜치)
- **핫픽스**: 즉시 배포 (hotfix 브랜치)

### **📚 문서화 요구사항**

- [ ] 각 앱별 README.md
- [ ] API 문서 (TypeScript 인터페이스 기반)
- [ ] 컴포넌트 문서 (Storybook)
- [ ] 배포 가이드
- [ ] 아키텍처 다이어그램

---

## 🔗 **참고 자료 및 학습 리소스**

### **공식 문서**

- [NX Module Federation Guide](https://nx.dev/recipes/module-federation)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js 14 App Router](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Query (TanStack Query)](https://tanstack.com/query)

### **아키텍처 참고**

- [Micro Frontends](https://micro-frontends.org/)
- [Module Federation Examples](https://github.com/module-federation/module-federation-examples)
- [Enterprise React Applications](https://github.com/facebook/create-react-app)

### **보안 가이드**

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Supabase Security Guide](https://supabase.com/docs/guides/auth)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

---

## ✅ **프로젝트 추적**

**프로젝트 시작일**: `____년 __월 __일`
**목표 완료일**: `____년 __월 __일`
**현재 진행 단계**: `[ ] Phase 1: 기초 구축 시작`

### **주간 체크포인트**

- [ ] **1주차**: 기본 TODO + 인증 시스템 완성
- [ ] **2주차**: 고급 기능 + OAuth + 프로필
- [ ] **3주차**: 프로젝트 앱 분리 + Module Federation
- [ ] **4주차**: 파일 시스템 + 댓글 + 권한
- [ ] **5주차**: 팀 앱 + 협업 기능
- [ ] **6주차**: 실시간 기능 + 최적화 + 배포

### **성공 지표**

- [ ] 🎯 **기능 완성도**: 모든 계획된 기능 구현
- [ ] ⚡ **성능**: Lighthouse 점수 90+ 달성
- [ ] 🧪 **테스트**: 테스트 커버리지 80%+
- [ ] 🔐 **보안**: 보안 체크리스트 100% 완료
- [ ] 📱 **반응형**: 모바일 완벽 대응
- [ ] 🚀 **배포**: 프로덕션 환경 정상 배포

---

**🎉 이제 당신만의 팀 협업 대시보드 구축을 시작할 준비가 되었습니다!**

_이 문서는 개발 과정에서 지속적으로 업데이트되며, 각 단계별 상세한 구현 가이드와 코드 예제가 추가될 예정입니다._
