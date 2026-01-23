import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '👋 안녕하세요. 함께 일하며 성장하고, 문제를 정확히 이해하고 해결하는 백엔드 개발자 권동하입니다.\n' +
      '잘 돌아가는 코드보다 읽기 쉽고 함께 고칠 수 있는 구조가 더 오래 살아남는다고 믿습니다. 그래서 처음부터 협업과 유지보수를 고려한 개발을 지향합니다.',

    '📦 기술은 빠르게 익히는 편이지만, 무엇보다 먼저 문제를 정확히 이해하려고 합니다.\n' +
      '단순히 새롭다는 이유로 도구를 선택하기보다는, 정말 필요한 기술인지 고민한 뒤에 적용합니다.\n' +
      '여러 프로젝트를 진행 하며 안정성과 성능 개선의 중요성을 경험했습니다.',

    '🤝 함께 일할 때 더 성장한다고 믿습니다. 매장 운영부터 팀 프로젝트까지, 협업을 통해 문제를 해결하는 경험을 많이 해봤습니다.\n' +
      '서로 다른 역할을 조율하며 문제를 해결하는 경험을 해왔습니다.\n' +
      '같은 방향을 보고 움직이는 팀이 좋은 결과를 만든다고 믿고, 신뢰할 수 있는 동료가 되기 위해 노력합니다.',
  ],

  sign: 'Tetor.dev',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;