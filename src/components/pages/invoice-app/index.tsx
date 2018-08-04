import React, { Component } from 'react';

import { Navbar, WorkHeading, WorkContent, Footer, NextAndPrevious } from '~/components/molecules';

import {
  InnerPagesLayoutContainer, NextAndPreviousWrapper,
} from '~/styles';

import SmartheatImages from '~/resources/projects/invoice-book-app/smartheat-displays.jpg';
import SmartheatLogos from '~/resources/projects/invoice-book-app/logos.jpg';
import SmartheatColours from '~/resources/projects/invoice-book-app/smartheat-colours.jpg';
import SmartheatIcons from '~/resources/projects/invoice-book-app/smartheat-icons.jpg';

import headings from '~/components/pages/header-data';
import content from '~/components/pages/work-data';

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

      <WorkHeading
          {...headings[3]}
        />
        />
             <WorkContent
          {...content[3]}
        />   

          <NextAndPreviousWrapper>
          <NextAndPrevious />
        </NextAndPreviousWrapper>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


