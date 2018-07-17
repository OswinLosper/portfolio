import React, { Component } from 'react';
import {
  SocialMediaWrapper,
  SocialMediaContact,
} from '~/styles';

export default class SocialMedia extends Component<any, any> {
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
      <SocialMediaWrapper>
        <SocialMediaContact>
          F
        </SocialMediaContact>

        <SocialMediaContact>
          F
        </SocialMediaContact>

        <SocialMediaContact>
          F
        </SocialMediaContact>

      </SocialMediaWrapper>
    );
  }
}
