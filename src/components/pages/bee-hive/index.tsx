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

export interface IBeeHivePageProps {
  title?: string;
}

export default class BeeHivePage extends Component<IBeeHivePageProps, any> {
  static defaultProps = {
    title: 'Bee Hive',
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
          Bee Hive
        </HeadingTextWaterMark>

        <HeadingText>
          Bee Hive
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


