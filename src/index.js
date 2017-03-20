import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
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

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/input" component={Input} />
        <Route path="/learn" component={Learn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
