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

// 당근 버전 스킬 커스터마이징
const daangnLanguages = {
  ...languages,
  items: [
    ...languages.items.filter((item) => item.title !== 'Python'),
    { title: 'HTML/CSS', description: '시맨틱 마크업과 반응형 레이아웃 구현' },
  ],
};

const daangnFrameworks = {
  ...frameworks,
  items: frameworks.items.filter((item) => item.title !== 'Vite'),
};

const daangnInfrastructure = {
  ...infrastructure,
  items: infrastructure.items.filter((item) => item.title !== 'MySQL'),
};

const daangnTools = {
  ...tools,
  category: 'Productivity & Collaboration',
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
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - 당근 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      `**"사용자 가까이에서 빠르게 배우고 성장하고 싶은 개발자 권동하입니다."**`,

      `**Software Engineer**\nReact 기반 SPA 프로젝트를 기획부터 개발까지 경험했습니다. 브라우저 렌더링 최적화와 효율적인 상태 관리를 고민하며, 단순히 동작하는 코드가 아니라 팀원이 이해하기 쉽고 유지보수하기 좋은 코드를 작성하려고 노력합니다.`,

      `**Problem Solver**\n사용자 임팩트를 최우선으로 생각하며, 주도적으로 문제를 발견하고 해결하는 것을 좋아합니다. 모바일 읽기 경험 최적화, 데스크톱 집필 경험 개선처럼 사용자 맥락에 맞는 UI/UX를 고민하고 구현한 경험이 있습니다.`,

      `**Team Player**\n코드 개선과 논의에 열린 자세를 가지고 있습니다. 기술적인 문제를 팀이 이해할 수 있는 언어로 설명하고, 함께 실행 가능한 방향을 찾아가는 과정을 중요하게 생각합니다. 3년간 서비스직에서 일하며 쌓은 소통 경험을 통해 팀에 기여하고 싶습니다.`,
    ],
  },
  profile: {
    ...defaultPayload.profile,
    image,
    // 블로그 링크 제외
    contact: defaultPayload.profile.contact.filter((item) => !item.link?.includes('velog')),
  },
  skill: {
    ...defaultPayload.skill,
    skills: [daangnLanguages, daangnFrameworks, daangnInfrastructure, daangnTools],
  },
  // 프로젝트에서 Fullstack → Frontend로 변경
  project: {
    ...defaultPayload.project,
    list: defaultPayload.project.list.map((item) => ({
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
