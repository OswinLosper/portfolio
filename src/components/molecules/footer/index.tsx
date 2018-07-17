import React, { Component } from 'react';

import {
  FooterWrapper,
  Email,
  ContactText,
} from '~/styles';

export default class Footer extends Component<any, any> {
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
      <FooterWrapper>
        <ContactText>
        Contact me for more information
        </ContactText>

        <Email>
        oswinlosper@gmail.com
        </Email>

      </FooterWrapper>
    );
  }
}
