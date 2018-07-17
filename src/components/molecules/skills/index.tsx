import React, { Component } from 'react';

import {
  SkillsWrapper,
  SkillsUsed,
} from '~/styles';

export default class Skills extends Component<any, any> {
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
      <SkillsWrapper>

        <SkillsUsed>
          Automation Testing
        </SkillsUsed>

        <SkillsUsed>
          React & Typescript
        </SkillsUsed>

        <SkillsUsed>
         HTML
        </SkillsUsed>

        <SkillsUsed>
         CSS
        </SkillsUsed>

        <SkillsUsed>
          Style Components
        </SkillsUsed>

        <SkillsUsed>
          Adobe Suite
        </SkillsUsed>

    </SkillsWrapper>



    );
  }
}
