import React, { Component } from 'react';

import { Navbar, WorkHeading, WorkContent, Footer, NextAndPrevious } from '~/components/molecules';

import {
  InnerPagesLayoutContainer, NextAndPreviousWrapper,
} from '~/styles';

import SmartheatImages from '~/resources/projects/smartheat/smartheat-displays.jpg';
import SmartheatLogos from '~/resources/projects/smartheat/logos.jpg';
import SmartheatColours from '~/resources/projects/smartheat/smartheat-colours.jpg';
import SmartheatIcons from '~/resources/projects/smartheat/smartheat-icons.jpg';


import headings from '~/components/pages/header-data';
import content from '~/components/pages/work-data';

export interface ISmartHeatPageProps {
  title?: string;
}

export default class SmartHeatPage extends Component<any, any> {
  static defaultProps = {
    title: 'Smartheat Page',
  };

  render() {
    const {
    } = this.state;

    return (
      <InnerPagesLayoutContainer
        data-qa="page-container">

        <Navbar />
        
        <WorkHeading
          {...headings[2]}
        />    

          />
             <WorkContent
          {...content[2]}
        />  

        <NextAndPreviousWrapper>
          <NextAndPrevious />
        </NextAndPreviousWrapper>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


