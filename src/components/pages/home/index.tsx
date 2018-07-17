import React, { Component } from 'react';
import { Navbar } from '~/components/molecules';
import { Buttons } from '~/components/molecules';

import ibgImg from '~/resources/bg.jpg';

const bgStyle = {
  width: '100%',
  backgroundImage: `url(${ibgImg})`,
};

import {
  MainContainer,
  HomeLogoContainer,
  AutomationTester,
  FrontEnd,
  Designer,
  HomeText,
  HomeButtonsContainer,
  HomeButtons,
  LayoutContainer,
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
      <LayoutContainer>
          <MainContainer data-qa="main-container">
            <Designer>
              Automation Tester, Designer
        </Designer>

            <FrontEnd>
              Front-end developer
        </FrontEnd>
            <HomeText>
              Hi, I'm Oswin Losper. 27 year old automation tester, front-end developer and designer based in Cape Town.
        </HomeText>
          <Buttons />
          </MainContainer>
      </LayoutContainer>


    );
  }
}
