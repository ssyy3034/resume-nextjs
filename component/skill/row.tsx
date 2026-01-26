import { Badge, Col, Row } from 'reactstrap';
import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faJsSquare,
  faJava,
  faDocker,
  faAws,
  faGitAlt,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBolt,
  faDatabase,
  faTerminal,
  faCode,
  faCube,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

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
  const getBrandIdentity = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('react.js')) return { bg: '#61DAFB', text: '#000' };
    if (t.includes('next.js')) return { bg: '#000', text: '#FFF' };
    if (t.includes('typescript')) return { bg: '#3178C6', text: '#FFF' };
    if (t.includes('javascript')) return { bg: '#F7DF1E', text: '#000' };
    if (t.includes('zustand') || t.includes('query')) return { bg: '#FF4154', text: '#FFF' };
    if (t.includes('d3') || t.includes('recharts')) return { bg: '#F9A03C', text: '#FFF' };
    if (t.includes('tailwind')) return { bg: '#06B6D4', text: '#FFF' };
    if (t.includes('agent') || t.includes('ai') || t.includes('cursor') || t.includes('copilot'))
      return { bg: '#8B5CF6', text: '#FFF' };
    if (t.includes('prompt') || t.includes('terminal')) return { bg: '#10B981', text: '#FFF' };
    if (t.includes('ci/cd') || t.includes('pipeline')) return { bg: '#3B82F6', text: '#FFF' };
    if (t.includes('tiptap')) return { bg: '#000', text: '#FFF' };
    if (t.includes('vite')) return { bg: '#646CFF', text: '#FFF' };
    if (t.includes('java') || t.includes('spring')) return { bg: '#6DB33F', text: '#FFF' };
    if (t.includes('jpa') || t.includes('hibernate')) return { bg: '#59666C', text: '#FFF' };
    if (t.includes('mysql') || t.includes('mariadb')) return { bg: '#4479A1', text: '#FFF' };
    if (t.includes('docker')) return { bg: '#2496ED', text: '#FFF' };
    if (t.includes('aws')) return { bg: '#FF9900', text: '#000' };
    if (t.includes('git')) return { bg: '#F05032', text: '#FFF' };
    if (t.includes('prometheus') || t.includes('grafana')) return { bg: '#E6522C', text: '#FFF' };
    if (t === 'c') return { bg: '#A8B9CC', text: '#000' };
    if (t.includes('postgresql')) return { bg: '#336791', text: '#FFF' };
    if (t.includes('neo4j')) return { bg: '#008CC1', text: '#FFF' };
    if (t.includes('redis')) return { bg: '#DC382D', text: '#FFF' };
    if (t.includes('github')) return { bg: '#181717', text: '#FFF' };
    if (t.includes('vim')) return { bg: '#019733', text: '#FFF' };
    if (t.includes('vs code')) return { bg: '#007ACC', text: '#FFF' };
    if (t.includes('intellij')) return { bg: '#000000', text: '#FFF' };
    if (t.includes('eclipse')) return { bg: '#2C2255', text: '#FFF' };
    if (t.includes('antigravity')) return { bg: '#6366F1', text: '#FFF' };
    if (t.includes('claude code')) return { bg: '#D97757', text: '#FFF' };
    if (t.includes('html') || t.includes('css')) return { bg: '#E34F26', text: '#FFF' };
    if (t.includes('shadcn')) return { bg: '#000', text: '#FFF' };
    return null;
  };

  const brand = getBrandIdentity(item.title);

  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('react.js')) return faReact;
    if (t.includes('next.js')) return faNodeJs;
    if (t.includes('typescript')) return faJsSquare;
    if (t.includes('javascript')) return faJs;
    if (t.includes('zustand') || t.includes('query')) return faBolt;
    if (t.includes('tiptap')) return faBolt;
    if (t.includes('vite')) return faBolt;
    if (t.includes('java') || t.includes('spring')) return faJava;
    if (t.includes('docker')) return faDocker;
    if (t.includes('aws')) return faAws;
    if (t.includes('git')) return faGitAlt;
    if (t.includes('github')) return faGithub;
    if (t.includes('redis')) return faDatabase;
    if (t.includes('vim')) return faTerminal;
    if (t.includes('vs code')) return faCode;
    if (t.includes('intellij') || t.includes('eclipse')) return faCode;
    if (t.includes('antigravity')) return faRobot;
    if (t.includes('claude code')) return faTerminal;
    if (t.includes('html') || t.includes('css')) return faCode;
    if (t.includes('shadcn')) return faCube;
    if (t === 'c') return null;
    return null;
  };

  const icon = getIcon(item.title);

  return (
    <Badge
      pill
      color={brand ? undefined : 'light'}
      outline={!brand}
      style={{
        padding: '0.4rem 0.8rem',
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '4px',
        marginRight: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: brand?.bg,
        color: brand?.text,
        border: brand ? 'none' : undefined,
        boxShadow: 'none',
        transition: 'all 0.2s ease',
      }}
    >
      {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: '0.85rem' }} />}
      {Markdown.parseBold(item.title)}
    </Badge>
  );
}
