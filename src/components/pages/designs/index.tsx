import React, { Component } from 'react';

import { Navbar, Footer, WorkHeading, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  WrapperText,
  SafeMining,
  SafeMiningWrapper,
  WorkText,
  HeadingTextInner,
  HeadingText,
  Information,
  FlyerWrapper,
  Flyer,
} from '~/styles';

import {
  Mines,
  BonlineFlyer,
  StrikaPoster,
} from '~/components/pages/designs/images';

import headings from '~/components/pages/header-data';

export interface IDesignsPageProps {
  title?: string;
}

export default class DesignsPage extends Component<any, any> {
  static defaultProps = {
    title: 'Designs',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>

        <Navbar />

        <WorkHeading
          {...headings[5]}
        />

        <WrapperText>
          <HeadingTextInner>
            Information
          </HeadingTextInner>
          <WorkText>
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a fraction of the cost of adding an extension
            to your home, and as such, they are the most affordable means of creating additional
              living space at your property. <br />
            In addition, most of our outbuildings do not require planning
              permission and can be used all year round <br /><br />
          </WorkText>
        </WrapperText>

        <HeadingText>
          Flyer Designs
          </HeadingText>
        <SafeMiningWrapper>
          <SafeMining>
            <img src={Mines} />
          </SafeMining>

          <Information>
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a he most affordable means of creating additional
          </Information>
        </SafeMiningWrapper>

        <FlyerWrapper>
          <Flyer>
            <img src={BonlineFlyer} />
          </Flyer>

          <Information>
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a he most affordable means of creating additional
          </Information>

          <HeadingText>
            Poster Design
          </HeadingText>

          <Flyer>
            <img src={StrikaPoster} />
          </Flyer>

          <Information>
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a he most affordable means of creating additional
          </Information>
        </FlyerWrapper>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


