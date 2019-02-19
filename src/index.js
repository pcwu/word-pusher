import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Input from './containers/Input';
import Learn from './containers/Learn';
import reducers from './reducers';
import './css/index.css';

const initialState = {
  words: [],
  input: [],
};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router basename="/word-pusher">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/input" component={Input} />
          <Route path="/learn" component={Learn} />
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById('root'),
);
