
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from 'reducers/reducer';
// import 'sanitize.css/sanitize.css';

// Import root app
import App from 'components/App';
import TaskApp from 'components/TaskApp';

let subArray = [];
let deleted = false;


const InitialState = {
  showDone: true,
  categories: [],
  searchValue: ''
}; 

let statesHistory = [];
let undoStep = 0;





const store = createStore(reducer, applyMiddleware(thunk));
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
          <Router>
            <Switch>
              <Route path = '/:categoryID/:taskId/edit' component = {TaskApp} />
              <Route component={App} />
            </Switch>
          </Router>
    </Provider>,
    MOUNT_NODE
  );
};

render();


// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
