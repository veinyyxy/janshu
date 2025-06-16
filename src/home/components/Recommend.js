import React, {Component} from "react";
import { RecommendWrapper, RecommendItem } from "../home_style";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.recommendList.map((item) => {
            return (
              <RecommendItem key={item.get('id')}>
                <img className="item-img" src={item.get('imageUrl')} alt={item.get('title')} />
              </RecommendItem>
            );
          })
        }
        {this.props.recommendList.size === 0 && <div>Loading...</div>}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendList() {
      dispatch({ type: 'GET_RECOMMEND_LIST' });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
