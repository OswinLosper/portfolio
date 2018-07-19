import styled from 'styled-components';
import withProps from 'styled-components-ts';

export const CVLAYOUT = withProps<any>(styled.div)`
margin: 0 auto;
max-width: 1000px;
padding: 1rem;
line-height: 1.5;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
background-color: #965214;
`;

export const HeaderLayout = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
background-color: #544F51;
border-bottom: 1px solid #ff0;
`;

export const Heading = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
font-size: 3rem;
color: #fff;
font-weight: 600;
background-color: #524;
`;

export const Title = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
font-size: 1.2rem;
color: #fff;
font-weight: 300;
`;

export const Email = withProps<any>(styled.div)`
display: flex;
font-size: 1rem;
color: #fff;
font-weight: 300;
padding-bottom: 1rem;
`;

export const SocialMediaWapper = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
background-color: #f00;
`;

export const SocialMedia = withProps<any>(styled.div)`
display: flex;
font-size: 1rem;
color: #fff;
font-weight: 300;
padding-top: 1rem;
`;

export const CVHeadings = withProps<any>(styled.div)`
display: flex;
font-size: 1.3rem;
color: #fff;
padding-top: 3rem;
padding-bottom: 0.5rem;
border-bottom: 1px solid #ff0;
`;

export const Text = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
font-size: 1rem;
color: #544F51;
padding-top: 0.5rem;;
padding-bottom: 0.5rem;
background-color: #ccc;
line-height: 2;
`;

export const MiddleSection = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
`;

export const WorkEperienceSection = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
background-color: #548;
width: 100%;
`;

export const RightSideBarSection = withProps<any>(styled.div)`
display: flex;
background-color: #000;
color: #fff;
min-width: 20%;
max-width: 20%;
`;

export const WorkSection = withProps<any>(styled.div)`
padding: 10px;
`;

export const PositionHeader = withProps<any>(styled.div)`
display: flex;
background-color: #33FF74;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid #ff0;
`;

export const PositionandDate = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const PositionTitle = withProps<any>(styled.div)`
background-color: #852147;
justify-content: space-between;
border-bottom: 2px solid #ff0;
`;

export const Date = withProps<any>(styled.div)`
background-color: #107E7D;
justify-content: space-between;
`;

export const CompanyName = withProps<any>(styled.div)`
background-color: #3FA34D;
justify-content: space-between;
`;

export const WorkDescription = withProps<any>(styled.div)`
background-color: #FF33AC;
color: #fff;
border-bottom: 2px solid #ff0;
`;

export const SideBarSection = withProps<any>(styled.div)`
padding: 10px;
`;

export const SkillsandToolsSection = withProps<any>(styled.div)`
background-color: #0A5905;
`;

export const SideBarHeading = withProps<any>(styled.div)`
padding-bottom: 5px;
border-bottom: 1px solid #ff0;
font-size: 1.1rem;
`;

export const SkillsandTools = withProps<any>(styled.div)`
background-color: #DCA101
`;


