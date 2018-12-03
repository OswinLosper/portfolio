import React, { Component, Fragment } from 'react';

import { Navbar, Footer, WhyIChooseTestCafe, HowItWorkVisuals } from '~/components/molecules';


import {
  InnerPagesLayoutContainer, HeadingTextAbout, Text,
  SkillsHeadingText
} from '~/styles';

import { AutomationTesting } from '~/components/pages/automation-data-project';
import { Animated } from 'react-animated-css';

export default class AutomationPage extends Component<any, any> {
  static defaultProps = {
    title: 'Automation Testing',
  };

  state = {
    items: AutomationTesting,
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
            automationHeading,
            automationiPlatform,
            challengeContent,
            challengeiPlatform,
            challengeSolution,
            whyTestCafe,
            howTestCafeWork,
            exampleTestCafe,
          }) => (
              <Fragment key={id}>
                <HeadingTextAbout
                  data-qa="automation-testing-header">
                  {automationHeading}
                </HeadingTextAbout>

                <SkillsHeadingText
                  data-qa="automation-iplatform">
                  {automationiPlatform}
                </SkillsHeadingText>

                <Text
                  data-qa="automation-challenge-content">
                  {challengeContent}
                </Text>

                <SkillsHeadingText
                  data-qa="challenge-at-iplatform">
                  {challengeiPlatform}
                </SkillsHeadingText>

                <Text
                  data-qa="solution-iplatform">
                  {challengeSolution}
                </Text>

                <SkillsHeadingText
                  data-qa="challenge-at-iplatform">
                  {whyTestCafe}
                </SkillsHeadingText>

                <WhyIChooseTestCafe
                  data-qa="why-i-choose-testcafe-component" />

                <SkillsHeadingText
                  data-qa="challenge-at-iplatform">
                  {howTestCafeWork}
                </SkillsHeadingText>

                <HowItWorkVisuals />

              </Fragment>
            ))}
        </Animated>
        <Footer />
      </InnerPagesLayoutContainer>
    );
  }
}


