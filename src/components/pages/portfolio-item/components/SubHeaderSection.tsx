import React, { Component, Fragment } from 'react';
import { HeadingTextInner, WorkText, WrapperText } from '~/styles';

interface IProps {
  header: string;
  subtext: string;
  subtextFontSize?: number;
  centered?: boolean;
  link?: string;
}


export default class SubHeaderSection extends Component<IProps, any> {
  static defaultProps = {
    subtextFontSize: 14,
    centered: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { header, centered, subtext, subtextFontSize, children } = this.props;
    return (
      <Fragment>
        <WrapperText
          data-qa="wrapper-text">
          <HeadingTextInner
            centered={centered}
            data-qa="inner-text">
            {header}
          </HeadingTextInner>
          <WorkText
            centered={centered}
            data-qa="work-text">
            {subtext} <br/><br/>
          </WorkText>
        </WrapperText>
        {children}
      </Fragment>
    );
  }
}
