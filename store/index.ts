import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';

import { reducer as example } from './example';

declare global {// Add Redux Dev Tool Property into Window Object
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
};

const appReducer = combineReducers({
  example
});

let store: Store;
if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(appReducer, composeEnhancers(applyMiddleware()));//middleWare 추가
} else {
  store = createStore(appReducer, applyMiddleware());//middleWare 추가
}


export default store;