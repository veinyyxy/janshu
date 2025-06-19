import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from "./home_style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic"; 
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Home extends Component {
  render() {
    return ( 
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-image" src="/home_page.jpg" alt="Home" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        <BackToTop hidden = {!this.props.showBackTop}>
          <i className="icon" onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faAngleUp} />
          </i>
        </BackToTop>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.FetchData();
    window.addEventListener('scroll', this.props.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

}

const mapStateToProps = (state) => {
  return {
    showBackTop : state.getIn(["home", "showBackTop"])
  }
}

const mapDispatchToProps = (dispatch) => ({
  FetchData: () => {
    const action = actionCreators.createHomeDataAction();
    dispatch(action);
  },

  handleScroll : () => {
    if (window.scrollY > 200) {
      dispatch(actionCreators.createShowBacktopAction(true));
    } else {
      dispatch(actionCreators.createShowBacktopAction(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
