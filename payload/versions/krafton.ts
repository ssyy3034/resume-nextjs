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
import { languages, frameworks, infrastructure, tools, misc } from '../../payload/skill';
import image from '../../asset/me.jpg';

const kraftonTools = {
  ...tools,
  category: 'AI & Productivity Tools',
  items: [
    { title: 'Claude Code' }, // Renaming for clarity if needed, or keeping as is but ensuring order
    { title: 'Cursor' },
    { title: 'Antigravity' },
    // Filter out duplicates if present in original tools, or just list the rest
    ...tools.items.filter((item) => !['Claude Code CLI', 'Antigravity'].includes(item.title)),
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
      '**"AI 도구를 동료처럼 활용하며, 비즈니스 가치를 기술로 실현하는 풀스택 프로덕트 엔지니어 권동하입니다."**',
      '**"AI-Native: 개발 프로세스의 혁신"**\nClaude Code, Cursor 등 AI 도구를 단순 보조가 아닌 **페어 프로그래밍 파트너**로 활용하여 생산성을 극대화합니다. **StoLink** 프로젝트에서 팀의 반복적인 Git 작업을 자동화하는 워크플로우를 구축하고, AI 에이전트 파이프라인을 설계하여 **개발자 경험(DX)을 혁신**하고 팀의 효율을 높인 경험이 있습니다.',
      '**"Fullstack & Product-Mind: \'왜\'를 고민하는 엔지니어"**\nReact/Next.js와 Node.js/Python을 넘나드는 **풀스택 역량**으로 서비스의 End-to-End를 책임집니다. 기술적 구현에 그치지 않고, **"어떤 기술이 사용자에게 가장 큰 가치를 주는가?"**를 끊임없이 고민합니다. **Aidiary**의 AI 솔루션부터 **StoLink**의 대규모 캔버스 최적화까지, 비즈니스 문제를 해결하기 위한 **최적의 아키텍처**를 설계합니다.',
      '**"CS Fundamentals: 흔들리지 않는 기본기"**\n**크래프톤 정글** 과정을 통해 **Pintos 운영체제 커널**을 직접 구현하며, 스레드 스케줄링과 가상 메모리 등 컴퓨터 시스템의 핵심 원리를 깊이 있게 체득했습니다. 이러한 기본기를 바탕으로, 단순한 기능 구현을 넘어 **안정적이고 효율적인 시스템**을 구축합니다.',
    ],
  },
  profile: {
    ...defaultPayload.profile,
    image,
  },
  skill: {
    ...defaultPayload.skill,
    skills: [languages, frameworks, infrastructure, kraftonTools, misc],
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
