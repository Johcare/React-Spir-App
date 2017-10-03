import React from 'react';
import { render } from 'react-dom';
// Import css
import css from './styles/style.styl';





// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';




// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// IMORTING RAVEN.JS
import Raven from 'raven-js';
import  {sentry_url} from './data/config';

Raven.config('https://297beb4a54aa4cf5ac7486c5d2381b01@sentry.io/225498').install();
console.log(window.onload);

Raven.context(function() {
  initMyApp();
});



const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
