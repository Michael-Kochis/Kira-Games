import { combineReducers } from 'redux';

import { storyReducer } from './storyReducer'

const primeReducer = combineReducers({
    story: storyReducer
});

export {
    primeReducer
}