import React, { Component } from 'react';

import { Navbar, Footer, WorkHeading, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  Text,
 } from '~/styles';

export interface ILogosPageProps {
  title?: string;
}

export default class LogosPage extends Component<ILogosPageProps, any> {
  static defaultProps = {
    title: 'Logos',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>>

        <Navbar/>

        <HeadingTextWaterMark>
          Latest Logos
        </HeadingTextWaterMark>

        <HeadingText>
          Logos collection
        </HeadingText>

        <WrapperText>
          <Text>
            A small selection of logo's I designed
        </Text>
        </WrapperText>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


