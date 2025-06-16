import React, {Component} from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./home_style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic"; 
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

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
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.FetchData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  FetchData: () => {
    const action = actionCreators.createHomeDataAction();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(Home);
