import React, { Component, Fragment } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import BusyHiveImages from '~/resources/projects/busy-hive/busy-hive-displays.jpg';
import BusyHiveLogos from '~/resources/projects/busy-hive/logos.jpg';

import BusyHiveColours from '~/resources/projects/busy-hive/busy-hive-colours.jpg';
import BusyHiveIcons from '~/resources/projects/busy-hive/busyhive-icons.jpg';

import {
  InnerPagesLayoutContainer
} from '~/styles';

import { projectDataHeading } from '~/components/pages/projects';

export interface ISmartHeatPageProps {
  title?: string;
}

export default class SmartHeatPage extends Component<any, any> {
  static defaultProps = {
    title: 'Smartheat Page',
  };

  state = {
    items: projectDataHeading,
  };

  render() {
    const {
      items,
    } = this.state;

    return (
      <InnerPagesLayoutContainer
        data-qa="page-container">

        <Navbar />


      </InnerPagesLayoutContainer>
    );
  }
}


