import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import budgetReducer from './reducers/budgetReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  budgetReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
