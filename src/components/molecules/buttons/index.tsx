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
    );
  }
}
