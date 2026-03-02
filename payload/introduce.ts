import { IIntroduce } from '../component/introduce/IIntroduce';
import packageJson from '../package.json';

const { lastestUpdatedAt } = packageJson;

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**직관이 아닌 데이터로 병목을 찾고, 개선 결과를 수치로 확인하는 신입 백엔드 엔지니어 권동하입니다.**',

    '탄탄한 기본기를 다지기 위해 크래프톤 정글에서 OS 커널(Pintos)을 직접 구현하며 시스템의 동작 원리를 공부했습니다.수료 후에도 학습한 내용을 바탕으로 기존 프로젝트의 부족했던 부분들을 하나씩 고쳐보면서, 실제 서비스에서 마주할 문제들을 조금이나마 경험할 수 있었습니다.',

    '3년간 서비스직 아르바이트에서 다양한 연령대의 팀원들과 함께 일하며 불편함이 보이면 먼저 개선 방법을 찾아 제안하고 도입했습니다. 개발 팀에서도 같은 태도로, 팀의 Git 숙련도 격차로 인한 문제를 해결한 경험이 있습니다.',
  ],

  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
