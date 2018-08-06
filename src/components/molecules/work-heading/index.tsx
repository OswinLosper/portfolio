import React, { Component } from 'react';

import {
  LogosHeaderBG, HeadingText, ProjectInfo, Role,
  Date, Context, ProjectDescription, Chevron, ChevronWrapper,
} from '~/styles';

import chevronIcon from '~/resources/icons/chevron.svg';

import { Animated } from 'react-animated-css';

import { DataHeading } from '~/components/pages/header-data-project';

interface IProps {
  id: number;
  title: string;
  role: string;
  date: string;
  context: string;
  projectdescription: string;
}

export default class WorkHeading extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  state = {
    items: DataHeading,
  };

  render() {
    const {
      title,
      role,
      date,
      context,
      projectdescription,
    } = this.props;

    return (
      <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>
        <LogosHeaderBG
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
              {projectdescription}
            </ProjectDescription>

          </ChevronWrapper>

          <Animated
            animationIn="bounce"
            animationOut="bounce"
            isVisible={true}>

            <Chevron>
              <img src={chevronIcon} />
            </Chevron>
          </Animated>
        </LogosHeaderBG>
      </Animated>


    );
  }
}
