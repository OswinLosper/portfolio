import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import arrowBack from '~/resources/icons/back-arrow.svg';
import logo from '~/resources/icons/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  BackContainer,
} from '~/styles';

interface IProps {
  history?: any;
}

interface IState {
  isOpen: boolean;
}

class Navbar extends Component<IProps, IState> {
  state = {
    isOpen: false,
  };

  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleBackButtonClick() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <HeaderContainer
        data-qa="header-container"
      >
        <BackContainer
          data-qa="back container"
          onClick={this.handleBackButtonClick}
        >
          <img src={arrowBack} width="150px"/>
        </BackContainer>

        <LogoContainer
          data-qa="logo container">
          <img src={logo} width="150px"/>
        </LogoContainer>

      </HeaderContainer>

    );
  }
}

export default withRouter(Navbar) as typeof Navbar;
