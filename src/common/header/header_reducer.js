import * as constant from "./constant";
import { fromJS } from 'immutable';

const initialState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
  count: 1
});

const header_reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SEARCH_FOCUS:
      return state.set('focused', true);
    case constant.SEARCH_BLUR:
      return state.set('focused', false);
    case constant.GET_SEARCH_LIST:
      return state.set('list', fromJS(action.payload)).set('totalPage', action.totalPage).set('page', 1);
    case constant.CHANGE_PAGE:
      state = state.set('count', action.count);
      const currentPage = state.get('page');
      const newPage = currentPage + action.count;
      if (newPage > state.get('totalPage')) {
        return state.set('page', 1);
      }
      else
      {
        return state.set('page', newPage);
      }
    case constant.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constant.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    default:
      return state;
  }
};

export default header_reducer;
