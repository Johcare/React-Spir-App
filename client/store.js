import {createStore , compse } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import root reduce
import rootReducer from './reducers/index';


import comments from './data/comments';
import posts from './data/posts';

//creating an object for  
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;