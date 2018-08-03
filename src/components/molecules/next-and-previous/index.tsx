import React, { Component } from 'react';

import {
  NextAndPreviousWrapper,
  NextButtons,
} from '~/styles';

export default class NextAndPrevious extends Component<any, any> {
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
      <NextAndPreviousWrapper>
        <NextButtons>
          Next Project
          </NextButtons>

        <NextButtons>
          Previous Project
        </NextButtons>

      </NextAndPreviousWrapper>
    );
  }
}
