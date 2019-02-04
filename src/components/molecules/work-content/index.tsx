import React, { Component } from 'react';

import {
  InnerPagesLayoutContainer, WrapperText, WorkText,
  ProjectButton, ProjectButtonWrapper, OutbuildingDisplay, ProjectColours,
  HeadingTextInnerWrapper, HeadingTextInner, FontsUsed, FontsUsedWrapper,
  IconDesigns, IconsText
} from '~/styles';

import OutbuildingImages from '~/resources/projects/outbuilding-company/outbuilding-displays.jpg';
import OutbuildingLogos from '~/resources/projects/outbuilding-company/logos.jpg';
import OutbuildingColours from '~/resources/projects/outbuilding-company/outbuilding-colours.jpg';
import OutbuildingIcons from '~/resources/projects/outbuilding-company/outbuilding-icons.jpg';

import { DataContent } from '~/components/pages/work-data-project';

interface IProps {
  id: number;
  challengeheading: string;
  challenge: string;
  solutionheading: string;
  solution: string;
  fontsusedheading: string;
  fontsused: string;
  iconsdesingedheading: string;
  iconstext: string;
  conclusionheading: string;
  conclusion: string;
}

export default class WorkContent extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  state = {
    items: DataContent,
  };

  render() {
    const {
      id,
      challengeheading,
      challenge,
      solutionheading,
      solution,
      fontsusedheading,
      fontsused,
      iconsdesingedheading,
      iconstext,
      conclusionheading,
      conclusion,
    } = this.props;

    return (
      <InnerPagesLayoutContainer>
        <WrapperText
          data-qa="wrapper-text">
          <HeadingTextInner
            data-qa="inner-text">
            {challengeheading}
          </HeadingTextInner>
          <WorkText
            data-qa="work-text"
          >
            {challenge}
            <br /><br />
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
          <img src={OutbuildingImages} />
        </OutbuildingDisplay>

        <WrapperText>
          <HeadingTextInner
            data-qa="inner-text">
            {solutionheading}
          </HeadingTextInner>

          <WorkText>
            {solution}
            <br /><br />
          </WorkText>
        </WrapperText>

        <ProjectColours>
          <img src={OutbuildingLogos} />
        </ProjectColours>

        <HeadingTextInnerWrapper>
          <FontsUsedWrapper
            data-qa="font-used-wrapper">
            {fontsusedheading}
            <FontsUsed
              className="outbuilding"
            >
              {fontsused}
            </FontsUsed>

          </FontsUsedWrapper>
        </HeadingTextInnerWrapper>

        <ProjectColours>
          <img src={OutbuildingColours} />
        </ProjectColours>

        <HeadingTextInnerWrapper>
          <FontsUsedWrapper>
            {iconsdesingedheading}
          </FontsUsedWrapper>
        </HeadingTextInnerWrapper>

        <IconsText>
          {iconstext}
        </IconsText>

        <IconDesigns>
          <img src={OutbuildingIcons} />
        </IconDesigns>

        <WrapperText>

          <HeadingTextInner>
            {conclusionheading}
          </HeadingTextInner>

          <WorkText
            data-qa="work-text">
            {conclusion}
            <br /><br />
          </WorkText>
        </WrapperText>

      </InnerPagesLayoutContainer>
    );
  }
}
