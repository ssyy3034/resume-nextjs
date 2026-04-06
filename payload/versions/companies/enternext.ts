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
import { frontend, backend, database, tools } from '../../skill';

// 엔터넥스트 JD에 맞춰 프론트엔드(Next.js, React, TS) 중심 + Node.js 백엔드 강조
const enternextFrontend: ISkill.Skill = {
  ...frontend,
  items: frontend.items.map((item) => {
    if (item.title === 'Next.js') {
      return {
        ...item,
        description:
          'SSR/SSG 특성을 활용한 성능 최적화, App Router 기반 페이지 설계, Vercel 배포 파이프라인 구축 경험.',
      };
    }
    if (item.title === 'React') {
      return {
        ...item,
        description:
          '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. 공통 컴포넌트 설계 및 재사용 가능한 UI 라이브러리 구축 경험이 있습니다.',
      };
    }
    if (item.title === 'TypeScript') {
      return {
        ...item,
        description:
          '타입 시스템으로 런타임 오류를 줄이고 협업 시 코드 의도를 명확히 전달합니다. 제네릭, 유틸리티 타입을 활용한 타입 안전한 코드를 작성합니다.',
      };
    }
    return item;
  }),
};

const enternextBackend: ISkill.Skill = {
  ...backend,
  items: backend.items.map((item) => {
    if (item.title === 'NestJS') {
      return {
        ...item,
        description:
          '모듈·DI·인터셉터·가드를 활용한 백엔드 설계. REST API 설계 및 MongoDB 연동 경험.',
      };
    }
    if (item.title === 'Node.js') {
      return {
        ...item,
        description:
          '비동기 이벤트 루프 기반의 서버 환경 이해. JavaScript 동작 원리를 바탕으로 효율적인 서버 개발.',
      };
    }
    if (item.title === 'Spring Boot') {
      return {
        ...item,
        description:
          'Layered Architecture 기반 REST API 설계, JPA를 활용한 도메인 모델링 경험. 이 기본기를 바탕으로 새로운 백엔드 환경에서도 빠르게 적응할 수 있습니다.',
      };
    }
    return item;
  }),
};

// 스킬 순서: Frontend → Backend → Database → Tools (프론트 우선)
const enternextPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 엔터넥스트 이력서',
  },
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      '**탄탄한 기본기와 원리를 중시하는 신입 풀스택 엔지니어 권동하입니다.**',

      '**기본기에 충실한 기술의 도입**\n탄탄한 기반이 있어야 새로운 기술도 제대로 활용할 수 있다고 생각합니다. 크래프톤 정글에서 5개월간의 몰입을 통해 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 지식을 다지고, Spring Boot를 통해 객체 지향과 백엔드 아키텍처를 학습했습니다. JavaScript 동작 원리에 대한 이해를 바탕으로 Next.js, React, TypeScript 기반 프론트엔드와 Node.js 백엔드를 함께 다루며, REST API 설계부터 공통 컴포넌트 개발까지 풀스택으로 기여합니다.',

      '**팀 생산성을 고민하는 팀원**\n다년간의 아르바이트 경험을 통해 다양한 성향을 가진 팀원들의 장점을 파악하고, 서로 협력하여 시너지를 이끌어내는 소통 방식을 체득했습니다. 개발 프로젝트에서도 코드 작성에만 머무르지 않고 팀의 불편사항을 찾아 개선합니다. 일례로 반복되는 Git 커밋, PR 작업이 팀의 병목이 되는 것을 파악하여, Antigravity의 커스텀 커맨드 기능을 활용해 팀의 개발 속도를 높였습니다.',

      '**AI 도구를 적극 활용하는 개발자**\nClaude Code를 일상 개발 워크플로우에 통합하여 생산성을 극대화하고 있습니다. AI 에이전트에 필요한 문서만 효율적으로 전달하기 위해 3-Layer 문서 분리 전략을 직접 설계하여 토큰 소비를 절감하고 코드 품질을 개선한 경험이 있으며, 새로운 기술을 빠르게 학습하고 적용하는 데 AI 도구를 적극 활용합니다.',
    ],
  },
  skill: {
    ...fullstackPayload.skill,
    skills: [enternextFrontend, enternextBackend, database, tools],
  },
  project: {
    ...fullstackPayload.project,
    list: fullstackPayload.project.list.map((item) => {
      // StoLink: 프론트엔드 공통 컴포넌트, REST API, 테스트 강조
      if (item.title.includes('StoLink')) {
        return {
          ...item,
          descriptions: [
            ...item.descriptions.slice(0, 1),
            {
              content: '**담당 구현**',
              weight: 'BOLD',
              descriptions: [
                ...item.descriptions[1]!.descriptions!.slice(0, 2),
                {
                  content: '**DX**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '반복되는 커밋·PR 작성이 병목임을 파악하고, Antigravity 커스텀 커맨드로 이슈-브랜치-PR 파이프라인을 단일 명령으로 자동화. 부트캠프 내 타 팀까지 확산',
                    },
                    {
                      content: '**3-Layer 문서 분리로 AI 토큰 소비 절감**',
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
                  content: '**Backend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content:
                        '외부 PG(토스페이먼츠) API 응답 지연 시 DB 트랜잭션이 길어져 커넥션 풀이 고갈될 수 있는 구조를 인지하고, 외부 호출을 트랜잭션 밖으로 분리하여 커넥션 점유 시간을 줄임',
                    },
                    {
                      content:
                        '동시 결제 요청 시 잔액 부정합 방지를 위해 비관적 락, 네트워크 재시도에 의한 중복 결제 방지를 위해 멱등키 적용. Testcontainers 기반 통합 테스트로 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증**',
                    },
                    {
                      content:
                        'JPA 쿼리 로그에서 N+1 문제를 발견하고 Fetch Join으로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                    },
                  ],
                },
                {
                  content: '**Frontend**',
                  weight: 'BOLD',
                  descriptions: [
                    {
                      content: '**[렌더링 최적화] SVG → Canvas 전환으로 관계도 렌더링 병목 해소**',
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
                        '**[번들링/UX 최적화]** Vite 코드 분할 + hover 시점 프리로드로 **초기 번들 사이즈 450KB → 187KB(58% 감소)**',
                    },
                    {
                      content:
                        '**[알고리즘 최적화]** 문서 배열→트리 변환 시 HashMap 도입으로 탐색 복잡도 O(n²) → **O(n), 연산 속도 1ms 이하로 단축**',
                    },
                  ],
                },
              ],
            },
          ],
        };
      }
      // Knowledge Garden: Next.js + NestJS 풀스택, REST API, 공통 컴포넌트 강조
      if (item.title.includes('Knowledge Garden')) {
        return {
          ...item,
          descriptions: [
            {
              content:
                'Next.js App Router 기반 포트폴리오 프론트엔드와 NestJS 기반 REST API 백엔드를 설계·개발한 풀스택 프로젝트입니다. MongoDB 텍스트 검색 기반 챗봇, 가드레일 필터링, 분석 파이프라인을 모듈 단위로 설계했습니다.',
            },
            ...item.descriptions.slice(1),
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

export default enternextPayload;
