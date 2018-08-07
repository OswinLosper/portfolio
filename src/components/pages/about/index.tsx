import React, { Component, Fragment } from 'react';

import { Navbar, SocialMedia, Skills, Footer } from '~/components/molecules';

import {
  InnerPagesLayoutContainer, HeadingTextAbout, Text,
  SkillsHeadingText, ButtonToWork,
} from '~/styles';

import { AboutMe } from '~/components/pages/about-data-project';
import { Animated } from 'react-animated-css';

export default class AboutMePage extends Component<any, any> {
  static defaultProps = {
    title: 'About Me',
  };

  state = {
    items: AboutMe,
  };

  render() {
    const {
      items,
    } = this.state;
    return (
      <InnerPagesLayoutContainer>
        <Navbar />
        <Animated animationIn="slideInUp" animationOut="bounce" isVisible={true}>

          {items.map(({
            id,
            aboutHeading,
            about,
            skillsHeading,
            skillContent,
            contactHeading,
            githubText,
            workText,
          }) => (
              <Fragment key={id}>
                <HeadingTextAbout
                  data-qa="about-header">
                  {aboutHeading}
                </HeadingTextAbout>

                <Text
                  data-qa="about-content-text">
                  {about}
                </Text>

                <SkillsHeadingText
                  data-qa="skills-heading-text">
                  {skillsHeading}
                </SkillsHeadingText>
                <Skills
                  data-qa="skills-component" />

                <Text
                  data-qa="about-content-text">
                  {skillContent}
                </Text>

                <HeadingTextAbout
                  data-qa="contact-heading">
                  {contactHeading}
                </HeadingTextAbout>
                <SocialMedia />

                <Text
                  data-qa="github-text">
                  {githubText}
                </Text>

                <ButtonToWork
                  data-qa="link-to-work-page">
                  {workText}
                </ButtonToWork>

              </Fragment>
            ))}
        </Animated>
        <Footer />
      </InnerPagesLayoutContainer>
    );
  }
}


