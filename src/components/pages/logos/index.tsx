import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import {
  SmartHeat, AutoEvolved, EarlyTurf, EliteHandyman, IXRM, JCFlooring,
  Micro, OvenRepairs, RGJConstruction, SwanShutters, DanYorkBlinds, Aberdeenshire
 } from '~/components/pages/logos/images';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  LogoCollectionWrapper,
  Logo,
  ProjectDescription,
  SmartHeatHeader,
  LogoName,
 } from '~/styles';

export interface ILogosPageProps {
  title?: string;
}

export default class LogosPage extends Component<any, any> {
  static defaultProps = {
    title: 'Logos',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>

        <Navbar/>

        <SmartHeatHeader>
        <HeadingTextWaterMark>
          Logo Designs
        </HeadingTextWaterMark>

        <HeadingText>
          Logo collection
        </HeadingText>

        <WrapperText>
            <ProjectDescription>
            A small selection of some of my logo designs.
        </ProjectDescription>
        </WrapperText>
      </SmartHeatHeader>

      <LogoCollectionWrapper>
        <Logo>
            <img src={SmartHeat} width="100%"/>
            <LogoName>
            </LogoName>
        </Logo>

          <Logo>
            <img src={AutoEvolved} width="100%" />
          </Logo>

          <Logo>
            <img src={EarlyTurf} width="100%" />
          </Logo>
         </LogoCollectionWrapper>

      <LogoCollectionWrapper>
        <Logo>
            <img src={EliteHandyman} width="100%"/>
        </Logo>

          <Logo>
            <img src={IXRM} width="100%" />
          </Logo>

          <Logo>
            <img src={JCFlooring} width="100%" />
          </Logo>
         </LogoCollectionWrapper>

      <LogoCollectionWrapper>
        <Logo>
            <img src={Micro} width="100%"/>
        </Logo>

          <Logo>
            <img src={OvenRepairs} width="100%" />
          </Logo>

          <Logo>
            <img src={RGJConstruction} width="100%" />
          </Logo>
         </LogoCollectionWrapper>

      <LogoCollectionWrapper>
        <Logo>
            <img src={SwanShutters} width="100%"/>
        </Logo>

        <Logo>
            <img src={DanYorkBlinds} width="100%"/>
        </Logo>

        <Logo>
            <img src={Aberdeenshire} width="100%"/>
        </Logo>

         </LogoCollectionWrapper>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


