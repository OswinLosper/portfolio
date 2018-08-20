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
            <span>
              The saying less is more is a key
            inﬂuence in my design and I utilise a very simplistic,
            minimalist style that effectively portrays my clients needs and expectations. <br /><br />
              See case studies below of my latest work.
            </span>
          </Text>

          <Projects />
        </Animated>
        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


