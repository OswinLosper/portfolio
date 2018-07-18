import React, { Component } from 'react';

import {
} from '~/styles';

export default class PreviousWork extends Component<any, any> {
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
      <div>
        THIS IS A MOLECULE FOR PREVIOUS WORK
      </div>



    );
  }
}
