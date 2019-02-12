import React, { Component } from 'react';

import { Navbar, Footer } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
} from '~/styles';

export interface IInvoiceAppPageProps {
  title?: string;
}

export default class InvoiceAppPage extends Component<any, any> {
  static defaultProps = {
    title: 'Invoice App Page',
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


