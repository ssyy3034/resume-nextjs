import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';
import { Markdown } from './Markdown';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div style={{ paddingBottom: '1.5rem', marginBottom: '1rem' }}>
      {index > 0 ? <hr style={{ marginBottom: '2.5rem' }} /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{Markdown.parseBold(left.title)}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{Markdown.parseBold(left.subTitle)}</Col> : <></>}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h4>{Markdown.parseBold(right.title)}</h4> : <></>}
          {right.subTitle ? <i style={Style.gray}>{Markdown.parseBold(right.subTitle)}</i> : <></>}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </div>
  );
}
