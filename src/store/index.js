import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './reducers/postsReducer';

const reducers = combineReducers({
    posts: postsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;