import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

export default function ProfileContact({
  payload,
}: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <div className="d-flex align-items-center pb-2">
      <div className="text-right" style={{ width: '25px', marginRight: '10px' }}>
        <FontAwesomeIcon icon={payload.icon} />
      </div>
      <div>{createLink(payload)}</div>
    </div>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return <Badge color="light">{payload.title || payload.link}</Badge>;
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
