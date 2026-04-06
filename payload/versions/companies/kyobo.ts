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
import backendPayload from '../base/backend';
import { frontend, tools } from '../../skill';

// 교보문고 JD: Spring Boot, Thymeleaf, Java, JPA, RDBMS/SQL, MSA, Git/Jenkins, 주문결제 시스템
const kyoboBackend: ISkill.Skill = {
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
        'N+1 문제를 Fetch Join으로 해결 (450ms → 25ms). 연관관계 설계 및 도메인 모델링.',
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
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 데이터 처리.',
    },
  ],
};

const kyoboDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MariaDB',
      description:
        'RDB 운용. 비관적 락으로 동시성 제어, 인덱스 설계, N+1 쿼리 최적화(Fetch Join).',
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

const kyoboPayload: Payload = {
  ...backendPayload,
  _global: {
    ...backendPayload._global,
    headTitle: '권동하 - 교보문고 이력서',
  },
  introduce: {
    ...backendPayload.introduce,
    contents: [
      '**주문결제 시스템의 안정성을 코드로 검증하는 신입 백엔드 개발자 권동하입니다.**',

      '**결제 시스템을 직접 설계하고, 안정성을 수치로 검증한 경험**\n토스페이먼츠 API를 연동하여 크레딧 충전 결제 시스템을 설계·구현했습니다. 외부 PG API 응답 지연 시 DB 커넥션 풀이 고갈되는 구조를 인지하고 외부 호출을 트랜잭션 밖으로 분리했으며, 비관적 락으로 잔액 정합성을, 멱등키로 중복 결제를 방지했습니다. Testcontainers 기반 통합 테스트로 100개 스레드 동시 요청 환경에서 정합성 100%를 검증했습니다.',

      '**CS 기본기 위에서 문제를 구조적으로 해결합니다**\n크래프톤 정글에서 5개월간 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 기본기를 다졌습니다. 이를 바탕으로 k6 부하 테스트에서 서비스 마비의 원인을 스레드 풀 고갈로 특정하고, RabbitMQ 비동기 워커로 격리하여 TPS 1.16 → 1,949(1,680배)로 개선한 경험이 있습니다.',

      '**팀의 속도를 높이는 데 기여하는 팀원**\n반복되는 Git 커밋·PR 작업이 팀의 병목이 되는 것을 파악하여, 커스텀 커맨드로 이슈→브랜치→PR 파이프라인을 자동화하고 부트캠프 내 타 팀까지 확산시켰습니다. 코드 작성에만 머무르지 않고, 팀 전체가 더 빠르게 움직일 수 있는 방법을 찾습니다.',
    ],
  },
  skill: {
    ...backendPayload.skill,
    // Backend(Java/Spring 우선) → Database & Infra → Frontend → Tools
    skills: [kyoboBackend, kyoboDatabase, frontend, tools],
  },
  project: {
    disable: false,
    list: [
      // StoLink: 결제 시스템, JPA, Spring Boot, 주문결제 도메인 강조
      {
        ...backendPayload.project.list[0],
        descriptions: [
          ...backendPayload.project.list[0].descriptions.slice(0, 2),
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
                          '동시 결제 요청 시 잔액 부정합 방지를 위해 비관적 락, 중복 결제 방지를 위해 멱등키 적용. Testcontainers 기반 통합 테스트로 **100개 스레드 동시 요청에서 잔액 정합성 100% 검증**',
                      },
                    ],
                  },
                  {
                    content: '**N+1 쿼리 최적화**',
                    descriptions: [
                      {
                        content:
                          'JPA 쿼리 로그에서 N+1 문제를 발견. Fetch Join으로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                      },
                    ],
                  },
                  {
                    content: '**Cross-Domain 인프라 구축 및 보안 개선**',
                    descriptions: [
                      {
                        content:
                          '도메인 이원화로 인한 쿠키 공유 장애를 SameSite/Secure 쿠키 정책 수립 및 CloudFront 라우팅 최적화로 해결. HttpOnly Cookie 기반 XSS 공격 방어 체계 확립',
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
      },
      // Aidiary: 대규모 트래픽 대응, 시스템 안정성, 배포/운영 강조
      {
        ...backendPayload.project.list[1],
        descriptions: [
          ...backendPayload.project.list[1].descriptions.slice(0, 3),
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
                      '**[아키텍처] 동기 블로킹 → 비동기 메시지 큐 전환으로 서비스 장애 해소**',
                    descriptions: [
                      {
                        content:
                          'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. RabbitMQ 비동기 워커 아키텍처로 분리하여 **TPS 1.16 → 1,949 (1,680배), 500 VU 부하에서 에러율 0%**',
                      },
                    ],
                  },
                  {
                    content:
                      '**[캐싱]** 자정 TTL 기반 Redis 캐싱으로 **응답 시간 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                  },
                  {
                    content: '**[안정성] @Data 순환 참조로 인한 서버 크래시 해결**',
                    descriptions: [
                      {
                        content:
                          'Lombok @Data의 순환 직렬화로 단일 API 응답 4GB+ 발생. DTO 변환으로 엔티티 그래프 노출 차단, LAZY 로딩 명시하여 **응답 크기 4GB+ → 20KB로 정상화**',
                      },
                    ],
                  },
                  {
                    content: '**[배포] Docker Compose + AWS 클라우드**',
                    descriptions: [
                      {
                        content:
                          'Docker Compose로 6개 컨테이너 오케스트레이션. AWS EC2 배포, S3/CloudFront CDN 캐싱, CloudFront 오리진 라우팅으로 경로 기반 요청 분기, GitHub Actions CI/CD 구축',
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
                      '**[메인 스레드 제어]** 모바일 Canvas 이미지 압축이 메인 스레드를 점유해 2초간 멈춤 발생. Web Worker로 백그라운드 분리하여 **쾌적한 모바일 UX 제공**',
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

export default kyoboPayload;
