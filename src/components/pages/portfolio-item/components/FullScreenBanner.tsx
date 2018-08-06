import React, { Component } from 'react';
// @ts-ignore
import chevronIcon from '~/resources/icons/chevron.svg';

import {
  Chevron,
  ChevronWrapper,
  Context,
  Date,
  Header,
  HeadingText,
  ProjectDescription,
  ProjectInfo,
  Role,
} from '~/styles';

interface IProps {
  headerBG: any;
  title: string;
  role: string;
  date: string;
  context: string;
  projectDescription: string;
}

export default class FullScreenBanner extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      headerBG,
      title,
      role,
      date,
      context,
      projectDescription,
    } = this.props;
    return (
      <Header
        backgroundImage={headerBG}
        data-qa="big-header-image">
        <HeadingText
          data-qa="heading-text">
          {title}
        </HeadingText>

        <ChevronWrapper
          data-qa="content-wrapper">
          <ProjectInfo
            data-qa="project-info-wrapper">
            <Role>
              {role}
            </Role>

            <Date
              data-qa="project-date">
              {date}
            </Date>
            <Context>
              {context}
            </Context>
          </ProjectInfo>

          <ProjectDescription
            data-qa="project-description">
            {projectDescription}
          </ProjectDescription>

        </ChevronWrapper>
        <Chevron>
          <img src={chevronIcon} />
        </Chevron>
      </Header>
    );
  }
}
