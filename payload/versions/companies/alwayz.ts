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
// 레브잇 APS: 기술 스킬보다 "문제를 발견하고 해결하는 사고 방식"을 보여주는 구성
// 고객 이해 → 문제 정의 → 실험 → 검증 사이클을 기술 경험으로 증명
// ──────────────────────────────────────────────────────────

const alwayzFrontend: ISkill.Skill = {
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
        '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. 대규모 시각화(Canvas)나 백그라운드 연산(Web Worker)을 활용해 UI 병목을 해결한 경험이 있습니다.',
    },
    {
      title: 'Next.js',
      description: 'SSR/SSG 특성을 활용한 성능 최적화 및 Vercel 기반 배포 파이프라인 구축.',
    },
  ],
};

const alwayzBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Spring Boot',
      description: 'Layered Architecture 기반 REST API 개발 및 JWT 인증 활용.',
    },
    {
      title: 'NestJS / Node.js',
      description:
        '모듈·DI·인터셉터·가드를 활용해 챗봇 백엔드를 설계하고, MongoDB 연동 API를 구현했습니다.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 MediaPipe·PyTorch 활용.',
    },
    {
      title: 'RabbitMQ',
      description: 'AI 연산량 폭증 시 동기 블로킹 문제를 비동기 큐로 전환하여 장애 격리.',
    },
    {
      title: 'Redis',
      description: '날짜 키 기반 TTL 캐싱으로 API 호출 비용 절감 및 다층 캐시 구성.',
    },
  ],
};

const alwayzAI: ISkill.Skill = {
  category: 'AI / LLM',
  items: [
    {
      title: 'LangGraph / Gemini / OpenAI API',
      description:
        'LangGraph 기반 AI 챗봇 대화 흐름 설계, 3중 가드레일로 환각 방어, 시스템 프롬프트 설계.',
    },
    {
      title: 'Claude Code / Antigravity',
      description: 'AI 에이전트 워크플로우를 설계해 개발 생산성을 극대화합니다.',
    },
  ],
};

const alwayzInfra: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MariaDB / MongoDB',
      description: '비관적 락으로 동시성 제어, 텍스트 인덱스 설계, 쿼리 최적화.',
    },
    {
      title: 'Docker / AWS',
      description: 'Docker Compose 멀티 컨테이너 구성, EC2/S3/CloudFront CDN, GitHub Actions CI/CD.',
    },
  ],
};

const alwayzEtc: IEtc.Payload = {
  disable: false,
  list: [
    {
      title: '크래프톤 정글 (Krafton Jungle) 11기',
      subTitle:
        '5개월간 주당 100시간 몰입 — 자료구조, 알고리즘, OS 커널(Pintos) 구현. 처음 보는 문제에 매일 맞서며 빠르게 학습하는 체력을 길렀습니다.',
      startedAt: '2025-09',
      endedAt: '2026-01',
    },
    {
      title: '맥도날드 팀 리더 (아르바이트, 약 3년)',
      subTitle:
        '시프트당 최대 20명 운영 — 실시간 병목 판단, 인력 재배치, 현장 이슈 중재, 신규 크루 교육. 다양한 사람과 빠르게 협업하는 법을 체득했습니다.',
      startedAt: '2022-11',
      endedAt: '2025-09',
    },
    {
      title: 'Rise 캡스톤 디자인 경진대회 참여',
      subTitle: '산모 대상 AI 감정 일기 서비스 "Aidiary" — 사용자 니즈 파악부터 기획, 풀스택 개발까지 전 과정 수행',
      startedAt: '2025-04',
      endedAt: '2025-06',
    },
  ],
};

const alwayzPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - 레브잇 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**모르는 문제일수록 더 빨리 파고드는 신입 개발자 권동하입니다.**',

      '크래프톤 정글에서 5개월간 매일 처음 보는 문제를 받았습니다. 자료구조, OS 커널, 백엔드 — 어제까지 몰랐던 걸 오늘 안에 돌아가게 만드는 훈련을 반복했습니다. 이 습관은 프로젝트에서도 그대로 이어졌는데, 프로덕션에서 API 전체가 멈추는 장애가 터졌을 때 쓰레드 덤프를 뜯어 원인을 찾았고, 그걸 고치면서 같은 구조가 결제 플로우에도 있다는 걸 알아채서 그쪽도 함께 바꿨습니다.',

      '팀에서 반복되는 Git 작업이 느리다는 걸 보고 자동화 도구를 만들었는데, 쓰다 보니 다른 팀까지 가져다 쓰게 됐습니다. AI 챗봇에서 환각이 나올 때는 가드레일을 직접 만들어 막았고, 사용자 10명이면 멈추던 서비스는 비동기 구조로 바꿔서 TPS를 1,680배 올렸습니다. 일단 돌아가게 만들고, 더 나은 방법을 찾으면 바로 고치는 쪽을 선호합니다.',
    ],
  },
  skill: {
    ...defaultPayload.skill,
    skills: [alwayzFrontend, alwayzBackend, alwayzAI, alwayzInfra],
  },
  etc: alwayzEtc,
  project: {
    disable: false,
    list: [
      // ────────────────────────────────────────────────
      // StoLink — "문제 발견 → 가설 → 실험 → 검증" 사이클 중심으로 재구성
      // ────────────────────────────────────────────────
      {
        title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
        startedAt: '2025-12',
        endedAt: '2026-01',
        where:
          '팀 프로젝트 (크래프톤 정글 최종 프로젝트 / 5인 개발 / 기획, 백엔드 + 프론트엔드)',
        techStack: [
          { category: 'Backend', items: ['Spring Boot', 'JPA', 'Redis', 'RabbitMQ'] },
          { category: 'Frontend', items: ['React', 'TypeScript', 'Canvas API'] },
          { category: 'Database', items: ['PostgreSQL', 'Neo4j'] },
        ],
        descriptions: [
          {
            content:
              '웹소설 작가가 글을 쓰면 AI가 인물·관계·사건을 자동 분석하여 그래프로 시각화해주는 **창작 보조 플랫폼**입니다. 작가용 에디터(StoLink)와 독자용 열람·구매(StoRead)로 구성됩니다.',
          },
          {
            content: '**문제 발견 → 해결 사례**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**[장애 관찰] 프로덕션 전체 API 무응답 → 원인 추적 → 구조적 해결**',
                descriptions: [
                  {
                    content:
                      '프로덕션에서 전체 API가 멈추는 장애 발생. 쓰레드 덤프를 분석한 결과, 외부 AI 서버에 타임아웃 없이 무한 대기하며 DB 커넥션을 쥐고 있는 것이 원인. 5초 타임아웃 적용으로 즉시 격리',
                  },
                  {
                    content:
                      '여기서 끝내지 않고, 같은 패턴이 결제 플로우에도 존재함을 인지. 외부 PG 호출을 트랜잭션 밖으로 선제 분리하고, 동시성 제어와 멱등키까지 적용. **100스레드 동시 요청에서 정합성 100% 검증**',
                  },
                ],
              },
              {
                content: '**[병목 관찰] 팀 Git 작업 반복 → 자동화 도구 제작 → 부트캠프 전체 확산**',
                descriptions: [
                  {
                    content:
                      'Git 숙련도가 높은 팀원에게 컨벤션을 배운 뒤, 반복되는 커밋·PR 작성이 팀 전체의 병목임을 파악. 해당 팀원과 함께 이슈 → 브랜치 → 커밋 → PR을 단일 명령으로 자동화하는 도구를 만들어, 부트캠프 내 타 팀까지 확산',
                  },
                ],
              },
              {
                content: '**[성능 관찰] 느린 API 응답 → 쿼리 로그 분석 → 18배 개선**',
                descriptions: [
                  {
                    content:
                      'JPA 쿼리 로그에서 문서 1건 조회 시 N개 추가 쿼리가 발생함을 확인. Fetch Join으로 한 번의 쿼리로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                  },
                ],
              },
              {
                content: '**[UX 관찰] 관계도 렌더링 지연 → DOM 구조 한계 파악 → Canvas 전환**',
                descriptions: [
                  {
                    content:
                      'SVG 기반 관계도에서 노드가 늘수록 느려지는 현상을 관찰. DOM 요소가 비례 증가하는 구조적 한계를 파악하고 Canvas 단일 비트맵 렌더링으로 전환. **INP 420ms → 64ms, 650+ 노드에서 60FPS 유지**',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ────────────────────────────────────────────────
      // Aidiary — 사용자 중심 AI 서비스, 실험/검증 경험 강조
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
          { category: 'Infra', items: ['AWS', 'Docker Compose'] },
        ],
        descriptions: [
          {
            content:
              '산모를 위한 AI 감정 일기 서비스입니다. 일기를 쓰면 AI가 감정을 분석하고 그림 일기로 요약해주며, 부모의 외모를 바탕으로 만든 아이 캐릭터와 AI 챗봇으로 대화할 수 있습니다. **사용자(산모)의 감정적 맥락을 이해하고 AI 제품으로 풀어낸 경험**입니다.',
          },
          {
            content: '**문제 발견 → 해결 사례**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**[부하 테스트] 10명이면 서비스 마비 → 원인 분석 → 1,680배 개선**',
                descriptions: [
                  {
                    content:
                      'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. Flask ML 추론(~30초)을 메인 서버가 동기 대기하면서 스레드 풀이 고갈되는 구조가 원인',
                  },
                  {
                    content:
                      '메인 서버는 요청만 받고 즉시 응답(202), 무거운 연산은 RabbitMQ를 통해 별도 Worker가 처리하도록 분리. **TPS 1.16 → 1,949 (1,680배), 500명 동시 접속에서 에러율 0%**',
                  },
                ],
              },
              {
                content: '**[AI 품질] 챗봇 환각 문제 → 가드레일 시스템 설계**',
                descriptions: [
                  {
                    content:
                      'AI 챗봇에서 부적절한 응답이 생성되는 문제를 발견. LangGraph 노드 기반 대화 제어와 3중 가드레일(의미 검색 강제, 시스템 프롬프트, 입력 검증)로 방어 체계 구축',
                  },
                ],
              },
              {
                content: '**[비용 관찰] 매번 API 호출 → 캐싱으로 162배 개선, 일 1회 호출로 고정**',
                descriptions: [
                  {
                    content:
                      '데일리 질문이 매 요청마다 Gemini API를 호출하는 비효율을 파악. Redis TTL 캐싱으로 **응답 487ms → 3ms, API 호출 N회 → 일 1회 고정**',
                  },
                ],
              },
              {
                content: '**[모바일 UX] 화면 멈춤 → 원인 분석 → Web Worker로 해결**',
                descriptions: [
                  {
                    content:
                      '모바일에서 무거운 이미지 압축이 메인 스레드를 점유해 최대 2초간 화면이 멈추는 현상 파악. Web Worker로 연산을 백그라운드 스레드에 분리하여 **끊김 없는 모바일 UX 제공**',
                  },
                ],
              },
            ],
          },
        ],
      },
      // ────────────────────────────────────────────────
      // Knowledge Garden — AI 제품 설계 경험 (챗봇, 가드레일, 분석)
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
              '포트폴리오 방문자가 AI 챗봇을 통해 자연어로 질문하면, 이력서 데이터를 검색해 대화형으로 답변하는 사이트입니다. **"사용자가 원하는 정보를 어떻게 하면 가장 편하게 전달할 수 있을까"라는 고민에서 출발**했습니다.',
          },
          {
            content: '**설계 포인트**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  'MongoDB 가중치 텍스트 인덱스로 관련 이력서 데이터를 검색하고, LLM 컨텍스트에 주입하는 파이프라인 설계',
              },
              {
                content:
                  'LLM 가드레일 분류기로 포트폴리오 무관 질문을 사전 필터링 — 페르소나, Teaser Rule, 거절 기준 등 역할별 시스템 프롬프트로 응답 품질 관리',
              },
              {
                content:
                  '인터셉터 기반 분석 로깅(토큰·응답 시간)으로 챗봇 성능을 모니터링하고 개선 포인트 도출',
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

export default alwayzPayload;
