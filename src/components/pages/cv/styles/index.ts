import styled from 'styled-components';
import withProps from 'styled-components-ts';

export const ResponsibiltiesDIV = withProps<any>(styled.div)`
padding-bottom: 10px;
`;

export const TechHeadingDIV = withProps<any>(styled.div)`
padding-top: 10px;
font-weight: 600;
`;

export const UsedSkillsWrapper = withProps<any>(styled.div)`
display: flex;
padding-top: 10px;
`;

export const UsedSkills = withProps<any>(styled.div)`
background-color: #808080;
color: #fff;
margin-right: 0.5rem;
padding: 1px 10px 2px 10px;
border-radius: 5rem;
font-size: 0.8rem;
`;

export const CVLAYOUT = withProps<any>(styled.div)`
margin: 0 auto;
max-width: 1100px;
line-height: 1.5;
// box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
border: 1px solid #808080;
`;

export const HeaderLayout = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
background-color: #808080;
padding: 1rem;
`;

export const Heading = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
font-size: 3rem;
color: #fff;
font-weight: 600;
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
`;

export const SocialMediaWapper = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
height: 8.5rem;
`;

export const SocialMedia = withProps<any>(styled.div)`
display: flex;
color: #fff;
align-items: center;
padding: 1rem;

    & span {
    margin-left: 0.7rem;
}
`;

export const ContentLayout = withProps<any>(styled.div)`
padding-left: 2rem;
padding-right: 2rem;

  @media (max-width: 850px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


export const CVHeadings = withProps<any>(styled.div)`
display: flex;
font-size: 1.1rem;
font-weight: 600;
color: #000;
padding-top: 2rem;
padding-bottom: 1rem;
border-bottom: 1px solid #808080;
`;

export const Text = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
font-size: 1rem;
padding-top: 0.5rem;;
padding-bottom: 0.5rem;
line-height: 2;
color: #000;
border-bottom: 1px solid #808080;
`;

export const WorkEperienceSection = withProps<any>(styled.div)`
display: flex;
flex-wrap: wrap;
border-bottom: 1px solid #808080;
`;

export const WorkSection = withProps<any>(styled.div)`
display: flex;
flex-wrap: wrap;
padding: 10px;
padding-right: 60px;
max-width: 80%;

  @media (max-width: 850px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const PositionHeader = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0.5rem;
`;

export const PositionTitle = withProps<any>(styled.div)`
justify-content: space-between;
font-size: 1.1;rem;
font-weight: 600;
color: #000;
`;

export const PositionandDate = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
justify-content: space-between;
color: #808080;
`;

export const Date = withProps<any>(styled.div)`
color: #808080;
justify-content: space-between;
`;

export const CompanyName = withProps<any>(styled.div)`
color: #808080;
justify-content: space-between;
`;

export const WorkDescription = withProps<any>(styled.div)`
color: #000;
padding-bottom: 2rem;
border-width: 1px;
border-color: #808080;
border-bottom-style: dotted;
`;

export const SideBarSection = withProps<any>(styled.div)`
padding: 10px;
border-left: 1px solid #808080;

  @media (max-width: 850px) {
    border-left: 1px solid #fff;
  }
`;

export const SkillsandToolsSection = withProps<any>(styled.div)`
color: #000;
padding: 0 0 20px 30px;
line-height: 2;

  @media (max-width: 850px) {
    padding: 0 0 30px 0px;
  }
`;

export const SideBarHeading = withProps<any>(styled.div)`
padding-bottom: 5px;
padding-top: 0rem;
font-size: 1.1rem;
font-weight: 600;
color: #000;

  @media (max-width: 850px) {
    padding: 0;
  }
`;

export const SkillsandTools = withProps<any>(styled.div)`
font-size: 15px;
`;

export const TechUsedWrapper = withProps<any>(styled.div)`

`;
