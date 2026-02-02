import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'StoLink : 지식 관리 및 시각화 플랫폼',
      startedAt: '2025-12',
      endedAt: '2026-01',
      where: 'Team Project (**5인 개발 / Fullstack**)',
      descriptions: [
        {
          content: '**End-to-End 시스템 성능 및 UX 최적화**',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**End-to-End 트리 구조 처리 최적화**: 백엔드 **JPA Fetch Join**으로 N+1 쿼리 해결(101회 → 1회) 및 프론트엔드 **HashMap 기반 O(n) 트리 탐색 로직** 도입을 통한 데이터 처리 지연 개선 API 응답 18배(450ms → 25ms) 개선, 사이드바 연산 최적화',
            },
            {
              content:
                'DOM 요소 과다에 따른 Style Recalculation 병목 해결을 위한 **SVG → Canvas 렌더링 전환** 및 **600노드 이상 환경에서 60fps 실시간 응답성 확보 (INP 16.3배 개선)**',
            },
            {
              content:
                '네트워크 지연 문제로 인한 편집 UX 저하를 해결하기 위한 **TanStack Query 낙관적 업데이트(Optimistic UI)** 도입으로 사용자 체감 반응성 향상',
            },
            {
              content:
                '**Vite Code Splitting** 및 **Manual Chunking** 적용을 통한 초기 JS 번들 크기 **58% 절감(450KB → 187KB)** 및 로딩 성능 최적화',
            },
          ],
        },
        {
          content: '팀 생산성 향상을 위한 **DX(Developer Experience) 및 AI 자동화**',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Claude Code 기반의 **Multi-Agent 워크플로우(Planner, Coder, Reviewer, Documenter)** 설계를 통한 개발 전 과정 품질 관리 자동화',
            },
            {
              content:
                '팀 내 Git 사용 허들 제거를 위한 **Smart-commit CLI** 개발 및 이슈 생성부터 PR 작성까지의 **협업 프로세스 단일 명령어 자동화**',
            },
          ],
        },
        {
          content: '**Cross-Domain 인프라 구축 및 보안 개선**',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'StoLink와 StoRead의 도메인 이원화로 인한 세션 공유 장애를 SameSite/Secure 쿠키 정책 수립 및 CloudFront 라우팅 최적화로 해결, 통합 인증(SSO) 환경을 구축함',
            },
            {
              content:
                '기존 JavaScript 접근이 가능한 방식의 토큰 노출 위험을 해결하기 위해 **Access/Refresh Token**을 **HttpOnly Cookie**에 저장하도록 변경하여 **XSS(Cross-Site Scripting) 공격 방어 체계** 확립',
            },
          ],
        },
      ],
    },

    {
      title: 'Aidiary : AI 기반 산모 감정 일기 & 태아 이미지 생성 서비스',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: 'Capstone Design (**2인 개발 / Fullstack**)',
      descriptions: [
        {
          content: 'React + TypeScript + Zustand 기반 시스템 아키텍처 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Custom Hooks 패턴 도입**: 비즈니스 로직과 UI를 분리하여 코드 재사용성 및 유지보수 편의성 향상',
            },
            {
              content:
                '**Zustand 기반 전역 상태 관리**: Prop Drilling 문제를 해결, 일관된 데이터 흐름 구축',
            },
          ],
        },
        {
          content: 'Polyglot Architecture 기반의 AI 파이프라인 및 인증 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**서비스 분리 및 최적화**: Flask(AI 서빙)와 Spring Boot(비즈니스 로직)를 분리하여 **30초 이상 소요되는 AI 연산의 메인 서버 블로킹 방지**',
            },
            {
              content:
                '**AI 생성 파이프라인 구축**: AILabs API(얼굴 분석)와 DALL-E 3를 결합하여 **4단계 자동화 파이프라인**(얼굴 분석 → 특징 추출 → 프롬프트 생성 → 이미지 생성) 구현',
            },
            {
              content: '**보안**: JWT 기반의 인증/인가 및 Axios Interceptor를 통한 401 응답 시 자동 로그아웃 처리',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
