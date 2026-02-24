import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
      startedAt: '2025-12',
      endedAt: '2026-02',
      where: '팀 프로젝트 (5인 개발 / 기획, 풀스택 개발)',
      techStack: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'D3.js', 'Vite'] },
        { category: 'Backend', items: ['Spring Boot', 'JPA'] },
        { category: 'Database', items: ['PostgreSQL', 'Neo4j'] },
        { category: 'Testing', items: ['JUnit 5', 'Testcontainers'] },
      ],
      descriptions: [
        {
          content:
            '웹소설 작가가 글을 쓰면 AI가 인물·관계·사건을 자동 분석하여 그래프로 시각화해주는 **창작 보조 플랫폼**입니다. 작가는 StoLink에서 에디터와 데이터 시각화를 통해 체계적으로 글을 쓰고, 배포한 글을 통해 StoRead에서 독자들이 관계도와 함께 작품을 열람하거나 구매할 수 있습니다.',
        },
        {
          content: '**백엔드 트러블슈팅 — N+1 쿼리 최적화**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'JPA 쿼리 로그에서 문서 1건 조회 시 태그·카테고리 조회 쿼리가 N개 추가 발생함을 확인. 연관관계 구조를 분석한 결과, @ManyToMany 기본값인 LAZY 로딩이 컬렉션 순회 시점마다 개별 쿼리를 유발하는 것이 원인',
            },
            {
              content:
                'Fetch Join으로 연관 데이터를 한 번의 쿼리에 함께 조회하도록 개선',
            },
            {
              content: '**결과: API 응답 450ms → 25ms (18배 개선)**',
            },
          ],
        },
        {
          content: '**크레딧 결제 시스템 구현 (백엔드)**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '유료 작품 열람을 위한 크레딧 충전/차감 시스템을 구현. 토스페이먼츠 테스트 결제 API를 연동하여 실제 결제 흐름(승인 → 확인 → 웹훅)을 구성',
            },
            {
              content:
                '외부 PG API 응답이 느릴 경우 DB 트랜잭션이 길어져 커넥션 풀이 고갈되는 구조적 문제를 인지 → 외부 호출을 트랜잭션 범위 밖으로 분리',
            },
            {
              content:
                '결제 안정성을 위해 3중 방어 체계 구축: 경합이 잦은 크레딧 잔액에는 비관적 락(PESSIMISTIC_WRITE), 결제 상태 변경에는 낙관적 락(@Version), 네트워크 재시도 등 순차적 중복 요청에는 멱등키를 적용',
            },
            {
              content:
                'Testcontainers로 운영 환경과 동일한 PostgreSQL 위에서 동시성 테스트를 작성하여 검증. 100개 스레드 동시 차감 요청에서 **잔액 정합성 100% 보장, 잔액 부족 시 초과 차감 완벽 방어** 확인',
            },
          ],
        },
        {
          content: '**프론트엔드 성능 최적화**',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'SVG Style Recalculation 병목 → Canvas 전환: INP 420ms → 64ms (650+ 노드 60FPS 유지)',
            },
            {
              content: 'O(n²) 트리 변환 → HashMap + useMemo: 15~20ms → 1ms 이하',
            },
            {
              content: '초기 번들 Vite manualChunks 청크 분리: 450KB → 187KB (58% 절감)',
            },
          ],
        },
        {
          content: '**팀 협업 — Git 컨벤션 자동화**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '5인 팀에서 Git 숙련도 격차로 브랜치 충돌, 커밋 컨벤션 미준수, 이슈 트래킹 누락 등의 문제가 반복 발생',
            },
            {
              content:
                'Antigravity의 슬래시 커맨드를 활용하여 이슈 생성 → 브랜치 생성 → 커밋 → PR 작성까지 단일 명령으로 실행되도록 팀 Git 운영을 표준화',
            },
            {
              content:
                '개인 도구로 시작했으나 팀 전체가 사용하게 되었고, 이후 다른 프로젝트 팀으로도 확산',
            },
          ],
        },
      ],
    },
    {
      title: 'Aidiary : AI 기반 산모 감정 일기 서비스',
      startedAt: '2025-04',
      endedAt: '2025-06',
      where: '캡스톤 디자인 (2인 개발 / 기획, 풀스택)',
      techStack: [
        { category: 'Frontend', items: ['React', 'TypeScript'] },
        { category: 'Backend', items: ['Spring Boot', 'Flask', 'JPA'] },
        { category: 'Database', items: ['MariaDB'] },
        { category: 'Infra', items: ['Docker Compose', 'AWS EC2', 'S3', 'ALB'] },
      ],
      descriptions: [
        {
          content:
            '산모가 일기를 쓰면 AI가 감정을 분석해 피드백을 제공하고, 부모 사진으로 아기 캐릭터를 생성하는 서비스. MediaPipe·PyTorch 등 Python 전용 라이브러리 활용이 필요하여 Spring Boot + Flask 이중 서버 구조로 구현했습니다.',
        },
        {
          content: '**AI 파이프라인 — 부모 사진 기반 아기 캐릭터 생성**',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '부모 사진 업로드 → MediaPipe Face Mesh로 얼굴 478개 랜드마크 추출 → 유전도(h²) 기반 numpy 블렌딩으로 자녀 특징 생성 → DALL-E 3 프롬프트 자동 생성 → 캐릭터 이미지 생성의 4단계 파이프라인 구축',
            },
            {
              content:
                'Flask 호출을 RestTemplate 동기 처리하여 이미지 생성(30초+) 동안 Spring Boot 스레드가 블로킹되는 문제 인지. `@Async` + 전용 스레드풀로 Flask 호출을 백그라운드 처리하도록 개선. 컨트롤러는 즉시 jobId를 반환(202 Accepted)하고 클라이언트가 `/status/{jobId}` 폴링으로 완료를 확인하는 구조로 변경. **스레드 블로킹 제거, 동시 요청 처리 가능**',
            },
          ],
        },
        {
          content: '**백엔드 트러블슈팅 — @Data 순환 참조로 인한 서버 크래시 해결**',
          weight: 'BOLD',
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
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'AWS EC2에 Docker Compose로 4개 서비스를 배포. React 정적 리소스는 S3 + CloudFront로 분리하여 CDN 캐싱 적용. ALB로 Spring Boot / Flask 라우팅을 분기 처리하여 멀티 서버 구조 구성',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
