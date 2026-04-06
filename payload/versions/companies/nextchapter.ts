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


const nextchapterPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 넥스트챕터 Product Engineer 이력서',
  },
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      '**누군가의 사소한 불편함을 해결할 때 가장 큰 보람을 느끼며, 고민의 끝에서 답을 찾아내는 과정을 사랑하는 개발자입니다.**',
      '**정답이 없는 모호한 상황도 스스로 기회를 찾아 구조를 만들어가는 시간을 즐기며, 제품이 사용자에게 닿는 모든 순간에 책임감을 갖고 함께합니다.**',
      '**브랜드의 가치를 발굴하고 운영의 효율을 극대화하여 비즈니스를 키워나가는 넥스트챕터의 여정에, 현장의 문제를 제품으로 풀어내는 든든한 조력자로서 함께하고 싶습니다.**',
    ],
  },
  skill: fullstackPayload.skill,
  experience: fullstackPayload.experience,
  project: {
    disable: false,
    list: [
      {
        title: 'StoLink & StoRead : 웹소설 작가를 위한 지식 관리 플랫폼',
        startedAt: '2025-12',
        endedAt: '2026-01',
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
              '웹소설 작가가 글을 쓰면 AI가 인물·관계·사건을 분석하여 그래프로 시각화해주는 **창작 보조 플랫폼**입니다. StoLink에서 에디터와 데이터 시각화를 통해 작가용 웹앱을 제공하며, StoRead에서 독자들이 관계도와 함께 작품을 열람하거나 구매할 수 있도록 구현했습니다.',
          },
          {
            content: '**[공통] 문서 트리 구조의 API 및 렌더링 성능 최적화**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  '문서 폴더 트리의 깊이가 깊어짐에 따라 백엔드 DB 조회와 프론트엔드 데이터 구조 변환 양쪽에서 발생하는 병목 파악',
              },
              {
                content:
                  '**[Back-end]** JPA Query 로그 분석을 통해 N+1 쿼리를 확인하고 Fetch Join을 도입하여 핵심 API **응답 시간을 450ms → 25ms (18배 단축)**했습니다.',
              },
              {
                content:
                  '**[Front-end]** 1차원 문서 데이터 배열을 트리 구조로 변환 시 발생하는 렌더링 지연을 HashMap 기반 ID 파싱으로 해결, **연산 복잡도를 O(n)으로 최적화(1ms 이하)**했습니다.',
              },
            ],
          },
          {
            content: '**[안정성] 외부 장애가 서비스 전체로 전파되는 리스크 해결**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  '토스페이먼츠 연동 중 외부 API 지연이 메인 서버의 DB 커넥션 풀을 장기간 점유해버리는 장애 위험 발견',
              },
              {
                content:
                  '결제 로직을 트랜잭션 외부로 격리(이벤트 기반)하는 아키텍처로 개선하여 가용성을 방어했습니다.',
              },
              {
                content:
                  'SELECT FOR UPDATE 기반 비관적 락을 적용해 **100스레드 동시 요청 시 잔액 정합성 100%**를 검증했습니다.',
              },
            ],
          },
          {
            content: '**[UI/UX] 대규모 관계도 시각화 및 번들 최적화**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  'SVG 기반 관계도 렌더링의 Layout 부하를 Canvas API로 전환하여 단일 비트맵 레이어로 처리. **INP 420ms → 64ms, 650+ 노드 환경에서 60FPS 유지**를 실현했습니다.',
              },
              {
                content:
                  'Vite의 청크 분할 및 지연 로딩을 적용해 **초기 번들 사이즈를 450KB → 187KB (58% 감소)**시켜 로딩 속도를 개선했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: 'Aidiary : AI 기반 산모 감정 케어 서비스',
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
              '산모를 위한 AI 감정 일기 서비스입니다. 일기를 쓰면 AI가 감정을 분석해 하루를 요약해주며, 부모의 사진을 바탕으로 생성한 아이 캐릭터와 AI 챗봇으로 대화할 수 있는 서비스를 구현했습니다.',
          },
          {
            content: '**[가용성] 고부하 AI 연산 대기를 견디는 비동기 아키텍처**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  '30초 이상 소요되는 AI 모델 추론을 동기 처리할 때 서버가 마비되는 문제를 **비동기 메시지 큐(RabbitMQ)** 구조로 해결했습니다.',
              },
              {
                content:
                  '개선 후 k6 부하 테스트에서 **TPS 1.16 → 1,949 (1,680배 향상)** 및 **500 VU 부하에서 에러율 0%**를 확인했습니다.',
              },
            ],
          },
          {
            content: '**[최적화] 비용 절감 및 런타임 안정성 강화**',
            weight: 'BOLD',
            descriptions: [
              {
                content:
                  'Redis TTL 캐싱 도입으로 Gemini API 중복 호출을 차단하여 **운영 비용 90% 절감** 및 **응답 속도 162배(487ms → 3ms)** 개선을 이뤄냈습니다.',
              },
              {
                content:
                  'Lombok @Data 순환 참조로 인한 서버 크래시를 발견, DTO 분리 및 직렬화 계층 차단을 통해 **응답 크기 4GB+ → 20KB로 정상화**했습니다.',
              },
              {
                content:
                  '무거운 Canvas 연산을 **Web Worker**로 분리하여 모바일 브라우저 환경에서도 화면 멈춤 없는 사용자 경험을 제공했습니다.',
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

export default nextchapterPayload;
