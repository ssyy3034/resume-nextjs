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
import { tools } from '../../skill';

// 로젠택배 JD: 통합물류정보시스템 개발·운영, Java/Spring Boot 백엔드, html5/JS 프론트엔드,
// 거래처 연동 API 개발·유지보수, 운영 시스템 이슈 분석·기능 설계
// 우대: Spring Boot, REST API, MSA, 물류/커머스/플랫폼, 협업

const logenBackend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java',
      description:
        '주력 언어. 객체 지향 원칙을 준수하며 Spring Boot 기반의 안정적인 서비스를 개발합니다.',
    },
    {
      title: 'Spring Boot',
      description:
        'Layered Architecture 기반 REST API 설계, JPA를 활용한 도메인 모델링, 트랜잭션 범위 설계.',
    },
    {
      title: 'Spring Data JPA',
      description: 'N+1 문제를 Fetch Join으로 해결 (450ms → 25ms). 도메인 모델링 경험.',
    },
    {
      title: 'Redis',
      description: 'TTL 기반 캐싱으로 API 호출 비용 절감 및 다층 캐시 구성.',
    },
    {
      title: 'RabbitMQ',
      description:
        '무거운 연산의 동기 블로킹 문제를 비동기 메시지 큐로 전환하여 서비스 장애 격리.',
    },
    {
      title: 'Python',
      description: 'Flask 기반 AI 모델 서빙 및 MediaPipe·PyTorch 활용.',
    },
  ],
};

const logenFrontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'JavaScript',
      description: 'ES6+ 비동기 처리, DOM API 활용.',
    },
    {
      title: 'TypeScript',
      description:
        '타입 시스템으로 런타임 오류를 줄이고 협업 시 코드 의도를 명확히 전달합니다.',
    },
    {
      title: 'React',
      description:
        '컴포넌트 생명주기와 렌더링 최적화를 이해합니다. Canvas 기반 대규모 시각화, Web Worker 기반 백그라운드 연산 분리 경험.',
    },
    {
      title: 'Next.js',
      description: 'SSR/SSG 특성을 활용한 성능 최적화 및 Vercel 기반 배포.',
    },
  ],
};

const logenDatabase: ISkill.Skill = {
  category: 'Database & Infra',
  items: [
    {
      title: 'PostgreSQL / MariaDB',
      description:
        'RDB 운용. 비관적 락으로 동시성 제어, 인덱스 설계, 쿼리 최적화.',
    },
    {
      title: 'Docker',
      description:
        'Docker Compose로 멀티 컨테이너 개발/배포 환경 구성. 개발환경 표준화.',
    },
    {
      title: 'AWS',
      description:
        'EC2 배포, S3/CloudFront CDN 구성, GitHub Actions CI/CD 파이프라인 구축.',
    },
  ],
};

const logenPayload: Payload = {
  ...backendPayload,
  _global: {
    ...backendPayload._global,
    headTitle: '권동하 - 로젠택배 이력서',
  },
  introduce: {
    ...backendPayload.introduce,
    contents: [
      '**탄탄한 기본기와 원리를 중시하는 신입 백엔드 엔지니어 권동하입니다.**',

      '**Java/Spring Boot 기반 시스템 개발과 API 연동 경험**\n크래프톤 정글에서 5개월간 자료구조, 알고리즘, OS 커널(Pintos) 개발로 CS 기본기를 다졌습니다. 이 기반 위에 Spring Boot 기반 플랫폼 서비스를 설계·개발하고, 외부 거래처(PG사) API 연동과 웹훅 기반 결제 상태 관리 시스템을 구축한 경험이 있습니다. REST API 설계부터 JPA 도메인 모델링, 트랜잭션 범위 설계까지 백엔드 핵심 업무를 수행했습니다.',

      '**운영 이슈를 분석하고 근본 원인을 해결하는 개발자**\nk6 부하 테스트로 운영 병목을 수치로 확인하고, 아키텍처 수준의 개선(동기 블로킹 → 비동기 워커 분리)을 통해 TPS를 1,680배 향상시킨 경험이 있습니다. Lombok 순환참조로 인한 서버 크래시, N+1 쿼리 성능 저하 등 운영 중 발생 가능한 이슈를 직접 분석하고 해결하며, 시스템 안정성을 높이는 것에 보람을 느낍니다.',

      '**로젠의 물류 IT 시스템과 함께 성장하고 싶습니다**\n로젠택배가 통합물류정보시스템을 통해 배송 단계별 데이터를 기록·분석하고, 차세대 물류 시스템으로 실시간 이슈 대응과 경로 최적화를 추진하고 있다는 점에 깊은 인상을 받았습니다. Spring Boot 기반 백엔드 개발과 외부 API 연동, 운영 이슈 분석 경험을 바탕으로 로젠의 물류 IT 시스템의 안정적인 운영과 발전에 기여하겠습니다.',
    ],
  },
  skill: {
    ...backendPayload.skill,
    // Backend(Java/Spring Boot 우선) → Frontend(JS/html 강조) → Database & Infra → Tools
    skills: [logenBackend, logenFrontend, logenDatabase, tools],
  },
  project: {
    disable: false,
    list: [
      // StoLink: 플랫폼 서비스 개발, 거래처(PG) 연동 API, Spring Boot, REST API, 트랜잭션 안정화
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
                    content: '**거래처(PG) 연동 API 트랜잭션 안정화**',
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
                  {
                    content: '**N+1 쿼리 최적화**',
                    descriptions: [
                      {
                        content:
                          'JPA 쿼리 로그에서 N+1 문제 발견. Fetch Join으로 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
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
      // Aidiary: MSA 유사 아키텍처, 운영 이슈 분석·해결, Docker 멀티 컨테이너 운영, REST API
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
                      '**[아키텍처] 운영 병목 분석 → 비동기 메시지 큐 전환으로 서비스 장애 해소**',
                    descriptions: [
                      {
                        content:
                          'k6 부하 테스트에서 동시 사용자 10~20명만으로 서비스 전체 마비 확인. 원인은 ML 추론(~30초) 동기 처리로 인한 Tomcat 스레드 고갈',
                      },
                      {
                        content:
                          'RabbitMQ 비동기 워커 아키텍처로 무거운 연산을 메인 서버에서 분리하여 **TPS 1.16 → 1,949 (1,680배), 500 VU 부하에서 에러율 0%**',
                      },
                    ],
                  },
                  {
                    content:
                      '**[운영 이슈] @Data 순환 참조로 인한 서버 크래시 해결**',
                    descriptions: [
                      {
                        content:
                          'Docker 서버가 반복적으로 크래시하는 운영 이슈 발생. 네트워크 탭 분석 결과, Lombok @Data의 순환 직렬화로 단일 API 응답이 4GB+ 증가',
                      },
                      {
                        content:
                          'DTO 변환으로 엔티티 그래프 노출을 차단하고 LAZY 로딩을 명시하여 **응답 크기 4GB+ → 20KB로 정상화**',
                      },
                    ],
                  },
                  {
                    content:
                      '**[캐싱]** 자정 TTL 기반 Redis 캐싱으로 **응답 시간 487ms → 3ms (162배), API 호출 N회 → 일 1회 고정**',
                  },
                  {
                    content: '**[배포] Docker Compose + AWS 클라우드**',
                    descriptions: [
                      {
                        content:
                          'Docker Compose로 6개 컨테이너(React, Spring Boot, Flask, MariaDB, RabbitMQ, Redis) 오케스트레이션. AWS EC2 배포, S3/CloudFront CDN, GitHub Actions CI/CD 구축',
                      },
                    ],
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

export default logenPayload;
