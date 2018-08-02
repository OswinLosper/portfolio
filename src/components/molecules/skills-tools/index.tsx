import React, { Component, Fragment } from 'react';

import {
  SideBarSection,
  SkillsandToolsSection,
  SideBarHeading,
  SkillsandTools,
} from '~/components/pages/cv/styles';

import { cvSideBarInformation } from '~/components/pages/cv/sidebar';

export default class SkillsTools extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  state = {
    items: cvSideBarInformation,
  };

  render() {
    const {
      items,
    } = this.state;

    return (
      <SideBarSection
        data-qa="sidebar-section">

        {items.map(({
          id, heading, information,
        }) => (
            <Fragment key={id}>

              <SkillsandToolsSection
                data-qa="skill-and-tools">
                <SideBarHeading>
                  {heading}
                </SideBarHeading>
                {
                  information.map(
                    ({ idInfo, title, }) =>
                      (<SkillsandTools id={idInfo}>{title}</SkillsandTools>),
                  )
                }
              </SkillsandToolsSection>
            </Fragment>

          ))}
      </SideBarSection>

    );
  }
}


