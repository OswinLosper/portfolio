import React, { Component, Fragment } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import BusyHiveImages from '~/resources/projects/busy-hive/busy-hive-displays.jpg';
import BusyHiveLogos from '~/resources/projects/busy-hive/logos.jpg';

import BusyHiveColours from '~/resources/projects/busy-hive/busy-hive-colours.jpg';
import BusyHiveIcons from '~/resources/projects/busy-hive/busyhive-icons.jpg';

import {
  InnerPagesLayoutContainer, HeadingTextWaterMark, HeadingText, BusyHiveHeader,
  ProjectInfo, Role, Date, Context, ProjectDescription, WrapperText, WorkText,
  ProjectButton, ProjectButtonWrapper, OutbuildingDisplay, ProjectColours,
  HeadingTextInnerWrapper, HeadingTextInner, FontsUsedBusyHive, FontsUsedWrapper,
  IconDesigns, IconsText, Chevron, ChevronWrapper, HeadingTextWaterMarkAbout,
} from '~/styles';

import { projectDataHeading } from '~/components/pages/projects';

import chevronIcon from '~/resources/icons/chevron.svg';

export interface IInvoiceAppPageProps {
  title?: string;
}

export default class InvoiceAppPage extends Component<any, any> {
  static defaultProps = {
    title: 'Invoice App Page',
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


