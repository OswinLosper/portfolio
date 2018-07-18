import React, { Component } from 'react';

import laptop from '~/resources/laptop-previous.png';

import { Navbar } from '~/components/molecules';

import { Footer } from '~/components/molecules';

import {
  HeadingTextWaterMark,
  HeadingText,
  Laptop,
  ProjectButton,
  ProjectButtonWrapper,
 } from '~/styles';

export interface IWorkPageProps {
  title?: string;
}

export default class AboutPage extends Component<IWorkPageProps, any> {
  static defaultProps = {
    title: 'Work',
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}


