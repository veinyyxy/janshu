import { Map } from 'immutable';
import header_reducer from "../common/header/header_reducer";
import home_reducer from "../home/store/home_reducer";

function combineReducersImmutable(reducers) {
  return (state = Map(), action) => {
    let hasChanged = false;
    const nextState = Object.keys(reducers).reduce((acc, key) => {
      const prevStateForKey = state.get(key);
      const nextStateForKey = reducers[key](prevStateForKey, action);
      hasChanged = hasChanged || prevStateForKey !== nextStateForKey;
      return acc.set(key, nextStateForKey);
    }, Map());
    return hasChanged ? nextState : state;
  };
}

const rootReducer = combineReducersImmutable({
  header: header_reducer,
  home: home_reducer
});

export default rootReducer;
///////////////////////////////////////////////////////////////////////////////////////
/*
import header_reducer from "../common/header/header_reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  header: header_reducer
});

export default rootReducer;
*/
//////////////////////////////////////////////////////////////////////////////////////

/*
const initialState = {
  focused: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FOCUS':
      return {
        ...state,
        focused: true
      };
    case 'SEARCH_BLUR':
      return {
        ...state,
        focused: false
      };
    default:
      return state;
  }
};

export default reducer;*/
