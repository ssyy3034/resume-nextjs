import { IIntroduce } from '../component/introduce/IIntroduce';
import packageJson from '../package.json';

const { lastestUpdatedAt } = packageJson;

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**탄탄한 기본기로 문제를 해결하고, 팀과 함께 성장하는 개발자 권동하입니다.**',

    '**Software Engineer**\nCS 기본기를 바탕으로 서버·데이터 계층의 문제를 원인 단위로 해결하는 개발자입니다. 크래프톤 정글에서 OS 커널(Pintos)을 구현하며 다진 기초 덕분에, 동시성 이슈나 트랜잭션 설계를 만났을 때 표면이 아닌 원인 단위로 접근합니다. 서비스에 필요한 영역이라면 프론트엔드와 인프라까지 직접 설계하고 구현합니다.',

    '**Problem Solver**\n성능 병목을 분석·개선하고, 반복 업무를 자동화하여 팀의 효율을 높이고자 합니다. 쿼리 병목과 직렬화 구조를 개선하여 서비스 응답 속도와 안정성을 높이고, AI 도구를 도입해 팀의 Git 운영을 표준화한 경험이 있습니다. 무엇을 만들기 전에, 누구의 어떤 문제를 풀어야 하는지 먼저 고민합니다.',

    '**Team Player**\n3년간 서비스직 현장 리더로 최대 20명의 크루와 함께 일하며 의견 조율과 돌발 상황 대응을 반복해 왔습니다. 개발 현장에서도 마찬가지로, 팀 내 Git 숙련도 격차를 발견하고 AI 도구를 활용한 컨벤션 자동화를 도입해 팀원들과 함께 적용해 나간 경험이 있습니다.',
  ],

  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
