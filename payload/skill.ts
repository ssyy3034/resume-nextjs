import { ISkill } from '../component/skill/ISkill';

export const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'TypeScript',
      description:
        '타입 시스템으로 런타임 오류를 줄이고 협업 시 코드 의도를 명확히 전달하는 데 활용.',
    },
    {
      title: 'JavaScript',
      description: 'ES6+ 비동기 처리, DOM API 활용.',
    },
    {
      title: 'React',
      description:
        '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. 대규모 시각화(Canvas)나 백그라운드 연산(Web Worker)을 활용해 UI 병목을 해결한 경험이 있습니다.',
    },
    {
      title: 'Next.js',
      description: 'SSR/SSG 특성을 활용한 성능 최적화 및 Vercel 기반 배포 파이프라인 구축.',
    },
    {
      title: 'Zustand',
      description: '도메인별 스토어 분리를 통한 전역 상태 관리.',
    },
    {
      title: 'TanStack Query',
      description: '서버 상태 동기화 및 낙관적 업데이트 적용.',
    },
    {
      title: 'Tailwind CSS',
      description: '반응형 UI 구현.',
    },
  ],
};

export const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java',
      description:
        '주력 언어. 객체 지향 원칙을 준수하며 Spring Boot 기반의 안정적인 서버를 개발합니다.',
    },
    {
      title: 'Spring Boot',
      description: 'Layered Architecture 기반 REST API 개발 및 JWT 인증 활용.',
    },
    {
      title: 'Spring Data JPA',
      description: 'N+1 문제를 Fetch Join + In-Memory 트리 조립으로 해결 (450ms → 25ms).',
    },
    {
      title: 'RabbitMQ',
      description: 'AI 연산량 폭증 시 동기 블로킹 문제를 비동기 큐로 전환하여 장애 격리.',
    },
    {
      title: 'Redis',
      description: '날짜 키 기반 TTL 캐싱으로 API 호출 비용 절감 및 다층 캐시 구성.',
    },
    {
      title: 'NestJS',
      description:
        '모듈·DI·인터셉터·가드를 활용해 챗봇 백엔드를 설계하고, MongoDB 연동 API를 구현했습니다.',
    },
    {
      title: 'Node.js',
      description: '비동기 이벤트 루프 기반의 서버 환경 이해.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 MediaPipe·PyTorch 활용.',
    },
  ],
};

export const database: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MariaDB',
      description: '비관적 락으로 결제 동시성 제어 및 인덱스 설계.',
    },
    {
      title: 'Neo4j',
      description: 'Cypher 쿼리를 활용한 그래프 데이터 모델링 및 조회.',
    },
    {
      title: 'Docker',
      description: 'Docker Compose로 멀티 컨테이너 개발/배포 환경 구성.',
    },
    {
      title: 'AWS',
      description: 'EC2 배포, S3/CloudFront CDN 구성, GitHub Actions CI/CD 파이프라인 구축.',
    },
  ],
};

export const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Git / GitHub',
      description: '브랜치 전략, PR 기반 코드 리뷰, GitHub Actions CI/CD.',
    },
    {
      title: 'Claude Code / Antigravity',
      description: 'AI 에이전트 워크플로우를 설계해 개발 생산성을 극대화합니다.',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, backend, database, tools],
};

export default skill;
