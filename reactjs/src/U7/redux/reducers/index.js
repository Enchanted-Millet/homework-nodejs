import { combineReducers } from 'redux';

import dataReducer from './data';
import userReducer from './user';

export default combineReducers({
    hw4: userReducer,
    hw5: dataReducer
});
