import React, { Component } from 'react';

import automation from '~/resources/icons/automation-testing.svg';
import react from '~/resources/icons/react.svg';
import html from '~/resources/icons/html.svg';
import css from '~/resources/icons/css.svg';
import adobe from '~/resources/icons/adobe.svg';

import {
  WhyIChooseTestcafeWrapper,
  WhyIChooseTestcafeInfo,
} from '~/styles';

export default class WhyIChooseTestCafe extends Component<any, any> {
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
      <WhyIChooseTestcafeWrapper>

        <WhyIChooseTestcafeInfo>
          <img src={automation} width="150px" />
          Create stable tests (and no manual timeouts)
        </WhyIChooseTestcafeInfo>

        <WhyIChooseTestcafeInfo>
          <img src={react} width="150px" />
          Write in latest JS or TypeScript
        </WhyIChooseTestcafeInfo>

        <WhyIChooseTestcafeInfo>
          <img src={html} width="150px" />
          Detect JS errors in your code
        </WhyIChooseTestcafeInfo>

        <WhyIChooseTestcafeInfo>
          <img src={css} width="150px" />
          Launch concurrent tests
        </WhyIChooseTestcafeInfo>

        <WhyIChooseTestcafeInfo>
          <img src={css} width="150px" />
          Build readable tests with PageObject
        </WhyIChooseTestcafeInfo>

        <WhyIChooseTestcafeInfo>
          <img src={adobe} width="150px" />
          Include tests in continuous integration system
        </WhyIChooseTestcafeInfo>

      </WhyIChooseTestcafeWrapper>
    );
  }
}
