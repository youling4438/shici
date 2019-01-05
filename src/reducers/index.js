import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';

import Shici from './Shici';
import Hitokoto from './Hitokoto';


const rootReducer = combineReducers({
    Shici,
    Hitokoto,
});


export default rootReducer;
