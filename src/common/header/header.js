import React, { createRef } from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, SearchWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from './header-style.js'; // Assuming you have a styled component for the header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import * as action_creaters from './action_creaters.js';

const Header = (props) => {
  const nodeRef = createRef();

  return (
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='left active'>Home</NavItem>
        <NavItem className='left'>Download App</NavItem>
        <NavItem className='right'>Login</NavItem>
        <NavItem className='right'>Aa</NavItem>
          <SearchWrapper>
            <CSSTransition nodeRef={nodeRef} timeout={200} classNames='slide' in={props.focused}>
              <NavSearch ref={nodeRef} className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={props.focused ? 'focused search-icon' : 'search-icon'} />
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

const mapStateToProps = (state) => {

  return {
    focused: state.getIn(['header', 'focused'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      dispatch(action_creaters.createSearchFocusAction());
    },
    handleInputBlur: () => {
      dispatch(action_creaters.createSearchBlurAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);