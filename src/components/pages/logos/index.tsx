import React, { Component } from 'react';

import { Navbar, Footer, WorkHeading } from '~/components/molecules';

import {
  SmartHeat, AutoEvolved, EarlyTurf, EliteHandyman, IXRM, JCFlooring,
  Micro, OvenRepairs, RGJConstruction, SwanShutters, DanYorkBlinds, Aberdeenshire
} from '~/components/pages/logos/images';

import {
  InnerPagesLayoutContainer, LogoCollectionWrapper,
  Logo, LogoName, Text,
} from '~/styles';

import headings from '~/components/pages/header-data';

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

        <Navbar />

        <WorkHeading
          {...headings[0]}
        />

        <Text>
          All my logo designs are supplied with a logo usage breakdown, logo alternatives,
          font files all in vector files, allowing you to easily expand your logo for
          large scale print and signage.
          </Text>

        <LogoCollectionWrapper>
          <Logo>
            <img src={SmartHeat} width="100%" />
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
            <img src={EliteHandyman} width="100%" />
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
            <img src={Micro} width="100%" />
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
            <img src={SwanShutters} width="100%" />
          </Logo>

          <Logo>
            <img src={DanYorkBlinds} width="100%" />
          </Logo>

          <Logo>
            <img src={Aberdeenshire} width="100%" />
          </Logo>

        </LogoCollectionWrapper>


        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


