import React, {Component} from "react";
import { TopicItem, TopicWrapper } from "../home_style";
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topiclist.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="item-img" src={item.get('imageUrl')} alt={item.get('title')} />
                {item.get('title')}
              </TopicItem>
            );
          })
        }
        {this.props.topiclist.size === 0 && <div>Loading...</div>}
      </TopicWrapper>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    topiclist: state.getIn(['home', 'topiclist'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch({ type: 'GET_TOPIC_LIST' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);