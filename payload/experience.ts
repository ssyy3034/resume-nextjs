import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '크래프톤 정글 (Krafton Jungle)',
      positions: [
        {
          title: '소프트웨어 엔지니어 양성 과정 11기',
          startedAt: '2025-09',
          descriptions: [
            '5개월간의 소프트웨어 엔지니어 양성 과정을 통한 컴퓨터 과학(CS) 심화 및 역량 강화',
            '자료구조, 알고리즘, Pintos (운영체제 커널 프로젝트) 등 핵심 전산학 커리큘럼 이수',
            '나만무 프로젝트 웹소설 작가 지식 관리 플랫폼 **StoLink** 기획 및 프론트엔드 리드 개발',
            '매주 100시간 이상의 몰입 및 동료 학습을 통해 문제 해결 역량 내재화',
          ],
          skillKeywords: [
            '전산학 기초',
            '자료구조',
            '알고리즘',
            '네트워크',
            '운영체제 (Pintos)',
            '시스템 아키텍처',
            '팀 협업',
          ],
        },
      ],
    },
    {
      title: '맥도날드 순천 조례 DT점',
      positions: [
        {
          title: '팀 리더 (Team Leader)',
          startedAt: '2023-06',
          endedAt: '2025-09',
          descriptions: [
            '시프트 단위로 팀 운영을 총괄하며 인력 배치 및 업무 분담 조정',
            '명절 연휴 병목 지점 해소 및 유동적 인력 배치로 **일매출 2,000만원(전남 2위)** 달성 (DT/배달 무중단 운영)',
            '고객 만족도(CS) 관리 및 컴플레인 해결을 통한 **서비스 품질 향상** 기여',
            '팀원 간 갈등 조율 및 동기 부여를 통해 **긍정적인 팀워크 문화** 조성',
            '신입 크루 **교육 매뉴얼 활용** 및 현장 OJT 진행으로 업무 적응 시간 단축',
          ],
          skillKeywords: [
            '팀 리딩',
            '인력 관리',
            '의사소통 능력',
            '문제 해결',
            '리더십',
            '신입 교육',
          ],
        },
        {
          title: '그릴 & 카운터 멀티 크루',
          startedAt: '2022-11',
          endedAt: '2023-05',
          descriptions: [
            '그릴(조리)과 카운터(고객 응대) 업무를 유기적으로 수행함',
            '신속한 역할 습득과 팀워크를 기반으로 매장 운영에 안정적으로 기여함',
          ],
          skillKeywords: ['고객 서비스', '팀워크', '현장 적응력'],
        },
      ],
    },
  ],
};

export default experience;
