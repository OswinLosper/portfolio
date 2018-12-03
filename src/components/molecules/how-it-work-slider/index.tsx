import React from 'react';
import Slider from 'react-slick';

import step2 from '~/resources/slider/step2.png';

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
        <div>
          <img src={step2} width="800px" />
        </div>
        <div>
          <img src={step2} width="800px" />
        </div>
        <div>
          <img src={step2} width="800px" />
        </div>
        <div>
          <img src={step2} width="800px" />
        </div>

      </Slider>
    );
  }
}
