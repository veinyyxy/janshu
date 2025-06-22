import { Map } from 'immutable';
import header_reducer from "../common/header/header_reducer";
import { home_reducer } from "../home/store";
import {detail_reducer} from '../detail/store';
import { login_reducer } from '../login/store';

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
  home: home_reducer,
  detail: detail_reducer,
  login: login_reducer
});

export default rootReducer;
