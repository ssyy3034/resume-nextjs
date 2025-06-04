import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 산모 일지 프로젝트',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: '연암공과대학교',
      descriptions: [
        {
          content: 'AI 이미지 생성 파이프라인 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Flask 서버에서 부모 얼굴 이미지를 분석한 뒤, OpenAI DALL·E API를 호출하여 아기 캐릭터 이미지를 생성하는 과정을 자동화했습니다. ',
            },
            {
              content:
                '캐릭터 생성 응답 속도를 평균 2.8초로 최적화하며 사용자 경험을 개선했습니다.',
            },
          ],
        },
        {
          content: 'Docker 및 Git 기반 배포 환경 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Docker Compose를 활용해 백엔드(Spring Boot), 데이터베이스(MariaDB), AI 이미지 생성 서버(Flask)를 통합 구성하였으며, GitHub를 통한 버전 관리와 협업 환경을 구축하여 일관된 배포 프로세스를 구현했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: 'Global Linux Bootcamp',
      startedAt: '2017-05',
      endedAt: '2019-12',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;
