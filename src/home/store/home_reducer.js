import { fromJS } from "immutable";

const initialState = fromJS({
  topiclist: [],
  articleList: [],
  recommendList: [],
  writerInfo: []
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
    default:
      return state;
  }
};

export default home_reducer;