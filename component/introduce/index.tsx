import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Markdown } from '../common/Markdown';
import { IIntroduce } from './IIntroduce';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="mt-5 introduce-section">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>자기소개</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content) => (
            <p key={content.substring(0, 20)} style={{ fontSize: '1.1em' }}>
              {Markdown.parseBold(content)}
            </p>
          ))}
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </div>
  );
}
