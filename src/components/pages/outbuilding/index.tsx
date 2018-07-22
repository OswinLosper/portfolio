import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import OutbuildingImages from '~/resources/displays2.jpg';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  OutbuildingHeader,
  ProjectInfo,
  Role,
  Date,
  Context,
  ProjectDescription,
  WrapperText,
  Text,
  ProjectButton,
  ProjectButtonWrapper,
  OutbuildingDisplay,
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
          <Text>
          The Outbuilding Company designs and builds bespoke garden rooms for clients. 
          Our garden rooms can be built at a fraction of the cost of adding an extension 
          to your home, and as such, they are the most affordable means of creating additional 
          living space at your property. In addition, most of our outbuildings do not require planning 
          permission and can be used all year round <br/><br/>
          </Text>
        </WrapperText> 

        <ProjectButtonWrapper>
          <ProjectButton>
            View Website
          </ProjectButton>
        </ProjectButtonWrapper>

          <OutbuildingDisplay>
            <img src={OutbuildingImages} />
           </OutbuildingDisplay>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


