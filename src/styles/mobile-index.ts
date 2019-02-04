import styled from 'styled-components';

import withProps from 'styled-components-ts';

import img from '../resources/bg.jpg';
import bg from '../resources/innerBG.png';
import LogoBackgroundImage from '../resources/projects/logos/logo-headerBG.jpg';

export const MainContainer = withProps<any>(styled.div)`
@media only screen and (max-width: 480px)
  padding-left: 20%;
  padding-top: -15%;
  background-color: #ff0;
}
`;
