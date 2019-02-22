import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

import App from './App';
import Router from './Router';
import reducers from './redux/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Router/>
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
serviceWorker.register();
