import React, { Component } from 'react';

import { Navbar, Footer } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
} from '~/styles';


export interface IOutBuildingPageProps {
  title?: string;
}

export default class OutBuildingPage extends Component<any, any> {
  static defaultProps = {
    title: 'The Outbuilding Company',
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


