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

const argoPayload: Payload = {
  ...defaultPayload,
  _global: {
    ...defaultPayload._global,
    headTitle: '권동하 - Argo 이력서',
  },
  introduce: {
    ...defaultPayload.introduce,
    contents: [
      '**서비스 설계부터 배포까지, 원인 단위로 문제를 해결하는 자바 백엔드 개발자 권동하입니다.**',

      '**Java Backend Engineer**\nSpring Boot 기반 트랜잭션 설계와 동시성 제어, API 성능 최적화 경험을 보유하고 있습니다. 크래프톤 정글에서 Pintos OS 커널(스레드 스케줄링, 가상 메모리, 동기화)을 직접 구현하며 프로세스·스레드·메모리 관리의 원리를 체득했습니다. 이 기초 덕분에 동시성 이슈나 트랜잭션 설계를 만났을 때 표면이 아닌 원인 단위로 접근합니다.',

      '**Problem Solver**\n결제 시스템에서 100개 동시 요청에 대한 잔액 정합성 100% 보장, N+1 쿼리 최적화로 API 응답 450ms → 25ms 개선, @Data 순환 참조로 인한 서버 크래시(4GB+ 응답) 원인 추적 및 해결 등 실제 서비스 문제를 수치로 증명해왔습니다. 최신 AI 도구(Claude Code CLI, Antigravity)를 팀 워크플로우에 도입하여 Git 운영 자동화와 개발 생산성 향상을 이끈 경험이 있습니다.',

      '**Full-Stack & Team Player**\nReact + TypeScript로 프론트엔드를 직접 구현하며 서비스 전반을 이해하는 풀스택 역량을 보유하고 있습니다. Testcontainers를 활용한 테스트 코드 작성, PR 기반 코드 리뷰 등 품질 관리 프로세스를 팀 단위로 실천한 경험이 있습니다. 3년간 서비스직 현장 리더로 최대 20명과 함께 일하며 쌓은 소통과 협업 역량을 개발 현장에서도 발휘합니다.',
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

export default argoPayload;
