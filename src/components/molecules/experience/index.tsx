import React, { Component } from 'react';

import campussolutionslogo from '~/resources/campus-solutions.png';
import perfectprintlogo from '~/resources/perfect-print.png';
import bonlinelogo from '~/resources/bonline.png';

import {
  ExperienceWrapper,
  WorkPlaces,
  Years,
  LearnMore,
} from '~/styles';

export default class Experience extends Component<any, any> {
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
    return (
      <ExperienceWrapper>
        <WorkPlaces>
          <img src={campussolutionslogo} width="200px" />
          <Years>
            Graphic Designer, 2011- 2012
            </Years>
          <LearnMore>
            Learn More
            </LearnMore>
        </WorkPlaces>

        <WorkPlaces>
          <img src={perfectprintlogo} width="200px" />
          <Years>
            DTP Operator & Designer, 2012 - 2013
            </Years>
          <LearnMore>
            Learn More
            </LearnMore>
        </WorkPlaces>

        <WorkPlaces>
          <img src={bonlinelogo} width="200px" />
          <Years>
            Senior Designer & Team Leader, 2013 - 2016
            </Years>
          <LearnMore>
            Learn More
            </LearnMore>
        </WorkPlaces>

        <WorkPlaces>
          <img src={bonlinelogo} width="200px" />
          <Years>
            Automation Tester,  2013 - Present
            </Years>
          <LearnMore>
            Learn More
            </LearnMore>
        </WorkPlaces>
      </ExperienceWrapper>
    );
  }
}
