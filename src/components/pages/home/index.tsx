import React, { Component } from 'react';
import { JumbotronMain } from '~/components/molecules';

export interface IHomePageProps {
  title?: string;
}

export default class HomePage extends Component<IHomePageProps, any> {
  static defaultProps = {
    title: 'Welcome!',
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <JumbotronMain
          title="Home Page"
        />
      </div>
    );
  }
}
