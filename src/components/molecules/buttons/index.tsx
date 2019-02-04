import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  HomeButtonsContainer,
  HomeButtons,
} from '~/styles';

interface IProps {
  history?: any;
}

class Buttons extends Component<IProps, any> {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(url: string) {
    const { history } = this.props;
    return () => {
      history.push(url);
    };
  }

  render() {
    return (
      <HomeButtonsContainer>
        <HomeButtons
          onClick={this.onButtonClick('/about')}
        >
          About & Contact
        </HomeButtons>

        <HomeButtons
          onClick={this.onButtonClick('/work')}
        >
          My Work
        </HomeButtons>

        <HomeButtons
          onClick={this.onButtonClick('/cv')}
        >
          Resume
        </HomeButtons>
      </HomeButtonsContainer>
    );
  }
}

export default withRouter(Buttons) as typeof Buttons;
