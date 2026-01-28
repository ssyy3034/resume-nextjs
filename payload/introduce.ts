import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**"탄탄한 기본기를 토대로 문제를 해결하고, 팀의 생산성 향상에 기여하는 개발자 권동하입니다."**',
    '**"기본기가 탄탄한 문제 해결"**\nJavaScript/TypeScript와 React를 주력으로 하며, **OS(Pintos) 구현 경험**을 통해 컴퓨터 동작 원리를 깊이 이해했습니다. 단순히 기능을 구현하는 것을 넘어, **브라우저 렌더링 최적화**와 **효율적인 상태 관리**를 고민하며 성능과 유지보수성을 모두 고려한 **"좋은 코드"**를 지향합니다.',
    '**"사용자에게는 최고의 경험을, 팀에게는 최적의 효율을"**\n**렌더링 최적화**로 사용자의 기다림을 없애고, **반복 업무 자동화**로 동료의 소중한 시간을 지킨 경험이 있습니다. 기술 자체에 매몰되지 않고, 그 기술이 **사용자와 팀**에게 어떤 가치를 줄 수 있는지를 끊임없이 고민합니다.',
    '**"소통으로 완성하는 서비스"**\n3년간의 현장 리더 경험을 통해 **팀원 간 조율**과 **돌발 상황 해결** 역량을 길렀습니다. 개발 현장에서도 기획자, 디자이너, 백엔드 개발자와 **적극적으로 소통**하며, 혼자가 아닌 팀 전체의 노력으로 사용자에게 더 나은 경험을 전달합니다.',
  ],

  sign: 'dongha.log',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
