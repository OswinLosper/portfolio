import React, { Component } from 'react';

interface IProps {
  [x: string]: any;
}

export default class WorkDetailsContainer extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
