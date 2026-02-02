import { ISkill } from '../component/skill/ISkill';

export const languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'TypeScript',
      description: 'API 응답/Props 타입 정의 및 인터페이스 설계를 통한 정적 안정성 확보',
    },
    {
      title: 'Java',
      description: '객체지향 프로그래밍(OOP) 이해 및 Spring Boot 서버 로직 구현 가능',
    },
    {
      title: 'Python',
      description: 'Flask를 활용한 AI 모델 서빙 및 데이터 처리 스크립트 작성 가능',
    },
    {
      title: 'C',
      description: 'Pintos OS 프로젝트를 통해 커널 스케줄링 및 가상 메모리 관리 로직 구현',
    },
    {
      title: 'JavaScript',
      description: 'ES6+ 문법 및 비동기 처리, DOM API를 활용한 동적 웹 기능 구현 가능',
    },
  ],
};

export const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'React.js',
      description: '컴포넌트 생명주기 및 훅 기반 UI 최적화, Canvas API 연동 가능',
    },
    {
      title: 'Spring Boot',
      description: 'Layered Architecture 기반으로 API를 개발하며, JWT 인증/인가 구현 및 트랜잭션 처리, 예외 핸들링을 경험했습니다.',
    },
    {
      title: 'Next.js',
      description: 'App Router 기반의 SSR/RSC 활용',
    },
    {
      title: 'Zustand',
      description: '전역 상태 관리 아키텍처 설계 및 도메인별 스토어 분리를 통한 DX 개선',
    },
    {
      title: 'TanStack Query',
      description: '서버 상태 동기화, 낙관적 업데이트(Optimistic UI) 및 캐싱 전략 수립 가능',
    },
    {
      title: 'Vite',
      description: 'Manual Chunking 및 Code Splitting을 통한 초기 로딩 성능 최적화 경험',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS를 활용한 반응형 UI 및 디자인 시스템 구현 가능',
    },
  ],
};

export const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'PostgreSQL', description: 'JPA 연동 및 Fetch Join을 통한 N+1 쿼리 최적화 경험' },
    { title: 'MySQL', description: '기본적인 CRUD 및 인덱스 설계 가능' },
    { title: 'Neo4j', description: 'Cypher 쿼리를 활용한 그래프 데이터 조회 및 API 연동' },
    { title: 'Docker', description: 'Docker Compose를 활용한 멀티 컨테이너 개발 환경 구축' },
    { title: 'AWS', description: 'EC2, S3, CloudFront를 활용한 배포 및 CDN 설정 경험' },
  ],
};

export const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    { title: 'Git', description: '브랜치 전략 및 협업 워크플로우 운영' },
    { title: 'Github', description: 'PR 기반 코드 리뷰 및 Actions를 활용한 CI/CD 구축' },
    { title: 'Claude Code CLI', description: 'Multi-Agent 워크플로우 설계 및 개발 자동화' },
    { title: 'IntelliJ IDEA' },
    { title: 'VS Code' },
  ],
};

export const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    { title: 'AI Agent & LLM Application' },
    { title: 'Performance Optimization' },
    { title: 'System Architecture' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworks, infrastructure, tools, misc],
};

export default skill;
