import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**"기본기가 탄탄한 문제 해결사"**\nJavaScript/TypeScript와 React를 주력으로 하며, **OS(Pintos) 구현 경험**을 통해 컴퓨터 동작 원리를 깊이 이해했습니다. 단순히 기능을 구현하는 것을 넘어, **브라우저 렌더링 최적화**와 **효율적인 상태 관리**를 고민하며 성능과 유지보수성을 모두 고려한 **"좋은 코드"**를 지향합니다.',
    '**"함께 성장하는 공유의 가치"**\n배운 내용을 체계적으로 정리하여 **기술 블로그와 개인 노트(Obsidian)에 기록**하는 습관을 가지고 있습니다. 복잡한 개념도 확실하게 이해하고 넘어가며, 새로운 기술을 빠르게 습득해 실무에 적용하고 **동료들과 지식을 나누며** 함께 성장할 준비가 되어 있습니다.',
    '**"소통으로 완성하는 서비스"**\n3년간의 현장 리더 경험을 통해 **팀원 간 조율**과 **돌발 상황 해결** 역량을 길렀습니다. 개발 현장에서도 기획자, 디자이너, 백엔드 개발자와 **적극적으로 소통**하며, 혼자가 아닌 팀 전체의 노력으로 사용자에게 더 나은 경험을 전달합니다.',
  ],

  sign: 'dongha.log',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
