import { IProfile } from '../../../component/profile/IProfile';
import { IIntroduce } from '../../../component/introduce/IIntroduce';
import { ISkill } from '../../../component/skill/ISkill';
import { IOpenSource } from '../../../component/openSource/IOpenSource';
import { IExperience } from '../../../component/experience/IExperience';
import { IProject } from '../../../component/project/IProject';
import { IPresentation } from '../../../component/presentation/IPresentation';
import { IEducation } from '../../../component/education/IEducation';
import { IArticle } from '../../../component/article/IArticle';
import { IEtc } from '../../../component/etc/IEtc';
import { IFooter } from '../../../component/footer/IFooter';
import { IGlobal } from '../../../component/common/IGlobal';

import backendPayload from '../base/backend';

const tossPayload: Payload = {
  ...backendPayload,
  _global: {
    ...backendPayload._global,
    headTitle: '권동하 - 토스페이먼츠 이력서',
  },
  introduce: {
    ...backendPayload.introduce,
    contents: [
      '**직관이 아닌 데이터로 병목을 찾고, 개선 결과를 수치로 확인하는 신입 백엔드 엔지니어 권동하입니다.**',

      '탄탄한 기본기를 다지기 위해 크래프톤 정글에서 OS 커널(Pintos)을 직접 구현하며 시스템의 동작 원리를 공부했습니다. 수료 후에도 학습한 내용을 바탕으로 기존 프로젝트의 부족했던 부분들을 하나씩 고쳐보면서, 실제 서비스에서 마주할 문제들을 조금이나마 경험할 수 있었습니다.',

      '프로젝트에서 공식 개발자 가이드와 토스페이먼츠 연동 가이드 MCP를 활용하여 테스트 결제 승인·확인·웹훅 흐름을 구성했고, 동시 요청 시 잔액이 틀어지는 문제를 비관적 락·낙관적 락·멱등키로 해결한 경험이 있습니다. 아직 실 서비스 규모의 트래픽을 다뤄보지는 못했지만, 돈이 오가는 시스템에서 정확성이 얼마나 중요한지를 체감했고 그 문제를 더 깊이 다뤄보고 싶습니다.',

      '모르는 것이 있으면 주저하지 않고 질문하고, 배운 내용을 토대로 더 나은 방법을 고민하여 팀의 개선까지 이어갑니다. 아르바이트에서 다양한 연령대의 팀원들과 일하며 이 태도가 자리잡았고, 개발 팀에서도 같은 태도로 팀 전체의 워크플로우를 함께 개선한 경험이 있습니다.',
    ],
  },
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default tossPayload;
