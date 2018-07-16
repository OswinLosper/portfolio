import React, { Component } from 'react';
import { Navbar } from '~/components/molecules';

import {
  HeadingTextWaterMark,
  HeadingText,
 } from '~/styles';

 export interface IAboutPageProps {
  title?: string;
}

export default class AboutPage extends Component<IAboutPageProps, any> {
  static defaultProps = {
    title: 'About Us!',
  };

  render() {
    return (
      <div>
        <Navbar
        />
     <HeadingTextWaterMark>
        who am i
     </HeadingTextWaterMark> 

         <HeadingText>
       about me
     </HeadingText> 
     </div>
    );
  }
}
