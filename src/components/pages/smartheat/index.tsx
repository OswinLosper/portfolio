import React, { Component, Fragment } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import SmartheatImages from '~/resources/projects/smartheat/smartheat-displays.jpg';
import SmartheatLogos from '~/resources/projects/smartheat/logos.jpg';
import SmartheatColours from '~/resources/projects/smartheat/smartheat-colours.jpg';
import SmartheatIcons from '~/resources/projects/smartheat/smartheat-icons.jpg';

import {
  InnerPagesLayoutContainer, HeadingText, SmartHeat,
  ProjectInfo, Role, Date, Context, ProjectDescription, WrapperText, WorkText,
  ProjectButton, ProjectButtonWrapper, OutbuildingDisplay, ProjectColours,
  HeadingTextInnerWrapper, HeadingTextInner, FontsUsed, FontsUsedWrapper,
  IconDesigns, IconsText, Chevron, ChevronWrapper,
} from '~/styles';

import chevronIcon from '~/resources/icons/chevron.svg';

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

        <SmartHeat
          data-qa="outbuilding-header">



          <HeadingText
            data-qa="heading-text">
            Smart Heat
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
              Create unique outdoor spaces for work and leisure
            </ProjectDescription>

          </ChevronWrapper>

          <Chevron>
            <img src={chevronIcon} />
          </Chevron>

        </SmartHeat>

        <WrapperText
          data-qa="wrapper-text">
          <HeadingTextInner
            data-qa="inner-text">
            The Challenge
          </HeadingTextInner>
          <WorkText
            data-qa="work-text"
          >
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a fraction of the cost of adding an extension
            to your home, and as such, they are the most affordable means of creating additional
          living space at your property. <br />
            In addition, most of our outbuildings do not require planning
          permission and can be used all year round <br /><br />
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
          <img src={SmartheatImages} />
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
          <img src={SmartheatLogos} />
        </ProjectColours>

        <HeadingTextInnerWrapper>
          <FontsUsedWrapper
            data-qa="font-used-wrapper">
            Fonts & Colours Used
            <FontsUsed
              className="smartheat-font-used">
              <span>
                Fonts Used:
              </span>
              Maven PRO, Impact
            </FontsUsed>

          </FontsUsedWrapper>
        </HeadingTextInnerWrapper>

        <ProjectColours>
          <img src={SmartheatColours} />
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
          <img src={SmartheatIcons} />
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


