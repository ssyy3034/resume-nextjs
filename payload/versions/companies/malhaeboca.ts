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
import fullstackPayload from '../base/fullstack';
import { frontend, tools } from '../../skill';

// 말해보카 JD: TypeScript 풀스택, Node.js, MySQL, Redis, MongoDB, AI 학습, 게이미피케이션
const malhaebocaBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Node.js',
      description:
        '비동기 이벤트 루프 기반의 서버 환경을 이해하고, TypeScript 기반 API 서버 개발 경험.',
    },
    {
      title: 'NestJS',
      description:
        '모듈·DI·인터셉터·가드를 활용한 서비스 아키텍처 설계. TypeScript 기반 REST API 개발 및 DB 연동.',
    },
    {
      title: 'Spring Boot',
      description:
        'Layered Architecture 기반 REST API 설계, JPA를 활용한 도메인 모델링 경험. 이 기본기를 바탕으로 새로운 백엔드 환경에서도 빠르게 적응할 수 있습니다.',
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

const malhaebocaDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'MySQL / PostgreSQL / MariaDB',
      description:
        'RDB 운용 경험. 비관적 락으로 동시성 제어, 인덱스 설계, N+1 쿼리 최적화(Fetch Join).',
    },
    {
      title: 'MongoDB',
      description:
        '스키마 설계, 가중치 텍스트 인덱스 기반 검색, TTL 인덱스 활용.',
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

// Knowledge Garden: TypeScript 풀스택(NestJS + Next.js) 강조
const knowledgeGardenForMalhaeboca: IProject.Item = {
  title: 'Knowledge Garden : TypeScript 풀스택 포트폴리오 서비스',
  startedAt: '2026-02',
  where: '개인 프로젝트',
  techStack: [
    { category: 'Backend', items: ['NestJS (Node.js)', 'TypeScript', 'MongoDB', 'OpenAI API'] },
    { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Infra', items: ['Docker', 'Vercel'] },
  ],
  descriptions: [
    {
      content:
        'TypeScript 하나로 클라이언트(Next.js)와 서버(NestJS)를 개발한 풀스택 프로젝트입니다. 도메인별 모듈 분리, MongoDB 연동, AI 챗봇 API를 설계·개발했습니다.',
    },
    {
      content: '**담당 구현**',
      weight: 'BOLD',
      descriptions: [
        {
          content: '**Backend (NestJS + TypeScript)**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'Chat, AI, Analytics, Resume 4개 도메인을 NestJS 모듈로 분리하고 DI로 의존성 관리',
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
                '인터셉터 기반 분석 로깅(토큰·응답 시간) 및 MongoDB TTL 인덱스로 90일 자동 데이터 정리',
            },
          ],
        },
        {
          content: '**Frontend (Next.js + TypeScript)**',
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
          content: '**[메모리 누수] k6 부하 테스트 중 Node.js 세션 메모리 누수 발견 및 해결**',
          descriptions: [
            {
              content:
                'Map 기반 세션 저장소에 삭제 로직이 없어 세션이 영구 잔류하는 것을 발견. @nestjs/schedule 기반 TTL 정리 스케줄러를 도입하여 **heapUsed 92.85MB → 40.35MB, 52MB(56.5%) 회수**',
            },
          ],
        },
      ],
    },
  ],
};

const malhaebocaPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 말해보카 이력서',
  },
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      '**탄탄한 기본기와 원리를 중시하는 신입 풀스택 엔지니어 권동하입니다.**',

      '**TypeScript 하나로 클라이언트와 서버를 다루는 풀스택 엔지니어**\n크래프톤 정글에서 5개월간 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 지식을 다졌습니다. 이 기반 위에 Node.js(NestJS) 서버와 React/Next.js 클라이언트를 모두 TypeScript로 개발한 경험이 있으며, API 설계부터 클라이언트 연동까지 하나의 피처를 처음부터 끝까지 책임지고 개발합니다. 동작 원리를 이해한 학습을 통해 언어나 프레임워크에 국한되지 않고 빠르게 적응할 수 있습니다.',

      '**복잡한 로직을 구조적으로 정리하고, 성능을 수치로 검증하는 개발자**\n복잡하게 얽힌 서비스 로직을 모듈화하고 리팩토링하는 것을 중요하게 생각합니다. NestJS에서 4개 도메인을 모듈 단위로 분리하고, Spring Boot에서는 무한 계층 폴더 트리 구조를 설계한 경험이 있습니다. 또한 k6 부하 테스트로 병목을 찾아 RabbitMQ 비동기 아키텍처로 전환(TPS 1,680배 개선)하고, N+1 쿼리를 Fetch Join으로 최적화(API 응답 18배 개선)하는 등 감이 아닌 측정 기반으로 성능을 개선합니다.',

      '**팀 생산성을 고민하는 팀원**\n개발 프로젝트에서 코드 작성에만 머무르지 않고 팀의 불편사항을 찾아 개선합니다. 반복되는 Git 커밋·PR 작업이 팀의 병목이 되는 것을 파악하여, Antigravity의 커스텀 커맨드 기능을 활용해 팀의 개발 속도를 높이고 부트캠프 내 타 팀까지 확산시켰습니다.',

      '**말해보카에 합류하고 싶은 이유**\n말해보카를 직접 사용해보며, AI 맞춤형 퀴즈와 망각 곡선 기반 반복 학습이 단순한 단어 앱이 아닌 **학습 엔진**이라는 인상을 받았습니다. 1,000만 다운로드가 증명하듯 사용자를 자연스럽게 학습에 몰입시키는 게이미피케이션 설계와, TypeScript 풀스택 구조에서 AI 학습 로직을 직접 다룰 수 있다는 점에 깊은 관심을 갖고 있습니다.',
    ],
  },
  skill: {
    ...fullstackPayload.skill,
    // Frontend → Backend(Node.js 우선) → Database(MySQL, MongoDB) → Tools
    skills: [frontend, malhaebocaBackend, malhaebocaDatabase, tools],
  },
  project: {
    ...fullstackPayload.project,
    list: fullstackPayload.project.list.map((item) => {
      // StoLink: 풀스택, 복잡한 로직, 모듈화, 테스트 강조
      if (item.title.includes('StoLink')) {
        return {
          ...item,
          descriptions: [
            ...item.descriptions.slice(0, 2),
            {
              content: '**트러블슈팅 & 성능 개선**',
              weight: 'BOLD',
              descriptions: [
                {
                  content: '**Backend**',
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
                      content:
                        'JPA N+1 쿼리를 Fetch Join으로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                    },
                  ],
                },
                {
                  content: '**Frontend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[렌더링 최적화]** SVG → Canvas API 전환으로 DOM 비례 레이아웃 비용 제거. **INP 420ms → 64ms, 650+ 노드 환경에서 60FPS 유지**',
                    },
                    {
                      content:
                        '**[알고리즘 최적화]** 문서 배열→트리 변환 시 HashMap 도입으로 탐색 복잡도 O(n²) → **O(n), 연산 속도 1ms 이하로 단축**',
                    },
                    {
                      content:
                        '**[번들링 최적화]** Vite 코드 분할 + hover 프리로드로 **초기 번들 사이즈 450KB → 187KB(58% 감소)**',
                    },
                  ],
                },
              ],
            },
          ],
        };
      }
      // Aidiary: AI 로직, Redis, 서비스 안정성 강조
      if (item.title.includes('Aidiary')) {
        return {
          ...item,
          descriptions: [
            ...item.descriptions.slice(0, 3),
            {
              content: '**트러블슈팅 & 성능 개선**',
              weight: 'BOLD',
              descriptions: [
                {
                  content: '**Backend / Infra**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[성능] 동기 블로킹 → 비동기 아키텍처 전환으로 서비스 장애 해소**',
                      descriptions: [
                        {
                          content:
                            'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. ML 추론(~30초)을 메인 스레드가 동기 대기하면서 스레드 풀이 고갈되는 구조',
                        },
                        {
                          content:
                            'RabbitMQ 비동기 워커 아키텍처로 분리. **TPS 1.16 → 1,949 (1,680배), 응답 레이턴시 30,000ms → 4.9ms, 500 VU 부하에서 에러율 0%**',
                        },
                      ],
                    },
                    {
                      content:
                        '**[안정성] AI 챗봇 대화 이탈 방어** — LangGraph 노드 기반 대화 제어와 3중 가드레일(의미 검색 강제, 시스템 프롬프트, 입력 검증)로 AI 환각 방어',
                    },
                    {
                      content:
                        '**[캐싱] Redis TTL 캐싱**으로 매 요청마다 외부 API를 호출하는 비효율 해소. **응답 시간 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                    },
                  ],
                },
                {
                  content: '**Frontend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[메인 스레드 제어]** 모바일에서 Canvas 이미지 압축이 메인 스레드를 점유해 2초간 화면 멈춤 발생. Web Worker로 연산을 백그라운드 스레드에 분리하여 **쾌적한 모바일 사용자 경험 제공**',
                    },
                  ],
                },
              ],
            },
          ],
        };
      }
      // Knowledge Garden → TypeScript 풀스택 버전으로 교체
      if (item.title.includes('Knowledge Garden')) {
        return knowledgeGardenForMalhaeboca;
      }
      return item;
    }),
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

export default malhaebocaPayload;
