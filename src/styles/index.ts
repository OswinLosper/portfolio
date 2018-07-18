import styled from 'styled-components';
import withProps from 'styled-components-ts';
import img from '../resources/bg.jpg';

export const LayoutContainer = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
 background-image: url(${img});
`;

export const MainContainer = withProps<any>(styled.div)`
padding-left: 20%;
padding-top: -15%;
`;

export const HomeLogoContainer = withProps<any>(styled.div)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-right: 20%;
`;

export const Designer = withProps<any>(styled.div)`
    font-size: 4.2rem;
    color: #d6595e;
    font-weight: 300;
`;

export const FrontEnd = withProps<any>(styled.div)`
     font-size: 5rem;
     color: #544F51;
     padding-bottom: 1rem;
     font-weight: 600;
`;

export const AutomationTester = withProps<any>(styled.div)`
    font-size: 3rem;
    color: #808080;
    padding-bottom: 1rem;
`;

export const HomeText = withProps<any>(styled.div)`
     font-size: 1rem;
     color: #808080;
`;

export const HomeButtonsContainer = withProps<any>(styled.div)`
display: flex;
margin-top: 5rem;
margin-right: 14px;
`;

export const HomeButtons = withProps<any>(styled.button)`
    background-color: rgba(255,0,0,0.0);
    border: 1px solid #808080;
    color: #808080;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-right: 20px;
    :hover {
        background-color: rgba(255,255,255,0.9);
    }
`;

export const HeaderContainer = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-top: 1rem;
position: fixed;
width: 100%;
`;

export const BackContainer = withProps<any>(styled.div)`
justify-content: flex-start;
margin-left: 10%;
`;

export const LogoContainer = withProps<any>(styled.div)`
justify-content: flex-end;
margin-right: 10%;
`;

export const NavContainer = withProps<any>(styled.div)`
font-size: 1rem;
padding-right: 1rem;
color: #fff;
    & a {
        color: #fff;
        text-decoration: none;
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export const HeadingTextWaterMark = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
font-size: 120px;
font-weight: 900;
color: #ECECED;
text-transform: none;
`;

export const HeadingText = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
font-size: 4rem;
color: #544F51;
margin-top: -90px;
font-weight: 900;
`;

export const SkillsHeadingText = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
font-size: 2rem;
color: #544F51;
font-weight: 900;
margin-top: 2rem;
`;

export const WrapperText = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-content: center;
width: 70%;
margin-right: auto;
margin-left: auto;
`;

export const Text = withProps<any>(styled.div)`
margin-top: 2rem;
font-size: 28px;
color: #808080;
padding: 20px;
line-height: 2.5;
text-align: justify;
justify-content: center;
`;

export const ExperienceWrapper = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
flex-direction: row;
align-content: center;
width: 70%;
margin-right: auto;
margin-left: auto;
`;

export const WorkPlaces = withProps<any>(styled.div)`
margin-top: 3rem;
margin-bottom: 2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-right: 3%;
padding: 2rem;
height: 250px;
max-width: 100%;
min-width: 20rem;
background-color: #ffffff;
border-radius: 1.5rem;
box-shadow: 0 0.3125rem 1.3125rem rgba(125,138,149,0.65);
`;

export const Years = withProps<any>(styled.div)`
margin-top: 2rem;
text-align: center;
color: #544F51;
font-size: 1rem;
font-weight: 600;
`;

export const LearnMore = withProps<any>(styled.div)`
margin-top: 0.5rem;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
color: #d6595e;
`;

export const SocialMediaWrapper = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
flex-direction: row;
align-content: center;
width: 70%;
margin-right: auto;
margin-left: auto;
`;

export const SocialMediaContact = withProps<any>(styled.div)`
margin-top: 2rem;
margin-bottom: 5rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-right: 5%;
padding: 54px 61px;
border: 1px solid #ccc;
background-color: #ffffff;
height: 150px;
max-width: 150px;
min-width: 10rem
:hover {
  background-color: #efefef;
}
`;

export const SkillsWrapper = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
flex-direction: row;
align-content: center;
width: 70%;
margin-right: auto;
margin-left: auto;
}
`;

export const SkillsUsed = withProps<any>(styled.div)`
margin-top: 2rem;
margin-bottom: 5rem;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
margin-right: 5%;
padding: 54px 61px;
border: 1px solid #ccc;
background-color: #ffffff;
height: 150px;
max-width: 150px;
min-width: 10rem;
text-align: center;
:hover {
  background-color: #efefef;
}
`;

export const FooterWrapper = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: column;
color: #fff;
background-color: #d6595e;
padding: 5rem;
margin-top: 5rem;
}
`;

export const GitHubText = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
color: #544F51;
font-size: 1.5rem;
font-weight: 300;
margin-bottom: 2rem;
}
`;

export const Email = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5%;
border: 1px solid rgba(255,255,255,0.15);
height: 5rem;
text-align: center;
font-size: 24px;
font-weight: 300;
width: 40%;
margin-right: auto;
margin-left: auto;
}
`;

export const ContactText = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
color: #fff;
font-size: 2rem;
font-weight: 300;
}
`;

export const Laptop = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
margin-bottom: 2rem;
height: 80vh;
}
`;

export const ProjectButtonWrapper = withProps<any>(styled.div)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255,0,0,0.0);
    color: #808080;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    :hover {
        background-color: rgba(255,255,255,0.9);
    }
`;

export const ProjectButton = withProps<any>(styled.div)`
    background-color: rgba(255,0,0,0.0);
    border: 1px solid #808080;
    color: #808080;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
    width: 250px;
    margin-bottom: 5rem;
    :hover {
        background-color: #efefef;;
    }
`;

