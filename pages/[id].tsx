/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { OpenSource } from '../component/openSource';
import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import { Article } from '../component/article';
import defaultPayload from '../payload';
import tossPayload from '../payload/versions/toss';

const PAYLOADS: Record<string, any> = {
  toss: tossPayload,
};

function Resume({ payload }: { payload: any }) {
  if (!payload) return null;

  return (
    <>
      <NextSeo {...payload._global.seo} />
      <Head>
        <title>{payload._global.headTitle}</title>
        <link rel="shortcut icon" href={payload._global.favicon} />
      </Head>
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          zIndex: 2147483647,
        }}
        className="no-print"
      >
        <a
          href="https://www.ssyy3034.dev"
          style={{
            display: 'block',
            padding: '12px 24px',
            background: '#000',
            color: '#fff',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '2px solid rgba(255,255,255,0.2)',
            textAlign: 'center',
          }}
        >
          ← Back to Portfolio
        </a>
      </div>
      <Container style={Style.global}>
        <Profile.Component payload={payload.profile} />
        <Introduce.Component payload={payload.introduce} />
        <Skill.Component payload={payload.skill} />
        <Experience.Component payload={payload.experience} />
        <Project.Component payload={payload.project} />
        <OpenSource.Component payload={payload.openSource} />
        <Presentation.Component payload={payload.presentation} />
        <Article.Component payload={payload.article} />
        <Education.Component payload={payload.education} />
        <Etc.Component payload={payload.etc} />
        <Footer.Component payload={payload.footer} />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(PAYLOADS).map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const payload = PAYLOADS[id] || defaultPayload;

  return {
    props: {
      payload,
    },
  };
};

export default Resume;
