import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/psa2.jpeg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '권동하',
    small: '',
  },
  contact: [
    {
      title: 'ansqhrl3037@gmail.com',
      link: 'ansqhrl3037@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-6701-3032',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/ssyy3034',
      icon: faGithub,
    },
  ],
  notice: {
    title: '편한시간대에 언제든지 연락 주세요!',
    icon: faBell,
  },
};

export default profile;
