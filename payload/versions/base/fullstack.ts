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

import defaultPayload from '../../index';

const fullstackPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - Software Engineer 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**기술에 다정함을 담아 옳은 방향으로 전달하는 신입 풀스택 엔지니어 권동하입니다.**',

      '동작 원리를 먼저 이해해야 올바른 기술 선택을 할 수 있다고 생각합니다. 크래프톤 정글에서 OS 커널(Pintos)을 직접 구현하며 시스템의 기초를 다졌고, 이를 바탕으로 프로젝트에서 마주한 문제들을 원인부터 접근해 해결했습니다.',

      '기술은 결국 사람을 위한 것이라고 생각합니다. 3년간 서비스직 아르바이트에서 팀리더로서 다양한 팀원들과 일하며 불편함을 먼저 찾아 개선하는 습관이 생겼고, 개발 팀에서도 같은 태도로 팀원들의 반복 작업을 자동화해 모두가 본질적인 일에 집중할 수 있도록 도왔습니다.',
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

export default fullstackPayload;
