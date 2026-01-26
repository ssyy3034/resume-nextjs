import { Badge, Col, Row } from 'reactstrap';
import React, { PropsWithChildren } from 'react';

import { Markdown } from '../common/Markdown';

import { ISkill } from './ISkill';
import { Style } from '../common/Style';

export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div className={index > 0 ? 'mt-4' : ''}>
      <Row>
        <Col sm={12} md={3} className="text-md-right border-right-md">
          <h4 style={{ ...Style.gray, fontSize: '1.1rem', fontWeight: 600 }}>{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          <div className="d-flex flex-wrap gap-2" style={{ gap: '8px' }}>
            {skill.items.map((item) => (
              <SkillBadge key={item.title} item={item} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

function SkillBadge({ item }: { item: ISkill.Item }) {
  return (
    <Badge
      pill
      color="light"
      style={{
        padding: '0.4rem 0.8rem',
        fontSize: '0.9rem',
        fontWeight: 500,
        marginBottom: '4px',
        marginRight: '4px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        color: '#495057',
        border: '1px solid #dee2e6',
        boxShadow: 'none',
        transition: 'all 0.2s ease',
      }}
    >
      {Markdown.parseBold(item.title)}
    </Badge>
  );
}
