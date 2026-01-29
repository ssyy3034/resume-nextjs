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
                '**SVG 렌더링 시 15fps로 저하되는 성능 한계**를 극복하기 위해 **Canvas(Three.js)로 마이그레이션**하여, 600개 이상의 노드를 **끊김 없이(60fps) 렌더링**했습니다. 또한 GPU 가속을 통해 메인 스레드 부하를 줄여 **CPU 사용량을 40% 절감**했습니다.',
            },
            {
              content:
                '**사이드바 인터랙션 시 불필요한 재계산**으로 인한 지연을 제거하고자 **트리 연산 로직을 최적화(15ms → 0.1ms)**하고, **Memoization**을 적용해 반응 속도를 극대화했습니다.',
            },
            {
              content:
                '**네트워크 지연**으로 인한 편집 반응성을 개선하기 위해 **낙관적 업데이트(Optimistic UI)**를 도입하여, 서버 응답 대기 없이 **즉각적으로 화면에 반영**되도록 만들었습니다.',
            },
          ],
        },
        {
          content: '비효율적인 협업 프로세스 개선을 위한 DX(Developer Experience) 자동화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**초기 번들 크기로 인한 로딩 지연**을 해결하기 위해 **Code Splitting**과 **Manual Chunking**을 적용하여, 다운로드 크기와 TTi(Time to Interactive)를 **60% 단축**했습니다.',
            },
            {
              content:
                '**단일 모델의 복잡성 한계**를 극복하기 위해 **역할별 전문 에이전트(Multi-Agent)** 시스템을 구축하고, 수동 검수의 비효율을 없애고자 **7단계 품질 감사를 자동화**했습니다.',
            },
            {
              content:
                '**Git 버전에 익숙하지 않은 팀원들의 협업 어려움**을 해결하고자 **Smart-commit 워크플로우**를 도입하여, 복잡한 절차(이슈 연결, PR 생성)를 **단일 명령어로 자동화**했습니다.',
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
                '**Busy Waiting으로 인한 CPU 낭비**를 막기 위해 **Wait Queue 기반의 Block/Wake 패턴**을 도입하여, 불필요한 문맥 교환과 전력 소모를 최소화했습니다.',
            },
            {
              content:
                '높은 우선순위 작업이 실행되지 못하는 **Priority Inversion(우선순위 역전)** 현상을 해결하고자 **Priority Donation** 알고리즘을 구현하여 스케줄링의 공정성을 확보했습니다.',
            },
          ],
        },
        {
          content: '**유저 프로그램 및 시스템 콜** 인터페이스 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**잘못된 메모리 접근**으로부터 커널을 보호하기 위해 **Argument Passing** 로직과 안전한 **System Call 인터페이스**를 설계하여, 안정적인 시스템 운영을 보장했습니다.',
            },
          ],
        },
        {
          content: '**가상 메모리 및 SPT** 시스템 고도화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**제한된 물리 메모리의 효율성**을 높이기 위해, 페이지 폴트 시에만 데이터를 로드하는 **Lazy Loading**과 **Supplemental Page Table**을 구축했습니다.',
            },
            {
              content:
                '**메모리 해제 시 발생하는 고아 프레임(Widowed Frame)** 문제를 해결하기 위해 **GDB 디버깅**으로 원인을 추적하고, **Demand Paging** 안정성을 확보했습니다.',
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
                '**비즈니스 로직과 UI의 강한 결합**을 해결하기 위해 **Custom Hooks**로 로직을 분리하여 유지보수성과 재사용성을 높였습니다.',
            },
            {
              content:
                '**상태 관리의 복잡함**을 줄이고자 **Zustand**를 도입해 전역 상태 흐름을 단순화하고, **TailwindCSS**로 일관된 디자인 시스템을 빠르게 구축했습니다.',
            },
          ],
        },
        {
          content: '**Polyglot Architecture** 기반 인증 및 AI 연동 레이어 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '**각 서비스의 특성에 맞는 성능 최적화**를 위해 **Spring Boot**(비즈니스)와 **Flask**(AI)로 서버를 분리하고, **JWT 인증**으로 보안을 강화했습니다.',
            },
            {
              content:
                '**사용자의 입력을 이미지로 변환**하는 과정의 지연을 최소화하기 위해 특징점 추출부터 생성까지 이어지는 **End-to-End AI 파이프라인**을 구축했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
