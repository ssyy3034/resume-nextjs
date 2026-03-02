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
import { frontend, backend, infra, tools } from '../../../payload/skill';
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
  introduce: {
    ...fullstackPayload.introduce,
    contents: [
      `**"사용자의 일상에 닿아있는 문제를 기술로 풀어나가며 빠르게 성장하고 싶은 개발자 권동하입니다."**`,

      `**Software Engineer**\nReact 기반 SPA 프로젝트를 기획부터 개발까지 경험했습니다. 브라우저 렌더링 최적화와 효율적인 상태 관리를 고민하며, 단순히 동작하는 코드가 아니라 팀원이 이해하기 쉽고 유지보수하기 좋은 코드를 작성하려고 노력합니다.`,

      `**Problem Solver**\n 표면적인 구현에 그치지 않고 문제가 발생하면 기술적 원인을 분석하고 해결합니다. '사용자 경험 개선'이라는 목표를 위해 새로운 기술 스택 학습 및 도입을 주저하지 않으며, 정량적인 데이터로 개선 성과를 증명하는 과정을 즐깁니다. 제가 가진 기술을 도구 삼아 제품의 본질적인 가치를 높이는 데 기여하고 싶습니다.`,

      `**Team Player**\n코드 개선과 논의에 열린 자세를 가지고 있습니다. 기술적인 문제를 팀이 이해할 수 있는 언어로 설명하고, 함께 실행 가능한 방향을 찾아가는 과정을 중요하게 생각합니다. 다양한 배경을 가진 동료들과 협업하며 쌓은 소통 역량을 바탕으로 팀에 기여하고 싶습니다.`,
    ],
  },
  profile: {
    ...fullstackPayload.profile,
    image,
    // 블로그 링크 제외
    contact: fullstackPayload.profile.contact.filter((item) => !item.link?.includes('velog')),
  },
  skill: {
    ...fullstackPayload.skill,
    skills: [daangnFrontend, daangnBackend, infra, daangnTools],
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
