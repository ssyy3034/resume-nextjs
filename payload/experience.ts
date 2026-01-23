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
            '시프트 단위로 팀 운영을 총괄하며 인력 배치 및 업무 분담 조정',
            '고객 응대 및 품질 관리를 책임지며 서비스 품질 유지에 기여',
            '팀원 간 갈등을 조율하고 원활한 커뮤니케이션을 유도함',
            '신입 크루의 현장 적응을 돕고 업무 프로세스 전반에 대해 교육함',
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