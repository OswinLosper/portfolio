import React, { Component } from 'react';

import { Navbar, WorkHeading, WorkContent, NextAndPrevious, Footer, } from '~/components/molecules';

import BusyHiveImages from '~/resources/projects/busy-hive/busy-hive-displays.jpg';
import BusyHiveLogos from '~/resources/projects/busy-hive/logos.jpg';
import BusyHiveColours from '~/resources/projects/busy-hive/busy-hive-colours.jpg';
import BusyHiveIcons from '~/resources/projects/busy-hive/busyhive-icons.jpg';

import headings from '~/components/pages/header-data';
import content from '~/components/pages/work-data';

import {
  InnerPagesLayoutContainer, NextAndPreviousWrapper,
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


