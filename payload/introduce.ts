import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '백엔드 개발자로서, 하나의 기능을 넘어서 전체 시스템이 오랜 시간 안정적으로 유지될 수 있도록 고민하며 개발에 임하고 있습니다. 단순히 동작하는 코드보다, 협업이 쉽고 변화에 유연한 구조, 그리고 오해 없이 전달되는 코드를 지향합니다. 읽기 쉽고 책임이 잘 분리된 아키텍처를 만드는 데 집중하고 있습니다.',

    '완성도 높은 서비스를 위해 필요한 기술은 스스로 익히고, 그 과정을 블로그와 Obsidian에 꾸준히 기록하고 있습니다. 서비스는 기술만으로 완성되지 않는다고 생각합니다. 비즈니스와 사용자, 그리고 개발자가 같은 방향을 향할 때 비로소 완성에 가까워진다고 믿습니다. 아르바이트 경험을 통해, 서로의 역할을 존중하며 협력하는 감각이 문제 해결에 얼마나 중요한지를 체감했고, 그 경험은 지금까지도 개발자로서의 기준이 되고 있습니다.',

    '기술적인 신뢰를 바탕으로 팀이 기대고 의지할 수 있는 개발자가 되는 것이 제 목표입니다. 단순히 실력을 쌓는 것에서 나아가, 동료에게 안정감과 방향을 줄 수 있는 사람이 되고 싶습니다. 개발자로서 정점에 오르고 싶다는 마음을 품고, 그에 걸맞은 태도를 쌓아가고 있습니다.',
  ],

  sign: 'Tetor.dev',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24'
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
