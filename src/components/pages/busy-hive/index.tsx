import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
} from '~/styles';


export interface IBusyHivePageProps {
  title?: string;
}

export default class BusyHivePage extends Component<any, any> {
  static defaultProps = {
    title: 'Busy Hive',
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


