import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
} from '~/styles';

export interface ISmartHeatPageProps {
  title?: string;
}

export default class SmartHeatPage extends Component<any, any> {
  static defaultProps = {
    title: 'Smartheat',
  };

  render() {
    const {
    } = this.state;

    return (
      <InnerPagesLayoutContainer
        data-qa="page-container">
        <Navbar />

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


