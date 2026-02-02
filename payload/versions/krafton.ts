import { IProfile } from '../../component/profile/IProfile';
import { IIntroduce } from '../../component/introduce/IIntroduce';
import { ISkill } from '../../component/skill/ISkill';
import { IOpenSource } from '../../component/openSource/IOpenSource';
import { IExperience } from '../../component/experience/IExperience';
import { IProject } from '../../component/project/IProject';
import { IPresentation } from '../../component/presentation/IPresentation';
import { IEducation } from '../../component/education/IEducation';
import { IArticle } from '../../component/article/IArticle';
import { IEtc } from '../../component/etc/IEtc';
import { IFooter } from '../../component/footer/IFooter';
import { IGlobal } from '../../component/common/IGlobal';

import defaultPayload from '../index';
import { languages, frameworks, infrastructure, tools } from '../../payload/skill';
import image from '../../asset/me.jpg';

const kraftonTools = {
  ...tools,
  category: 'Productivity & Collaboration',
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
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - Krafton 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      `**"탄탄한 기본기를 토대로 문제를 해결하고, 팀의 생산성 향상에 기여하는 개발자 권동하입니다."**`,
      `**Software Engineer**\n기본기가 탄탄한 개발자를 지향합니다. OS(Pintos) 구현 프로젝트를 통해 문제를 해결했던 끈기를 바탕으로 컴퓨터의 동작 원리를 깊이 있게 학습했고, 이 경험을 바탕으로 브라우저 렌더링 최적화나 효율적인 상태 관리 방법을 고민하고 있습니다. 단순히 기능만 구현하는 것이 아니라, 성능과 유지보수성까지 고려한 좋은 코드를 작성하기 위해 노력합니다.`,

      `**Problem Solver**\n사용자에게는 최고의 경험을, 팀에게는 최적의 효율을 제공합니다. 렌더링 최적화로 사용자의 기다림을 없애고, 반복 업무 자동화로 동료의 소중한 시간을 지킨 경험이 있습니다. 기술 자체에 매몰되지 않고, 그 기술이 사용자와 팀에게 어떤 가치를 줄 수 있는지를 끊임없이 고민합니다.`,

      `**Team Player**\n좋은 서비스는 개발자 혼자가 아닌, 팀 전체의 소통 속에서 만들어진다고 믿습니다. 3년간 서비스직 현장 리더로 일하며, 바쁜 시기에도 팀원 간의 의견을 조율하고 돌발 상황을 해결해 본 경험이 있습니다. 개발 현장에서도 동료와 적극적으로 소통하며, 사용자에게 더 나은 경험을 전달하려 합니다.`,
    ],
  },
  profile: {
    ...defaultPayload.profile,
    image,
  },
  skill: {
    ...defaultPayload.skill,
    skills: [languages, frameworks, infrastructure, kraftonTools],
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
