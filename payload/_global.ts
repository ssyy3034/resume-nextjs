import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '권동하 - Resume';
const description = '사용자의 경험을 가장 중요하게 생각하는 프론트엔드 개발자 권동하입니다.';

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
