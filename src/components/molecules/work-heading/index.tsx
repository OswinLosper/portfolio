import React, { Component } from 'react';

import {
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  Text,
} from '~/styles';

export default class WorkHeading extends Component<any, any> {
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
      <HeadingTextWaterMark>
          Latest Logos
        </HeadingTextWaterMark>

          <HeadingText>
            Logos collection
          </HeadingText>

         <WrapperText>
          <Text>
            Some of the logos I designed
          </Text>
        </WrapperText>

        <div>
          sd;lfjsbdlkhfg ksgfks gflk
          </div>

      </div>
    );
  }
}
