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
import { backend, frontend, database, tools } from '../../skill';

// 스파르타 기술 스택(NestJS, TS 등)에 맞춘 스킬 커스터마이징
const spartaBackend = {
  ...backend,
  items: backend.items.map((item) => {
    if (item.title === 'Spring Boot') {
      return {
        ...item,
        description:
          'Layered Architecture 기반 REST API 설계, JPA를 활용한 도메인 모델링, 트랜잭션 범위 설계 경험. 이 기본기를 바탕으로 새로운 백엔드 환경에서도 빠르게 적응할 수 있습니다.',
      };
    }
    return item;
  }),
};

const spartaFrontend = frontend;

const spartaPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 팀스파르타 이력서',
  },
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      '**기술에 다정함을 담아 옳은 방향으로 전달하는 풀스택 엔지니어 권동하입니다.**',
      '**기본기에 충실한 기술의 도입**\n탄탄한 기반이 있어야 새로운 기술도 제대로 활용할 수 있다고 생각합니다. 크래프톤 정글에서 5개월간의 몰입을 통해 자료구조,알고리즘,OS 커널(Pintos) 개발로 CS 지식을 다지고, Spring Boot를 통해 객체 지향과 백엔드 아키텍처를 학습했습니다. 동작 원리 기반의 학습을 통해 다른 기술도 빠르게 배워 적용할수 있습니다.',

      '**팀 생산성을 고민하는 팀원**\n다년간의 아르바이트 경험을 통해 다양한 성향을 가진 팀원들의 장점을 파악하고, 서로 협력하여 시너지를 이끌어내는 소통 방식을 체득했습니다. 개발 프로젝트에서도 코드 작성에만 머무르지 않고 팀의 불편사항을 찾아 개선합니다. 일례로 반복되는 Git 커밋, PR 작업이 팀의 병목이 되는 것을 파악하여, Antigravity의 커스텀 커맨드 기능을 활용해 팀의 개발 속도를 높였습니다.',

      '**설레는 여정에 대한 기대**\n수백 명 규모로 커질 팀 스파르타의 초기 멤버가 된다는 것은, 앞으로 합류할 수많은 동료들이 쾌적하게 일할 수 있는 시스템과 문화의 기틀을 지금부터 직접 다질 수 있다는 뜻이기에 두려움보다 큰 설렘을 느낍니다. 팀이 빠르게 확장되는 과정에서 마주할 과제들을 피하지 않고, 함께 일하기 좋은 환경을 만들어가며 팀 스파르타와 함께 성장하고 싶습니다.',
    ],
  },
  skill: {
    ...fullstackPayload.skill,
    skills: [spartaFrontend, spartaBackend, database, tools],
  },
  project: {
    ...fullstackPayload.project,
    list: fullstackPayload.project.list.map((item) => {
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
                  ],
                },
                ...item.descriptions[2]!.descriptions!.slice(1),
              ],
            },
          ],
        };
      }
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
                      content: '**[안정성] AI 챗봇 대화 이탈 방어 및 API 호출 비용 절감**',
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
                  ],
                },
                ...(item.descriptions[3]?.descriptions?.slice(1) || []),
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

export default spartaPayload;
