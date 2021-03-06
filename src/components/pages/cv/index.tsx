import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { PreviousWork, SkillandTools } from '~/components/molecules';

import linkedin from '~/resources/icons/linkedin-cv.svg';
import github from '~/resources/icons/github-cv.svg';

import {
  CVLAYOUT, ContentLayout,
  HeaderLayout, Heading, Title, Email, SocialMediaWapper, SocialMedia, CVHeadings, Text,
  WorkEperienceSection,
} from './styles';

export interface ICVPageProps {
  title?: string;
}

export default class CVPage extends Component<ICVPageProps, any> {
  static defaultProps = {
    title: 'Resume',
  };

  render() {
    return (
      <CVLAYOUT
        data-qa="cv-layout">

        <HeaderLayout
          data-qa="cv-header-layout">
          <Heading
            data-qa="heading">
            <div>
              <Link to="/home"> Oswin Losper </Link>

            </div>

            <Title
              data-qa="title">
              Automation Tester,
              Front-end developer
              </Title>
            <Email
              data-qa="email">
              oswinlosper[@]gmail.com
              </Email>
          </Heading>

          <SocialMediaWapper
            data-qa="social-media-wrapper">
            <SocialMedia
              data-qa="social-media">
              <img src={linkedin} width="30px" />
              <span>
                <a href="https://www.linkedin.com/in/oswin-losper-21520330/" target="blank">LinkedIn</a>
              </span>
            </SocialMedia>
            <SocialMedia
              data-qa="social-media">
              <img src={github} width="30px" />
              <span>
                <a href="https://github.com/OswinLosper" target="blank">Github</a>
              </span>
            </SocialMedia>
          </SocialMediaWapper>

        </HeaderLayout>

        <ContentLayout
          data-qa="content-layout">
          <CVHeadings
            data-qa="cv-headings">
            CAREER SUMMARY
          </CVHeadings>

          <Text
            data-qa="text">
            <p>
              I work as a full time tester at iPlatform, a South Africa based company, working on Insurance Configurable Management Systems.
              Part of my role is to understand of the very complex systems. Attending regular meetings with the back-end
              and front-end teams to ensure everything stays aligned.
              Before iPlatform, I worked as a full time tester and team leader, senior designer at bOnline Ltd, a UK based company dealing with
              small to medium sized business websites. <br /><br />

              In my spare time I enjoy watching Rugby, Football, American Football, hanging out with friends and playing PlayStation.
              I am an enthusiastic designer who loves designing dynamic, engaging websites using the latest browser technologies with the
              ability to design for various platforms. <br />

              My passion for design ranges from very contemporary, modern designs through to the more alternative, vintage style.
              The saying 'less is more' is a key inﬂuence in my design and I utilise a very simplistic, minimalist style that effectively
              portrays my clients needs and expectations.
            </p>
          </Text>

          <WorkEperienceSection
            data-qa="work-experience-section">

            <PreviousWork
              data-qa="previous-experience" />

            <SkillandTools
              data-qa="skills-tools" />

          </WorkEperienceSection>

        </ContentLayout>
      </CVLAYOUT >

    );
  }
}


