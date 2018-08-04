import React, { Component } from 'react';
import { InnerPagesLayoutContainer, ProjectButton, ProjectButtonWrapper } from '~/styles';

interface IProps {
  label: string;
}

export default class CallToActionButton extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { label } = this.props;
    return (
      <ProjectButtonWrapper
        data-qa="project-button-wrapper">
        <ProjectButton
          data-qa="project-button">
          {label}
        </ProjectButton>
      </ProjectButtonWrapper>
    );
  }
}
