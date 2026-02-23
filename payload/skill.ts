import { ISkill } from '../component/skill/ISkill';

export const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'TypeScript',
      description: '인터페이스 설계 및 제네릭을 활용한 타입 안전한 코드 작성',
    },
    {
      title: 'JavaScript',
      description: 'ES6+ 비동기 처리, DOM API 활용',
    },
    {
      title: 'React.js',
      description: '훅 기반 컴포넌트 설계, Canvas API 연동, 렌더링 성능 최적화',
    },
    {
      title: 'Zustand',
      description: '도메인별 스토어 분리를 통한 전역 상태 관리',
    },
    {
      title: 'TanStack Query',
      description: '서버 상태 동기화 및 낙관적 업데이트 적용',
    },
    {
      title: 'Tailwind CSS',
      description: '반응형 UI 구현',
    },
  ],
};

export const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java',
      description: '주력 언어. Spring Boot 기반 서버 개발, 트랜잭션 제어 및 JPA 활용',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙, MediaPipe·PyTorch 활용',
    },
    {
      title: 'C',
      description: 'Pintos OS 커널 프로젝트에서 스레드 스케줄링, 가상 메모리 구현에 사용',
    },
    {
      title: 'Spring Boot',
      description: 'Layered Architecture 기반 REST API 개발, JWT 인증, 트랜잭션 제어',
    },
    {
      title: 'PostgreSQL / MariaDB',
      description: 'JPA 연동, 인덱스 설계, N+1 쿼리 최적화',
    },
    {
      title: 'Neo4j',
      description: 'Cypher 쿼리를 활용한 그래프 데이터 모델링 및 조회',
    },
  ],
};

export const infra: ISkill.Skill = {
  category: 'Infra',
  items: [
    {
      title: 'Docker',
      description: 'Docker Compose로 멀티 컨테이너 개발/배포 환경 구성',
    },
    {
      title: 'AWS',
      description: 'EC2, S3, CloudFront를 활용한 배포 및 CDN 구성',
    },
  ],
};

export const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Git / GitHub',
      description: '브랜치 전략, PR 기반 코드 리뷰, GitHub Actions CI/CD',
    },
    {
      title: 'Claude Code CLI / Antigravity',
      description: 'AI 기반 코드 에디터 및 Git 컨벤션 자동화 도구 활용',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, backend, infra, tools],
};

export default skill;
