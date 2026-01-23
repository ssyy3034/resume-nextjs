import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 산모 일지 프로젝트',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: '연암공과대학교 / 백엔드 담당 ',
      descriptions: [
        {
          content: 'JWT 기반 사용자 인증 및 감정 일기 API 백엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Spring Boot + Spring Security 기반의 JWT 인증 시스템을 도입해 회원가입, 로그인, 로그아웃, 리프레시 토큰 발급 등 주요 인증 기능을 구현했습니다.',
            },
            {
              content:
                '산모의 감정 기록을 위한 일기 CRUD API를 RESTful하게 설계하고, 클라이언트와의 일관된 데이터 통신을 위한 표준 응답 포맷을 구성했습니다.',
            },
            {
              content: 'Postman 기반 시나리오 테스트를 통해 기능 안정성을 확보했습니다.',
            },
            {
              content:
                'JPA 양방향 연관관계(`User ↔ Diary`)에서 발생한 순환 참조로 인해 직렬화 시 4.7GB 이상의 비정상적인 응답이 발생하는 문제를 분석하여, Lombok의 `@Data` 어노테이션이 자동 생성한 `toString()` 메서드가 무한 루프를 유발한 것을 확인했습니다.',
            },
            {
              content:
                '`@ToString(exclude = "user")`와 `@Getter/@Setter` 대체를 통해 문제를 해결하고, 객체 직렬화와 연관관계 설계의 중요성에 대한 인사이트를 얻었습니다.',
            },
          ],
        },
        {
          content: '감정 기반 AI 아기 캐릭터 생성 파이프라인 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '부모 얼굴 이미지를 분석해 유전적 특징을 추출하고, 이를 기반으로 GPT API로 프롬프트를 생성했습니다.\n' +
                '생성된 프롬프트는 DALL·E API에 전달되어 아기 얼굴 이미지를 생성했습니다.\n' +
                'Flask 서버에서 DALL·E API에 요청을 보내 실시간 이미지 생성이 가능합니다.\n',
            },
          ],
        },
        {
          content: 'Docker 및 Git 기반 배포 환경 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Docker Compose를 활용해 Spring Boot 기반 백엔드, MariaDB, Flask AI 서버를 통합 구성하고, GitHub를 통한 버전 관리를 통해 안정적인 협업 및 배포 프로세스를 구현했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: '가상 생태계 시뮬레이션 테라리움 기반 인프라 자동화 프로젝트',
      startedAt: '2024-08',
      endedAt: '2025-01',
      where: '연암 공과 대학교 / 개인 프로젝트',
      descriptions: [
        {
          content: '트래픽 유발형 시뮬레이션을 기반으로 인프라 자동화 시나리오 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'React로 가상의 테라리움 생태계를 구현하고, 동물·식물 각각을 독립된 상태 기반 컴포넌트로 구성해 사용자 이벤트에 따라 자원 소비가 증가하도록 설계했습니다.',
            },
            {
              content:
                '개체 수와 상호작용이 증가할수록 실제 연산 부하가 커지도록 설계하여, 인프라 확장이 필요한 조건을 시뮬레이션했습니다.',
            },
          ],
        },
        {
          content: 'AWS 기반 인프라 자동 확장 환경 구성 및 모니터링',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'EC2 인스턴스를 기반으로 프론트엔드 서버를 배포하고, CloudWatch를 통해 CPU/네트워크 트래픽 사용량을 지표화하여 실시간 모니터링을 구현했습니다.',
            },
            {
              content:
                'CloudWatch 경보 조건(CPU 60% 초과 등)을 기준으로 Auto Scaling 그룹을 구성해 EC2 인스턴스가 자동으로 확장/축소되도록 설정했습니다.',
            },
            {
              content:
                '퍼블릭/프라이빗 서브넷을 구분하고 NAT Gateway를 적용해 VPC 내부에서 외부로 안전하게 접근할 수 있도록 구성했습니다.',
            },
          ],
        },
        {
          content: 'RDS 및 IAM을 포함한 인프라 보안/구성 경험',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '동식물의 상태 로그를 MySQL 기반 RDS에 저장하고, 개체 수 증가에 따른 읽기/쓰기 부하를 관찰하며 모니터링을 병행했습니다.',
            },
            {
              content:
                'EC2 인스턴스에서 RDS 및 CloudWatch에 접근할 수 있도록 IAM 역할을 최소 권한 원칙에 따라 설정하고, 리소스 접근을 명확히 분리했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: 'YOLO 기반 실시간 학습 감지 및 습관 추적 시스템',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: '연암공과대학교 / 개인 프로젝트',
      descriptions: [
        {
          content: 'YOLOv8 기반 객체 탐지를 활용한 실시간 행동 추적 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'YOLOv8 사전 학습 모델을 활용해 웹캠에서 실시간으로 사용자 활동(예: 노트북 사용)을 감지하는 기능을 구축했습니다.',
            },
            {
              content:
                'OpenCV로 프레임을 처리하고, YOLO 탐지 결과 중 “cell phone” 클래스 기준으로 집중 상태를 판단하고, "person" 클래스의 감지 여부를 통해 화면앞의 사람이 존재하는지 판단했습니다.',
            },
            {
              content:
                '30초 간격으로 감지 데이터를 수집하여 하루 평균 300장 이상의 이미지 프레임을 분석할 수 있도록 설정했습니다.',
            },
          ],
        },
        {
          content: '공부 시간 측정 및 보상 시스템 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '공부 시간이 목표 시간 이상일 경우 분당 1포인트, 초과 시 분당 2포인트가 적립되는 로직을 구현해 자기주도적 동기 부여 기능을 설계했습니다.',
            },
            {
              content:
                '최근 7일간의 공부 평균 시간을 기반으로 자동 목표 시간 설정 알고리즘을 구현했습니다.',
            },
            {
              content:
                '하루 단위 JSON 파일(YYYY-MM-DD.json)에 누적 공부 시간과 포인트 데이터를 기록하여 지속적인 습관 추적이 가능하도록 구성했습니다.',
            },
          ],
        },
        {
          content: 'Gradio 기반 대시보드 및 이미지 리포트 UI 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Gradio 인터페이스를 사용해 실시간 감지 이미지 표시, 날짜별 공부 시간 시각화, 목표 달성 여부 체크박스를 통합한 웹 대시보드를 구현했습니다.',
            },
            {
              content:
                '캡처된 이미지를 기준으로 가장 최근 감지 이미지를 자동 표시하는 기능을 구현해, 사용자의 현재 상태를 직관적으로 확인할 수 있도록 했습니다.',
            },
            {
              content:
                '목표 달성 시 UI 상에서 포인트 상승 애니메이션 효과를 통해 시각적 피드백을 제공했습니다.',
            },
          ],
        },
        {
          content: '모듈 기반의 확장 가능한 구조 설계 및 운영 자동화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '탐지(detect), 추적(study_tracker), 리포트(read_log_and_report), 인터페이스(app_gradio) 등 기능을 분리하여 유지보수성과 확장성을 확보했습니다.',
            },
            {
              content:
                '매일 자동으로 로그 파일을 생성하고, 이전 날짜 데이터는 별도 폴더로 정리하여 장기적인 습관 기록에 최적화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
