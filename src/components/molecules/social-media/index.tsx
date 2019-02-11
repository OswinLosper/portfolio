import React, { Component } from 'react';
import {
  SocialMediaWrapper,
  SocialMediaContact,
} from '~/styles';

import linkedin from '~/resources/icons/linkedin.svg';
import github from '~/resources/icons/github.svg';

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

        <SocialMediaContact
          data-qa="linkedin">
          <a href="https://www.linkedin.com/in/oswin-losper-21520330/" target="blank">
            <img src={linkedin} width="80px" />
            <span>
              LinkedIn
          </span>
          </a>

        </SocialMediaContact>
        <SocialMediaContact
          data-qa="github">
          <a href="https://github.com/OswinLosper" target="blank">
            <img src={github} width="80px" />
            <span>
              Github
          </span>
          </a>

        </SocialMediaContact>

      </SocialMediaWrapper>
    );
  }
}

