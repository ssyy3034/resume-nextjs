import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '권동하 - Resume';
const description = '기술에 다정함을 담아 옳은 방향으로 전달하는 소프트웨어 엔지니어 권동하입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image.jpg',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Dongha',
        lastName: 'Kwon',
        username: 'dongha',
        gender: 'male',
      },
    },
  },
};
