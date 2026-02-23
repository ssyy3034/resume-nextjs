import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '맥도날드 순천 조례 DT점 (아르바이트)',
      positions: [
        {
          title: '크루, 팀 리더',
          startedAt: '2022-11',
          endedAt: '2025-09',
          descriptions: [
            '입사 1년 차에 팀 리더로 승진하여 시프트 단위 최대 20명의 크루를 지휘. 피크 시간에 병목 구간을 판단하고 인력을 재배치하여 운영',
            '고객 컴플레인, 팀원 간 갈등 등 현장 이슈를 직접 중재하고 해결',
            '신규 크루 교육을 담당하고, 어려움을 겪는 동료에게 강점에 맞는 역할을 배정하여 팀 적응을 지원',
          ],
          skillKeywords: ['리더십', '커뮤니케이션', '이슈 해결'],
        },
      ],
    },
  ],
};

export default experience;
