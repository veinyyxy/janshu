import React, {Component} from "react";
import { Link } from 'react-router'; 
import { ListWrapper, ListItem, ListInfo, ArticleInfo } from "../home_style";
import { connect } from 'react-redux';
import { LoadMore } from "../home_style";
import {actionCreators} from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
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
                  <Link className="title" to="/detail">{item.get('title')}</Link>
                  <p className="desc">{item.get('description')}</p>
                </ListInfo>
                <ArticleInfo>
                  <div className="Author">{item.get("author")}</div>
                  <div className="CommentCount"><FontAwesomeIcon icon={faComment} /> {item.get("commentCount")}</div>
                  <div className="LikeCount"><FontAwesomeIcon icon={faHeart} /> {item.get("likeCount")}</div>
                </ArticleInfo>
              </ListItem>
            );
          })
        }
        {this.props.articleList.size === 0 && <div>Loading...</div>}
        <LoadMore onClick={this.props.getArticleList}>加载更多</LoadMore>
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
      dispatch(actionCreators.createArticleListAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
