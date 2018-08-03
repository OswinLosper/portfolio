import React, { Component, Fragment } from 'react';

import {
  WorkSection, PositionHeader, PositionandDate, PositionTitle, Date,
  CompanyName, WorkDescription, ResponsibiltiesDIV, UsedSkills, UsedSkillsWrapper,
  TechHeadingDIV,
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

        {items.map(item => {
          const {
            id, position, company, date, summary,
            responsibilties, techUsedHeading, techUsed,
          } = item;
          return (
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

              <WorkDescription
                data-qa="Date of Employment">

                {summary}
                {

                  responsibilties.map(
                    ({ idInfo, information, }) =>
                      (<span>
                        <ResponsibiltiesDIV
                          id={idInfo}>{<li>{information}</li>}
                        </ResponsibiltiesDIV>
                      </span>
                      ),
                  )
                }
                <TechHeadingDIV>
                  {techUsedHeading}
                </TechHeadingDIV>

                {techUsed && (
                  <UsedSkillsWrapper
                    data-qa="used-skills-wrapper"
                  >
                    {techUsed.map(tech => (
                      <UsedSkills
                        key={tech.idTech}
                      >
                        {tech.software}
                      </UsedSkills>
                    ))}
                  </UsedSkillsWrapper>
                )}
              </WorkDescription>
            </Fragment>
          );
        })}



        {/* <UsedSkillsWrapper
          data-qa="used-skills-wrapper">

          <UsedSkills>
            Testcafe Automation
                </UsedSkills>

          <UsedSkills>
            Testcafe Automation
                </UsedSkills>
          <UsedSkills>
            Testcafe Automation
          </UsedSkills>

        </UsedSkillsWrapper> */}

      </WorkSection>


    );
  }
}


