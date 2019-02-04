import React, { Component } from 'react';

import outbuilding from '~/resources/projects/outbuilding-company/outbuilding.jpg';
import busyHive from '~/resources/projects/busy-hive.jpg';
import invoiceBook from '~/resources/projects/invoice-book.jpg';
import smartHeat from '~/resources/projects/smartheat.jpg';
import otherDesigns from '~/resources/projects/other-designs.jpg';
import automation from '~/resources/projects/automation/automation.jpg';

import {
  InnerPagesLayoutContainer,
  Project,
  ProjectButton,
  ProjectButtonWrapper,
} from '~/styles';

export default class Projects extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InnerPagesLayoutContainer>

        <Project>
          <img src={automation} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={outbuilding} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={busyHive} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={smartHeat} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={invoiceBook} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={otherDesigns} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            View Logos
          </ProjectButton>
        </ProjectButtonWrapper>

      </InnerPagesLayoutContainer>

    );
  }
}
