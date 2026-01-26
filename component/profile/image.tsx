import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-center">
      <img
        style={{ maxHeight: '320px', maxWidth: '100%' }}
        className="img-fluid rounded"
        src={src}
        alt="Profile"
      />
    </div>
  );
}
