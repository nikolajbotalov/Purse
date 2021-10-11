import { createStore, compose, combineReducers } from 'redux';
import balanceReducer from './reducers/balanceReducer';

const reducers = combineReducers({
  balanceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

window.store = store;

export default store;
