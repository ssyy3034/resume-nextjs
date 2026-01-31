/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';

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
import kraftonPayload from '../payload/versions/krafton';

const PAYLOADS: Record<string, any> = {
  toss: tossPayload,
  krafton: kraftonPayload,
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

      <Container style={Style.global}>
        <Profile.Component payload={payload.profile} />
        <Introduce.Component payload={payload.introduce} />
        <Skill.Component payload={payload.skill} />
        <Project.Component payload={payload.project} />
        <Experience.Component payload={payload.experience} />
        <Education.Component payload={payload.education} />
        <OpenSource.Component payload={payload.openSource} />
        <Presentation.Component payload={payload.presentation} />
        <Article.Component payload={payload.article} />
        <Etc.Component payload={payload.etc} />
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
