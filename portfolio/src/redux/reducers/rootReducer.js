import { combineReducers } from  'redux';
import themeChange from './themeChange';
import colorChange from './colorChange';

const rootReducer = combineReducers ({
  themeChange,
  colorChange,
});

export default rootReducer;
