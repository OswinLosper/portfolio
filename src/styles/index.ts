import styled from 'styled-components';
import withProps from 'styled-components-ts';
import img from '../resources/bg.jpg';
import logo from '../resources/logo.png';

export const MainContainer = withProps<any>(styled.div)`
  flex-direction: column;
  align-items: center;
  padding: 15rem 0rem 0rem 25rem;
  background-image: url(${img});
`;

export const AutomationTester = withProps<any>(styled.div)`
    font-size: 4.5rem;
    color: #808080;
    padding-bottom: 2rem;
`;

export const FrontEnd = withProps<any>(styled.div)`
     font-size: 3rem;
     color: #808080;
     padding-bottom: 2rem;
`;

export const Designer = withProps<any>(styled.div)`
     font-size: 2.25rem;
     color: #d6595e;
     padding-bottom: 2rem;
`;
export const HomeText = withProps<any>(styled.div)`
     font-size: 1rem;
     color: #808080;
`;

export const HomeButtonsContainer = withProps<any>(styled.div)`
display: flex;
margin-top: 35px
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
justify-content: space-evenly;
flex-direction: row;
align-items: center;
padding: 3px 5px 7px 10px;
background-color: #000;
`;

export const LogoContainer = withProps<any>(styled.div)`
background-image: url(${logo});
background-repeat: no-repeat;
width: 300px;
height: 100px;
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
color: #544f51;
margin-top: -102px;
font-weight: 900;
`;
