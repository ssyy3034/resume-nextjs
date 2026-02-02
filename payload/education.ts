import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '크래프톤 정글 (Krafton Jungle)',
      subTitle: 'Software Engineer Trainee',
      startedAt: '2025-09',
      endedAt: '2026-02',
      descriptions: [
        {
          content:
            '5개월 간의 소프트웨어 엔지니어 양성 과정을 통한 전산학(CS) 심화 및 실무 역량 강화',
        },
        {
          content:
            '자료구조, 알고리즘, Pintos (운영체제 커널 프로젝트) 등 핵심 전산학 커리큘럼 이수',
        },
        {
          content: '나만무 프로젝트 웹소설 작가 지식 관리 플랫폼 **StoLink** 기획 및 풀스택 개발',
        },
        {
          content: '**주당 최대 100시간의 몰입** 및 동료 학습을 통해 문제 해결 역량 내재화',
        },
      ],
    },
    {
      title: '연암공과대학교',
      subTitle: '스마트소프트웨어학과 학사 졸업',
      startedAt: '2017-03',
      endedAt: '2025-02',
    },
  ],
};

export default education;
