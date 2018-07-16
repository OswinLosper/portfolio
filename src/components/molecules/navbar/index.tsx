import React, { Component } from 'react';
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from '~/styles';


export default class ExampleNavbar extends Component<any, any> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
        
        </LogoContainer>

        <NavContainer>
            <nav>
            <a href="/#/">ABOUT ME</a> |
            <a href="/#/">MY WORK</a> |
            <a href="/#/">MY RESUME</a>
            </nav>
        </NavContainer>            
      </HeaderContainer>
    );
  }
}
