import React, { Component } from 'react';

import { Navbar, WorkHeading, WorkContent, Footer, NextAndPrevious } from '~/components/molecules';

import {
  InnerPagesLayoutContainer, NextAndPreviousWrapper,
} from '~/styles';

import headings from '~/components/pages/header-data';
import content from '~/components/pages/work-data';

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
        <WorkHeading
          {...headings[0]}
        />
             <WorkContent
          {...content[0]}
        />

        
        <NextAndPreviousWrapper>
          <NextAndPrevious />
        </NextAndPreviousWrapper>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


