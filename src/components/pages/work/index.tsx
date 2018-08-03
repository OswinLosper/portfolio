import React, { Component } from 'react';

import { Navbar, Footer, Projects } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMarkAbout,
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

        <HeadingText>
          My work
      </HeadingText>

        <Projects />

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


