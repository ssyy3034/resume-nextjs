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

import fullstackPayload from '../base/fullstack';
import { frontend, backend, database, tools } from '../../../payload/skill';
import image from '../../../asset/me.jpg';

const kraftonTools = {
  ...tools,
  category: 'Tools',
  items: [
    { title: 'Git' },
    { title: 'Github' },
    { title: 'Antigravity' },
    ...tools.items.filter(
      (item) => !['Git', 'Github', 'Antigravity', 'Claude Code CLI'].includes(item.title),
    ),
  ],
};

const kraftonPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - Krafton 이력서',
  },
  profile: {
    ...fullstackPayload.profile,
    image,
  },
  skill: {
    ...fullstackPayload.skill,
    skills: [frontend, backend, database, kraftonTools],
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

export default kraftonPayload;
