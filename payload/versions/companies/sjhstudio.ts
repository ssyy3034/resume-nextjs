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

// ──────────────────────────────────────────────────────────
// SJH Studio: 글로벌 웹보드게임 솔루션 프로바이더
// 핵심 공략: 게임 재화 정합성(동시성 제어) + 대규모 트래픽 비동기 처리 + 클라이언트 렌더링 최적화
// 인재상: 기술적 인재 + 소통의 인재
// ──────────────────────────────────────────────────────────

const sjhFrontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'TypeScript',
      description:
        '타입 시스템으로 런타임 오류를 줄이고 협업 시 코드 의도를 명확히 전달하는 데 활용.',
    },
    {
      title: 'React',
      description:
        '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. Canvas API로 대규모 노드 환경에서 60FPS를 유지하고, Web Worker로 메인 스레드 블로킹을 해소한 경험이 있습니다.',
    },
    {
      title: 'Next.js',
      description: 'SSR/SSG 특성을 활용한 성능 최적화 및 Vercel 기반 배포 파이프라인 구축.',
    },
    {
      title: 'Canvas API',
      description:
        'SVG의 DOM 비례 렌더링 비용 한계를 Canvas 단일 비트맵 렌더링으로 전환하여 650+ 노드에서도 부드러운 인터랙션을 구현.',
    },
  ],
};

const sjhBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java / Spring Boot',
      description:
        '주력 기술. Layered Architecture 기반 REST API 개발, 트랜잭션 분리 설계, 비관적 락을 활용한 동시성 제어 경험.',
    },
    {
      title: 'Spring Data JPA',
      description: 'N+1 쿼리 최적화(450ms → 25ms), Fetch Join 설계, 엔티티 연관관계 전략적 관리.',
    },
    {
      title: 'RabbitMQ',
      description:
        '무거운 연산의 동기 블로킹으로 인한 서버 마비를 비동기 메시지 큐로 전환하여 TPS 1,680배 개선. 대규모 동시 접속 환경의 트래픽 분산에 활용.',
    },
    {
      title: 'Redis',
      description: 'TTL 기반 캐싱으로 반복 API 호출 비용 절감 (487ms → 3ms, 162배 개선).',
    },
    {
      title: 'NestJS / Node.js',
      description:
        '모듈·DI·인터셉터·가드를 활용해 챗봇 백엔드를 설계하고, MongoDB 연동 API를 구현.',
    },
    {
      title: 'Python / Flask',
      description: 'ML 모델 서빙 서버 구축 및 MediaPipe·PyTorch 활용.',
    },
  ],
};

const sjhDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MariaDB',
      description:
        '비관적 락(SELECT FOR UPDATE)으로 결제 동시성 제어, 멱등키 기반 중복 방지, Testcontainers로 통합 테스트 검증.',
    },
    {
      title: 'MongoDB',
      description: '가중치 텍스트 인덱스 설계, TTL 인덱스 기반 자동 정리.',
    },
    {
      title: 'Docker / AWS',
      description:
        'Docker Compose 멀티 컨테이너 구성, EC2/S3/CloudFront CDN, GitHub Actions CI/CD.',
    },
  ],
};

const sjhTools: ISkill.Skill = {
  category: 'Tools & Collaboration',
  items: [
    {
      title: 'Git / GitHub',
      description:
        '브랜치 전략, PR 기반 코드 리뷰. 반복 작업을 자동화하여 팀 전체 개발 속도를 높인 경험.',
    },
    {
      title: 'Claude Code / Antigravity',
      description: 'AI 에이전트 워크플로우를 설계해 개발 생산성을 극대화합니다.',
    },
    {
      title: 'k6 / Testcontainers',
      description:
        'k6로 부하 테스트를 수행하여 병목을 정량적으로 측정하고, Testcontainers로 실제 DB 환경의 통합 테스트를 구축.',
    },
  ],
};

const sjhEtc: IEtc.Payload = {
  disable: false,
  list: [
    {
      title: '크래프톤 정글 (Krafton Jungle) 11기',
      subTitle:
        '5개월간 주당 100시간 몰입 — 자료구조, 알고리즘, OS 커널(Pintos) 구현. 동작 원리를 깊이 이해하고 처음 보는 문제를 빠르게 학습하는 체력을 길렀습니다.',
      startedAt: '2025-09',
      endedAt: '2026-01',
    },
    {
      title: '맥도날드 팀 리더 (아르바이트, 약 3년)',
      subTitle:
        '시프트당 최대 20명 운영 — 실시간 병목 판단, 인력 재배치, 현장 이슈 중재, 신규 크루 교육. 다양한 배경의 팀원들과 빠르게 협업하는 소통 역량을 체득했습니다.',
      startedAt: '2022-11',
      endedAt: '2025-09',
    },
    {
      title: 'Rise 캡스톤 디자인 경진대회 참여',
      subTitle:
        '산모 대상 AI 감정 일기 서비스 "Aidiary" — 사용자 니즈 파악부터 기획, 풀스택 개발까지 전 과정 수행',
      startedAt: '2025-04',
      endedAt: '2025-06',
    },
  ],
};

const sjhstudioPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - SJH Studio 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**동시에 들어오는 요청 속에서도 데이터가 어긋나지 않는 서버를 만드는 데 관심이 많은 신입 서버 개발자 권동하입니다.**',

      'Java를 주력으로 Spring Boot 기반의 서버를 설계하고 운영해 왔습니다. 크래프톤 정글에서 5개월간 OS 커널과 자료구조를 직접 구현하며 쓰레드가 자원을 동시에 접근할 때 무슨 일이 벌어지는지를 저수준에서 학습했습니다. 프로젝트 진행중 프로덕션에서 전체 API가 멈추는 장애가 터졌을 때 쓰레드 덤프를 뜯어 원인을 찾았고, 같은 구조적 위험이 결제 플로우에도 있다는 걸 알아채 비관적 락과 멱등키로 선제 격리해 100스레드 동시 요청에서 잔액 정합성 100%를 검증했습니다.',

      '안정적인 서버를 만드는 것만큼, 함께 일하는 사람들이 편하게 개발할 수 있는 환경을 만드는 것도 중요하다고 생각합니다. 팀에서 반복되는 Git 작업이 병목이라는 걸 발견하고 자동화 도구를 만들어 공유했더니, 부트캠프 내 다른 팀까지 가져다 쓰게 됐습니다. 개발 외적으로는 맥도날드에서 3년간 20명 규모의 시프트를 운영하면서 다양한 성향의 사람들과 호흡 맞추는 법을 배웠고, 이 경험 덕분에 어떤 팀에서든 조화롭게 일할 수 있다고 생각합니다.',
    ],
  },
  skill: {
    ...defaultPayload.skill,
    skills: [sjhBackend, sjhFrontend, sjhDatabase, sjhTools],
  },
  etc: sjhEtc,
  project: {
    disable: false,
    list: [
      // ────────────────────────────────────────────────
      // StoLink — 결제 정합성 + 동시성 제어를 최상단에 배치 (핵심 무기)
      // ────────────────────────────────────────────────
      {
        title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
        startedAt: '2025-12',
        endedAt: '2026-01',
        where: '팀 프로젝트 (크래프톤 정글 최종 프로젝트 / 5인 개발 / 기획, 백엔드 + 프론트엔드)',
        techStack: [
          { category: 'Backend', items: ['Spring Boot', 'JPA', 'Redis', 'RabbitMQ'] },
          { category: 'Frontend', items: ['React', 'TypeScript', 'Canvas API'] },
          { category: 'Database', items: ['PostgreSQL', 'Neo4j'] },
          {
            category: 'Testing',
            items: ['JUnit', 'Testcontainers', 'Vitest'],
          },
        ],
        descriptions: [
          {
            content:
              '웹소설 작가가 글을 쓰면 AI가 인물·관계·사건을 자동 분석하여 그래프로 시각화해주는 **창작 보조 플랫폼**입니다. 작가용 에디터(StoLink)와 독자용 열람·구매(StoRead)로 구성됩니다.',
          },
          {
            content: '**핵심 트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  '**[결제 정합성] 크레딧 충전·차감 동시성 제어 — 100스레드 테스트 정합성 100%**',
                descriptions: [
                  {
                    content:
                      '토스페이먼츠 연동 결제 시스템에서 다수의 사용자가 동시에 크레딧을 충전하거나 차감할 때 잔액이 어긋나는 문제가 발생할 수 있는 구조를 사전에 인지. 게임 머니처럼 오차가 허용되지 않는 재화 관리의 핵심이 동시성 제어임을 파악',
                  },
                  {
                    content:
                      '잔액 차감·결제 상태 전이 모두 **비관적 락(SELECT FOR UPDATE)**으로 직렬화하고, @Version을 방어적 안전장치로 병행. 중복 결제 방지에 **멱등키**를 적용. TransactionTemplate을 도입해 검증·PG 호출·DB 반영을 3단계로 분리하여 외부 API 대기 구간에서 DB 커넥션을 점유하지 않도록 설계',
                  },
                  {
                    content:
                      'Testcontainers 기반 통합 테스트 환경을 구축하여 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증** 완료',
                  },
                ],
              },
              {
                content:
                  '**[장애 대응] 외부 API 타임아웃 누락이 일으킨 전체 서버 마비 → 원인 추적 → 해결**',
                descriptions: [
                  {
                    content:
                      '프로덕션 전체 API가 무응답에 빠지는 장애 발생. 쓰레드 덤프 분석 결과, 외부 AI 서버 호출에 타임아웃이 설정되지 않아 DB 커넥션을 쥔 채 무한 대기하여 연쇄 장애(Cascading Failure)가 발생',
                  },
                  {
                    content:
                      '5초 Fail-Fast 타임아웃을 적용하여 즉시 격리. 같은 패턴이 결제 플로우에도 존재함을 인지하고, 외부 PG 호출을 트랜잭션 밖으로 선제 분리. **외부 서버 완전 다운 시에도 코어 서비스 정상 응답 확인**',
                  },
                ],
              },
              {
                content: '**[렌더링 최적화] SVG → Canvas 전환으로 클라이언트 렌더링 병목 해소**',
                descriptions: [
                  {
                    content:
                      'SVG 기반 관계도는 노드·엣지 각각이 DOM 요소로 존재하여 노드가 늘수록 Layout 비용이 비례 증가하는 구조적 한계를 확인. Canvas API로 전환하여 단일 비트맵 레이어에서 렌더링을 처리',
                  },
                  {
                    content:
                      '**INP 420ms → 64ms, 650+ 노드 환경에서 60FPS 유지** — 웹보드게임 클라이언트에서 요구되는 부드러운 UI/UX 구현 역량과 연결되는 경험',
                  },
                ],
              },
              {
                content: '**[쿼리 최적화] N+1 문제 해결 — API 응답 18배 개선**',
                descriptions: [
                  {
                    content:
                      'JPA 쿼리 로그에서 문서 1건 조회 시 N개 추가 쿼리 발생 확인. Fetch Join으로 한 번의 쿼리에 함께 조회하도록 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                  },
                ],
              },
              {
                content: '**[DX] Git 작업 자동화 → 부트캠프 전체 확산**',
                descriptions: [
                  {
                    content:
                      '반복되는 커밋·PR 작성이 팀 전체의 병목임을 파악. 이슈 → 브랜치 → 커밋 → PR을 단일 명령으로 자동화하는 도구를 만들어, 부트캠프 내 타 팀까지 확산. 팀 생산성 향상에 주도적으로 기여',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ────────────────────────────────────────────────
      // Aidiary — 비동기 큐 기반 대규모 트래픽 처리 역량 강조
      // ────────────────────────────────────────────────
      {
        title: 'Aidiary : AI 기반 산모 감정 일기 서비스',
        startedAt: '2025-04',
        endedAt: '2026-02',
        where:
          '캡스톤 디자인 (2025.04 ~ 2025.06) → 수료 후 개인 개선 (2026.01 ~ 2026.02) / 2인 개발 (기획, 풀스택)',
        techStack: [
          { category: 'Backend', items: ['Spring Boot', 'Flask', 'Redis', 'RabbitMQ'] },
          { category: 'AI', items: ['LangGraph', 'Gemini API', 'MediaPipe'] },
          { category: 'Infra', items: ['AWS (EC2, S3, CloudFront)', 'Docker Compose'] },
        ],
        descriptions: [
          {
            content:
              '산모를 위한 AI 감정 일기 서비스입니다. 일기를 쓰면 AI가 감정을 분석하고 그림 일기로 요약해주며, 아이 캐릭터와 AI 챗봇으로 대화할 수 있습니다.',
          },
          {
            content: '**핵심 트러블슈팅 & 성능 개선**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  '**[대규모 트래픽] 동기 블로킹으로 인한 서버 마비 → RabbitMQ 비동기 아키텍처로 전환 — TPS 1,680배 개선**',
                descriptions: [
                  {
                    content:
                      'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. Flask ML 추론(~30초)을 메인 서버의 Tomcat 스레드가 동기 대기하면서 스레드 풀이 고갈되는 구조가 원인 (실측 1.16 TPS)',
                  },
                  {
                    content:
                      '메인 서버는 요청만 받고 즉시 응답(202)하도록 하고, 무거운 ML 연산은 **RabbitMQ를 통해 별도 Python Worker가 비동기 처리**하도록 분리. 게임 서버에서 요구되는 큐 기반 트래픽 분산과 동일한 아키텍처 패턴',
                  },
                  {
                    content:
                      '**TPS 1.16 → 1,949 (1,680배), 응답 레이턴시 30,000ms → 4.9ms, 500명 동시 접속에서 에러율 0%**',
                  },
                ],
              },
              {
                content: '**[AI 안정성] 챗봇 환각 방어 — 3중 가드레일 시스템 설계**',
                descriptions: [
                  {
                    content:
                      'AI 챗봇에서 부적절한 응답이 생성되는 문제를 발견. LangGraph 노드 기반 대화 제어와 3중 가드레일(의미 검색 강제, 시스템 프롬프트, 입력 검증)로 방어 체계 구축',
                  },
                ],
              },
              {
                content: '**[비용 절감] Redis 캐싱으로 API 호출 비용 162배 절감**',
                descriptions: [
                  {
                    content:
                      '데일리 질문이 매 요청마다 Gemini API를 호출하는 비효율을 파악. Redis TTL 캐싱으로 **응답 487ms → 3ms, API 호출 N회 → 일 1회 고정**',
                  },
                ],
              },
              {
                content: '**[메인 스레드 제어] Web Worker 기반 백그라운드 연산 분리**',
                descriptions: [
                  {
                    content:
                      '모바일에서 무거운 이미지 압축이 메인 스레드를 점유해 최대 2초간 화면이 멈추는 현상 파악. Web Worker 도입으로 독립된 백그라운드 스레드에서 연산을 처리하여 끊김 없는 UX 제공',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ────────────────────────────────────────────────
      // Knowledge Garden — 모듈 설계 + AI 시스템 구축 역량
      // ────────────────────────────────────────────────
      {
        title: 'Knowledge Garden : AI 챗봇이 있는 포트폴리오 사이트',
        startedAt: '2026-02',
        where: '개인 프로젝트',
        techStack: [
          { category: 'Backend', items: ['NestJS', 'MongoDB', 'OpenAI API'] },
          { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
        ],
        descriptions: [
          {
            content:
              '포트폴리오 방문자가 AI 챗봇을 통해 자연어로 질문하면, 이력서 데이터를 검색해 대화형으로 답변하는 사이트입니다.',
          },
          {
            content: '**설계 포인트**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  'NestJS 모듈 아키텍처로 Chat, AI, Analytics, Resume 4개 도메인을 분리하고 DI로 의존성 관리',
              },
              {
                content:
                  'MongoDB 가중치 텍스트 인덱스로 관련 이력서 데이터를 검색하고, LLM 컨텍스트에 주입하는 파이프라인 설계',
              },
              {
                content:
                  'k6 부하 테스트 중 세션 메모리 누수 발견 → Map 기반 세션 저장소에 TTL 정리 스케줄러를 적용하여 **힙 메모리 92.85MB → 40.35MB (56.5% 회수)**',
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

export default sjhstudioPayload;
