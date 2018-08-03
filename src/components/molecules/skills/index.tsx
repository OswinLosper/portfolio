import React, { Component } from 'react';

import automation from '~/resources/icons/automation-testing.svg';
import react from '~/resources/icons/react.svg';
import html from '~/resources/icons/html.svg';
import css from '~/resources/icons/css.svg';
import adobe from '~/resources/icons/adobe.svg';

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
          <img src={automation} width="80px" />
          Automation
        </SkillsUsed>

        <SkillsUsed>
          <img src={react} width="80px" />
          React
        </SkillsUsed>

        <SkillsUsed>
          <img src={html} width="80px" />
          HTML
        </SkillsUsed>

        <SkillsUsed>
          <img src={css} width="80px" />
          CSS
        </SkillsUsed>

        <SkillsUsed>
          <img src={css} width="80px" />
          StyleComponents
        </SkillsUsed>

        <SkillsUsed>
          <img src={adobe} width="80px" />
          Adobe
        </SkillsUsed>

      </SkillsWrapper>
    );
  }
}
