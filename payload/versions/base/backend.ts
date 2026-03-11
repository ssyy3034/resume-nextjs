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

const backendPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - Backend Engineer 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**직관이 아닌 데이터로 병목을 찾고, 개선 결과를 수치로 확인하는 신입 백엔드 엔지니어 권동하입니다.**',

      '탄탄한 기본기를 다지기 위해 크래프톤 정글에서 OS 커널(Pintos)을 직접 구현하며 시스템의 동작 원리를 공부했습니다.수료 후에도 학습한 내용을 바탕으로 기존 프로젝트의 부족했던 부분들을 하나씩 고쳐보면서, 실제 서비스에서 마주할 문제들을 조금이나마 경험할 수 있었습니다.',

      '3년간 서비스직 아르바이트에서 다양한 연령대의 팀원들과 함께 일하며 불편함이 보이면 먼저 개선 방법을 찾아 제안하고 도입했습니다. 개발 팀에서도 같은 태도로, 팀의 Git 숙련도 격차로 인한 문제를 에이전트 커스텀 커맨드를 만들고 공유하여 해결한 경험이 있습니다.',
    ],
  },
  project: {
    disable: false,
    list: [
      {
        title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
        startedAt: '2025-12',
        endedAt: '2026-02',
        where: '팀 프로젝트 (크래프톤 정글 최종 프로젝트 / 5인 개발 / 기획, 풀스택 개발)',
        techStack: [
          {
            category: 'Frontend',
            items: ['React', 'TypeScript', 'react-force-graph-2d', 'Canvas API'],
          },
          { category: 'Backend', items: ['Spring Boot', 'JPA (Hibernate)'] },
          { category: 'Database', items: ['PostgreSQL', 'Neo4j (Graph DB)'] },
          {
            category: 'Testing & Tools',
            items: ['JUnit / Vitest', 'Testcontainers', 'Vite', 'Claude Code CLI', 'Antigravity'],
          },
        ],
        descriptions: [
          {
            content:
              '웹소설 작가가 글을 쓰면 AI가 인물·관계·사건을 자동 분석하여 그래프로 시각화해주는 **창작 보조 플랫폼**입니다. 작가는 StoLink에서 에디터와 데이터 시각화를 통해 체계적으로 글을 쓰고, 배포한 글을 통해 StoRead에서 독자들이 관계도와 함께 작품을 열람하거나 구매할 수 있습니다.',
          },
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
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
                      'Spring Data JPA를 활용한 무한 계층 구조의 문서 폴더 트리 및 사이드바 관리 로직 구성',
                  },
                  {
                    content:
                      '토스페이먼츠 연동을 통한 크레딧 충전 시스템 및 웹훅 처리 기반 결제 상태 자동 관리',
                  },
                ],
              },
              {
                content: '**Frontend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      'StoLink 작가용 웹앱 전체 화면 설계 및 개발 (에디터, 관계도, 문서 사이드바, 대시보드)',
                  },
                  {
                    content: 'Tiptap 기반 작가용 커스텀 리치 텍스트 에디터 환경 구축',
                  },
                  {
                    content:
                      '소설 인물 관계도를 Canvas API로 시각화하여 대규모 노드 환경에서도 부드러운 인터랙션(드래그, 줌, 검색) 지원',
                  },
                  {
                    content:
                      '폴더 트리 기반 문서 탐색 사이드바 (생성·이동·삭제, 드래그 앤 드롭 정렬)',
                  },
                ],
              },
              {
                content: '**DX**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      'Git 숙련도가 높은 팀원에게 컨벤션을 배운 뒤, 반복되는 커밋·PR 작성이 팀 전체의 병목임을 파악. 해당 팀원과 함께 Antigravity의 커스텀 커맨드 기능을 활용해 이슈 → 브랜치 → 커밋 → PR을 단일 명령으로 자동화하고, 부트캠프 내 타 팀까지 확산',
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
                      '순간적인 결제 트래픽 폭증이나 네트워크 지연에 따른 중복 요청 시 발생할 수 있는 부당한 크레딧 차감(사용자·비즈니스 금전 손실) 방지를 위해 동시성 제어(비관적 락) 및 재시도로 인한 중복 결제 방지(멱등키) 로직 등 오결제 방지 구성. Testcontainers를 활용해 **100개 스레드 동시 요청 환경에서 잔액 정합성 100% 보장을 수치로 검증**',
                  },
                ],
              },
              {
                content: '**Frontend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      '**[알고리즘 최적화]** 1차원 문서 배열을 트리 구조로 변환 시 발생하는 렌더링 지연(~20ms)을 해결하기 위해 문서 ID 파싱용 HashMap 도입. 탐색 복잡도를 O(n²)에서 **O(n)으로 개선하여 연산 속도를 1ms 이하로 단축**',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Aidiary : AI 기반 산모 감정 일기 서비스',
        startedAt: '2025-04',
        endedAt: '2026-02',
        where:
          '캡스톤 디자인 (2025.04 ~ 2025.06) → 수료 후 개인 개선 (2026.01 ~ 2026.02) / 2인 개발 (기획, 풀스택 개발)',
        techStack: [
          { category: 'Frontend', items: ['React', 'TypeScript'] },
          { category: 'Backend', items: ['Spring Boot', 'Flask'] },
          {
            category: 'AI/ML',
            items: ['AI Agent & LLM (LangGraph, Gemini)', 'Vision & NLP (MediaPipe, XLM-R)'],
          },
          { category: 'Database', items: ['MariaDB'] },
          {
            category: 'Infra',
            items: ['AWS (EC2, S3, CloudFront)', 'Messaging (RabbitMQ, Redis)', 'Docker Compose'],
          },
        ],
        descriptions: [
          {
            content:
              '산모가 일기를 쓰면 AI가 감정을 분석해 피드백을 제공하고, 부모 사진으로 아기 캐릭터를 생성하는 서비스입니다.',
          },
          {
            content:
              'MediaPipe 등 Python 전용 라이브러리 활용이 필요하여 Spring Boot + Flask 이중 서버 구조로 분리했습니다.',
          },
          {
            content: '**담당 구현**',
            weight: 'BOLD',
            descriptions: [
              {
                content: '**Backend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content: 'Spring Security와 JWT를 활용한 회원 가입 및 인증/권한 관리 기능 구성',
                  },
                  {
                    content:
                      '일기 작성(CRUD) 및 특정 날짜의 상태 조회를 위한 사용자 API 엔드포인트 구축',
                  },
                  {
                    content:
                      'RabbitMQ 활용: Spring Boot와 Flask 서버 간 이미지 합성 요청을 위한 메시지 브로커 아키텍처 설계',
                  },
                  {
                    content:
                      '조회 성능 향상을 위한 Redis(L2) 및 Caffeine(L1) 기반의 다층 캐싱 레이어 구축',
                  },
                  {
                    content:
                      'MediaPipe와 LLM API를 연동한 사진 기반 캐릭터 생성 서버 측 파이프라인 구축',
                  },
                ],
              },
              {
                content: '**Frontend**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      '아이 캐릭터 생성 화면: 부모 사진 업로드부터 AI 합성 결과 표시까지의 전체 사용자 흐름 연결 (이미지 압축, 비동기 대기, 결과 폴링)',
                  },
                ],
              },
              {
                content: '**Infra**',
                weight: 'BOLD',
                descriptions: [
                  {
                    content:
                      'Docker Compose로 6개 서비스(React, Spring Boot, Flask, MariaDB, RabbitMQ, Redis) 오케스트레이션',
                  },
                  {
                    content:
                      'AWS EC2 배포 + S3 / CloudFront를 통한 정적 리소스 CDN 캐싱 + GitHub Actions CI/CD 파이프라인 구축',
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
                      '**[안정성/최적화] AI 챗봇 대화 이탈 방어 및 "오늘의 질문" 부하 분산**',
                    descriptions: [
                      {
                        content:
                          '아이 챗봇의 AI 환각 현상과 대화 이탈 위험을 LangGraph 연쇄 노드 기반 대화 제어와 3중 가드레일(의미 검색 강제, 시스템 프롬프트, 입력 검증)로 방어하여 응답 신뢰성 확보',
                      },
                      {
                        content:
                          '동시에, 모든 사용자가 동일하게 받는 "오늘의 질문" 데이터를 매번 새로 생성하는 비효율을 발견. 복잡한 배치 작업 대신, 매일 자정에 만료되는 Redis 내부 캐싱을 도입하여 **응답시간 487ms → 3ms 감소 및 트래픽 부하 분산**',
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
                    content: '**[메인 스레드 제어] Web Worker 기반 브라우저 백그라운드 연산 분리**',
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

export default backendPayload;
