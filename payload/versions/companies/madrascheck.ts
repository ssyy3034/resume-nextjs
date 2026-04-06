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

// 마드라스체크: Java/JS/Node.js/RDB, Docker/Linux, AWS, 협업툴, 기업 솔루션 커스텀
// 우대: DB 튜닝, js module 화면, node/tomcat/postgres, Prometheus & Grafana, 성능 테스트

const madrasBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java / Spring Boot',
      description: 'REST API 설계, JPA 도메인 모델링, 트랜잭션 분리 설계.',
    },
    {
      title: 'Node.js / NestJS',
      description: '모듈·DI·인터셉터 기반 서비스 아키텍처 설계 및 API 개발.',
    },
    {
      title: 'RDB (PostgreSQL, MariaDB)',
      description: 'Fetch Join 쿼리 최적화, 비관적 락 동시성 제어, 인덱스 설계.',
    },
    {
      title: 'Redis / RabbitMQ',
      description: 'TTL 캐싱으로 API 비용 절감. 비동기 메시지 큐로 장애 격리 및 TPS 1,680배 개선.',
    },
  ],
};

const madrasInfra: ISkill.Skill = {
  category: 'Infra & Tools',
  items: [
    {
      title: 'Docker / Linux',
      description: 'Docker Compose 멀티 컨테이너 오케스트레이션. Linux(EC2) 배포·운영.',
    },
    {
      title: 'AWS',
      description: 'EC2, S3/CloudFront CDN, 오리진 라우팅 경로 분기, GitHub Actions CI/CD.',
    },
    {
      title: 'Prometheus & Grafana / k6',
      description: 'TPS·레이턴시·에러율 실시간 모니터링 대시보드 구성. k6 부하 시나리오 설계.',
    },
    {
      title: 'Git / GitHub',
      description: 'PR 기반 코드 리뷰. 커스텀 커맨드로 팀 Git 워크플로우 자동화.',
    },
  ],
};

const madrasFrontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'JavaScript / TypeScript',
      description: 'Canvas API, Web Worker 등 브라우저 API 활용 성능 최적화.',
    },
    {
      title: 'React',
      description: 'JS 모듈 기반 화면 구현. SVG→Canvas 전환으로 INP 420ms → 64ms 개선.',
    },
  ],
};

const madrasEtc: IEtc.Payload = {
  disable: false,
  list: [
    {
      title: '크래프톤 정글 (Krafton Jungle) 11기',
      subTitle: '5개월간 주당 100시간 몰입 — 자료구조, 알고리즘, Pintos OS 커널 구현',
      startedAt: '2025-09',
      endedAt: '2026-01',
    },
    {
      title: '맥도날드 팀 리더 (아르바이트)',
      subTitle: '시프트 최대 20명 운영 — 병목 판단·인력 재배치, 이슈 중재',
      startedAt: '2022-11',
      endedAt: '2025-09',
    },
  ],
};

const madrascheckPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - 마드라스체크 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**팀의 병목을 풀고 함께 성장을 만드는 개발자, 권동하입니다.**',

      '**원리를 파고드는 탄탄한 기본기를 지향합니다.**\n- 크래프톤 정글에서 5개월간 주 100시간 몰입하며 Pintos OS 커널을 구현하고 컴퓨터 공학 기본기를 깊이 다졌습니다.\n- 단순히 프레임워크 사용법만 익히는 것을 넘어 **이 기술이 왜 필요한가**, **동작 원리는 무엇인가**를 치열하게 고민합니다.\n- 이러한 기본기를 바탕으로 Java와 Node.js 생태계를 오가며 트랜잭션 분리, 비관적 락 동시성 제어, 다층 캐시 아키텍처 등 서버 엔지니어로서의 역량을 단단하게 다졌습니다.',

      '**측정과 지표를 통한 문제 해결을 추구합니다.**\n- 문제 앞에서 단순한 추측이 아닌 명확한 지표 관측과 원인 규명을 선행합니다.\n- 프로덕션 환경의 API 무응답 장애를 마주했을 때, 쓰레드 덤프를 직접 분석하여 외부 연동 API가 유발한 Cascading Failure임을 특정해 차단했습니다.\n- 또한 k6와 Prometheus를 이용한 부하 테스트로 임계점을 확인하고, 동기 블로킹 구조를 비동기 메시지 큐(RabbitMQ)로 전환하여 TPS를 1,680배 개선한 경험이 있습니다.',

      '**원활한 소통과 프로세스 개선으로 팀 전체의 시너지를 만듭니다.**\n- 다년간 맥도날드 시프트 매니저로 20여 명의 크루를 조율하며, **입장이 다른 동료들 사이에서 발생하는 갈등과 병목을 찾아 조율하는 소통 감각**을 체득했습니다.\n- 생산성 향상에 대한 고민은 개발 과정으로도 이어져, 팀 내 Git 작업의 비효율을 파악하고 이슈부터 PR 생성까지 자동화하는 CLI 커맨드를 직접 개발하여 작업 시간을 단축시켰습니다.\n- 개발·비개발 직군을 아우르며 **파편화된 업무를 하나로 엮고 조직의 소통 비용을 낮추는 협업 툴의 본질적 가치**에 깊이 공감합니다.\n- 다양한 사람과 프로세스를 조율해 본 오프라인 경험과 기술적 최적화 역량을 결합하여, 마드라스체크의 \'플로우(Flow)\'가 창출하는 비전에 기여하겠습니다.',
    ],
  },
  skill: {
    ...defaultPayload.skill,
    skills: [madrasBackend, madrasInfra, madrasFrontend],
  },
  etc: madrasEtc,
  project: {
    disable: false,
    list: [
      {
        title: 'StoLink & StoRead : 웹소설 작가를 위한 창작 보조 플랫폼',
        startedAt: '2025-12',
        endedAt: '2026-01',
        where: '팀 프로젝트 (5인 / 기획, 인증·결제 백엔드 + 프론트엔드)',
        techStack: [
          { category: 'Backend', items: ['Java', 'Spring Boot', 'JPA', 'Redis'] },
          { category: 'Database', items: ['PostgreSQL'] },
          { category: 'Frontend', items: ['JavaScript', 'React', 'TypeScript'] },
          { category: 'Tools', items: ['JUnit', 'Testcontainers', 'GitHub Actions'] },
        ],
        descriptions: [
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: 'OAuth2 소셜 로그인 + JWT 인증/인가 시스템, Cross-Domain 쿠키 정책 설계',
              },
              {
                content:
                  '무한 계층 문서 폴더 트리 CRUD API — Fetch Join + In-Memory 트리 조립으로 조회 최적화',
              },
              {
                content:
                  '크레딧 결제 시스템 — 외부 PG 호출을 트랜잭션 밖으로 분리하여 커넥션 점유 방지, 동시성 방어 설계',
              },
              {
                content:
                  '작가용 웹앱 전체 화면 — Canvas API 기반 관계도 시각화, 폴더 트리 사이드바, 텍스트 에디터',
              },
              {
                content:
                  'Git 워크플로우 자동화 — 이슈→브랜치→커밋→PR 단일 명령 커맨드 제작, 부트캠프 내 타 팀까지 확산',
              },
            ],
          },
          {
            content: '**트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Cascading Failure 해결**',
                descriptions: [
                  {
                    content:
                      '프로덕션에서 전체 API 무응답 장애 발생. 외부 API 헬스체크 RestTemplate에 타임아웃이 없어(기본값 무한 대기), Tomcat 스레드가 DB 커넥션을 쥔 채 영구 대기',
                  },
                  {
                    content:
                      '쓰레드 덤프 분석으로 원인을 특정하고 RestTemplateBuilder 5초 Fail-Fast 타임아웃 적용',
                  },
                  {
                    content:
                      '**외부 서버 완전 다운 시에도 코어 서비스 정상 응답 확인**, 대기 요청 20건으로 전체 마비되던 구조 해소',
                  },
                ],
              },
              {
                content: '**결제 동시성 제어**',
                descriptions: [
                  {
                    content:
                      '동시 결제 시 잔액 부정합(금전 손실) 및 네트워크 재시도에 의한 중복 결제 위험',
                  },
                  {
                    content:
                      '비관적 락으로 잔액 차감 직렬화, 멱등키를 DB unique + PG API 헤더에 이중 적용',
                  },
                  {
                    content:
                      'Testcontainers(PostgreSQL) 통합 테스트로 **100스레드 동시 요청 잔액 정합성 검증**',
                  },
                ],
              },
              {
                content: '**N+1 쿼리 최적화**',
                descriptions: [
                  {
                    content:
                      'JPA 쿼리 로그에서 문서 1건 조회 시 태그·카테고리 쿼리가 N개 추가 발생. @ManyToMany LAZY 로딩이 컬렉션 순회마다 개별 쿼리를 유발',
                  },
                  {
                    content: 'Fetch Join으로 연관 데이터를 한 번의 쿼리에 함께 조회하도록 개선',
                  },
                  {
                    content: '**API 응답 450ms → 25ms (18배 개선)**',
                  },
                ],
              },
              {
                content: '**[Frontend] SVG → Canvas 전환**',
                descriptions: [
                  {
                    content:
                      'SVG 관계도는 노드·엣지 각각이 DOM 요소로, 노드 수에 비례하여 Style Recalculation → Reflow → Paint가 연쇄 발생',
                  },
                  {
                    content:
                      'Canvas API 단일 비트맵 렌더링으로 전환, Offscreen Canvas 비트맵 캐싱 적용',
                  },
                  {
                    content: '**INP 420ms → 64ms, 650+ 노드에서 60FPS 유지**',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Aidiary : 산모 감정 일기 서비스',
        startedAt: '2025-04',
        endedAt: '2026-02',
        where: '2인 개발 (기획, 백엔드·인프라 중심)',
        techStack: [
          { category: 'Backend', items: ['Java', 'Spring Boot', 'Redis', 'RabbitMQ'] },
          { category: 'Database', items: ['MariaDB'] },
          {
            category: 'Infra',
            items: ['Docker Compose', 'AWS (EC2, S3, CloudFront)', 'Prometheus & Grafana'],
          },
        ],
        descriptions: [
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  'Spring Boot ↔ Worker 비동기 메시지 아키텍처 설계 — 수동 ACK + DLQ로 Worker 장애 시 메시지 보존',
              },
              {
                content:
                  '다층 캐시 아키텍처 설계 — Hot Key(Caffeine L1 + Redis L2), Cache Avalanche(TTL Jitter), Cache Penetration(유효 키 선차단 + null 마커) 사전 대응',
              },
              {
                content:
                  'DTO Projection 기반 API 응답 계층 설계 — 엔티티 직접 반환의 순환 참조 + N+1(21쿼리) 동시 발생을 DTO 분리로 차단, 필요 컬럼만 SELECT하여 1쿼리로 해결',
              },
              {
                content:
                  'Docker Compose 6개 서비스 오케스트레이션 + AWS EC2 배포, S3/CloudFront CDN, GitHub Actions CI/CD',
              },
              {
                content:
                  'Prometheus & Grafana 모니터링 대시보드 — TPS·레이턴시·스레드 상태 실시간 시각화. k6 부하 시나리오 설계 및 성능 측정',
              },
            ],
          },
          {
            content: '**트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**동기 블로킹 → RabbitMQ 비동기 전환**',
                descriptions: [
                  {
                    content:
                      'k6 + Prometheus + Grafana 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비. 무거운 연산(~30초)을 Tomcat 스레드가 동기 대기하면서 스레드 풀 고갈 (실측 **1.16 TPS**)',
                  },
                  {
                    content:
                      '메인 서버는 큐 발행 후 즉시 202 반환, 무거운 연산은 RabbitMQ를 통해 독립 Worker가 처리하도록 분리',
                  },
                  {
                    content:
                      'Grafana 대시보드에서 검증 — **TPS 1.16 → 1,949 (1,680배), 응답 30,000ms → 4.9ms, 500 VU 에러율 0%**',
                  },
                ],
              },
              {
                content: '**Redis TTL 캐싱**',
                descriptions: [
                  {
                    content:
                      '오늘의 질문 API가 매 요청마다 외부 AI API를 호출 (avg 487ms). 같은 날인데 사용자마다 다른 질문이 생성되어 기능 의도도 불일치',
                  },
                  {
                    content:
                      '캐시 키를 날짜로 설계하고, TTL을 자정까지 남은 초로 설정하여 스케줄러 없이 날짜 변경 시 자동 무효화',
                  },
                  {
                    content:
                      '**응답 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**, 캐시 히트율 99.99% (8,294 hits / 1 miss)',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Knowledge Garden : 포트폴리오 사이트',
        startedAt: '2026-02',
        where: '개인 프로젝트',
        techStack: [
          { category: 'Backend', items: ['NestJS (Node.js)', 'MongoDB'] },
          { category: 'Infra', items: ['Docker'] },
        ],
        descriptions: [
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: 'NestJS 모듈·DI 아키텍처로 4개 도메인 분리 및 REST API 개발 (Node.js)',
              },
              {
                content: 'MongoDB 가중치 텍스트 인덱스 설계 및 TTL 인덱스 기반 데이터 자동 정리',
              },
            ],
          },
          {
            content: '**트러블슈팅**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**메모리 누수 해결**',
                descriptions: [
                  {
                    content:
                      '챗봇 API k6 부하 테스트 중 힙 메모리가 종료 후에도 baseline으로 복귀하지 않는 현상 발견. Map 기반 세션 저장소에 삭제 로직이 없어 세션이 영구 잔류하는 것이 원인',
                  },
                  {
                    content:
                      'SessionData에 lastAccessedAt 필드를 추가하고, @nestjs/schedule 기반 TTL 정리 스케줄러로 만료 세션을 주기적 삭제',
                  },
                  {
                    content:
                      '1,000세션 누적 시 **heapUsed 92.85MB → TTL 정리 후 40.35MB, 52MB(56.5%) 회수**',
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

export default madrascheckPayload;
