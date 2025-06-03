import React from 'react';
import {HeaderWrapper, SearchWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from './header-style.js'; // Assuming you have a styled component for the header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component
{
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
            <NavSearch></NavSearch>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
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