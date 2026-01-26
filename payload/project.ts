import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'StoLink : 지식 관리 및 시각화 플랫폼',
      startedAt: '2025-12',
      endedAt: '2026-01',
      where: 'Team Project (**5인 개발 / Frontend Core Lead**)',
      descriptions: [
        {
          content:
            '대규모 지식 기반 데이터 시각화를 위한 **관계도 그래프(Relationship Graph)** 고도화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 SVG 기반 노드 렌더링 방식의 성능 한계를 극복하기 위해 **Canvas(Three.js)** 엔진으로 마이그레이션했습니다. 이를 통해 650개 이상의 노드 환경에서도 프레임 드랍 없이 **60fps**의 안정적인 퍼포먼스를 확보하고, **CPU 사용량을 약 40% 절감**했습니다.',
            },
            {
              content:
                '트리 구조 계산 로직을 개선하여 불필요한 재계산을 방지했습니다. **useMemo** 및 최적화된 상태 관리 전략을 통해 복잡도 **O(n log n)의 연산을 O(1)로 최적화**하고, 인터랙션 지연 시간을 **15ms에서 0.1ms로 단축**했습니다.',
            },
          ],
        },
        {
          content:
            '사용자 친화적 지식 자산 관리를 위한 **인터랙티브 에디터(Interactive Editor)** 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '노드와 문서가 실시간으로 상호작용하는 **에디터 아키텍처**를 설계하고 구현했습니다. 지식 조각들을 유기적으로 연결하고 편집할 수 있는 환경을 구축하여 사용자 지식 관리의 편의성을 극대화했습니다.',
            },
            {
              content:
                '**TanStack Query(React Query)** 기반 서버 상태 관리로 데이터 패칭 구조를 효율화하고, 캐싱 전략 및 **Optimistic UI**를 적용하여 네트워크 레이턴시에 관계없이 즉각적인 사용자 피드백을 구현했습니다.',
            },
          ],
        },
        {
          content: '번들 사이즈 최적화 및 DX(Developer Experience) 강화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Route-based Code Splitting**과 **Manual Chunking(Vite/Rollup)**을 적용하여 초기 로딩에 필요한 JS 번들 사이즈를 약 **40% 감축**하고, 초기 렌더링 속도(FCP)를 개선했습니다.',
            },
            {
              content:
                '**AI Agent 워크플로우**를 운영에 맞게 설계하여 코드 품질 검사 및 이슈 트래킹을 자동화했습니다. 이를 통해 팀의 운영 오버헤드를 줄이고 기능 구현에 집중할 수 있는 환경을 구축했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: 'Pintos : 교육용 운영체제 커널 구현',
      startedAt: '2025-11',
      endedAt: '2025-12',
      where: '크래프톤 정글 (**4인 개발 / Core Contributor**)',
      descriptions: [
        {
          content: '**스레드 스케줄링 및 동기화** 메커니즘 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Busy waiting을 제거하고 **Block/Wake 패턴**을 도입하여 CPU 유휴 시간을 최소화했습니다.',
            },
            {
              content:
                '**Priority Donation** 알고리즘을 구현하여 우선순위 역전(Priority Inversion) 문제를 해결하고, 중첩된 락 대기 상황(Nested Donation, depth 8)을 지원했습니다.',
            },
          ],
        },
        {
          content: '**가상 메모리 및 Demand Paging** 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Supplemental Page Table(SPT)**과 커스텀 **Page Fault Handler**를 구현하여 동적 메모리 할당 및 스택 확장을 지원했습니다.',
            },
            {
              content:
                'x86 아키텍처 기반의 메모리 관리를 통해 **운영체제의 핵심 원리**를 이해하고, Low-level 시스템 프로그래밍 역량을 확보했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: 'Aidiary : AI 기반 산모 감정 일기 & 2세 이미지 예측 서비스',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: 'Capstone Design (**2인 개발 / Frontend & Backend Auth**)',
      descriptions: [
        {
          content: '**React + TypeScript + Zustand** 기반의 고도화된 프론트엔드 아키텍처 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '복잡한 비즈니스 로직을 **Custom Hooks**로 독립시켜 UI와 로직을 완벽히 분리했습니다. 이를 통해 컴포넌트 코드량을 약 **30% 감축**하고 코드의 유지보수성과 가독성을 높였습니다.',
            },
            {
              content:
                '**Zustand**를 활용해 전역 상태를 통합 관리하고, **TailwindCSS**를 도입해 일관된 디자인 시스템(Glassmorphism)을 빠르게 구현했습니다.',
            },
          ],
        },
        {
          content: '**Polyglot Architecture** 기반 인증 및 AI 연동 레이어 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Spring Boot**(비즈니스 로직) + **Python Flask**(AI 서비스) 간 통신 구조를 설계하고, JWT 기반 인증 시스템을 구축했습니다.',
            },
            {
              content:
                '얼굴 특징점 추출 → 프롬프트 생성 → **DALL-E 3** 이미지 생성까지 **End-to-End AI Pipeline**을 구현하여 멀티모달 데이터 처리를 최적화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
