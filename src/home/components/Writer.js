import React, {Component} from "react";
import { WriterWrapper, WriterItem } from "../home_style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin, faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        <div className="title">
          <div className="left-text">推荐作者</div>
          <div className="right-text">换一批</div>
          <FontAwesomeIcon ref={(icon)=>{this.spinIcon = icon}} icon={faArrowsSpin} className='spin'/>
        </div>
        <WriterItem>
          {
            this.props.writerInfo.map((item) => {
              return (
                <li key={item.get('id')}>
                  <img className="item-img" src={item.get('imageUrl')} alt={item.get('name')} />
                  <div className="item-info">
                    <div className="item-name">{item.get('name')}</div>
                    <div className="item-follow">
                      <FontAwesomeIcon icon={faPlus} />
                      关注</div>
                  </div>
                  <p className="item-desc">{item.get('description')}</p>
                </li>
              );
            })
          }
          {this.props.writerInfo.size === 0 && <div>Loading...</div>}
        </WriterItem>
      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    writerInfo: state.getIn(['home', 'writerInfo'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWriterInfo() {
      dispatch({ type: 'GET_WRITER_INFO' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
