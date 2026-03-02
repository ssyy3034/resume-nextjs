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

const techtakaPayload: Payload = {
  ...backendPayload,
  _global: {
    ...backendPayload._global,
    headTitle: '권동하 - 테크타카 이력서',
  },
  introduce: {
    ...backendPayload.introduce,
    contents: [
      '**데이터를 안정적으로 처리하고, 고객 관점에서 문제를 찾아 수치로 개선하는 자바 백엔드 개발자 권동하입니다.**',

      '**Java Backend Engineer**\n트랜잭션 설계, 동시성 제어, 쿼리 최적화로 서버·데이터 계층을 안정적으로 운영하는 데 집중합니다. 크래프톤 정글에서 Pintos OS 커널(스레드 스케줄링, 가상 메모리, 동기화)을 직접 구현하며 프로세스·스레드·메모리 관리의 원리를 체득했고, 이 기초를 바탕으로 동시성 이슈와 트랜잭션 문제를 원인 단위로 접근합니다.',

      '**Problem Solver**\n결제 시스템에서 100개 동시 요청에 대한 잔액 정합성 100% 보장, N+1 쿼리 최적화로 API 응답 450ms → 25ms 개선 등 고객에게 직접 영향을 미치는 문제를 수치로 측정하고 개선해왔습니다. 최신 AI 도구(Claude Code CLI, Antigravity)를 팀 워크플로우에 도입하여 반복 업무를 자동화하고 개발 생산성을 높인 경험이 있습니다.',

      '**Full-Stack & Team Player**\nReact + TypeScript로 프론트엔드를 직접 구현하며 서비스 전반을 이해하는 풀스택 역량을 보유하고 있습니다. Testcontainers를 활용한 테스트 코드 작성과 PR 기반 코드 리뷰로 품질 관리를 실천하고, 3년간 서비스직 현장 리더로 쌓은 소통 역량을 팀 협업에 활용합니다.',
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

export default techtakaPayload;
