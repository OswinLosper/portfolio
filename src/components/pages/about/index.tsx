import React, { Component } from 'react';

import { Navbar, SocialMedia, Skills, Footer } from '~/components/molecules';
import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  Text,
  SkillsHeadingText,
  GitHubText,
 } from '~/styles';

export interface IAboutPageProps {
  title?: string;
}

export default class AboutPage extends Component<IAboutPageProps, any> {
  static defaultProps = {
    title: 'About Us!',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>
        <Navbar />

     <HeadingTextWaterMark>
        who am i
     </HeadingTextWaterMark>
      <HeadingText>
          About me
      </HeadingText>
        <WrapperText>
          <Text>
          I work as a full time Senior Designer at bOnline Ltd, a UK based company dealing with small to medium
            sized business websites.

            In my spare time I enjoy watching Rugby, Football, American Football, hanging out with friends and
            playing PlayStation.

            The saying 'less is more' is a key inﬂuence in my design and I utilise a very simplistic, minimalist
            style that effectively portrays my clients needs and expectations.
          </Text>
        </WrapperText>

        {/* <HeadingTextWaterMark>
          places i worked
        </HeadingTextWaterMark>
        <HeadingText>
          Expereince
       </HeadingText>
        <Experience /> */}

        <SkillsHeadingText>
          Skills frequently used
       </SkillsHeadingText>
        <Skills />
        <WrapperText>
          <Text>
          My passion for design ranges from very contemporary, modern designs through to the more alternative, vintage style.
          The saying 'less is more' is a key inﬂuence in my design and I utilise a very simplistic, minimalist style that effectively
          portrays my clients needs and expectations.
          </Text>
          </WrapperText>

        <HeadingTextWaterMark>
          get in touch
        </HeadingTextWaterMark>
        <HeadingText>
          Contact
       </HeadingText>
        <SocialMedia />


        <GitHubText>
            Designed & coded with passion by me. Open source on Github.
          </GitHubText>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


