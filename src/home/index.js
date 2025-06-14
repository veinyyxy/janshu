import React, {Component} from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./home_style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic"; 
import Writer from "./components/Writer";

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
}

export default Home;
