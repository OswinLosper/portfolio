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
    title: 'Welcome!',
  };

  render() {
    return (
      <LayoutContainer>
        <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>
          <MainContainer
            data-qa="main-container">
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
        </Animated>
      </LayoutContainer>


    );
  }
}
