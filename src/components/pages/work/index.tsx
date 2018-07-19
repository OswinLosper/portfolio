import React, { Component } from 'react';

import laptop from '~/resources/laptop-previous.png';

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
          small work selection
     </HeadingTextWaterMark>
        <HeadingText>
          My work
      </HeadingText>

        <Laptop>
          <img src={laptop} width="1000px" />
        </Laptop>

        <ProjectButtonWrapper>
            <ProjectButton>
              View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={laptop} width="1000px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={laptop} width="1000px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={laptop} width="1000px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Laptop>
          <img src={laptop} width="1000px" />
        </Laptop>

        <ProjectButtonWrapper>
          <ProjectButton>
            View project
            </ProjectButton>
        </ProjectButtonWrapper>

        <Footer/>

      </InnerPagesLayoutContainer>
    );
  }
}


