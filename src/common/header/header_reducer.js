import * as constant from "./constant";
import { fromJS } from 'immutable';

const initialState = fromJS({
  focused: false
});

const header_reducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SEARCH_FOCUS:
      return state.set('focused', true);
    case constant.SEARCH_BLUR:
      return state.set('focused', false);
    default:
      return state;
  }
};

export default header_reducer;
