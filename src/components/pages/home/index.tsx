import React, { Component } from 'react';
import { Buttons } from '~/components/molecules';

import { Animated } from 'react-animated-css';

import {
  MainContainer, FrontEnd, Designer, HomeText,
  LayoutContainer,
} from '~/styles';


export interface IHomePageProps {
  title?: string;
}

export default class HomePage extends Component<IHomePageProps, any> {
  static defaultProps = {
    title: 'Home',
  };

  render() {
    return (
      <LayoutContainer>
        <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>
          <MainContainer
            data-qa="main-container">
            <Designer
              data-qa="automation-designer-title-container">
              Automation Tester, Designer
            </Designer>
            <FrontEnd
              data-qa="font-end-dev-title-container">
              Front-end developer
           </FrontEnd>
            <HomeText
              data-qa="home-content">
              Hi, I'm Oswin Losper. 27 year old automation tester, front-end developer and designer based in Cape Town.
            </HomeText>
            <Buttons />
          </MainContainer>
        </Animated>
      </LayoutContainer>


    );
  }
}
