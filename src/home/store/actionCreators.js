import axios from 'axios';

export const createHomeDataAction = () => {
    return (dispatch) => {
      const action = {
        type: 'FETCH_HOME_DATA',
        payload: {
          articleList: [],
          topicList: [],
          recommendList: [],
          writerInfo: []
        }
      };

      axios.get('http://localhost:5223/TestServices/GetHomeData')
      .then((response) => {
        const data = response.data;
        if (data.isSuccess) {
            action.payload.articleList = data.articles;
            action.payload.topicList = data.topics;
            action.payload.recommendList = data.recommends;
            action.payload.writerInfo = data.writers;
    
            dispatch(action);
        }
      })
      .catch((error) => {
        console.error("Error fetching home data:", error);
      });

    };
  };

export const createArticleListAction = () => {
    return (dispatch) => {
      const action = {
        type: 'GET_ARTICLE_LIST',
        payload: []
      };

      axios.get('http://localhost:5223/TestServices/GetArticleList')
      .then((response) => {
        const data = response.data;
        console.log("Fetched article list:", data);
        if (data.length > 0) {
            action.payload = data;
            dispatch(action);
        }
      })
      .catch((error) => {
        console.error("Error fetching article list:", error);
      });
    };
  }

  export const createShowBacktopAction = (isShow) => {
    const action = {
        type: 'SHOW_BACKTOP_ACTION',
        value: isShow
    };
    return action;
}