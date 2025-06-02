import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '맥도날드 순천 조례 DT점',
      positions: [
        {
          title: 'Team Leader',
          startedAt: '2023-06',
          descriptions: [
            '시프트 단위로 팀을 운영하며 매장 업무를 조율함',
            '인력 배치와 업무 분담을 통해 효율적인 운영을 도모함',
            '동료 간 갈등을 중재하고 원활한 소통을 위해 노력함',
            '고객 응대와 품질 유지에 있어 책임감을 가지고 일함',
            '신입 크루의 현장 적응을 돕고, 업무 안내 및 기본 교육을 지원함',
          ],
          skillKeywords: ['팀 운영', '리더십', '의사소통', '책임감', '갈등 조율', '동료 지원'],
        },
        {
          title: '그릴 & 카운터 멀티 크루',
          startedAt: '2022-11',
          endedAt: '2023-05',
          descriptions: [
            '그릴과 카운터 포지션을 교대하며 매장 운영을 지원함',
            '주어진 역할을 빠르게 익히고, 팀원들과 협업하며 일함',
          ],
          skillKeywords: ['고객 응대', '팀워크', '적응력'],
        },
      ],
    },
  ],
};

export default experience;
