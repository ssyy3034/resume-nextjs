import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
      startedAt: '2025-12',
      endedAt: '2026-02',
      where:
        '팀 프로젝트 (크래프톤 정글 최종 프로젝트 / 5인 개발 / 기획, 인증·결제 백엔드 + 에디터·관계도 프론트엔드)',
      techStack: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Canvas (D3.js)'] },
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
                  content: 'OAuth2 기반 소셜 로그인 및 JWT 토큰(HTTP-only Cookie) 인증/인가 시스템',
                },
                {
                  content:
                    'Spring Data JPA를 활용한 무한 계층 구조의 문서 폴더 트리 CRUD 및 API 구현',
                },
                {
                  content: '토스페이먼츠 연동 크레딧 충전 시스템 및 웹훅 처리 기반 결제 상태 관리',
                },
              ],
            },
            {
              content: '**Frontend**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    'StoLink 작가용 웹앱 전체 화면(에디터, 관계도, 문서 사이드바, 대시보드) 설계 및 개발',
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
                    '**[렌더링 최적화] 브라우저 파이프라인 이해를 바탕으로 한 Canvas 대규모 렌더링**',
                  descriptions: [
                    {
                      content:
                        'SVG 기반 관계도 렌더링 시 대규모 노드에서 발생하는 스타일 재계산 병목 현상 파악',
                    },
                    {
                      content:
                        '이를 해결하고자 브라우저 렌더링 파이프라인 부담이 적은 Canvas API로 전면 전환하여 **INP 420ms → 64ms 단축 및 650+ 노드 환경에서 60FPS의 부드러운 인터랙션 유지**',
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
          ],
        },
      ],
    },
    {
      title: 'Aidiary : AI 기반 산모 감정 일기 서비스',
      startedAt: '2025-04',
      endedAt: '2026-02',
      where:
        '캡스톤 디자인 (2025.04 ~ 2025.06) → 수료 후 개인 개선 (2026.01 ~ 2026.02) / 2인 개발 (기획, 백엔드·인프라 중심 풀스택)',
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
            '산모를 위한 AI 감정 일기 서비스입니다. 일기를 쓰면 AI가 감정을 분석하고 태아가 그려준 듯한 그림 일기로 하루를 요약해주며, 부모의 성격·외모를 바탕으로 만든 아이 캐릭터와 AI 챗봇으로 대화할 수 있습니다. 임신 주차별 정보, 태동 기록, 혈압·체중 추적 등 건강 대시보드도 제공합니다.',
        },
        {
          content:
            'ML 라이브러리(MediaPipe, XLM-R 등) 활용을 위해 Spring Boot + Flask 이중 서버 구조로 분리했습니다.',
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
                    'RabbitMQ 활용: Spring Boot와 Flask 서버 간 이미지 합성 요청을 위한 메시지 브로커 아키텍처 설계',
                },
                {
                  content:
                    'MediaPipe와 LLM API를 연동한 사진 기반 캐릭터 생성 서버 측 파이프라인 구축',
                },
                {
                  content:
                    'LangGraph 기반 상태 머신을 활용한 AI 챗봇 대화 흐름 제어 및 응답 시스템 구축',
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
                {
                  content:
                    '임신 주차별 맞춤 큐레이션 화면: 태아 발달·산모 변화·추천 음식 등 12개 카테고리 조건부 렌더링',
                },
              ],
            },
            {
              content: '**Infra**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    'Docker Compose로 6개 서비스 오케스트레이션 + AWS EC2 배포, S3/CloudFront CDN, GitHub Actions CI/CD 구축',
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
                  content: '**[안정성/최적화] AI 챗봇 대화 이탈 방어 및 "오늘의 질문" 부하 분산**',
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
};

export default project;
