import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  Text,
  SafeMining,
  SafeMiningWrapper,
  AllDesign,
  WorkText,
  HeadingTextInner,
  Information,
  FlyerWrapper,
  Flyer,
 } from '~/styles';

import {
  Mines,
  BonlineFlyer,
  StrikaPoster,
} from '~/components/pages/designs/images';

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

        <Navbar/>

        <AllDesign>
        <HeadingTextWaterMark>
          Latest Designs
        </HeadingTextWaterMark>

        <HeadingText>
          Designs collection
        </HeadingText>

        <WrapperText>
          <Text>
            A small selection of some of my latest designs.
          </Text>
          </WrapperText>

          </AllDesign>

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

        <HeadingTextWaterMark>
          Flyer Designs
          </HeadingTextWaterMark>
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

        <HeadingTextWaterMark>
          Poster Design
          </HeadingTextWaterMark>

          <Flyer>
            <img src={StrikaPoster} />
          </Flyer>

          <Information>
            The Outbuilding Company designs and builds bespoke garden rooms for clients.
            Our garden rooms can be built at a he most affordable means of creating additional
          </Information>
        </FlyerWrapper>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


