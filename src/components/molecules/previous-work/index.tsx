import React, { Component, Fragment } from 'react';

import {
  WorkSection,
  PositionHeader,
  PositionandDate,
  PositionTitle,
  Date,
  CompanyName,
  WorkDescription,
} from '~/components/pages/cv/styles';

import { cvInformation } from '~/components/pages/cv/work-descriptions';

export default class PreviousWork extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  state = {
    items: cvInformation,
  };

  render() {
    const {
      items,
    } = this.state;

    return (
      <WorkSection>

        {items.map(({
          id, position, company, date, description,
        }) => (
            <Fragment key={id}>

      <PositionHeader
          data-qa="CV Position Header">
        <PositionandDate>
          <PositionTitle
            data-qa="Position Title">
              {position}
          </PositionTitle>

          <Date
            data-qa="Date of Employment">
              {date}
          </Date>
        </PositionandDate>

        <CompanyName
          data-qa="Company Name of Employment">
            {company}
          </CompanyName>
      </PositionHeader>

      <WorkDescription>
          {description}
      </WorkDescription>
            </Fragment>
          ))}
      </WorkSection>

    );
  }
}
