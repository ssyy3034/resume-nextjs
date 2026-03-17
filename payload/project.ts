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
        { category: 'Backend', items: ['Spring Boot', 'JPA (Hibernate)', 'Redis', 'RabbitMQ'] },
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
                  content: '**크레딧 결제 로직 안정성 (동시성 제어 및 멱등키)**',
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
                        'JPA 쿼리 로그에서 문서 1건 조회 시 태그·카테고리 조회 쿼리가 N개 추가 발생함을 확인. 연관관계 구조를 분석한 결과, @ManyToMany 기본값인 LAZY 로딩이 컬렉션 순회 시점마다 개별 쿼리를 유발하는 것이 원인',
                    },
                    {
                      content:
                        'Fetch Join으로 연관 데이터를 한 번의 쿼리에 함께 조회하도록 개선하여 **API 응답 450ms → 25ms (18배 개선)**',
                    },
                  ],
                },
                {
                  content: '**Cross-Domain 인프라 구축 및 보안 개선**',
                  descriptions: [
                    {
                      content:
                        'StoLink와 StoRead의 도메인 이원화로 인한 쿠키 공유 장애를 SameSite/Secure 쿠키 정책 수립 및 CloudFront 라우팅 최적화로 해결, OAuth2 기반 통합 인증 환경을 구축함',
                    },
                    {
                      content:
                        '기존 JavaScript 접근이 가능한 방식의 토큰 노출 위험을 해결하기 위해 **Access/Refresh Token**을 **HttpOnly Cookie**에 저장하도록 변경하여 **XSS(Cross-Site Scripting) 공격 방어 체계** 확립',
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
        { category: 'Backend', items: ['Spring Boot', 'Flask', 'Redis', 'RabbitMQ'] },
        {
          category: 'AI/ML',
          items: ['AI Agent & LLM (LangGraph, Gemini)', 'Vision & NLP (MediaPipe, XLM-R)'],
        },
        { category: 'Database', items: ['MariaDB'] },
        { category: 'Infra', items: ['AWS (EC2, S3, CloudFront)', 'Docker Compose'] },
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
                {
                  content: '**@Data 순환 참조로 인한 서버 크래시 해결**',
                  descriptions: [
                    {
                      content:
                        '일기 조회 API 호출 시 Docker 서버가 반복적으로 크래시하는 문제 발생. 네트워크 탭 분석 결과, 단일 응답이 4GB 이상으로 확인',
                    },
                    {
                      content:
                        '원인 추적 결과 Lombok @Data가 모든 필드에 getter를 생성하고, Jackson이 이 getter를 순회하며 Diary → User → Child → User → ... 순환 직렬화를 일으키는 것이 원인',
                    },
                    {
                      content:
                        '@Data를 제거하고 필요한 어노테이션만 개별 적용. API 응답을 DiaryResponseDTO로 변환하여 엔티티 그래프가 직렬화 계층에 노출되지 않도록 차단. User ↔ Child 양방향 관계에 FetchType.LAZY를 명시하여 불필요한 로딩 방지. **응답 크기 4GB+ → 20KB로 정상화**',
                    },
                  ],
                },
                {
                  content: '**배포 — Docker Compose + AWS**',
                  descriptions: [
                    {
                      content:
                        'AWS EC2에 Docker Compose로 4개 서비스를 배포. React 정적 리소스는 S3 + CloudFront로 분리하여 CDN 캐싱 적용. ALB로 Spring Boot / Flask 라우팅을 분기 처리하여 멀티 서버 구조 구성',
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
    {
      title: 'Knowledge Garden : 포트폴리오 사이트',
      startedAt: '2026-02',
      where: '개인 프로젝트',
      techStack: [
        { category: 'Backend', items: ['NestJS', 'MongoDB', 'OpenAI API'] },
        { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
        { category: 'Infra', items: ['Docker', 'Vercel'] },
      ],
      descriptions: [
        {
          content:
            'NestJS 기반 포트폴리오 백엔드와 Next.js 프론트엔드를 개발했습니다. RAG 챗봇, 가드레일 필터링, 분석 파이프라인을 모듈 단위로 설계했습니다.',
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
                    'NestJS 모듈 아키텍처로 Chat, AI, Analytics, Resume 4개 도메인을 분리하고 DI로 의존성 관리',
                },
                {
                  content:
                    'MongoDB 가중치 텍스트 인덱스(title 10x, summary 5x, content 1x) 기반 RAG로 이력서 데이터를 검색하고, LLM 컨텍스트에 주입',
                },
                {
                  content:
                    'LLM 가드레일 분류기로 포트폴리오 무관 질문을 사전 필터링하고, 450줄 이상의 시스템 프롬프트로 응답 품질 관리',
                },
                {
                  content:
                    '인터셉터 기반 분석 로깅(토큰·응답 시간)과 MongoDB TTL 인덱스로 90일 자동 정리',
                },
              ],
            },
            {
              content: '**Frontend**',
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
              content: '**[메모리 누수] k6 부하 테스트 중 세션 메모리 누수 발견 및 해결**',
              descriptions: [
                {
                  content:
                    '챗봇 API 부하 테스트 중 힙 메모리가 테스트 종료 후에도 baseline으로 복귀하지 않는 현상 발견. Map 기반 세션 저장소에 TTL이 없어 Strong Reference로 영구 잔류하는 것이 원인',
                },
                {
                  content:
                    'SessionData에 lastAccessedAt를 추가하고 @nestjs/schedule 기반 TTL 정리 스케줄러로 만료 세션 주기적 삭제',
                },
                {
                  content:
                    '**세션 영구 누적 → idle 후 0건 (100% 해소), RSS 114.80MB → 85.13MB (25.8% 감소)**',
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
