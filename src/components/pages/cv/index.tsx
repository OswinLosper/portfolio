import React, { Component } from 'react';

import {
  CVLAYOUT,
  HeaderLayout,
  Heading,
  Title,
  Email,
  SocialMediaWapper,
  SocialMedia,
  CVHeadings,
  Text,
  WorkEperienceSection,
  RightSideBarSection,
  MiddleSection,
} from './styles';

export interface ICVPageProps {
  title?: string;
}

export default class CVPage extends Component<ICVPageProps, any> {
  static defaultProps = {
    title: 'Work',
  };

  render() {
    return (
      <CVLAYOUT>

        <HeaderLayout>

        <Heading>
           Oswin Losper
        <Title>
          Automation Tester,
          Front-end developer
          </Title>
        <Email>
          oswinlosper@gmail.com
        </Email>
        </Heading>

          <SocialMediaWapper>
            <SocialMedia>
              FACEBOOK
            </SocialMedia>
            <SocialMedia>
              GOOGLE +
            </SocialMedia>
            <SocialMedia>
              GITHUB
            </SocialMedia>
        </SocialMediaWapper>
      </HeaderLayout>

    <CVHeadings>
      CAREER SUMMARY
    </CVHeadings>
    <Text>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Text>

    <MiddleSection>
          <WorkEperienceSection>
                  <CVHeadings>
                    WORK EXPERIENCE
              </CVHeadings>
              <Text>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Text>
          </WorkEperienceSection>

        <RightSideBarSection>
          <CVHeadings>
            SKILLS
          </CVHeadings>
          <Text>
          Computer
          Computer
          Computer
          Computer
          Computer
          Computer
          Computer
          Computer
          </Text>
        </RightSideBarSection>

        </MiddleSection>
      </CVLAYOUT>

    );
  }
}


