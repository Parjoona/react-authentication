import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

import App from './App';
import Router from './Router';
import reducers from './redux/reducers';

const store = createStore(
  reducers, 
  {
    auth: {
      authenticated: localStorage.getItem('tokenFromCourse')
    }
  },
  applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Router/>
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
serviceWorker.register();
