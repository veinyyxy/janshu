import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import {thunk} from 'redux-thunk';
import reducer from "./reducer";

const composeInhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeInhancers(
  applyMiddleware(thunk)
));

export default store;