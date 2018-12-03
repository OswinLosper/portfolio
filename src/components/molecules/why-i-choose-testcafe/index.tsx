import React, { Component } from 'react';

import stableTests from '~/resources/icons/stable-tests.svg';
import TSorJS from '~/resources/icons/ts-and-js.svg';
import JSerrors from '~/resources/icons/JS-errors.svg';
import concurrentTests from '~/resources/icons/concurrent-tests.svg';
import readableTests from '~/resources/icons/readable-tests.svg';
import continuousIntegration from '~/resources/icons/continuous-integration.svg';

import {
  WhyIChooseTestcafeWrapper,
  WhyIChooseTestcafeInfoAutomation,
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

        <WhyIChooseTestcafeInfoAutomation>
          <img src={stableTests} width="80px" />
          Create stable tests (and no manual timeouts)
        </WhyIChooseTestcafeInfoAutomation>

        <WhyIChooseTestcafeInfoAutomation>
          <img src={TSorJS} width="100px" />
          Code in latest JS or TypeScript
        </WhyIChooseTestcafeInfoAutomation>

        <WhyIChooseTestcafeInfoAutomation>
          <img src={JSerrors} width="80px" />
          Detect JS errors in your code
        </WhyIChooseTestcafeInfoAutomation>

        <WhyIChooseTestcafeInfoAutomation>
          <img src={concurrentTests} width="100px" />
          Launch concurrent tests
        </WhyIChooseTestcafeInfoAutomation>

        <WhyIChooseTestcafeInfoAutomation>
          <img src={readableTests} width="80px" />
          Build readable tests with PageObject
        </WhyIChooseTestcafeInfoAutomation>

        <WhyIChooseTestcafeInfoAutomation>
          <img src={continuousIntegration} width="80px" />
          Include tests in continuous integration system
        </WhyIChooseTestcafeInfoAutomation>

      </WhyIChooseTestcafeWrapper>
    );
  }
}
