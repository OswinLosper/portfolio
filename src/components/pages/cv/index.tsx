import React, { Component, Fragment } from 'react';

import { PreviousWork, SkillandTools } from '~/components/molecules';

import facebook from '~/resources/icons/facebook-cv2.svg';
import google from '~/resources/icons/google-cv.svg';
import github from '~/resources/icons/github-cv2.svg';

import {
  CVLAYOUT, ContentLayout,
  HeaderLayout, Heading, Title, Email, SocialMediaWapper, SocialMedia, CVHeadings, Text,
  WorkEperienceSection, RightSideBarSection, MiddleSection,
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
      <CVLAYOUT>

        <HeaderLayout>
          <Heading>
            Oswin Losper
        <Title>
              Automation Tester,
              Front-end developer
          </Title>
            <Email>
              oswinlosper@gmail.com
        </Email>
          </Heading>

          <SocialMediaWapper>
            <SocialMedia>
              <img src={facebook} width="30px" />
              <span>Facebook</span>
            </SocialMedia>
            <SocialMedia>
              <img src={google} width="30px" />
              <span>Google Plus</span>
            </SocialMedia>
            <SocialMedia>
              <img src={github} width="30px" />
              <span>Github</span>
            </SocialMedia>
          </SocialMediaWapper>
        </HeaderLayout>

        <ContentLayout>
          <CVHeadings>
            CAREER SUMMARY
    </CVHeadings>
          <Text>
            <p>
              I work as a full time Test at iPlatform, a South Africa based company, working on Insurance Configurable Management System.
              Part of my role is to understand of the very complex system we are building and attending regular meeting with the back end
              and front end team so that we can ensure everything stays aligned.
              Before iPlatform, I worked as a full time Tester & Senior Designer at bOnline Ltd, a UK based company dealing with small to
              medium sized business websites. <br /><br />

              In my spare time I enjoy watching Rugby, Football, American Football, hanging out with friends and playing PlayStation.
              I am an enthusiastic designer who loves designing dynamic, engaging websites using the latest browser technologies with the
              ability to design for various platforms. <br /><br />

              My passion for design ranges from very contemporary, modern designs through to the more alternative, vintage style.
              The saying 'less is more' is a key inﬂuence in my design and I utilise a very simplistic, minimalist style that effectively
              portrays my clients needs and expectations.
            </p>
          </Text>

          <MiddleSection>

            <WorkEperienceSection>

              <br />
              <PreviousWork />
              <br />

            </WorkEperienceSection>

            <RightSideBarSection>
              <SkillandTools />
            </RightSideBarSection>

          </MiddleSection>

        </ContentLayout>
      </CVLAYOUT>

    );
  }
}


