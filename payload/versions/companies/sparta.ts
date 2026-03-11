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
          'Layered Architecture 중심의 REST API 개발 및 OOP 원리 체득 (이를 바탕으로 스파르타의 새로운 백엔드 환경에서도 기본기를 발휘하며 빠르게 학습하겠습니다)',
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

      '**기술로 사용자의 불편을 해결**\n산모가 매번 기록을 남겨야 하는 불편을 덜고자 AI 감정 일기 서비스(Aidiary)를 개발했고, 웹소설 작가의 복잡한 세계관 관리 문제를 해결하기 위해 지식 관리 플랫폼(StoLink)을 기획했습니다. 사용자가 겪는 진짜 문제를 기술로 해결할 때 개발의 가치가 있다고 생각합니다.',

      '**상황을 고려한 엔지니어링**\n제약된 환경 속에서 당장의 비용 절감과 미래의 확장성을 모두 고려한 설계를 지향합니다. Aidiary 프로젝트에서는 제한된 인프라 예산을 고려해 단일 서버 배포 구조를 채택했습니다. 하지만 가장 무거운 연산인 AI 모델 추론부는 RabbitMQ를 도입해 내부적으로 격리했습니다. 현재는 같은 인프라 내에 있지만, 톰캣 스레드 고갈 장애를 방지함과 동시에 향후 필요시 워커만 즉각 물리적으로 분리할 수 있는 확장성을 미리 챙겼습니다.',

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
                        '반복되는 커밋·PR 작성이 병목임을 파악하고, Antigravity의 커스텀 커맨드 기능을 활용하여 이슈-브랜치-PR 파이프라인 단일 자동화 구축. 불필요한 반복 컨텍스트 스위칭을 줄여 기획/개발에 집중할 수 있는 생산성을 확보하고 타 팀으로 전파',
                    },
                    {
                      content:
                        '**3-Layer 문서 추상화 및 자동 동기화를 통한 AI 가용 시간 2배 연장**',
                      descriptions: [
                        {
                          content:
                            '1,000줄 규모의 단일 문서로 인한 AI 토큰 과소비 및 할루시네이션(잘못된 코드 생성) 문제를 파악',
                        },
                        {
                          content:
                            '문서를 3-Layer(Core/Appendix/Spec)로 추상화하여 작업 규모별 선택적으로 로딩하도록 구성하고, Librarian 커맨드 기반의 자동 문서 동기화 도입',
                        },
                        {
                          content:
                            '결과적으로 불필요한 토큰 소모를 줄여 AI 가용 시간을 2배 이상 연장하고, 최적화된 컨텍스트 제공으로 전반적인 개발 및 협업 효율 향상',
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
                        '트래픽 폭증 시 발생할 수 있는 크레딧 결제 장애(비즈니스 손실) 방지를 위해 비관적 락(동시성 제어)과 멱등키(중복 결제 방지) 로직 구성. Testcontainers 기반 통합 테스트로 **100개 스레드 환경에서도 잔액 정합성 100% 보장을 검증하여 안정적인 서비스 가용성 확보**',
                    },
                    {
                      content: '**N+1 쿼리 최적화**',
                      descriptions: [
                        {
                          content:
                            'JPA 쿼리 로그에서 문서 1건 조회 시 태그·카테고리 조회 쿼리가 N개 추가 발생함을 확인. @ManyToMany 기본값인 LAZY 로딩이 컬렉션 순회 시점마다 개별 쿼리를 유발하는 것이 원인',
                        },
                        {
                          content:
                            'Fetch Join으로 연관 데이터를 한 번의 쿼리에 함께 조회하도록 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                        },
                      ],
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
                      content:
                        '**[아키텍처/성능] 병목 연산 격리를 통한 대규모 트래픽 수용 및 장애 방지**',
                      descriptions: [
                        {
                          content:
                            '초기에는 빠른 기능 검증을 위해 단일 배포 구조로 개발했으나, 이미지 합성(~30초) 동기 처리로 인한 톰캣 스레드 고갈 장애를 예측 및 발견',
                        },
                        {
                          content:
                            '이를 해결하기 위해 무거운 딥러닝 추론 로직을 전략 패턴 기반의 설계와 RabbitMQ 비동기 워커 아키텍처로 분리하고, 경량 감정 분석 모델은 워커에 직접 배포하여 외부 API 통신 지연을 최소화',
                        },
                        {
                          content:
                            '결과적으로 무거운 연산을 메인 서버에서 완벽히 격리하여, **500명 동시 접속 부하 테스트 환경에서 에러율 0% 유지 및 최대 1,949 TPS를 확보**',
                        },
                      ],
                    },
                    {
                      content:
                        '**[안정성/최적화] AI 챗봇 대화 이탈 방어 및 데일리 질문 부하 분산**',
                      descriptions: [
                        {
                          content:
                            '아이 챗봇의 AI 환각 현상과 대화 이탈 위험을 LangGraph 연쇄 노드 기반 대화 제어와 3중 가드레일(의미 검색 강제, 시스템 프롬프트, 입력 검증)로 방어하여 응답 신뢰성 확보',
                        },
                        {
                          content:
                            '모든 사용자에게 공통으로 제공되는 데일리 질문 데이터가 매 요청마다 새롭게 생성되는 비효율을 파악하여, 매일 자정에 만료되는 Redis 내부 캐싱을 도입. 복잡한 배치 작업 없이 **응답 시간을 487ms에서 3ms로 단축하고 메인 서버의 트래픽 부하를 분산함**',
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
