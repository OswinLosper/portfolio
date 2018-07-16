import styled from 'styled-components';
import withProps from 'styled-components-ts';
import img from '../resources/bg.jpg';

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


