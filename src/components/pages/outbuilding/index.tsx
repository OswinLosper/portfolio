import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import OutbuildingImages from '~/resources/projects/outbuilding-company/outbuilding-displays3.jpg';
import OutbuildingLogos from '~/resources/projects/outbuilding-company/logos.jpg';
import OutbuildingColours from '~/resources/projects/outbuilding-company/outbuilding-colours.jpg';
import OutbuildingIcons from '~/resources/projects/outbuilding-company/outbuilding-icons.jpg';

import {
  InnerPagesLayoutContainer, HeadingTextWaterMark, HeadingText, OutbuildingHeader,
  ProjectInfo, Role, Date, Context, ProjectDescription, WrapperText, WorkText,
  ProjectButton, ProjectButtonWrapper, OutbuildingDisplay, ProjectColours,
  HeadingTextInnerWrapper, HeadingTextInner, FontsUsed, FontsUsedWrapper,
  IconDesigns, IconsText,
} from '~/styles';

import { projectDataHeading } from '~/components/pages/projects';

export interface IOutBuildingPageProps {
  title?: string;
}

export default class OutBuildingPage extends Component<any, any> {
  static defaultProps = {
    title: 'The Outbuilding Company',
  };

  state = {
    items: projectDataHeading,
  };

  render() {
    const {
      items,
    } = this.state;

    return (
      <InnerPagesLayoutContainer>

        <Navbar />

        <OutbuildingHeader>
          <HeadingTextWaterMark>
            Garden Rooms
          </HeadingTextWaterMark>
          <HeadingText>
            Out Building Company
          </HeadingText>

            <ProjectInfo>
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

            <ProjectDescription>
              Create unique outdoor spaces for work and leisure
            </ProjectDescription>

        </OutbuildingHeader>

        <WrapperText>
          <HeadingTextInner>
            The Challenge
          </HeadingTextInner>
          <WorkText>
          The Outbuilding Company designs and builds bespoke garden rooms for clients.
          Our garden rooms can be built at a fraction of the cost of adding an extension
          to your home, and as such, they are the most affordable means of creating additional
          living space at your property. <br/>
          In addition, most of our outbuildings do not require planning
          permission and can be used all year round <br/><br/>
          </WorkText>
        </WrapperText>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Website
          </ProjectButton>
        </ProjectButtonWrapper>

          <OutbuildingDisplay>
            <img src={OutbuildingImages} />
           </OutbuildingDisplay>

        <WrapperText>

          <HeadingTextInner>
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
          <img src={OutbuildingLogos} />
        </ProjectColours>

        <HeadingTextInnerWrapper>
          <FontsUsedWrapper>

           Fonts & Colours Used

            <FontsUsed>
              <span>
              Fonts Used:
              </span>
              Maven PRO, Impact
            </FontsUsed>

          </FontsUsedWrapper>
        </HeadingTextInnerWrapper>

        <ProjectColours>
          <img src={OutbuildingColours} />
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
          <img src={OutbuildingIcons} />
        </IconDesigns>

        <WrapperText>

          <HeadingTextInner>
            Conclusion
          </HeadingTextInner>

          <WorkText>
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


