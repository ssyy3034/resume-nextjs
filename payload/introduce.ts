import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**"꾸준한 공부를 토대로 기술적 트레이드오프를 분석하고, 최적의 의사결정을 내리는 개발자 권동하입니다."**',
    '**시스템 전체를 관통하는 "End-to-End 학습 역량"**\n단순 기능 구현을 넘어 소프트웨어 생애 주기 전반의 프로세스를 분석하고 학습하여 **시스템에 대한 구조적 이해도**를 높입니다.',
    '**모호함을 성과로 바꾸는 "불확실성(Gray Zone) 제거"**\n업무의 설계 의도와 요구사항을 명확히 정의함으로써 **팀 내 협업 비용을 최소화**하고 **실행 가능한 해결책**을 도출합니다.',
    '**논리적 근거에 기반한 "실무적 트레이드오프 최적화"**\n기술적 완벽주의에 매몰되기보다 리소스와 성능 사이의 균형을 고려하여, **비즈니스 가치를 극대화**하는 **최적의 의사결정**을 수행합니다.',
  ],

  sign: 'dongha.log',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
