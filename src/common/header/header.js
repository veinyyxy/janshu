import React, { createRef } from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, SearchWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from './header-style.js'; // Assuming you have a styled component for the header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component
{
  constructor(props) 
  {
    super(props);
    this.state = {
      focused: false
    };

    this.nodeRef = createRef();
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <SearchWrapper>
            <CSSTransition nodeRef={this.nodeRef} timeout={200} classNames='slide' in={this.state.focused}>
              <NavSearch ref={this.nodeRef} className={this.state.focused ? 'focused' : ''} onFocus={() => this.setState({ focused: true })} onBlur={() => this.setState({ focused: false })}></NavSearch>
            </CSSTransition>
            <FontAwesomeIcon icon={faMagnifyingGlass} class={this.state.focused ? 'focused search-icon' : 'search-icon'} />
          </SearchWrapper>
          <Addition>
            <Button className='reg'>
              Sign Up
            </Button>
            <Button className='writting'>
              <FontAwesomeIcon icon={faPencil} className='icon' />
              Write
            </Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;