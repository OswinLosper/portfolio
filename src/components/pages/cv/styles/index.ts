import styled from 'styled-components';
import withProps from 'styled-components-ts';

export const CVLAYOUT = withProps<any>(styled.div)`
margin: 0 auto;
max-width: 1000px;
line-height: 1.5;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
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
height: 8.5rem
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
`;


export const CVHeadings = withProps<any>(styled.div)`
display: flex;
font-size: 1.1rem;
font-weight: 600;
color: #000;
padding-top: 2rem;
padding-bottom: 1rem;
border-bottom: 2px solid #000;
`;

export const Text = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
font-size: 1rem;
padding-top: 0.5rem;;
padding-bottom: 0.5rem;
line-height: 2;
color: #000;
border-bottom: 2px solid #000;
`;

export const MiddleSection = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
`;

export const WorkEperienceSection = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
width: 100%;
border-bottom: 1px solid #000;
`;

export const RightSideBarSection = withProps<any>(styled.div)`
display: flex;
color: #fff;
min-width: 20%;
max-width: 20%;
`;

export const WorkSection = withProps<any>(styled.div)`
padding: 10px;
`;

export const PositionHeader = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;
`;

export const PositionTitle = withProps<any>(styled.div)`
justify-content: space-between;
font-size: 1.1rem;
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
line-height: 2;
padding-top: 1rem;
padding-bottom: 2rem;
text-align: justify;
`;

export const SideBarSection = withProps<any>(styled.div)`
padding: 10px;
`;

export const SkillsandToolsSection = withProps<any>(styled.div)`
color: #000;
padding-left: 1rem;
line-height: 2;
`;

export const SideBarHeading = withProps<any>(styled.div)`
padding-bottom: 5px;
padding-top: 1rem;
font-size: 1.1rem;
font-weight: 600;
color: #000;
line-height: 2;
`;

export const SkillsandTools = withProps<any>(styled.div)`
`;


