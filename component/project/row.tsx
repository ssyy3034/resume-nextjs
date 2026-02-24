import { DateTime } from 'luxon';
import { CSSProperties, PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return (
          <CommonRows
            key={index.toString()}
            payload={serialize(item)}
            index={index}
            extra={item.techStack ? <TechStackBadges techStack={item.techStack} /> : undefined}
          />
        );
      })}
    </EmptyRowCol>
  );
}

function TechStackBadges({ techStack }: { techStack: IProject.TechStack[] }) {
  const badgeStyle: CSSProperties = {
    padding: '0.25rem 0.65rem',
    fontSize: '0.8rem',
    fontWeight: 500,
    marginRight: '4px',
    marginBottom: '4px',
    backgroundColor: '#f8f9fa',
    color: '#495057',
    border: '1px solid #dee2e6',
  };

  return (
    <div style={{ paddingTop: '0.5rem', paddingBottom: '0.25rem' }}>
      {techStack.map(({ category, items }) => (
        <div key={category} style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.8rem', color: 'gray', marginRight: '6px', whiteSpace: 'nowrap' }}>
            {category}
          </span>
          {items.map((item) => (
            <Badge key={item} pill color="light" style={badgeStyle}>
              {item}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  );
}

function serialize(payload: IProject.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
}
