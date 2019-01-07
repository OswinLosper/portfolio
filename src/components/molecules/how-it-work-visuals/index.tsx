import React, { Component } from 'react';

import step1 from '~/resources/slider/step1.gif';
import step2 from '~/resources/slider/step2.png';
import step3 from '~/resources/slider/step3.gif';
import step4 from '~/resources/slider/step4.png';

import {
  HowItWorksWrapper,
  HowItWorks,
} from '~/styles';

export default class HowItWorkVisuals extends Component<any, any> {
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
      <HowItWorksWrapper>

        <HowItWorks>
          <span>1. Install Testcafe:</span>
          <p>You will need Node.js.</p>
          <img src={step1} width="800px" />
        </HowItWorks>

        <HowItWorks>
          <span>2. Code your test:.</span>
          <p>You can use any text editor.</p>
          <img src={step2} width="800px" />
        </HowItWorks>

        <HowItWorks>
          <span>3. Run your test:</span>

          <p>Choose the browser, and launch the test with one command.</p>
          <img src={step3} width="800px" />
        </HowItWorks>

        <HowItWorks>
          <span>4. View the reports</span>

          <p>You’ll see the line where the test has failed and a code snippet.</p>
          <img src={step4} width="800px" />
        </HowItWorks>

      </HowItWorksWrapper>
    );
  }
}
