import React, { Component } from 'react';

import { Navbar, Footer } from '~/components/molecules';

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

import { Animated } from 'react-animated-css';

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
    imagesMobile: any;
    logos: any;
    logosMobile: any;
    colors: any;
    colorsMobile: any;
    icons: any;
    iconsMobile: any;
  };
}

export default class PortfolioItemPage extends Component<IProps, any> {
  render() {
    const { bannerInfo, images, challenge, solution, fonts, icons, conclusion } = this.props;
    return (
      <InnerPagesLayoutContainer
        data-qa="page-container">

        <Navbar />

        <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>

          <FullScreenBanner
            headerBG={bannerInfo.headerBG}
            role={bannerInfo.role}
            title={bannerInfo.title}
            date={bannerInfo.date}
            context={bannerInfo.context}
            projectDescription={bannerInfo.projectDescription}
          />
        </Animated>

        <WorkDetailsContainer>
          <SubHeaderSection
            header="The Challenge"
            subtext={challenge}
          >

          </SubHeaderSection>

          <SubHeaderSection
            header="Solution"
            subtext={solution}
          />

          <OutbuildingDisplay
            data-qa="project-view-displays">
            <img src={images.images} className="desktop" />
            <img src={images.imagesMobile} className="mobile" />

          </OutbuildingDisplay>

          <SubHeaderSection
            header="Fonts & Colours"
            subtext={fonts.description}
            centered={true}
          />

          <ProjectColours>
            <img src={images.colors} className="desktop" />
            <img src={images.colorsMobile} className="mobile" />
          </ProjectColours>

          <ProjectColours>
            <img src={images.logos} className="desktop" />
            <img src={images.logosMobile} className="mobile" />
          </ProjectColours>

          <SubHeaderSection
            header="Icons Designed"
            subtext={icons.description}
            centered={true}
          />

          <IconDesigns>
            <img src={images.icons} className="desktop" />
            <img src={images.iconsMobile} className="mobile" />
          </IconDesigns>

          <SubHeaderSection
            header="Conclusion"
            subtext={conclusion}
          />
        </WorkDetailsContainer>

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
