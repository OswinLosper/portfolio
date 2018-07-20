import React, { Component, Fragment } from 'react';

import { Navbar, Footer, } from '~/components/molecules';

import {
  InnerPagesLayoutContainer,
  HeadingTextWaterMark,
  HeadingText,
  WrapperText,
  ProjectInfo,
  Role,
  Date,
  Context,
  ProjectDescription,
 } from '~/styles';

import { projectDataHeading } from '~/components/pages/projects';

export interface IOutBuildingPageProps {
  route: {
    title?: string;
    role: string;
    date: string;
    context: string;
    projectdescription: string;
    id: number;
  };
}

export default class ProjectItem extends Component<any, any> {
  static defaultProps = {
    title: 'The Outbuilding Company',
    route: {
      role: '',
      date: '',
      context: '',
      projectdescription: '',
      id: 0,
    },
  };

  state = {
    items: projectDataHeading,
  };



  render() {
    const {
      route: {
        role,
        date,
        context,
        projectdescription,
        id,
      },
    } = this.props;
    console.log({ props: this.props });
    return (
      <InnerPagesLayoutContainer>

        <Navbar />

        <HeadingTextWaterMark>
           Case Study
        </HeadingTextWaterMark>
        <HeadingText>
          Out Building Company
        </HeadingText>

        <WrapperText>

              <Fragment key={id}>

            <ProjectInfo>
              <Role>
                {role}
              </Role>

              <Date>
                {date}
              </Date>

              <Context>
                {context}
              </Context>

            </ProjectInfo>

            <ProjectDescription>
              {projectdescription}
            </ProjectDescription>

          </Fragment>


        </WrapperText>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


