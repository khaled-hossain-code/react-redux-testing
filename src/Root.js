import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({children, initialState = {}}) => {
  const store = createStore(rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
