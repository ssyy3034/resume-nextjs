import { IIntroduce } from '../component/introduce/IIntroduce';
import packageJson from '../package.json';

const { lastestUpdatedAt } = packageJson;

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "JavaScript/TypeScript와 React를 주력으로 사용하며, 기본기가 탄탄한 개발자를 지향합니다. OS(Pintos) 구현 프로젝트를 통해 컴퓨터의 동작 원리를 깊이 있게 학습했고, 이 경험을 바탕으로 브라우저 렌더링 최적화나 효율적인 상태 관리 방법을 고민하고 있습니다. 단순히 기능만 구현하는 것이 아니라, 읽기 쉽고 테스트 가능하며 변경에 유연한 코드를 작성하기 위해 노력합니다.",

    '**Problem Solver**\n사용자에게는 최고의 경험을, 팀에게는 최적의 효율을 제공합니다. 렌더링 최적화로 사용자의 기다림을 없애고, 반복 업무 자동화로 동료의 소중한 시간을 지킨 경험이 있습니다. 기술 자체에 매몰되지 않고, 그 기술이 사용자와 팀에게 어떤 가치를 줄 수 있는지를 끊임없이 고민합니다.',

    '**Team Player**\n좋은 서비스는 개발자 혼자가 아닌, 팀 전체의 소통 속에서 만들어진다고 믿습니다. 3년간 서비스직 현장 리더로 일하며, 바쁜 시기에도 팀원 간의 의견을 조율하고 돌발 상황을 해결해 본 경험이 있습니다. 개발 현장에서도 기획자, 디자이너, 백엔드 개발자와 적극적으로 소통하며, 사용자에게 더 나은 경험을 전달하려 합니다.',
  ],

  sign: 'dongha.log',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
