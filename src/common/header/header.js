import React, { createRef } from 'react';
import {CSSTransition} from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPencil, faArrowsSpin } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { Link } from 'react-router'

import * as action_creaters from './action_creaters.js';
import {
  HeaderWrapper, 
  SearchWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch, 
  Addition, 
  Button, 
  SearchInfo, 
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './header-style.js'; // Assuming you have a styled component for the header

class Header extends React.Component
{
  constructor(props) {
    super(props);
    this.nodeRef = createRef();
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <SearchWrapper>
            <CSSTransition nodeRef={this.nodeRef} timeout={200} classNames='slide' in={this.props.focused}>
              <NavSearch ref={this.nodeRef} className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={this.props.focused ? 'focused search-icon' : 'search-icon'} />
            {this.GetListArea(this.props.focused)}
          </SearchWrapper>
          <Addition>
            <Button className='reg'>
              Sign Up
            </Button>
            <Button className='writting'>
              <FontAwesomeIcon icon={faPencil} />
              Write
            </Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }

  GetListArea() 
  {
    const pageList = [];
    for(let i = (this.props.page - 1) * 8; i < this.props.page * 8 && i < this.props.list.length; i++) {
      pageList.push(
        <SearchInfoItem key={i}>{this.props.list[i]}</SearchInfoItem>
      );
    }
    
    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>
            Popular Searches
            <SearchInfoSwitch onClick={() => this.props.handlePageChange(this.spinIcon)}>Switch</SearchInfoSwitch>
            <FontAwesomeIcon ref={(icon)=>{this.spinIcon = icon}} icon={faArrowsSpin} className='spin'/>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
    return null;
  }
}
 
const mapStateToProps = (state) => {

  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']).toJS(),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    count: state.getIn(['header', 'count']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: () => {
      dispatch(action_creaters.getSearchListDataAction());
      dispatch(action_creaters.createSearchFocusAction());
    },
    handleInputBlur: () => {
      dispatch(action_creaters.createSearchBlurAction());
    },
    handlePageChange: (spinIcon) => {
    spinIcon.style.transform = `rotate(${(spinIcon.style.transform === 'rotate(360deg)' ? 0 : 360)}deg)`
      dispatch(action_creaters.createChangePageAction(1));
    },
    handleMouseEnter: () => {
      dispatch(action_creaters.createMouseEnterAction());
    },
    handleMouseLeave: () => {
      dispatch(action_creaters.createMouseLeaveAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);