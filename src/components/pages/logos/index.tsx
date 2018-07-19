import React, { Component } from 'react';

import { Navbar, Footer } from '~/components/molecules';

import {
 } from '~/styles';

export interface ILogosPageProps {
  title?: string;
}

export default class LogosPage extends Component<ILogosPageProps, any> {
  static defaultProps = {
    title: 'Logos',
  };

  render() {
    return (
      <div>

        <Navbar/>

        THIS IS THE LOGO PAGE

        <Footer/>

      </div>
    );
  }
}


