import React, {Component} from "react";
import { ListWrapper, ListItem, ListInfo } from "../home_style";
import { connect } from 'react-redux';
class List extends Component {
  render() {
    return (
      <ListWrapper>
        {
          this.props.articleList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="item-img" src={item.get('imageUrl')} alt={item.get('title')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('description')}</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
        {this.props.articleList.size === 0 && <div>Loading...</div>}
      </ListWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList() {
      dispatch({ type: 'GET_ARTICLE_LIST' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
