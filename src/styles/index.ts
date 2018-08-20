import styled from 'styled-components';

import withProps from 'styled-components-ts';

import img from '../resources/bg.jpg';
import bg from '../resources/innerBG.png';
import LogoBackgroundImage from '../resources/projects/logos/logo-headerBG.jpg';


// GLOABAL //

// LAYOUT CONTAINER //

export const Logo = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
flex-direction: column;
margin: 2rem;
box-shadow: 0 0.3125rem 1.3125rem rgba(125, 138, 149, 0.65);
`;

export const LogoName = withProps<any>(styled.div)`;
display: flex;
text-align: center;
flex-direction: column;
`;

export const LayoutContainer = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
background-image: url(${img});
background-repeat: no-repeat;

  @media (max-width: 300px) {
    height: 100%;
  }

  @media (max-width: 350px) {
    height: 100%;
  }

  @media (max-width: 640px) {
    height: 100%;
  }

  @media (max-width: 850px) {
    height: 100vh;
  }
  `;

export const InnerPagesLayoutContainer = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
background-image: url(${bg});
`;

export const Text = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: auto;
margin-left: auto;
width: 70%;
margin-top: 2rem;
font-size: 22px;
color: #808080;
padding: 20px;
line-height: 2.5;
text-align: justify;

  & span {
    text-align: center;
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #808080;
    padding: 1.5rem;
    line-height: 2.5;
    text-align: center;
  }
`;


export const FooterWrapper = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
color: #fff;
background-color: #a1a1a1;
padding: 5rem;
margin-top: 5rem;

  @media (max-width: 850px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #808080;
    padding: 0.5rem;
    text-align: center;
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
cursor: pointer;
    :hover {
        background-color: rgba(255,255,255,0.1);
    }


  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    min-width: 100%;
    height: auto;
    max-width: auto;
    color: #fff;

  }
  @media (max-width: 640px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
    height: auto;
    max-width: auto;
    color: #fff;
  }
  @media (max-width: 850px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
    height: auto;
    max-width: auto;
    color: #fff;
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

  @media (max-width: 850px) {
    font-size: 1rem;
    margin-top: 1rem;
    padding: 10px 40px;
    height: auto;
    max-width: auto;
    color: #fff;
  }
`;

// NAVBAR CONTAINER //

export const HeaderContainer = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width: 100%;
z-index: 1;

  @media (max-width: 350px) {
    background-color: #fff;
    position: absolute;
    height: 100px;
    border-bottom: #ececed 1px solid;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.05), 0 0 4px 1px rgba(0,0,0,0.05);
  }
  @media (max-width: 480px) {
    background-color: #fff;
    position: absolute;
    height: 100px;
    border-bottom: #ececed 1px solid;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.05), 0 0 4px 1px rgba(0,0,0,0.05);
  }
  @media (max-width: 850px) {
    background-color: #fff;
    position: absolute;
    height: 100px;
    border-bottom: #ececed 1px solid;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.05), 0 0 4px 1px rgba(0,0,0,0.05);
  }
`;

export const BackContainer = withProps<any>(styled.div)`
justify-content: flex-start;
margin-left: 0;
cursor: pointer;
image: url(${img});
padding: 1rem;
:hover {
    background-color: #ececed;
}

  @media (max-width: 350px) {
    justify-content: flex-start;
    margin-left: 0;
    padding: 0;
  :hover {
    background-color: rgba(0,0,0,0.0);
  }

  @media (max-width: 850px) {
  justify-content: flex-start;
  margin-left: 0;
  :hover {
    background-color: rgba(0,0,0,0.0);
  }
}
`;

export const LogoContainer = withProps<any>(styled.div)`
justify-content: flex-end;
margin-right: 0;
cursor: pointer;
padding: 1rem;
:hover {
    background-color: #ececed;
}

  @media (max-width: 350px) {
    justify-content: flex-start;
    margin-left: 0;
    padding: 0;
  :hover {
    background-color: rgba(0,0,0,0.0);
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
    margin-left: 0;
    :hover {
      background-color: rgba(0,0,0,0.0);
  }

  @media (max-width: 850px) {
  justify-content: flex-start;
  margin-left: 0;
  :hover {
    background-color: rgba(0,0,0,0.0);
  }
`;

// -------------------//


// HOMEPAGE

export const MainContainer = withProps<any>(styled.div)`
padding-left: 20%;
}
  @media (max-width: 350px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 480px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 850px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;


export const Designer = withProps<any>(styled.div)`
  font-size: 4.2rem;
  color: #d6595e;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 640px) {
    font-size: 3rem;
  }

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`;

export const FrontEnd = withProps<any>(styled.div)`
    font-size: 5rem;
    color: #544F51;
    padding-bottom: 1rem;
    font-weight: 600;


  @media (max-width: 480px) {
    font-size: 2.1rem;
    margin-top: 1rem;
    }

    @media (max-width: 640px) {
     font-size: 3rem;
    }

    @media (max-width: 850px) {
     font-size: 3rem;
    }
`;

export const HomeText = withProps<any>(styled.div)`
   font-size: 1rem;
   color: #808080;


  @media (max-width: 480px) {
   font-size: 0.9rem;
   margin-top: 1rem;
  }
`;

export const HomeButtonsContainer = withProps<any>(styled.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;

  @media (max-width: 480px) {
   margin-top: 1rem;
  }
  @media (max-width: 640px) {
   margin-top: 1rem;
  }
  @media (max-width: 850px) {
    margin-top: 1rem;
  }
`;

export const HomeButtons = withProps<any>(styled.button)`
    background-color: rgba(255,0,0,0.0);
    border: 1px solid #808080;
    color: #808080;
    padding: 18px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    margin-right: 20px;
    :hover {
        background-color: rgba(255,255,255,0.5);
    }

  @media (max-width: 480px) {
     font-size: 0.9rem;
    margin-top: 1rem;
    min-width: 100%;
  }
  @media (max-width: 640px) {
     font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
  }
  @media (max-width: 850px) {
     font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
  }
`;

// -------------------//


// ABOUT ME //

export const HeadingTextAbout = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
font-size: 5rem;
font-weight: 900;
color: #544F51;
text-transform: none;
padding-top: 5rem;
padding-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 3rem;
    padding-top: 10rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 640px) {
    font-size: 3rem;
    padding-top: 10rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 850px) {
    font-size: 3rem;
    padding-top: 10rem;
    padding-bottom: 0.5rem;
  }
`;

export const SocialMediaWrapper = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: row;
align-content: center;
width: 70%;
margin-right: auto;
margin-left: auto;
`;

export const SkillsUsed = withProps<any>(styled.div)`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-right: 2%;
padding: 54px 61px;
border: 1px solid #ccc;
background-color: #ffffff;
height: 150px;
max-width: 150px;
min-width: 10rem;
text-align: center;
font-size: 0.8rem;
: hover {
  background-color: #ececed;
}
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
min-width: 10rem;
cursor: pointer;
:hover {
  background-color: #ececed;
}
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    min-width: 100%;
    height: auto;
    max-width: auto;
    margin-bottom: 1rem;

  }
  @media (max-width: 640px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
    height: auto;
    max-width: auto;
    margin-bottom: 1rem;
  }
  @media (max-width: 850px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
    height: auto;
    max-width: auto;
    margin-bottom: 1rem;
  }
`;

export const SkillsHeadingText = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
font-size: 2rem;
color: #544F51;
font-weight: 900;
padding-top: 2rem;
`;

export const ButtonToWork = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5%;
border: 1px solid #ccc;
height: 5rem;
text-align: center;
font-size: 1.2rem;
width: 30%;
margin-right: auto;
margin-left: auto;
margin-top: 5rem;
cursor: pointer;
color: #808080;
    :hover {
        background-color: #ececed;
    }

 @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    min-width: 90%;
    height: auto;
    max-width: auto;
    margin-bottom: 1rem;
    width: 90%;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
    width: 90%;
    height: auto;
    max-width: auto;
    margin-bottom: 1rem;
  }

  @media (max-width: 850px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 10px 40px;
    height: auto;
    max-width: auto;
    margin-bottom: 1rem;
    width: 90%;
  }
`;

// -------------------//

// WORK //

export const Project = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
margin-right: auto;
margin-left: auto;
margin-top: 5rem;
border: 1px solid #D2CACA;
box-shadow: 0 0.3125rem 1.3125rem rgba(125,138,149,0.65);


  @media (max-width: 850px) {
  margin-top: 3rem;
    width: 90%;
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
    border: 1px solid #D2CACA;
    color: #808080;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
    width: 250px;
    margin-top: -48px;
    background-color: rgba(255,255,255,1);
    :hover {
        background-color: #efefef;;
    }

    @media (max-width: 850px) {
    margin-top: 3rem;
    border: 1px solid #D2CACA;
    color: #808080;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;
    width: 170px;
    margin-top: -48px;
    background-color: rgba(255,255,255,1);
  }
`;

// -------------------//



// PROJECT PAGES //

export const Header = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
padding-top: 10rem;
${props => {
  return `background-image: url(${props.backgroundImage});`;
}}

  @media (max-width: 480px) {
    height: 100vh;
  }
  @media (max-width: 640px) {
    height: 100%;
  }
  @media (max-width: 850px) {
    height: 100%;
  }
`;

export const ChevronWrapper = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
flex-direction: column;
flex: 1 1 auto;
transition-timing-function: ease;
`;

export const Chevron = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
`;


export const HeadingText = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-direction: row;
font-size: 6rem;
font-weight: 900;
color: #ececed;
text-transform: none;
padding-top: 5rem;
padding-bottom: 2rem;

  @media (max-width: 480px) {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 2.4rem;
  font-weight: 900;
  color: #ececed;
  text-transform: none;
  padding-top: 5rem;
  }

  @media (max-width: 640px) {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 2.4rem;
  font-weight: 900;
  color: #ececed;
  text-transform: none;
  padding-top: 0;
  }

  @media (max-width: 850px) {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 2.4rem;
  font-weight: 900;
  color: #ececed;
  text-transform: none;
  padding-top: 0;
  }
`;

export const ProjectInfo = withProps<any>(styled.div)`
display: flex;
justify-content: space-between;
padding: 2rem;
padding-left: 10%;
padding-right: 10%;
margin-right: auto;
margin-left: auto;
color: #efefef;
& span {
    font-weight: 600;
    margin-right: 0.5rem;
}
 `;

export const Role = withProps<any>(styled.div)`
display: flex;
margin-right: 1rem;
font-size: 20px;

  @media (max-width: 480px) {
  font-size: 0.8rem;
  }

  @media (max-width: 640px) {
  font-size: 0.9rem;
  }

  @media (max-width: 850px) {
  font-size: 0.9rem;
  }
`;

export const Date = withProps<any>(styled.div)`
display: flex;
margin-right: 1rem;
font-size: 20px;

  @media (max-width: 480px) {
  font-size: 0.8rem;
  }

  @media (max-width: 640px) {
  font-size: 0.9rem;
  }

  @media (max-width: 850px) {
  font-size: 0.9rem;
  }
`;

export const Context = withProps<any>(styled.div)`
display: flex;
font-size: 20px;

  @media (max-width: 480px) {
  font-size: 0.8rem;
  }
  @media (max-width: 640px) {
  font-size: 0.9rem;
  }
  @media (max-width: 850px) {
  font-size: 0.9rem;
  }
`;

export const ProjectDescription = withProps<any>(styled.div)`
font-size: 28px;
justify-content: center;
padding-top: 2rem;
padding-bottom: 2rem;
color: #544F51;
margin-right: auto;
margin-left: auto;
color: #efefef;

  @media (max-width: 480px) {
  font-size: 1rem;
  text-align: center;
  }

  @media (max-width: 640px) {
  font-size: 1rem;
  }

  @media (max-width: 850px) {
  font-size: 1rem;
  }
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

  @media (max-width: 480px) {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  }

  @media (max-width: 640px) {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  }

  @media (max-width: 850px) {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  }
`;


export const HeadingTextInner = withProps<any>(styled.div)`;
display: flex;
justify-content: ${
  props => {
    return props.centered ? 'center' : 'flex-start';
  }
  }
flex-direction: column;
font-size: 3rem;
color: #544F51;
font-weight: 900;
margin-top: 2rem;
text-align: ${
  props => {
    return props.centered ? 'center' : 'left';
  }
  }

  @media (max-width: 480px) {
  font-size: 2rem;
  text-align: center;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 1rem;
  }

  @media (max-width: 640px) {
  font-size: 2rem;
  text-align: center;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 1rem;
  }

  @media (max-width: 850px) {
  font-size: 2rem;
  text-align: center;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 1rem;
  }
`;

export const WorkText = withProps<any>(styled.div)`;
margin-top: 2rem;
font-size: 28px;
color: #808080;
line-height: 2.5;
text-align: justify;
text-align: center;
padding-bottom: 1rem;
text-align: ${
  props => {
    return props.centered ? 'center' : 'left';
  }
  }

  @media (max-width: 480px) {
  font-size: 1rem;
  text-align: center;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
  margin-top: 1rem;
  }

  @media (max-width: 640px) {
  font-size: 1rem;
  text-align: center;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
  margin-top: 1rem;
  }

  @media (max-width: 850px) {
  font-size: 1rem;
  text-align: center;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
  margin-top: 1rem;
  }
`;

export const NextAndPreviousWrapper = withProps<any>(styled.div)`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 1rem;
`;

export const NextButtons = withProps<any>(styled.button)`
background-color: rgba(255, 0, 0, 0.0);
border: 1px solid #808080;
color: #808080;
padding: 1rem 5rem;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 1rem;
margin: 10px 10px;
cursor: pointer;
    : hover {
  background-color: rgba(255, 255, 255, 0.5);
}

  @media (max-width: 850px) {
    width: 18rem;
  }
`;

// -------------------//



export const LogosHeaderBG = withProps<any>(styled.div)`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
padding-top: 10rem;
margin-bottom: 2rem;
background-image: url(${ LogoBackgroundImage});
`;

//  EXPEREINCE MOLECULE //

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
margin-right: 3 %;
padding: 2rem;
height: 250px;
max-width: 100%;
min-width: 20rem;
background-color: #ffffff;
border-radius: 1.5rem;
box-shadow: 0 0.3125rem 1.3125rem rgba(125, 138, 149, 0.65);
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

// ----------------- //


// USED IN CV FOLDER //
export const SkillsWrapper = withProps<any>(styled.div)`
margin-top: 2rem;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
width: 70%;
margin-right: auto;
margin-left: auto;
`;

// ---------------//


export const OutbuildingDisplay = withProps<any>(styled.div)`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 992px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Custom, iPhone Retina */
  @media only screen and (max-width : 320px) {
      .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;


//  WORK CONTENT MOLECULE //
export const ProjectColours = withProps<any>(styled.div)`;
display: flex;
justify-content: center;

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 992px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Custom, iPhone Retina */
  @media only screen and (max-width : 320px) {
      .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

export const HeadingTextInnerWrapper = withProps<any>(styled.div)`;
display: flex;
flex-direction: row;
font-size: 3rem;
color: #544F51;
font-weight: 900;
margin-top: 2rem;
`;

export const FontsUsedWrapper = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
font-size: 2rem;
color: #544F51;
font-weight: 900;
margin-top: 2rem;
margin-right: auto;
margin-left: auto;
flex-direction: column;

  & span {
  font-weight: 600;
  margin-right: 0.5rem;
}
`;

export const FontsUsed = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
font-size: 1.2rem;
color: #544F51;
margin-top: 2rem;
font-weight: normal;
padding-bottom: 1.5rem;
`;

export const IconDesigns = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
padding-top: 2rem;
padding-bottom: 2rem;
color:; #544F51;

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 992px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (max-width : 992px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Small Devices, Tablets */
  @media only screen and (max-width : 768px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Extra Small Devices, Phones */
  @media only screen and (max-width : 480px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  /* Custom, iPhone Retina */
  @media only screen and (max-width : 320px) {
      .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

export const IconsText = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
font-size: 1.1rem;
padding-top: 2rem;
padding-bottom: 2rem;
color: #544F51;
`;

export const LogoCollectionWrapper = withProps<any>(styled.div)`;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
