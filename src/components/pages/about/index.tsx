import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Navbar, SocialMedia, Skills, Footer } from '~/components/molecules';

import { AboutMe } from '~/components/pages/about-data-project';
import { Animated } from 'react-animated-css';

import {
  InnerPagesLayoutContainer, HeadingTextAbout, Text,
  SkillsHeadingText, ButtonToWork,
} from '~/styles';

export default class AboutMePage extends Component<any, any> {
  static defaultProps = {
    title: 'About Me',
  };

  state = {
    items: AboutMe,
  };

  onButtonClick(url: string) {
    const { history } = this.props;
    return () => {
      history.push(url);
    };
  }

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

                <SocialMedia
                  data-qa="about-social-media" />

                <Text
                  data-qa="github-text">
                  <span>
                    {githubText}
                  </span>
                </Text>

                <ButtonToWork
                  onClick={this.onButtonClick('/work')}
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


