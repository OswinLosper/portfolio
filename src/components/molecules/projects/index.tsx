import React, { Component } from 'react';

import outbuilding from '~/resources/projects/outbuilding.jpg';
import busyHive from '~/resources/projects/busy-hive.jpg';
import invoiceBook from '~/resources/projects/invoice-book.jpg';
import smartHeat from '~/resources/projects/smartheat.jpg';
import otherDesigns from '~/resources/projects/other-designs.jpg';

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
          <img src={outbuilding} width="900px" />
        </Project>
   
        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>
  
        <Project>
          <img src={busyHive} width="900px" />
        </Project>
   
        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>
      
        <Project>
          <img src={smartHeat} width="900px" />
        </Project>
   
        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>
      
        <Project>
          <img src={invoiceBook} width="900px" />
        </Project>
   
        <ProjectButtonWrapper>
          <ProjectButton>
            View Project
          </ProjectButton>
        </ProjectButtonWrapper>]
           
        <Project>
          <img src={otherDesigns} width="900px" />
        </Project>
   
        <ProjectButtonWrapper>
          <ProjectButton>
            View More Designs
          </ProjectButton>
        </ProjectButtonWrapper>

           </InnerPagesLayoutContainer>
          );
        }
      }
