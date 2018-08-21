import React, { Component } from 'react';
import arrowTop from '~/resources/icons/top-arrow.svg';

import {
  FooterWrapper,
  Email,
  ContactText,
  TopArrow,
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

      <div>

        <TopArrow>
          <img src={arrowTop} height="120px" />
        </TopArrow>

        <FooterWrapper>
          <ContactText>
            Contact me for more information
        </ContactText>
          <Email>
            oswinlosper@gmail.com
        </Email>


        </FooterWrapper>



      </div>



    );
  }
}
