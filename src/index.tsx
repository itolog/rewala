import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { rootStore as store } from "./store";

import './index.css';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App/>
=======
      <App/>
>>>>>>> origin/link
  </Provider>
  , document.getElementById('root')
);
