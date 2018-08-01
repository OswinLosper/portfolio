import React, { Component } from 'react';
import { Buttons } from '~/components/molecules';

import DatePicker from 'material-ui/DatePicker';

import {
  MainContainer,
  HomeLogoContainer,
  AutomationTester,
  FrontEnd,
  Designer,
  HomeText,
  HomeButtonsContainer,
  HomeButtons,
  LayoutContainer,
  DatePickerDiv,
 } from '~/styles';

export interface IHomePageProps {
  title?: string;
}

export default class HomePage extends Component<IHomePageProps, any> {
  static defaultProps = {
    title: 'Welcome!',
  };

  render() {
    return (
      <LayoutContainer>
          <MainContainer data-qa="main-container">
            <Designer>
              Automation Tester, Designer
        </Designer>

            <FrontEnd>
              Front-end developer
        </FrontEnd>
            <HomeText>
              Hi, I'm Oswin Losper. 27 year old automation tester, front-end developer and designer based in Cape Town.
        </HomeText>
          <Buttons />

          <DatePickerDiv
            data-qa="date-picker-wrapper"
          >
            <DatePicker
              className="ui-date-picker"
              data-qa="ui-date-picker"
              floatingLabelText="Date Picker"
              fullWidth
              hintText="Date Picker"
            />
          </DatePickerDiv>



          </MainContainer>
      </LayoutContainer>


    );
  }
}
