import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';

import Shici from './Shici';
import Hitokoto from './Hitokoto';
import Jrsc from './Jrsc';


const rootReducer = combineReducers({
    Shici,
    Hitokoto,
    Jrsc,
});


export default rootReducer;
