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
import defaultPayload from '../../index';
import { frontend, tools } from '../../skill';

// 토스페이먼츠 서버 개발자: Java/Kotlin, Spring MVC/Webflux/Batch, JPA, MySQL, Redis, Kafka
// 결제 시스템 확장성, 선착순 트래픽, 정산 시스템, MSA, OpenAPI
const tossBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java',
      description:
        '주력 언어. 객체 지향 원칙을 준수하며 Spring Boot 기반의 안정적인 서버를 개발합니다.',
    },
    {
      title: 'Spring Boot / Spring MVC',
      description:
        'Layered Architecture 기반 REST API 설계, JPA를 활용한 도메인 모델링, 트랜잭션 범위 설계.',
    },
    {
      title: 'Spring Data JPA',
      description:
        'N+1 문제를 Fetch Join + In-Memory 트리 조립으로 해결 (450ms → 25ms). 연관관계 설계.',
    },
    {
      title: 'Redis',
      description: 'TTL 기반 캐싱으로 API 호출 비용 절감 및 다층 캐시(Caffeine L1 + Redis L2) 구성.',
    },
    {
      title: 'RabbitMQ',
      description:
        '동기 블로킹으로 인한 스레드 풀 고갈 장애를 비동기 메시지 큐로 전환하여 격리. TPS 1,680배 개선.',
    },
    {
      title: 'NestJS / Node.js',
      description:
        '모듈·DI·인터셉터·가드를 활용한 서비스 아키텍처 설계 및 REST API 개발.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 데이터 처리.',
    },
  ],
};

const tossDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MariaDB',
      description:
        '비관적 락으로 결제 동시성 제어, 인덱스 설계, 쿼리 최적화.',
    },
    {
      title: 'Neo4j',
      description: 'Cypher 쿼리를 활용한 그래프 데이터 모델링 및 조회.',
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

const tossFrontend: ISkill.Skill = {
  ...frontend,
  items: frontend.items.filter(
    (item) => ['React', 'TypeScript'].includes(item.title),
  ),
};

const tossEtc: IEtc.Payload = {
  disable: false,
  list: [
    {
      title: '크래프톤 정글 (Krafton Jungle) 11기',
      subTitle:
        '5개월간 주당 100시간 몰입 — 자료구조, 알고리즘, Pintos OS 커널 구현 등 단단한 CS 기초 학습',
      startedAt: '2025-09',
      endedAt: '2026-01',
    },
    {
      title: '맥도날드 팀 리더 (아르바이트)',
      subTitle:
        '시프트 단위 최대 20명 운영 — 병목 판단·인력 재배치, 현장 이슈 중재, 신규 크루 교육',
      startedAt: '2022-11',
      endedAt: '2025-09',
    },
    {
      title: 'Rise 캡스톤 디자인 경진대회 참여',
      subTitle: 'AI 기반 산모 감정 일기 "Aidiary" 기획 및 풀스택 개발',
      startedAt: '2025-04',
      endedAt: '2025-06',
    },
  ],
};

const tossPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - 토스페이먼츠 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**문제의 원인을 추적하고, 재발하지 않는 구조를 설계하는 신입 서버 개발자 권동하입니다.**',

      '프로덕션에서 API 전체가 멈추는 장애를 쓰레드 덤프로 추적하고, 타임아웃 한 줄로 끝내지 않았습니다. 같은 패턴이 결제 플로우에도 있다는 걸 알아채고, 외부 PG 호출을 트랜잭션 밖으로 분리해 **장애가 전파되지 않는 결제 구조**를 새로 설계했습니다. 동시성 제어와 멱등키까지 얹어 **100스레드 동시 요청에서 정합성 100%**를 확인했습니다.',

      '동기 처리로 서비스가 마비되던 구간은 RabbitMQ 비동기 아키텍처로 전환해 **TPS를 1,680배 끌어올렸고**, 팀이 반복하던 Git 작업은 커스텀 커맨드로 줄여서 부트캠프 내 다른 팀까지 쓰게 만들었습니다.',
    ],
  },
  skill: {
    ...defaultPayload.skill,
    // Backend(Java/Spring 우선) → Database → Frontend(최소) → Tools
    skills: [tossBackend, tossDatabase, tossFrontend, tools],
  },
  etc: tossEtc,
  project: {
    disable: false,
    list: [
      // ────────────────────────────────────────────────
      // StoLink — 결제·장애 격리·동시성·쿼리 최적화 중심
      // ────────────────────────────────────────────────
      {
        title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
        startedAt: '2025-12',
        endedAt: '2026-01',
        where:
          '팀 프로젝트 (크래프톤 정글 최종 프로젝트 / 5인 개발 / 기획, 인증·결제 백엔드 + 프론트엔드)',
        techStack: [
          { category: 'Backend', items: ['Spring Boot', 'JPA (Hibernate)', 'Redis'] },
          { category: 'Database', items: ['PostgreSQL', 'Neo4j (Graph DB)'] },
          { category: 'Frontend', items: ['React', 'TypeScript', 'Canvas API'] },
          {
            category: 'Testing & Tools',
            items: ['JUnit', 'Testcontainers', 'Claude Code CLI', 'Antigravity'],
          },
        ],
        descriptions: [
          {
            content:
              '웹소설 작가가 글을 쓰면 AI가 인물·관계·사건을 자동 분석하여 그래프로 시각화해주는 **창작 보조 플랫폼**입니다.',
          },
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      '토스페이먼츠 API 연동 크레딧 충전 시스템 — 결제 승인, 웹훅 기반 상태 관리, 크레딧 잔액 관리',
                  },
                  {
                    content:
                      'OAuth2 소셜 로그인 및 JWT(HTTP-only Cookie) 인증/인가, Cross-Domain 쿠키 정책 설계',
                  },
                  {
                    content:
                      'Spring Data JPA 기반 무한 계층 문서 폴더 트리 CRUD 및 API 구현',
                  },
                ],
              },
              {
                content: '**Frontend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      '작가용 웹앱 전체 화면(에디터, Canvas 관계도, 문서 사이드바, 대시보드) 설계 및 개발',
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
                content: '**Backend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content: '**외부 API 타임아웃 누락이 일으킨 Cascading Failure 해결**',
                    descriptions: [
                      {
                        content:
                          '프로덕션에서 전체 API가 무응답 상태에 빠지는 장애 발생. 쓰레드 덤프를 분석한 결과, AI 서버 헬스체크 RestTemplate에 타임아웃이 설정되지 않아(기본값 무한 대기) @TransactionalEventListener(REQUIRES_NEW) 안에서 DB 커넥션을 쥔 채 쓰레드가 영원히 멈추고 있었음',
                      },
                      {
                        content:
                          'RestTemplateBuilder로 5초 Fail-Fast 타임아웃을 강제 적용하여 장애 격리. **대기 요청 20건으로 전체 마비되던 상황에서, 외부 서버 완전 다운 시에도 코어 서비스 정상 응답 확인**',
                      },
                    ],
                  },
                  {
                    content: '**결제 트랜잭션 분리 — 외부 PG 호출과 DB 트랜잭션 격리**',
                    descriptions: [
                      {
                        content:
                          '위 Cascading Failure를 계기로 결제 플로우에도 동일한 위험이 있음을 인지. TransactionTemplate을 도입해 검증·PG 호출·DB 반영을 3단계로 분리하여, 외부 API 대기 구간에서 커넥션을 점유하지 않도록 선제 격리',
                      },
                    ],
                  },
                  {
                    content: '**동시 결제 정합성 — 비관적 락 + 멱등키**',
                    descriptions: [
                      {
                        content:
                          '잔액 차감·결제 상태 전이 모두 비관적 락(SELECT FOR UPDATE)으로 직렬화하고, @Version을 방어적 안전장치로 병행. 중복 결제 방지에 멱등키를 DB unique + PG API 헤더에 이중 적용. Testcontainers 기반 통합 테스트로 **100스레드 동시 요청에서 잔액 정합성 100% 검증**',
                      },
                    ],
                  },
                ],
              },
              {
                content: '**Frontend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      '**[렌더링 최적화]** SVG 기반 관계도에서 노드 수 비례로 DOM Layout 비용이 증가하는 구조적 한계를 확인하고, Canvas API 단일 비트맵 렌더링으로 전환. **INP 420ms → 64ms, 650+ 노드에서 60FPS 유지**',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ────────────────────────────────────────────────
      // Aidiary — 비동기 아키텍처, 장애 격리, 캐싱 전략 중심
      // ────────────────────────────────────────────────
      {
        title: 'Aidiary : AI 기반 산모 감정 일기 서비스',
        startedAt: '2025-04',
        endedAt: '2026-02',
        where:
          '캡스톤 디자인 (2025.04 ~ 2025.06) → 수료 후 개인 개선 (2026.01 ~ 2026.02) / 2인 개발 (기획, 백엔드·인프라 중심)',
        techStack: [
          { category: 'Backend', items: ['Spring Boot', 'Flask', 'Redis', 'RabbitMQ'] },
          {
            category: 'AI/ML',
            items: ['AI Agent & LLM (LangGraph, Gemini)', 'Vision & NLP (MediaPipe, XLM-R)'],
          },
          { category: 'Database', items: ['MariaDB'] },
          { category: 'Infra', items: ['AWS (EC2, S3, CloudFront)', 'Docker Compose'] },
        ],
        descriptions: [
          {
            content:
              '산모를 위한 AI 감정 일기 서비스입니다. 일기를 쓰면 AI가 감정을 분석하고 그림 일기로 요약해주며, AI 챗봇과 대화할 수 있습니다. Python ML 라이브러리 활용을 위해 Spring Boot + Flask 이중 서버 구조로 분리했습니다.',
          },
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      'RabbitMQ 기반 비동기 메시지 아키텍처 설계 — Spring Boot ↔ Flask Worker 간 이미지 합성 요청 분리, DLQ + 3중 멱등성 가드',
                  },
                  {
                    content:
                      'Redis/Caffeine 다층 캐시 설계, LangGraph 기반 AI 챗봇 대화 제어 및 가드레일 시스템',
                  },
                  {
                    content:
                      'Docker Compose로 6개 서비스 오케스트레이션 + AWS EC2 배포, S3/CloudFront CDN, GitHub Actions CI/CD',
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
                content: '**Backend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content: '**동기 블로킹으로 인한 서비스 마비 → RabbitMQ 비동기 전환**',
                    descriptions: [
                      {
                        content:
                          'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. Flask ML 추론(~30초)을 Tomcat 스레드가 동기 대기하면서 스레드 풀이 고갈되는 구조 (실측 **1.16 TPS**)',
                      },
                      {
                        content:
                          '메인 서버는 요청만 받고 즉시 응답(202)하도록 하고, 무거운 ML 연산은 RabbitMQ를 통해 별도 Python Worker가 처리하도록 분리',
                      },
                      {
                        content:
                          '**TPS 1.16 → 1,949 (1,680배), 응답 30,000ms → 4.9ms, 500 VU에서 에러율 0%**',
                      },
                    ],
                  },
                  {
                    content: '**외부 API 호출 비용 절감 — Redis TTL 캐싱**',
                    descriptions: [
                      {
                        content:
                          '매 요청마다 Gemini API를 호출하는 비효율을 파악. 자정 TTL 기반 Redis 캐싱으로 **응답 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                      },
                    ],
                  },
                  {
                    content: '**@Data 순환 참조로 인한 서버 크래시 해결**',
                    descriptions: [
                      {
                        content:
                          '일기 조회 시 단일 응답이 4GB 이상으로 서버가 반복 크래시. Lombok @Data가 생성한 getter를 Jackson이 순회하며 Diary → User → Child → User 순환 직렬화를 일으키는 것이 원인',
                      },
                      {
                        content:
                          '@Data를 제거하고 DTO 변환으로 엔티티 그래프가 직렬화 계층에 노출되지 않도록 차단. **응답 크기 4GB+ → 20KB로 정상화**',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
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

export default tossPayload;
