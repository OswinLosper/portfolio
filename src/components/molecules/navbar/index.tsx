import React, { Component } from 'react';

import arrowBack from '~/resources/icons/back-arrow.svg';
import logo from '~/resources/icons/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  BackContainer,
} from '~/styles';

export default class ExampleNavbar extends Component<any, any> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <HeaderContainer
      data-qa= "header container"
      >
        <BackContainer
          data-qa="back container"
          >
          <img src={arrowBack} width="150px" />
        </BackContainer>

          <LogoContainer
          data-qa="logo container">
          <img src={logo} width="150px"/>
        </LogoContainer>

      </HeaderContainer>

    );
  }
}

{/* <NavContainer>
  <nav>
    <a href="/#/">ABOUT ME</a> |
            <a href="/#/">MY WORK</a> |
            <a href="/#/">MY RESUME</a>
  </nav>
</NavContainer> */}
