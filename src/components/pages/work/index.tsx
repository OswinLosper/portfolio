import React, { Component } from 'react';

import laptop from '~/resources/laptop.png';
import logolaptop from '~/resources/logo-design-laptop1.jpg';
import logolaptop2 from '~/resources/logo-design-laptop2.jpg';

import { Navbar, Footer } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  Laptop,
  ProjectButton,
  ProjectButtonWrapper,
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

        <Laptop>
          <img src={laptop} width="800px" />
        </Laptop>

        <ProjectButtonWrapper>
            <ProjectButton>
              View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={laptop} width="800px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={laptop} width="800px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={logolaptop2} width="800px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={logolaptop} width="800px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View logos
            </ProjectButton>
        </ProjectButtonWrapper>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


