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
import { backend, database } from '../../skill';

// 미리디 JD: 에디터 코어 엔지니어 — React, TypeScript, Canvas, 성능 최적화, AI 워크플로우
const miridihFrontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'TypeScript',
      description:
        '타입 시스템으로 책임과 경계를 명확히 분리하고, 런타임 오류를 줄여 유지보수성 높은 코드를 작성합니다.',
    },
    {
      title: 'React',
      description:
        '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. Canvas 기반 대규모 시각화, Web Worker 백그라운드 연산 분리 등 UI 병목 해결 경험이 있습니다.',
    },
    {
      title: 'Next.js',
      description:
        'App Router 기반 페이지 설계, SSR/SSG 특성을 활용한 성능 최적화 및 Vercel 기반 배포 파이프라인 구축.',
    },
    {
      title: 'Canvas API',
      description:
        'SVG → Canvas 전환으로 650+ 노드 환경에서 60FPS 유지. 드래그, 줌, 검색 등 복잡한 인터랙션을 단일 비트맵 레이어로 처리한 경험.',
    },
    {
      title: 'Zustand / TanStack Query',
      description:
        '도메인별 스토어 분리를 통한 전역 상태 관리 및 서버 상태 동기화.',
    },
    {
      title: 'Vite / Webpack',
      description:
        'Vite 코드 분할로 초기 번들 58% 감소. hover 시점 프리로드 등 빌드 최적화 경험.',
    },
    {
      title: 'styled-components / Tailwind CSS',
      description: 'CSS-in-JS 및 유틸리티 기반 반응형 UI 구현.',
    },
  ],
};

const miridihTools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Claude Code / Antigravity',
      description:
        'AI 에이전트 워크플로우를 설계하고 팀 개발 프로세스에 정착시킨 경험. 3-Layer 문서 전략으로 토큰 효율화.',
    },
    {
      title: 'Git / GitHub',
      description:
        '브랜치 전략, PR 기반 코드 리뷰, GitHub Actions CI/CD.',
    },
  ],
};

const miridihPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 미리디 이력서',
  },
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      '**구조와 성능을 측정 기반으로 다루는 프론트엔드 엔지니어 권동하입니다.**',

      '**확장 가능한 구조를 고민하고, 성능을 수치로 검증하는 엔지니어**\nSVG 기반 관계도의 DOM 비례 레이아웃 비용 한계를 분석하여 Canvas API로 전환하고, **650+ 노드 환경에서 60FPS를 유지하며 INP 420ms → 64ms로 개선**한 경험이 있습니다. 번들 분석을 통해 Vite 코드 분할과 hover 프리로드를 적용하여 초기 번들을 58% 감소시키고, 탐색 알고리즘을 O(n²) → O(n)으로 개선하는 등 감이 아닌 측정과 데이터를 기반으로 병목을 분석하고 개선합니다.',

      '**AI 워크플로우를 팀에 정착시킨 경험**\nClaude Code를 일상 개발 워크플로우에 통합하여 생산성을 극대화하고 있습니다. 1,000줄 단일 문서의 전체 로딩으로 인한 토큰 낭비와 맥락 오염 문제를 파악하고, 3-Layer(Core/Appendix/Spec) 문서 분리 전략을 설계하여 팀에 공유·정착시켰습니다. 또한 반복되는 커밋·PR 작업을 Antigravity 커스텀 커맨드로 자동화하고, 부트캠프 내 타 팀까지 확산시킨 경험이 있습니다.',

      '**탄탄한 CS 기본기 위에 빠르게 학습하는 개발자**\n크래프톤 정글에서 5개월간 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 지식을 다졌습니다. 이 기반 위에 React, TypeScript, Canvas API, Spring Boot, NestJS까지 필요한 기술을 빠르게 학습하고 실전에 적용해왔습니다. 테스트와 리뷰를 선택이 아닌 기본값으로 두고 개발합니다.',
    ],
  },
  skill: {
    ...fullstackPayload.skill,
    // Frontend(Canvas, React, TS 우선) → Tools(AI 워크플로우) → Backend → Database
    skills: [miridihFrontend, miridihTools, backend, database],
  },
  project: {
    ...fullstackPayload.project,
    list: fullstackPayload.project.list.map((item) => {
      // StoLink: Canvas 에디터, 렌더링 최적화, 번들 최적화, AI 워크플로우 강조
      if (item.title.includes('StoLink')) {
        return {
          ...item,
          descriptions: [
            ...item.descriptions.slice(0, 1),
            {
              content: '**담당 구현**',
              weight: 'BOLD',
              descriptions: [
                {
                  content: '**Frontend — 에디터 & 시각화**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        'StoLink 작가용 웹앱 전체 화면(에디터, 관계도, 문서 사이드바, 대시보드) 설계 및 개발',
                    },
                    {
                      content:
                        'Tiptap 기반 작가용 커스텀 리치 텍스트 에디터 환경 구축',
                    },
                    {
                      content:
                        '소설 인물 관계도를 **Canvas API**로 시각화하여 대규모 노드 환경에서도 부드러운 인터랙션(드래그, 줌, 검색) 지원',
                    },
                    {
                      content:
                        '폴더 트리 기반 문서 탐색 사이드바 (생성·이동·삭제, 드래그 앤 드롭 정렬)',
                    },
                  ],
                },
                {
                  content: '**Backend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        'OAuth2 기반 소셜 로그인 및 JWT 토큰(HTTP-only Cookie) 인증/인가 시스템',
                    },
                    {
                      content:
                        'Spring Data JPA를 활용한 무한 계층 구조의 문서 폴더 트리 CRUD 및 API 구현',
                    },
                    {
                      content:
                        '토스페이먼츠 연동 크레딧 충전 시스템 및 웹훅 처리 기반 결제 상태 관리',
                    },
                  ],
                },
                {
                  content: '**DX — AI 워크플로우 & 팀 생산성**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '반복되는 커밋·PR 작성이 병목임을 파악하고, Antigravity 커스텀 커맨드로 이슈-브랜치-PR 파이프라인을 단일 명령으로 자동화. 부트캠프 내 타 팀까지 확산',
                    },
                    {
                      content: '**3-Layer 문서 분리로 AI 에이전트 워크플로우 최적화**',
                      descriptions: [
                        {
                          content:
                            '1,000줄 단일 문서를 매번 전체 로딩하면서 AI 토큰 낭비와 맥락 오염(잘못된 코드 생성)이 발생하는 문제를 파악',
                        },
                        {
                          content:
                            '문서를 3-Layer(Core/Appendix/Spec)로 나누어 작업 규모에 따라 필요한 부분만 로딩하도록 구성하고, Librarian 커맨드로 문서 동기화를 자동화',
                        },
                        {
                          content:
                            '불필요한 토큰 소모를 줄여 같은 예산으로 더 오래 작업할 수 있게 되었고, 맥락이 정확해져 코드 품질도 개선',
                        },
                      ],
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
                  content: '**Frontend — 렌더링·번들·알고리즘 최적화**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[렌더링 최적화] SVG → Canvas 전환으로 에디터 렌더링 병목 해소**',
                      descriptions: [
                        {
                          content:
                            'SVG 기반 관계도는 노드·엣지 각각이 DOM 요소로 존재하여, 노드가 늘어날수록 Layout 비용이 비례 증가하는 구조적 한계를 확인',
                        },
                        {
                          content:
                            'Canvas API로 전환하여 렌더링을 단일 비트맵 레이어로 처리하고 DOM 비례 레이아웃 비용을 제거. **INP 420ms → 64ms, 650+ 노드 환경에서 60FPS 유지**',
                        },
                      ],
                    },
                    {
                      content:
                        '**[알고리즘 최적화]** 1차원 문서 배열을 트리 구조로 변환 시 발생하는 렌더링 지연(~20ms)을 해결하기 위해 문서 ID 파싱용 HashMap 도입. 탐색 복잡도를 O(n²)에서 **O(n)으로 개선하여 연산 속도를 1ms 이하로 단축**',
                    },
                    {
                      content: '**[번들링/UX 최적화] 청크 분할 및 초기 지연 로딩**',
                      descriptions: [
                        {
                          content:
                            '초기 로딩 시 무거운 문서 내보내기 라이브러리가 함께 묶여 번들 크기가 커지는 병목 확인',
                        },
                        {
                          content:
                            'Vite를 활용해 코드를 분할하고, 사용자가 버튼에 마우스를 올릴 때 필요한 파일만 미리 불러오도록 구현하여 **초기 번들 사이즈를 450KB → 187KB(58% 감소)**',
                        },
                      ],
                    },
                  ],
                },
                {
                  content: '**Backend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '동시 결제 요청 시 잔액 부정합 방지를 위해 비관적 락 + 멱등키 적용. Testcontainers 기반 통합 테스트로 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증**',
                    },
                    {
                      content:
                        'N+1 쿼리를 Fetch Join으로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                    },
                  ],
                },
              ],
            },
          ],
        };
      }
      // Aidiary: Web Worker, Canvas, 아키텍처 분리 강조
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
                  content: '**Frontend — 메인 스레드 최적화**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[메인 스레드 제어] Web Worker 기반 브라우저 백그라운드 연산 분리**',
                      descriptions: [
                        {
                          content:
                            '모바일 환경에서 무거운 Canvas 이미지 압축 작업이 메인 스레드를 점유해 최대 2초간 화면이 멈추는 렌더링 차단 현상 파악',
                        },
                        {
                          content:
                            '브라우저 동작 방식을 고려하여 Web Worker를 도입, 독립된 백그라운드 스레드로 연산을 완전히 분리하고 Worker 2개를 활용한 병렬 압축 적용',
                        },
                        {
                          content:
                            '결과적으로 메인 스레드 점유율을 크게 낮춰, **로딩 애니메이션이 끊기지 않는 쾌적한 모바일 사용자 경험 제공**',
                        },
                      ],
                    },
                  ],
                },
                {
                  content: '**Backend / Infra — 아키텍처 확장**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '**[아키텍처] 동기 블로킹 → 비동기 메시지 큐 전환으로 서비스 장애 해소**',
                      descriptions: [
                        {
                          content:
                            'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. 원인은 ML 추론(~30초)을 메인 스레드가 동기 대기하면서 스레드 풀이 고갈되는 구조',
                        },
                        {
                          content:
                            'RabbitMQ 비동기 워커 아키텍처로 분리. **TPS 1.16 → 1,949 (1,680배), 응답 레이턴시 30,000ms → 4.9ms, 500 VU 부하에서 에러율 0%**',
                        },
                      ],
                    },
                    {
                      content:
                        '자정 TTL 기반 Redis 캐싱으로 **API 응답 시간 487ms → 3ms (162배), 외부 API 호출 N회 → 일 1회 고정**',
                    },
                  ],
                },
              ],
            },
          ],
        };
      }
      // Knowledge Garden: 프론트엔드(Next.js App Router) 부분 강조
      if (item.title.includes('Knowledge Garden')) {
        return {
          ...item,
          descriptions: [
            ...item.descriptions.slice(0, 2),
            {
              content: '**트러블슈팅 & 성능 개선**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    '**[메모리 누수] k6 부하 테스트 중 Node.js 세션 메모리 누수 발견 및 해결**',
                  descriptions: [
                    {
                      content:
                        'Map 기반 세션 저장소에 삭제 로직이 없어 세션이 영구 잔류하는 것을 발견. TTL 정리 스케줄러를 도입하여 **heapUsed 92.85MB → 40.35MB, 52MB(56.5%) 회수**',
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

export default miridihPayload;
