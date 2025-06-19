import { fromJS } from "immutable";

const initialState = fromJS({
  topiclist: [],
  articleList: [],
  recommendList: [],
  writerInfo: [],
  showBackTop: false
});

const home_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOPIC_LIST":
      return state.set('topiclist', fromJS(action.payload));
      case "FETCH_HOME_DATA":
      return state.merge({
        articleList: fromJS(action.payload.articleList),
        topiclist: fromJS(action.payload.topicList),
        recommendList: fromJS(action.payload.recommendList),
        writerInfo: fromJS(action.payload.writerInfo)
      });
    case "GET_ARTICLE_LIST":
      return state.set('articleList', fromJS(action.payload));
    case "SHOW_BACKTOP_ACTION":
      return state.set('showBackTop', fromJS(action.value));
    default:
      return state;
    

  }
};

export default home_reducer;