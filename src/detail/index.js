import React, {Component} from "react";
import { DetialWrapper, Header, ArticleInfo } from "./detail_style";
import { connect } from "react-redux";
class Detail extends Component {
  render() {
    return (
      <DetialWrapper>
        <Header>{this.props.title}</Header>
        <ArticleInfo>
          <div>
            <img className = 'head-image' src={this.props.headimage} alt={this.props.articleInfo_writer}></img>
          </div>
          <div>
            <div className='info'>
              <span>{this.props.articleInfo_writer}</span>
              <button className="button-style">关注</button>
              <span className="position-style">{this.props.articleInfo_position}</span>
            </div>
            <div className="info2">
              <time dateTime="2025-06-11T06:38:34.000Z">{this.props.articleInfo_time}</time>
              <span>字数{this.props.articleInfo_wordnumber}</span>
              <span>阅读{this.props.articleInfo_readnumber}</span>
            </div>
          </div>
        </ArticleInfo>
        <article className='article-style' dangerouslySetInnerHTML={{__html:this.props.content}}>
        </article>
      </DetialWrapper>
    );
  }

  showImage = () => {
    document.getElementById('modal').classList.add('show');
  }

  hideImage = () => {
    document.getElementById('modal').classList.remove('show');
  }

}

const mapStateToProps = (state) => {
  return {
    title : state.getIn(["detail", "title"]),
    headimage: state.getIn(["detail", "headimage"]),
    articleInfo_writer: state.getIn(["detail", "articleInfo", 'writer']),
    articleInfo_position: state.getIn(["detail", "articleInfo", 'position']),
    articleInfo_time: state.getIn(["detail", "articleInfo", 'time']),
    articleInfo_wordnumber: state.getIn(["detail", "articleInfo", 'wordnumber']),
    articleInfo_readnumber: state.getIn(["detail", "articleInfo", 'readnumber']),
    content: state.getIn(["detail", "content"])
  }
}

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

