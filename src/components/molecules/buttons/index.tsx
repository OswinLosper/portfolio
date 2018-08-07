import React, { Component } from 'react';

import {
  HomeButtonsContainer,
  HomeButtons,
} from '~/styles';

export default class Buttons extends Component<any, any> {
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
      <HomeButtonsContainer
        data-qa="home-button-container">
        <HomeButtons
          data-qa="about-contact-button">
          About & Contact
          </HomeButtons>
        <HomeButtons
          data-qa="work-button">
          My Work
          </HomeButtons>
        <HomeButtons
          data-qa="resume-button">
          Resume
          </HomeButtons>
      </HomeButtonsContainer>
    );
  }
}
