import React, { Component } from 'react';
import { Navbar } from '~/components/molecules';

import {
  MainContainer,
  AutomationTester,
  FrontEnd,
  Designer,
  HomeText,
  HomeButtonsContainer,
  HomeButtons
 } from '~/styles';

export interface IHomePageProps {
  title?: string;
}

export default class HomePage extends Component<IHomePageProps, any> {
  static defaultProps = {
    title: 'Welcome!',
  };

  render() {
    return (
      <MainContainer
      >
        <AutomationTester>
          Automation Tester
        </AutomationTester>

        <FrontEnd>
          Front-End Developer
        </FrontEnd>

        <Designer>
          Designer
        </Designer>

        <HomeText>
          Hi, I'm Oswin Losper. 27 year old automation tester, front-end developer and designer based in Cape Town.
        </HomeText>

        <HomeButtonsContainer>
          <HomeButtons>
            About & Contact
          </HomeButtons>

          <HomeButtons>
            My Work
          </HomeButtons>

          <HomeButtons>
            Resume
          </HomeButtons>
        </HomeButtonsContainer>

      </MainContainer>


    );
  }
}
