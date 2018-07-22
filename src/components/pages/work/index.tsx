import React, { Component } from 'react';

import { Navbar, Footer, Projects } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
 } from '~/styles';

export interface IWorkPageProps {
  title?: string;
}

export default class WorkPage extends Component<IWorkPageProps, any> {
  static defaultProps = {
    title: 'Work',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>
        <Navbar />
        <HeadingTextWaterMark>
          what i do
     </HeadingTextWaterMark>
        <HeadingText>
          My work
      </HeadingText>

        <Projects/>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


