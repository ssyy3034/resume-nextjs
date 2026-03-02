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
    headTitle: '권동하 - Fullstack Engineer 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**직관이 아닌 데이터로 병목을 찾고, 개선 결과를 수치로 확인하는 신입 풀스택 엔지니어 권동하입니다.**',

      '탄탄한 기본기를 다지기 위해 크래프톤 정글에서 OS 커널(Pintos)을 직접 구현하며 시스템의 동작 원리를 공부했습니다.수료 후에도 학습한 내용을 바탕으로 기존 프로젝트의 부족했던 부분들을 하나씩 고쳐보면서, 실제 서비스에서 마주할 문제들을 조금이나마 경험할 수 있었습니다.',

      '3년간 서비스직 아르바이트에서 다양한 연령대의 팀원들과 함께 일하며 불편함이 보이면 먼저 개선 방법을 찾아 제안하고 도입했습니다. 개발 팀에서도 같은 태도로, 팀의 Git 숙련도 격차로 인한 문제를 해결한 경험이 있습니다.',
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
