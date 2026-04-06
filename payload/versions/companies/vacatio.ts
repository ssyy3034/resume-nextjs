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

// 바카티오 JD 기술스택에 맞춰 NestJS, Node.js, MongoDB, Redis, LangGraph 강조
const vacatioBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'NestJS',
      description:
        '모듈·DI·인터셉터·가드를 활용한 백엔드 설계. REST API 설계 및 MongoDB 연동, 도메인별 모듈 분리 경험.',
    },
    {
      title: 'Node.js (Express)',
      description:
        '비동기 이벤트 루프 기반의 서버 환경 이해. JavaScript 런타임 동작 원리를 바탕으로 효율적인 서버 개발.',
    },
    {
      title: 'Spring Boot',
      description:
        'Layered Architecture 기반 REST API 설계, JPA를 활용한 도메인 모델링, 트랜잭션 범위 설계 경험. 이 기본기를 바탕으로 새로운 백엔드 환경에서도 빠르게 적응할 수 있습니다.',
    },
    {
      title: 'MongoDB',
      description:
        'Mongoose 스키마 설계, 가중치 텍스트 인덱스 기반 검색, TTL 인덱스 활용 경험.',
    },
    {
      title: 'Redis',
      description: 'TTL 기반 캐싱으로 API 호출 비용 절감 및 다층 캐시 구성.',
    },
    {
      title: 'RabbitMQ',
      description:
        'AI 연산량 폭증 시 동기 블로킹 문제를 비동기 큐로 전환하여 장애 격리.',
    },
    {
      title: 'LangGraph / LangChain',
      description:
        'LangGraph 노드 기반 AI 챗봇 대화 흐름 제어, 가드레일 설계 및 LLM 컨텍스트 관리 경험.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 MediaPipe·PyTorch 활용.',
    },
  ],
};

const vacatioDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'MongoDB',
      description:
        '스키마 설계, 텍스트 인덱스 기반 검색, TTL 인덱스, Mongoose ODM 활용.',
    },
    {
      title: 'PostgreSQL / MariaDB',
      description: '비관적 락으로 결제 동시성 제어 및 인덱스 설계.',
    },
    {
      title: 'Docker',
      description:
        'Docker Compose로 멀티 컨테이너 개발/배포 환경 구성.',
    },
    {
      title: 'AWS',
      description:
        'EC2 배포, S3/CloudFront CDN 구성, GitHub Actions CI/CD 파이프라인 구축.',
    },
  ],
};

// Knowledge Garden 프로젝트를 NestJS + MongoDB 중심으로 재구성
const knowledgeGardenForVacatio: IProject.Item = {
  title: 'Knowledge Garden : NestJS + MongoDB 기반 포트폴리오 백엔드',
  startedAt: '2026-02',
  where: '개인 프로젝트',
  techStack: [
    { category: 'Backend', items: ['NestJS', 'MongoDB', 'Mongoose', 'OpenAI API'] },
    { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Infra', items: ['Docker', 'Vercel'] },
  ],
  descriptions: [
    {
      content:
        'NestJS 모듈 아키텍처 기반의 포트폴리오 백엔드와 Next.js 프론트엔드를 개발했습니다. MongoDB 텍스트 검색 기반 챗봇, 가드레일 필터링, 분석 파이프라인을 도메인별 모듈 단위로 설계했습니다.',
    },
    {
      content: '**담당 구현**',
      weight: 'BOLD',
      descriptions: [
        {
          content: '**Backend (NestJS + MongoDB)**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'NestJS 모듈 아키텍처로 Chat, AI, Analytics, Resume 4개 도메인을 분리하고 DI로 의존성 관리',
            },
            {
              content:
                'MongoDB 가중치 텍스트 인덱스(title 10x, summary 5x, content 1x)로 관련 이력서 데이터를 검색하고, LLM 컨텍스트에 주입',
            },
            {
              content:
                'LLM 가드레일 분류기로 무관 질문을 사전 필터링하고, 역할별 시스템 프롬프트로 응답 품질 관리',
            },
            {
              content:
                '인터셉터 기반 분석 로깅(토큰·응답 시간)과 MongoDB TTL 인덱스로 90일 자동 정리',
            },
          ],
        },
        {
          content: '**Frontend**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'Next.js App Router 기반 포트폴리오 대시보드, 프로젝트 상세 페이지, PDF 내보내기 구현',
            },
            {
              content:
                '세션 기반 챗봇 위젯(Framer Motion 애니메이션, 마크다운 렌더링, 추천 질문)',
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
                '챗봇 API 부하 테스트 중 힙 메모리가 테스트 종료 후에도 baseline으로 복귀하지 않는 현상 발견. Map 기반 세션 저장소에 삭제 로직이 없어 세션이 영구 잔류하는 것이 원인',
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

const vacatioPayload: Payload = {
  ...backendPayload,
  _global: {
    ...backendPayload._global,
    headTitle: '권동하 - 바카티오 이력서',
  },
  introduce: {
    ...backendPayload.introduce,
    contents: [
      '**탄탄한 기본기와 원리를 중시하는 신입 백엔드 엔지니어 권동하입니다.**',

      '**제품의 본질을 이해하고 안정성을 확보하는 엔지니어**\n크래프톤 정글에서 5개월간 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 기본기를 다졌습니다. 이 기반 위에 Spring Boot와 NestJS로 도메인 로직을 설계하고, 외부 PG 시스템 연동, 결제 동시성 제어, 트랜잭션 안정성 확보 등 **실 서비스 수준의 안정성을 요구하는 문제**를 직접 해결한 경험이 있습니다. 동작 원리 기반의 학습을 통해 새로운 기술 스택에도 빠르게 적응할 수 있습니다.',

      '**팀 생산성을 고민하는 팀원**\n다년간의 아르바이트 경험을 통해 다양한 성향을 가진 팀원들의 장점을 파악하고, 서로 협력하여 시너지를 이끌어내는 소통 방식을 체득했습니다. 개발 프로젝트에서도 코드 작성에만 머무르지 않고 팀의 불편사항을 찾아 개선합니다. 일례로 반복되는 Git 커밋, PR 작업이 팀의 병목이 되는 것을 파악하여, Antigravity의 커스텀 커맨드 기능을 활용해 팀의 개발 속도를 높였습니다.',

      '**일단 실행하고, 끝까지 안정화하는 사람**\n빠르게 기능을 검증한 뒤 부하 테스트로 병목을 찾아 개선하는 방식으로 일합니다. Aidiary에서는 단일 배포로 빠르게 기능을 검증한 뒤, k6 부하 테스트에서 장애 지점을 발견하고 RabbitMQ 비동기 아키텍처로 전환하여 TPS를 1,680배 개선했습니다. 안 되는 이유를 찾기보다 실행하고, 수치로 검증하여 끝까지 안정화합니다.',
    ],
  },
  skill: {
    ...backendPayload.skill,
    // Backend(NestJS, Node.js 우선) → Database(MongoDB 우선) → Frontend → Tools
    skills: [vacatioBackend, vacatioDatabase, frontend, tools],
  },
  project: {
    disable: false,
    list: [
      // 1. StoLink - 외부 시스템 연동, 결제 도메인, 트랜잭션 안정성 강조
      {
        ...backendPayload.project.list[0],
        descriptions: [
          ...backendPayload.project.list[0].descriptions.slice(0, 1),
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend — 도메인 로직 & 외부 시스템 연동**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      'OAuth2 기반 소셜 로그인 및 JWT 토큰(HTTP-only Cookie) 인증/인가 시스템',
                  },
                  {
                    content:
                      'Spring Data JPA를 활용한 무한 계층 구조의 문서 폴더 트리 CRUD 및 데이터 모델링',
                  },
                  {
                    content:
                      '**토스페이먼츠 PG 연동** 크레딧 충전 시스템 구축 — 외부 API 호출, 웹훅 처리 기반 결제 상태 자동 관리, 트랜잭션 범위 설계',
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
                content: '**Backend — 운영 안정성 & 데이터 정합성**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content: '**외부 PG 연동 트랜잭션 안정화**',
                    descriptions: [
                      {
                        content:
                          '외부 PG(토스페이먼츠) API 응답 지연 시 DB 트랜잭션이 길어져 커넥션 풀이 고갈될 수 있는 구조를 인지하고, 외부 호출을 트랜잭션 밖으로 분리하여 커넥션 점유 시간을 줄임',
                      },
                    ],
                  },
                  {
                    content: '**결제 동시성 제어 및 멱등키**',
                    descriptions: [
                      {
                        content:
                          '동시 결제 요청 시 잔액 부정합 방지를 위해 비관적 락, 네트워크 재시도에 의한 중복 결제 방지를 위해 멱등키 적용. Testcontainers 기반 통합 테스트로 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증**',
                      },
                    ],
                  },
                  {
                    content: '**N+1 쿼리 최적화**',
                    descriptions: [
                      {
                        content:
                          'JPA 쿼리 로그에서 N+1 문제를 발견, Fetch Join으로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                      },
                    ],
                  },
                  {
                    content: '**Cross-Domain 인프라 구축 및 보안 개선**',
                    descriptions: [
                      {
                        content:
                          'StoLink와 StoRead 도메인 이원화로 인한 쿠키 공유 장애를 SameSite/Secure 쿠키 정책 수립 및 CloudFront 라우팅 최적화로 해결. Access/Refresh Token을 HttpOnly Cookie에 저장하여 XSS 공격 방어 체계 확립',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 2. Aidiary - Redis, RabbitMQ, LangGraph, Docker, AWS 강조
      {
        ...backendPayload.project.list[1],
        descriptions: [
          ...backendPayload.project.list[1].descriptions.slice(0, 3),
          {
            content: '**트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend / Infra**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content: '**[성능] AI 이미지 합성 동기 호출로 인한 서버 장애 해결**',
                    descriptions: [
                      {
                        content:
                          'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. 원인은 Flask ML 추론(~30초)을 Tomcat 스레드가 동기 대기하면서 스레드 풀이 고갈되는 구조 (실측 **1.16 TPS**)',
                      },
                      {
                        content:
                          '메인 서버는 요청만 받고 즉시 응답(202)하도록 하고, 무거운 ML 연산은 RabbitMQ를 통해 별도 Python Worker가 처리하도록 분리. 가장 적은 변경으로 병목을 격리하는 방향을 선택',
                      },
                      {
                        content:
                          '**TPS 1.16 → 1,949 (1,680배), 응답 레이턴시 30,000ms → 4.9ms, 500 VU 부하에서 에러율 0%**',
                      },
                    ],
                  },
                  {
                    content:
                      '**[안정성] AI 챗봇 대화 이탈 방어 및 API 호출 비용 절감 (LangGraph)**',
                    descriptions: [
                      {
                        content:
                          '아이 챗봇에서 AI 환각으로 부적절한 응답이 생성되는 문제를 LangGraph 노드 기반 대화 제어와 3중 가드레일(의미 검색 강제, 시스템 프롬프트, 입력 검증)로 방어',
                      },
                      {
                        content:
                          '데일리 질문이 매 요청마다 Gemini API를 호출하는 비효율을 파악. 자정 TTL 기반 Redis 캐싱을 적용하여 **응답 시간 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                      },
                    ],
                  },
                  {
                    content: '**@Data 순환 참조로 인한 서버 크래시 해결**',
                    descriptions: [
                      {
                        content:
                          'Lombok @Data의 순환 직렬화(Diary → User → Child → User → ...)로 단일 응답 4GB+ 발생. DTO 변환으로 엔티티 그래프 노출 차단, LAZY 로딩 명시하여 **응답 크기 4GB+ → 20KB로 정상화**',
                      },
                    ],
                  },
                  {
                    content: '**Docker Compose + AWS 배포**',
                    descriptions: [
                      {
                        content:
                          'Docker Compose로 6개 서비스 오케스트레이션 + AWS EC2 배포, S3/CloudFront CDN, GitHub Actions CI/CD 구축',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // 3. Knowledge Garden - NestJS + MongoDB 풀스택 프로젝트
      knowledgeGardenForVacatio,
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

export default vacatioPayload;
