import React from 'react';
import Slider from 'react-slick';

import step1 from '~/resources/slider/step1.gif';
import step2 from '~/resources/slider/step2.png';
import step3 from '~/resources/slider/step3.gif';
import step4 from '~/resources/slider/step4.png';

import {
  SliderImage,
} from '~/styles';

export default class SimpleSlider extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>

        <SliderImage>
          <img src={step1} />
        </SliderImage>
        <SliderImage>
          <img src={step2} />
        </SliderImage>
        <SliderImage>
          <img src={step3} />
        </SliderImage>
        <SliderImage>
          <img src={step4} />
        </SliderImage>

      </Slider >
    );
  }
}
