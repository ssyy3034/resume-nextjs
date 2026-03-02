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
                  content:
                    'OAuth2 기반 소셜 로그인 및 JWT 토큰(HTTP-only Cookie) 인증/인가 시스템 구현',
                },
                {
                  content:
                    'Spring Data JPA를 활용한 무한 계층 구조의 문서 폴더 트리 및 사이드바 관리 로직 구현',
                },
                {
                  content:
                    '토스페이먼츠 연동을 통한 크레딧 충전 시스템 및 웹훅 처리 기반 결제 상태 자동 관리 구현',
                },
              ],
            },
            {
              content: '**Frontend**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    'StoLink 작가용 웹앱 전체 화면 설계 및 구현 (에디터, 관계도, 문서 사이드바, 대시보드)',
                },
                {
                  content:
                    'Tiptap 기반 리치 텍스트 에디터 및 소설 인물 관계도를 Canvas로 시각화 (노드 드래그, 줌, 검색)',
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
                    'Git 숙련도가 높은 팀원에게 컨벤션을 배운 뒤, 반복되는 커밋·PR 작성이 팀 전체의 병목임을 파악. 해당 팀원과 함께 에이전트 커스텀 커맨드(Antigravity)를 개발하여 이슈 → 브랜치 → 커밋 → PR을 단일 명령으로 자동화하고, 부트캠프 내 타 팀까지 확산',
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
                    '대량의 계층형 문서 데이터를 조회할 때 발생하는 N+1 쿼리 병목(태그·카테고리) → Fetch Join 및 DTO Projection 적용: **API 응답 450ms → 25ms (18배 개선)으로 대규모 트래픽에서의 조회 성능 확보**',
                },
                {
                  content:
                    '결제 승인 시 외부 PG(토스페이먼츠) API 호출 지연이 전체 시스템의 커넥션 풀 고갈로 이어지는 장애 포인트 발견 → **네트워크 I/O를 트랜잭션 범위 밖으로 분리하여 DB 커넥션 점유 시간을 최소화하고 결제 시스템 장애 격리**',
                },
                {
                  content:
                    '순간적인 결제 트래픽 폭증이나 네트워크 지연에 따른 중복 요청 시 발생할 수 있는 부당한 크레딧 차감(사용자·비즈니스 금전 손실) 방지를 위해 동시성 제어(비관적 락) 및 재시도로 인한 중복 결제 방지(멱등키) 구현. Testcontainers를 활용해 **100개 스레드 동시 요청 환경에서 잔액 정합성 100% 보장을 수치로 검증**',
                },
              ],
            },
            {
              content: '**Frontend**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    'SVG 관계도 렌더링 병목(Style Recalculation) → Canvas 전환: **INP 420ms → 64ms, 650+ 노드 60FPS 유지**',
                },
                {
                  content:
                    'O(n²) 트리 변환 반복 연산 → HashMap 기반 O(n) + useMemo: **15~20ms → 1ms 이하**',
                },
                {
                  content:
                    '초기 번들에 Export 라이브러리 포함 → Vite manualChunks 청크 분리 + 호버 시 Prefetch: **450KB → 187KB (58% 절감)**',
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
            '산모를 위한 AI 감정 일기 서비스입니다. 일기를 쓰면 AI가 감정을 분석하고 태아가 그려준 듯한 그림 일기로 하루를 요약해주며, 부모의 성격·외모를 바탕으로 만든 아이 캐릭터와 AI 챗봇으로 대화할 수 있습니다. 임신 주차별 정보, 태동 기록, 혈압·체중 추적 등 건강 대시보드도 제공합니다. ML 라이브러리(MediaPipe, XLM-R 등) 활용을 위해 Spring Boot + Flask 이중 서버 구조로 구현했습니다.',
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
                    'MediaPipe와 LLM API를 연동한 사진 기반 캐릭터 생성 서버 측 파이프라인 구현',
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
                    '아이 캐릭터 생성 화면: 부모 사진 업로드부터 AI 합성 결과 표시까지의 전체 사용자 흐름 구현 (이미지 압축, 비동기 대기, 결과 폴링)',
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
              content: '**Backend**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    'ML 이미지 합성(~30초) 동기 블로킹으로 WAS 응답 불가 → @Async의 한계로 인한 스레드 풀 고갈 확인 후 RabbitMQ로 재설계: **처리량(TPS) 1.16 → 1,949로 개선, 500 VU 환경에서도 에러율 0% 유지**',
                },
                {
                  content:
                    'JPA 엔티티 반환으로 인한 순환 참조(StackOverflowError) 및 N+1(10건 조회 시 21쿼리) 문제 발생 → DTO Projection 기반으로 변경하여 **쿼리 21개 → 1개로 단축 및 순환 참조 이슈 해결**',
                },
                {
                  content:
                    '"오늘의 질문" 매 요청마다 Gemini API 호출 + 사용자별 다른 질문 생성되는 기능 결함 → 날짜 키 + 자정 TTL Redis 캐싱: **응답시간 487ms → 3ms**',
                },
                {
                  content:
                    '감정 분석에 상용 LLM API 사용 시 비용·지연 문제 → XLM-R 경량 모델을 로컬 Worker에 직접 서빙하여 **외부 API 비용 제거 + 네트워크 지연 해소**',
                },
                {
                  content:
                    '아이 챗봇의 LLM 환각(Hallucination)과 대화 이탈 위험 → LangGraph로 대화 흐름을 명시적 노드로 재설계 + **3중 가드레일(의미 검색 강제, 시스템 프롬프팅, 입력 검증)로 응답 신뢰성 확보**',
                },
              ],
            },
            {
              content: '**Frontend**',
              weight: 'BOLD',
              descriptions: [
                {
                  content:
                    'AI 합성 최대 60초 대기 중 사용자 이탈 문제 → 백그라운드 폴링 + 단계별 로딩 스피너로 **대기 중 이탈 방지**',
                },
                {
                  content:
                    '메인 스레드 Canvas 이미지 압축으로 UI Freezing(최대 2초 렌더링 차단) → Web Worker로 백그라운드 분리 + Worker 2개 병렬 압축: **UI 멈춤 해소, 모바일에서도 로딩 애니메이션 정상 동작**',
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
