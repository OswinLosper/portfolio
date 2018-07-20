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
  title?: string;
}

export default class OutBuildingPage extends Component<any, any> {
  static defaultProps = {
    title: 'The Outbuilding Company',
  };

  state = {
    items: projectDataHeading,
  };

  render() {
    const {
      items,
    } = this.state;

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

          {items.map(({
            id, role, date, context, projectdescription,
          }) => (
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
          ))}

        </WrapperText>

        <Footer />

      </InnerPagesLayoutContainer>
    );
  }
}


