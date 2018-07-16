import React, { Component } from 'react';
import { Navbar } from '~/components/molecules';

import {
  MainContainer,
  AutomationTester,
 } from '~/styles';

export default class AboutPage extends Component<any> {
  static defaultProps = {
    title: 'Welcome!',
  };

  render() {
    return (
      <MainContainer
      >
        <AutomationTester>
          About Us Tester
        </AutomationTester>
      </MainContainer>


    );
  }
}
