import { createStore, compose, combineReducers } from 'redux';
import budgetReducer from './reducers/budgetReducer';

const reducers = combineReducers({
  budgetReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

window.store = store;

export default store;
