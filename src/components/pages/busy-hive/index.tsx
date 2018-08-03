import React, { Component, Fragment } from 'react';

import { Navbar, WorkHeading, Footer, } from '~/components/molecules';

import BusyHiveImages from '~/resources/projects/busy-hive/busy-hive-displays.jpg';
import BusyHiveLogos from '~/resources/projects/busy-hive/logos.jpg';

import BusyHiveColours from '~/resources/projects/busy-hive/busy-hive-colours.jpg';
import BusyHiveIcons from '~/resources/projects/busy-hive/busyhive-icons.jpg';

import {
  InnerPagesLayoutContainer, HeadingText, BusyHiveHeader,
  ProjectInfo, Role, Date, Context, ProjectDescription, WrapperText, WorkText,
  ProjectButton, ProjectButtonWrapper, OutbuildingDisplay, ProjectColours,
  HeadingTextInnerWrapper, HeadingTextInner, FontsUsed, FontsUsedWrapper,
  IconDesigns, IconsText, Chevron, ChevronWrapper,
} from '~/styles';

import { projectDataHeading } from '~/components/pages/projects';

import chevronIcon from '~/resources/icons/chevron.svg';

import headings from '~/components/pages/header-data';

export interface IBusyHivePageProps {
  title?: string;
}

export default class BusyHivePage extends Component<any, any> {
  static defaultProps = {
    title: 'Busy Hive',
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


        <WorkHeading
          {...headings[1]}
        />



        {/* <BusyHiveHeader
          data-qa="outbuilding-header">
          <HeadingText
            data-qa="heading-text">
            Busy Hive
          </HeadingText>

          <ChevronWrapper
            data-qa="content-wrapper">

            <ProjectInfo
              data-qa="project-info-wrapper">
              <Role>
                <span>
                  ROLE:
              </span>
                Web Senior Designer
              </Role>

              <Date>
                <span>
                  DATE:
                </span>
                20 July 2018
              </Date>
              <Context>
                <span>
                  CONTEXT:
                </span>
                Website Design
              </Context>
            </ProjectInfo>

            <ProjectDescription
              data-qa="project-description">
              Busy Hive we provide a professional and affordable personal assistant services in and around the Sussex area.
            </ProjectDescription>

          </ChevronWrapper>

          <Chevron>
            <img src={chevronIcon} />
          </Chevron>

        </BusyHiveHeader> */}



        <WrapperText
          data-qa="wrapper-text">
          <HeadingTextInner
            data-qa="inner-text">
            The Challenge
          </HeadingTextInner>
          <WorkText
            data-qa="work-text">
            Busy Hive have over 16 years’ experience of supplying and sourcing administrative and
            personal support in key sectors across Brighton including start up business',
            professional organisations and events. We understand the challenges that you and
            your company face with admin support, company management and planning whether for a
              particular project at short notice or strengthening your business. <br /><br />
          </WorkText>
        </WrapperText>

        <ProjectButtonWrapper
          data-qa="project-button-wrapper">
          <ProjectButton
            data-qa="project-button">
            View Website
          </ProjectButton>
        </ProjectButtonWrapper>

        <OutbuildingDisplay
          data-qa="project-view-displays">
          <img src={BusyHiveImages} />
        </OutbuildingDisplay>

        <WrapperText>
          <HeadingTextInner
            data-qa="inner-text">
            Solution
          </HeadingTextInner>
          <WorkText>
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a fraction of the cost of adding an extension
            to your home, and as such, they are the most affordable means of creating additional
            living space at your property. In addition, most of our outbuildings do not require planning
          permission and can be used all year round <br /><br />
          </WorkText>
        </WrapperText>

        <ProjectColours>
          <img src={BusyHiveLogos} />
        </ProjectColours>

        <HeadingTextInnerWrapper>
          <FontsUsedWrapper
            data-qa="font-used-wrapper">
            Fonts & Colours Used
            <FontsUsed
              className="busyhive-font-used "
            >
              <span>
                Fonts Used:
              </span>
              Maven PRO, Impact
            </FontsUsed>

          </FontsUsedWrapper>
        </HeadingTextInnerWrapper>

        <ProjectColours>
          <img src={BusyHiveColours} />
        </ProjectColours>

        <HeadingTextInnerWrapper>
          <FontsUsedWrapper>
            Icons Designed
          </FontsUsedWrapper>
        </HeadingTextInnerWrapper>

        <IconsText>
          The Outbuilding Company designs and builds bespoke garden rooms for clients.
          Our garden rooms can be built at a fraction of the cost of adding an extension
          </IconsText>

        <IconDesigns>
          <img src={BusyHiveIcons} />
        </IconDesigns>

        <WrapperText>

          <HeadingTextInner>
            Conclusion
          </HeadingTextInner>

          <WorkText
            data-qa="work-text">
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a fraction of the cost of adding an extension
            to your home, and as such, they are the most affordable means of creating additional
            living space at your property. In addition, most of our outbuildings do not require planning
          permission and can be used all year round <br /><br />
          </WorkText>
        </WrapperText>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


