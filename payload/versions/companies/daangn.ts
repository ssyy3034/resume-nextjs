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
import { frontend, backend, database, tools } from '../../skill';
import image from '../../../asset/me.jpg';

// 당근 버전 스킬 커스터마이징 (프론트엔드 포지션)
const daangnFrontend = {
  ...frontend,
  items: [
    ...frontend.items,
    { title: 'HTML/CSS', description: '시맨틱 마크업과 모바일 중심의 반응형 레이아웃 구현' },
  ],
};

const daangnBackend = {
  ...backend,
  items: backend.items.filter((item) => item.title !== 'Python'),
};

const daangnTools = {
  ...tools,
  category: 'Tools',
  items: [
    { title: 'Git' },
    { title: 'Github' },
    { title: 'Antigravity' },
    ...tools.items.filter(
      (item) => !['Git', 'Github', 'Claude Code CLI', 'Antigravity'].includes(item.title),
    ),
  ],
};

const daangnPayload: Payload = {
  ...fullstackPayload,
  _global: {
    ...fullstackPayload._global,
    headTitle: '권동하 - 당근 이력서',
  },
  profile: {
    ...fullstackPayload.profile,
    image,
    // 블로그 링크 제외
    contact: fullstackPayload.profile.contact.filter((item) => !item.link?.includes('velog')),
  },
  skill: {
    ...fullstackPayload.skill,
    skills: [daangnFrontend, daangnBackend, database, daangnTools],
  },
  // 프로젝트에서 Fullstack → Frontend로 변경
  project: {
    ...fullstackPayload.project,
    list: fullstackPayload.project.list.map((item) => ({
      ...item,
      where: item.where?.replace('Fullstack', 'Frontend'),
    })),
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

export default daangnPayload;
