import React, { Component } from 'react';

import { Navbar, WorkHeading, WorkContent, Footer, NextAndPrevious } from '~/components/molecules';

import {
  InnerPagesLayoutContainer, NextAndPreviousWrapper,
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

        {/* <WorkHeading
          {...headings[2]}
        />
        <WorkContent
          {...content[2]}
        /> */}

        <NextAndPreviousWrapper>
          <NextAndPrevious />
        </NextAndPreviousWrapper>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


