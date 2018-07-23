import React, { Component } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  Text,
 } from '~/styles';

export interface IDesignsPageProps {
  title?: string;
}

export default class DesignsPage extends Component<any, any> {
  static defaultProps = {
    title: 'Designs',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>>

        <Navbar/>

        <HeadingTextWaterMark>
          Latest Designs
        </HeadingTextWaterMark>

        <HeadingText>
          Designs collection
        </HeadingText>

        <WrapperText>
          <Text>
            A small selection of some of my katest designs.
        </Text>
        </WrapperText>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


