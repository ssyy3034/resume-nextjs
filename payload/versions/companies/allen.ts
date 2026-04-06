import { IProfile } from '../../../component/profile/IProfile';
import { IIntroduce } from '../../../component/introduce/IIntroduce';
import { ISkill } from '../../../component/skill/ISkill';
import { IOpenSource } from '../../../component/openSource/IOpenSource';
import { IExperience } from '../../../component/experience/IExperience';
import { IProject } from '../../../component/project/IProject';
import { IPresentation } from '../../../component/presentation/IPresentation';
import { IEducation } from '../../../component/education/IEducation';
import { IArticle } from '../../../component/article/IArticle';
import { IEtc } from '../../../component/etc/IEtc';
import { IFooter } from '../../../component/footer/IFooter';
import { IGlobal } from '../../../component/common/IGlobal';
import backendPayload from '../base/backend';
import { frontend, tools } from '../../skill';

// 알렌의서재 JD: Node.js, RDB(MySQL/PostgreSQL), RESTful API, 서비스 아키텍처, AWS, Docker
const allenBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Node.js',
      description:
        '비동기 이벤트 루프 기반의 서버 환경을 이해하고, 프레임워크를 활용한 RESTful API 서버 개발 경험.',
    },
    {
      title: 'NestJS',
      description:
        '모듈·DI·인터셉터·가드를 활용한 서비스 아키텍처 설계. REST API 개발 및 DB 연동 경험.',
    },
    {
      title: 'Spring Boot',
      description:
        'Layered Architecture 기반 RESTful API 설계, JPA를 활용한 도메인 모델링, 트랜잭션 범위 설계 경험. 이 기본기를 바탕으로 새로운 백엔드 환경에서도 빠르게 적응할 수 있습니다.',
    },
    {
      title: 'Redis',
      description: 'TTL 기반 캐싱으로 API 호출 비용 절감 및 다층 캐시 구성.',
    },
    {
      title: 'RabbitMQ',
      description:
        '무거운 연산의 동기 블로킹 문제를 비동기 메시지 큐로 전환하여 장애 격리.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 MediaPipe·PyTorch 활용.',
    },
  ],
};

// RDB(PostgreSQL, MySQL) 우선 + Docker, AWS
const allenDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MySQL / MariaDB',
      description:
        'RDB 운용 경험. 비관적 락으로 결제 동시성 제어, 인덱스 설계, N+1 쿼리 최적화(Fetch Join).',
    },
    {
      title: 'MongoDB',
      description:
        '스키마 설계, 가중치 텍스트 인덱스 기반 검색, TTL 인덱스 활용.',
    },
    {
      title: 'Docker',
      description:
        'Docker Compose로 멀티 컨테이너 개발/배포 환경 구성. 6개 서비스 오케스트레이션 경험.',
    },
    {
      title: 'AWS',
      description:
        'EC2 배포, S3/CloudFront CDN 구성 및 오리진 라우팅, GitHub Actions CI/CD 파이프라인 구축.',
    },
  ],
};

// Knowledge Garden: NestJS(Node.js) + REST API 중심으로 재구성
const knowledgeGardenForAllen: IProject.Item = {
  title: 'Knowledge Garden : Node.js(NestJS) 기반 포트폴리오 서비스',
  startedAt: '2026-02',
  where: '개인 프로젝트',
  techStack: [
    { category: 'Backend', items: ['NestJS (Node.js)', 'MongoDB', 'OpenAI API'] },
    { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Infra', items: ['Docker', 'Vercel'] },
  ],
  descriptions: [
    {
      content:
        'NestJS 기반 REST API 백엔드와 Next.js 프론트엔드로 구성된 풀스택 프로젝트입니다. 도메인별 모듈 분리, DB 연동, AI 챗봇 API를 설계·개발했습니다.',
    },
    {
      content: '**담당 구현**',
      weight: 'BOLD',
      descriptions: [
        {
          content: '**Backend (NestJS)**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'Chat, AI, Analytics, Resume 4개 도메인을 NestJS 모듈로 분리하고 DI로 의존성 관리하는 서비스 아키텍처 설계',
            },
            {
              content:
                'MongoDB 가중치 텍스트 인덱스(title 10x, summary 5x, content 1x)로 관련 데이터를 검색하고 LLM 컨텍스트에 주입하는 API 구현',
            },
            {
              content:
                'LLM 가드레일 분류기로 무관 질문을 사전 필터링하고, 역할별 시스템 프롬프트로 응답 품질 관리',
            },
            {
              content:
                '인터셉터 기반 분석 로깅(토큰·응답 시간) 및 TTL 인덱스로 90일 자동 데이터 정리',
            },
          ],
        },
      ],
    },
    {
      content: '**트러블슈팅 & 성능 개선**',
      weight: 'BOLD',
      descriptions: [
        {
          content: '**[메모리 누수] k6 부하 테스트 중 세션 메모리 누수 발견 및 해결**',
          descriptions: [
            {
              content:
                '챗봇 API 부하 테스트 중 힙 메모리가 baseline으로 복귀하지 않는 현상 발견. Map 기반 세션 저장소에 삭제 로직이 없어 세션이 영구 잔류하는 것이 원인',
            },
            {
              content:
                'SessionData에 lastAccessedAt를 추가하고 @nestjs/schedule 기반 TTL 정리 스케줄러로 만료 세션 주기적 삭제',
            },
            {
              content:
                '**1,000세션 누적 시 heapUsed 92.85MB → TTL 정리 후 40.35MB, 52MB(56.5%) 회수**',
            },
          ],
        },
      ],
    },
  ],
};

const allenPayload: Payload = {
  ...backendPayload,
  _global: {
    ...backendPayload._global,
    headTitle: '권동하 - 알렌의서재 이력서',
  },
  introduce: {
    ...backendPayload.introduce,
    contents: [
      '**탄탄한 기본기와 원리를 중시하는 신입 백엔드 엔지니어 권동하입니다.**',

      '**기본기에 충실한 기술의 도입**\n탄탄한 기반이 있어야 새로운 기술도 제대로 활용할 수 있다고 생각합니다. 크래프톤 정글에서 5개월간의 몰입을 통해 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 지식을 다지고, Spring Boot를 통해 객체 지향과 백엔드 아키텍처를 학습했습니다. 이를 바탕으로 Node.js(NestJS) 기반 RESTful API 서버와 RDB(PostgreSQL) 기반 서비스를 설계·개발한 경험이 있으며, 동작 원리를 이해한 학습을 통해 새로운 기술에도 빠르게 적응할 수 있습니다.',

      '**확장 용이한 아키텍처를 고민하고, DB 성능을 최적화하는 엔지니어**\n서비스가 성장할 때 병목이 될 지점을 미리 파악하고 개선합니다. k6 부하 테스트로 동기 블로킹 병목을 발견하여 RabbitMQ 비동기 아키텍처로 전환(TPS 1,680배 개선)하고, JPA N+1 쿼리를 Fetch Join으로 최적화(API 응답 18배 개선)한 경험이 있습니다. Docker Compose와 AWS 클라우드 환경에서 멀티 서비스 인프라를 운영하며, 수치 기반으로 검증하고 끝까지 안정화하는 방식으로 프로덕트의 신뢰성을 높입니다.',

      '**내 성과보다 팀 성과를 우선하는 팀원**\n개발 프로젝트에서 코드 작성에만 머무르지 않고 팀 전체의 생산성을 높이는 데 집중합니다. 반복되는 Git 커밋·PR 작업이 팀의 병목이 되는 것을 파악하여 Antigravity 커스텀 커맨드로 자동화하고, 이를 부트캠프 내 다른 팀에까지 공유·확산시켰습니다. 또한 AI 에이전트 활용 시 효율적인 문서 전달을 위해 3-Layer 문서 분리 전략을 설계한 뒤, 팀원들이 바로 적용할 수 있도록 정리하여 공유한 경험이 있습니다. 배운 것을 정리하고 나누는 것이 팀 전체의 역량을 끌어올린다고 생각합니다.',
    ],
  },
  skill: {
    ...backendPayload.skill,
    // Backend(Node.js 우선) → Database(RDB 우선) → Frontend → Tools
    skills: [allenBackend, allenDatabase, frontend, tools],
  },
  project: {
    disable: false,
    list: [
      // 1. StoLink — RESTful API, RDB(PostgreSQL), 서비스 아키텍처, Git 협업 강조
      {
        ...backendPayload.project.list[0],
        techStack: [
          { category: 'Backend', items: ['Spring Boot', 'JPA (Hibernate)', 'Redis'] },
          { category: 'Database', items: ['PostgreSQL', 'Neo4j (Graph DB)'] },
          { category: 'Frontend', items: ['React', 'TypeScript', 'Canvas API'] },
          {
            category: 'Testing & Tools',
            items: ['JUnit / Vitest', 'Testcontainers', 'Git / GitHub', 'Claude Code CLI'],
          },
        ],
        descriptions: [
          ...backendPayload.project.list[0].descriptions.slice(0, 1),
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend — RESTful API & 도메인 로직**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      'OAuth2 기반 소셜 로그인 및 JWT 토큰(HTTP-only Cookie) 인증/인가 시스템',
                  },
                  {
                    content:
                      'Spring Data JPA를 활용한 무한 계층 구조의 문서 폴더 트리 CRUD — PostgreSQL 기반 데이터 모델링 및 RESTful API 설계',
                  },
                  {
                    content:
                      '토스페이먼츠 PG 연동 크레딧 충전 시스템 — 외부 API 호출, 웹훅 처리 기반 결제 상태 자동 관리',
                  },
                ],
              },
              ...backendPayload.project.list[0].descriptions[1]!.descriptions!.slice(1, 3),
            ],
          },
          {
            content: '**트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend — API 성능 & 안정성**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content: '**결제 동시성 제어 및 트랜잭션 안정화**',
                    descriptions: [
                      {
                        content:
                          '외부 PG API 응답 지연 시 DB 트랜잭션이 길어져 커넥션 풀이 고갈될 수 있는 구조를 인지하고, 외부 호출을 트랜잭션 밖으로 분리하여 커넥션 점유 시간을 줄임',
                      },
                      {
                        content:
                          '동시 결제 요청 시 잔액 부정합 방지를 위해 비관적 락, 중복 결제 방지를 위해 멱등키 적용. Testcontainers 기반 통합 테스트로 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증**',
                      },
                    ],
                  },
                  {
                    content: '**N+1 쿼리 최적화 (RDB)**',
                    descriptions: [
                      {
                        content:
                          'JPA 쿼리 로그에서 문서 1건 조회 시 태그·카테고리 조회 쿼리가 N개 추가 발생함을 확인. @ManyToMany LAZY 로딩이 컬렉션 순회 시점마다 개별 쿼리를 유발하는 것이 원인',
                      },
                      {
                        content:
                          'Fetch Join으로 연관 데이터를 한 번의 쿼리에 함께 조회하도록 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                      },
                    ],
                  },
                  {
                    content: '**Cross-Domain 인프라 구축 및 보안 개선**',
                    descriptions: [
                      {
                        content:
                          '도메인 이원화로 인한 쿠키 공유 장애를 SameSite/Secure 쿠키 정책 수립 및 CloudFront 라우팅 최적화로 해결. Access/Refresh Token을 HttpOnly Cookie에 저장하여 XSS 공격 방어 체계 확립',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 2. Aidiary — 서비스 아키텍처 개선, 클라우드 인프라 운영, API 개발 강조
      {
        ...backendPayload.project.list[1],
        descriptions: [
          ...backendPayload.project.list[1].descriptions.slice(0, 3),
          {
            content: '**트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**서비스 아키텍처 개선 & 클라우드 인프라**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      '**[아키텍처] 동기 블로킹 → 비동기 메시지 큐 전환으로 서비스 장애 해소**',
                    descriptions: [
                      {
                        content:
                          'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. Flask ML 추론(~30초)을 Tomcat 스레드가 동기 대기하면서 스레드 풀이 고갈되는 구조 (실측 **1.16 TPS**)',
                      },
                      {
                        content:
                          '메인 서버는 요청만 받고 즉시 응답(202)하도록 하고, 무거운 ML 연산은 RabbitMQ를 통해 별도 Python Worker가 처리하도록 아키텍처 분리',
                      },
                      {
                        content:
                          '**TPS 1.16 → 1,949 (1,680배), 응답 레이턴시 30,000ms → 4.9ms, 500 VU 부하에서 에러율 0%**',
                      },
                    ],
                  },
                  {
                    content: '**[API 최적화] Redis 캐싱으로 API 호출 비용 절감**',
                    descriptions: [
                      {
                        content:
                          '매 요청마다 외부 LLM API를 호출하는 비효율을 파악. 자정 TTL 기반 Redis 캐싱을 적용하여 **응답 시간 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                      },
                    ],
                  },
                  {
                    content: '**[안정성] @Data 순환 참조로 인한 서버 크래시 해결**',
                    descriptions: [
                      {
                        content:
                          'Lombok @Data의 순환 직렬화(Diary → User → Child → ...)로 단일 API 응답 4GB+ 발생. DTO 변환으로 엔티티 그래프 노출 차단, LAZY 로딩 명시하여 **응답 크기 4GB+ → 20KB로 정상화**',
                      },
                    ],
                  },
                  {
                    content: '**[인프라] Docker Compose + AWS 클라우드 운영**',
                    descriptions: [
                      {
                        content:
                          'Docker Compose로 6개 컨테이너 오케스트레이션. AWS EC2 배포, S3/CloudFront CDN 캐싱 및 오리진 라우팅으로 경로 기반 요청 분기, GitHub Actions CI/CD 파이프라인 구축',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 3. Knowledge Garden — Node.js(NestJS) RESTful API 서버 개발 프로젝트
      knowledgeGardenForAllen,
    ],
  },
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default allenPayload;
