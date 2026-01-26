/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
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
import Payload from '../payload';
import { Article } from '../component/article';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
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
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <Experience.Component payload={Payload.experience} />
        <Project.Component payload={Payload.project} />
        <OpenSource.Component payload={Payload.openSource} />
        <Presentation.Component payload={Payload.presentation} />
        <Article.Component payload={Payload.article} />
        <Education.Component payload={Payload.education} />
        <Etc.Component payload={Payload.etc} />
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
}

export default Yosume;
