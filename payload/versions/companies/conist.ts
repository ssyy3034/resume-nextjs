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
import { tools } from '../../skill';

// 코니스트 JD: React, Node.js, Next.js, MySQL, Python 크롤링, 풀스택, 웹툰/웹소설
const conistFrontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'React',
      description:
        '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. Canvas 기반 대규모 시각화, 반응형 UI 구현 경험.',
    },
    {
      title: 'TypeScript',
      description:
        '타입 시스템으로 런타임 오류를 줄이고 협업 시 코드 의도를 명확히 전달합니다.',
    },
    {
      title: 'Next.js',
      description:
        'SSR/SSG 특성을 활용한 성능 최적화, App Router 기반 페이지 설계 및 Vercel 배포.',
    },
    {
      title: 'Zustand / TanStack Query',
      description: '도메인별 스토어 분리를 통한 전역 상태 관리 및 서버 상태 동기화.',
    },
    {
      title: 'Tailwind CSS',
      description: '반응형 UI 구현.',
    },
  ],
};

const conistBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Node.js / NestJS',
      description:
        '모듈·DI 기반 서비스 아키텍처 설계. REST API 개발 및 MySQL/MongoDB 연동.',
    },
    {
      title: 'Spring Boot (Java)',
      description:
        'MVC 패턴 기반 REST API 설계, JPA를 활용한 도메인 모델링. Select/Join/Insert/Update 쿼리 작성.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙, 데이터 처리 및 MediaPipe·PyTorch 활용.',
    },
    {
      title: 'Redis',
      description: 'TTL 기반 캐싱으로 API 호출 비용 절감.',
    },
    {
      title: 'RabbitMQ',
      description: '비동기 메시지 큐로 무거운 연산을 분리하여 장애 격리.',
    },
  ],
};

const conistDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'MySQL / PostgreSQL / MariaDB',
      description:
        'RDB 운용. 테이블 설계, 인덱스 구성, 비관적 락으로 동시성 제어, N+1 쿼리 최적화(Fetch Join).',
    },
    {
      title: 'MongoDB',
      description: '스키마 설계, 가중치 텍스트 인덱스 기반 검색, TTL 인덱스 활용.',
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

const conistPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 코니스트 이력서',
  },
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      '**탄탄한 기본기와 원리를 중시하는 신입 풀스택 엔지니어 권동하입니다.**',

      '**기본기에 충실한 기술의 도입**\n크래프톤 정글에서 5개월간 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 지식을 다졌습니다. React 기반 프론트엔드와 Node.js/Spring Boot 기반 백엔드를 함께 다루며, API 설계부터 DB 테이블 설계, 클라이언트 연동까지 풀스택으로 개발합니다.',

      '**팀 생산성을 고민하는 팀원**\n개발 프로젝트에서 코드 작성에만 머무르지 않고 팀의 불편사항을 찾아 개선합니다. 반복되는 Git 커밋·PR 작업이 팀의 병목이 되는 것을 파악하여, Antigravity의 커스텀 커맨드 기능을 활용해 팀의 개발 속도를 높이고 부트캠프 내 타 팀까지 확산시켰습니다.',

      '**웹소설 도메인을 직접 경험한 개발자**\n평소 웹툰·웹소설을 즐겨 소비하는 독자이자, 크래프톤 정글 최종 프로젝트로 웹소설 작가를 위한 창작 보조 플랫폼 StoLink를 직접 기획·개발한 경험이 있습니다. 작가가 글을 쓰면 AI가 인물·관계를 분석하여 그래프로 시각화하고, 독자가 크레딧으로 작품을 구매하는 시스템을 설계하면서 웹소설 콘텐츠의 생산-유통 구조를 깊이 이해하게 되었습니다. 코니스트가 cocoda, JIKIDA, Webtoonguide를 통해 웹툰·웹소설 데이터와 콘텐츠 보호를 다루는 점에서 제가 가진 도메인 경험과 기술을 직접 기여할 수 있다고 생각합니다.',
    ],
  },
  skill: {
    ...fullstackPayload.skill,
    // Frontend(React 우선) → Backend(Node.js 우선) → Database(MySQL 우선) → Tools
    skills: [conistFrontend, conistBackend, conistDatabase, tools],
  },
  project: {
    ...fullstackPayload.project,
    list: fullstackPayload.project.list.map((item) => {
      // StoLink: 웹소설 도메인, React, MVC, MySQL/PostgreSQL, API, 풀스택 강조
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
                            '외부 PG API 응답 지연 시 DB 트랜잭션이 길어져 커넥션 풀이 고갈될 수 있는 구조를 인지하고, 외부 호출을 트랜잭션 밖으로 분리',
                        },
                        {
                          content:
                            '비관적 락 + 멱등키로 동시성 제어. Testcontainers 기반 통합 테스트로 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증**',
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
                        '**[렌더링 최적화]** SVG → Canvas API 전환으로 **INP 420ms → 64ms, 650+ 노드 환경에서 60FPS 유지**',
                    },
                    {
                      content:
                        '**[알고리즘 최적화]** 문서 배열→트리 변환 시 HashMap 도입으로 O(n²) → **O(n), 1ms 이하로 단축**',
                    },
                    {
                      content:
                        '**[번들링 최적화]** Vite 코드 분할 + hover 프리로드로 **초기 번들 450KB → 187KB(58% 감소)**',
                    },
                  ],
                },
              ],
            },
          ],
        };
      }
      // Aidiary: Python, React, API, 풀스택 강조
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
                        '**[성능]** k6 부하 테스트에서 ML 추론 동기 블로킹으로 서비스 마비 확인. RabbitMQ 비동기 아키텍처로 전환하여 **TPS 1.16 → 1,949 (1,680배), 500 VU 에러율 0%**',
                    },
                    {
                      content:
                        '**[캐싱]** Redis TTL 캐싱으로 **응답 시간 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                    },
                    {
                      content:
                        '**[배포]** Docker Compose로 6개 컨테이너 오케스트레이션 + AWS EC2/S3/CloudFront + GitHub Actions CI/CD',
                    },
                  ],
                },
                {
                  content: '**Frontend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[메인 스레드 제어]** 모바일 Canvas 이미지 압축이 메인 스레드를 점유해 2초간 멈춤 발생. Web Worker로 백그라운드 분리하여 **쾌적한 모바일 UX 제공**',
                    },
                  ],
                },
              ],
            },
          ],
        };
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

export default conistPayload;
