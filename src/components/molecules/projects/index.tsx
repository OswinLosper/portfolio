import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

            <Link to="/automation"> View Project </Link>


          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={outbuilding} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            <Link to="/outbuilding"> View Project </Link>
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={busyHive} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            <Link to="/busy-hive"> View Project </Link>
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={smartHeat} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            <Link to="/smartheat"> View Project </Link>
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={invoiceBook} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            <Link to="/invoice-app"> View Project </Link>
          </ProjectButton>
        </ProjectButtonWrapper>

        <Project>
          <img src={otherDesigns} width="100%" />
        </Project>

        <ProjectButtonWrapper>
          <ProjectButton>
            <Link to="/logos"> View Project </Link>
          </ProjectButton>
        </ProjectButtonWrapper>

      </InnerPagesLayoutContainer>

    );
  }
}

