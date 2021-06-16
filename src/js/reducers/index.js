import { combineReducers } from 'redux';

import { merchantReducer } from './merchantReducer';
import { storyReducer } from './storyReducer';

const primeReducer = combineReducers({
    merchant: merchantReducer,
    story: storyReducer
});

export {
    primeReducer
}