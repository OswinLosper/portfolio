import React, { Component } from 'react';

import { Navbar, WorkHeading, WorkContent, Footer, NextAndPrevious } from '~/components/molecules';

import {
  InnerPagesLayoutContainer, NextAndPreviousWrapper,
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

        {/* <WorkHeading
          {...headings[3]}
        />
         <WorkContent
          {...content[3]}
        /> */}

        <NextAndPreviousWrapper>
          <NextAndPrevious />
        </NextAndPreviousWrapper>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


