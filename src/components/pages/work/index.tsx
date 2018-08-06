import React, { Component } from 'react';

import { Navbar, Footer, Projects } from '~/components/molecules';
import { Animated } from 'react-animated-css';

import {
  InnerPagesLayoutContainer,
  HeadingTextAbout, Text
} from '~/styles';

export interface IWorkPageProps {
  title?: string;
}

export default class WorkPage extends Component<IWorkPageProps, any> {
  static defaultProps = {
    title: 'My Work',
  };

  render() {
    return (
      <InnerPagesLayoutContainer>
        <Navbar />
        <Animated
          animationIn="slideInUp"
          animationOut="bounce" isVisible={true}
        >

          <HeadingTextAbout>
            My Work
          </HeadingTextAbout>

          <Text>
            I work as a full time Senior Designer at bOnline Ltd, a UK based
            company. dealing with small to medium sized business websites. In my
            spare time I enjoy watching Rugby, Football, American Football, hanging
            out with friends and playing PlayStation. The saying less is more is a key
            inﬂuence in my design and I utilise a very simplistic,
            minimalist style that effectively portrays my clients needs and expectations.
          </Text>

          <Projects />
        </Animated>
        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


