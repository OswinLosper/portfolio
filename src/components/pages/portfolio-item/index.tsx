import React, { Component } from 'react';

import { Navbar, NextAndPrevious, Footer } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  OutbuildingDisplay,
  ProjectColours,
  IconDesigns,
} from '~/styles';

import FullScreenBanner from './components/FullScreenBanner';
import SubHeaderSection from './components/SubHeaderSection';
import WorkDetailsContainer from './components/WorkDetailsContainer';
import CallToActionButton from './components/CallToActionButton';

export interface IProps {
  bannerInfo: {
    headerBG: any;
    role: string;
    title: string;
    date: string;
    context: string;
    projectDescription: string;
  };
  challenge: string;
  solution: string;
  fonts: {
    description: string;
  };
  icons: {
    description: string;
  };
  conclusion: string;
  title?: string;
  images: {
    images: any;
    logos: any;
    colors: any;
    icons: any;
  };
}

export default class PortfolioItemPage extends Component<IProps, any> {
  render() {
    const { bannerInfo, images, challenge, solution, fonts, icons, conclusion } = this.props;
    return (
      <InnerPagesLayoutContainer
        data-qa="page-container">

        <Navbar />

        <FullScreenBanner
          headerBG={bannerInfo.headerBG}
          role={bannerInfo.role}
          title={bannerInfo.title}
          date={bannerInfo.date}
          context={bannerInfo.context}
          projectDescription={bannerInfo.projectDescription}
        />

        <WorkDetailsContainer>
          <SubHeaderSection
            header="The Challenge"
            subtext={challenge}
          >
            <CallToActionButton label="View Website" />
          </SubHeaderSection>

          <SubHeaderSection
            header="Solution"
            subtext={solution}
          />

          <OutbuildingDisplay
            data-qa="project-view-displays">
            <img src={images.images} />
          </OutbuildingDisplay>

          <SubHeaderSection
            header="Fonts & Colours Used"
            subtext={fonts.description}
            centered={true}
          />

          <ProjectColours>
            <img src={images.colors} />
          </ProjectColours>

          <ProjectColours>
            <img src={images.logos} />
          </ProjectColours>

          <SubHeaderSection
            header="Icons designed"
            subtext={icons.description}
            centered={true}
          />

          <IconDesigns>
            <img src={images.icons} />
          </IconDesigns>

          <SubHeaderSection
            header="Conclusion"
            subtext={conclusion}
          />
        </WorkDetailsContainer>


        <NextAndPrevious />


        <Footer />
      </InnerPagesLayoutContainer>
    );
  }
}


/**
 * FullScreenBanner
 * WorkDetailsContainer
 * SubHeaderSection (heading can be centered, font size configurable)
 */
