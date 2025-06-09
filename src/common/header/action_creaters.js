import * as constant from "./constant";
import axios from 'axios';

export function createSearchFocusAction () {
  return {
    type: constant.SEARCH_FOCUS
  };
}

export function createSearchBlurAction() {
    return {
        type: constant.SEARCH_BLUR
    };
}

function changeListData(data) {
  return {
    type: constant.GET_SEARCH_LIST,
    payload: data,
    totalPage: Math.ceil(data.length / 8)
  };
}

export function createChangePageAction(count) {
  return {
    type: constant.CHANGE_PAGE,
    count: count
  };
}

export function getSearchListDataAction() {
  return (dispatch) => {
    axios.get('http://localhost:5223/TestServices/GetListData')
      .then((response) => {
        const data = response.data.isSuccess ? response.data.items : [];
        dispatch(changeListData(data));
      })
      .catch((error) => {
        console.error('Error fetching search list data:', error);
      });
  };
}

export function createMouseEnterAction() {
  return {
    type: constant.MOUSE_ENTER
  };
}

export function createMouseLeaveAction() {
  return {
    type: constant.MOUSE_LEAVE
  };
}