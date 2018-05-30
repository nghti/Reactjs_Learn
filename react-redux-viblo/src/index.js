import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers/rootReducers';

const initialState = {}

const store = createStore(rootReducer, initialState);

const AppRoot = (
  <Provider store={store}>
    <div>
      <TodoApp />
    </div>
  </Provider>
)

ReactDOM.render(AppRoot, document.getElementById('root'));
