import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'StoLink : 지식 관리 및 시각화 플랫폼',
      startedAt: '2025-12',
      endedAt: '2026-01',
      where: 'Team Project (**5인 개발 / Frontend Lead**)',
      descriptions: [
        {
          content:
            '지식 자산의 유기적 시각화 및 관리를 위한 **관계도 그래프 & 에디터 시스템 설계 및 개발 리딩**',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Canvas(Three.js)를 도입해 600개 이상의 노드를 끊김 없이(60fps) 렌더링**하고, CPU 사용량을 40% 줄여 쾌적한 사용성을 확보했습니다.',
            },
            {
              content:
                '**트리 연산 과정을 최적화(15ms → 0.1ms)**하여 사이드바 반응 속도를 높이고, 불필요한 재계산을 방지했습니다.',
            },
            {
              content:
                '**낙관적 업데이트(Optimistic UI)**를 적용해 서버 응답을 기다리지 않고도 **즉각적인 편집이 가능**하도록 만들었습니다.',
            },
          ],
        },
        {
          content: '시스템 운영 효율성 극대화를 위한 DX(Developer Experience) 자동화 주도',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**코드 분할(Code Splitting)**과 라이브러리 최적화로 **초기 로딩 속도를 40% 개선**하여, 사용자가 기다림 없이 서비스를 이용하게 했습니다.',
            },
            {
              content:
                '기획부터 배포까지 **역할별 전문 에이전트(Multi-Agent)** 시스템을 구축하고, **품질 검수 과정을 자동화**해 개발 효율을 높였습니다.',
            },
            {
              content:
                '반복적인 운영 업무를 자동화(Smart-commit)하여 **핵심 로직 구현에만 집중할 수 있는 환경**을 만들었습니다.',
            },
          ],
        },
      ],
    },
    {
      title: 'Pintos : 교육용 운영체제 커널 구현',
      startedAt: '2025-11',
      endedAt: '2025-12',
      where: '크래프톤 정글 (**3인 개발 / Core Contributor**)',
      descriptions: [
        {
          content: '**스레드 스케줄링 및 동기화** 메커니즘 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '불필요한 CPU 낭비를 막는 **Block/Wake 패턴**을 도입하고, **Priority Donation**을 구현해 스레드 우선순위 역전 문제를 해결했습니다.',
            },
          ],
        },
        {
          content: '**유저 프로그램 및 시스템 콜** 인터페이스 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '유저 프로그램이 안전하게 실행되도록 **Argument Passing** 로직과 **System Call** 인터페이스를 설계하여 커널 안정성을 확보했습니다.',
            },
          ],
        },
        {
          content: '**가상 메모리 및 SPT** 시스템 고도화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '메모리 효율을 위해 필요할 때만 데이터를 로드하는 **Lazy Loading**과 **가상 메모리 시스템(SPT)**을 완성했습니다.',
            },
            {
              content:
                '**GDB 디버깅**으로 복잡한 메모리 참조 오류(Widowed Frame)를 추적하여 해결하고, **Demand Paging**의 안정성을 높였습니다.',
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
          content: '**React + TypeScript + Zustand** 기반의 프론트엔드 아키텍처 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '복잡한 비즈니스 로직을 **Custom Hooks**로 분리해 유지보수하기 쉬운 구조를 만들고, **Zustand**로 전역 상태 관리를 단순화했습니다.',
            },
            {
              content:
                '**TailwindCSS**를 활용해 일관된 디자인 시스템(Glassmorphism)을 빠르게 구축하고 개발 생산성을 높였습니다.',
            },
          ],
        },
        {
          content: '**Polyglot Architecture** 기반 인증 및 AI 연동 레이어 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**Spring Boot**(비즈니스)와 **Python Flask**(AI) 서버를 분리해 각각의 성능을 최적화하고, **JWT 기반 인증 시스템**을 연동했습니다.',
            },
            {
              content:
                '얼굴 특징점 추출부터 **DALL-E 3** 이미지 생성까지 이어지는 **End-to-End AI 파이프라인**을 성공적으로 구축했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
