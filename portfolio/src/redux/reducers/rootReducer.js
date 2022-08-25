import { combineReducers } from  'redux';
import themeChange from './themeChange';
import colorChange from './colorChange';
import currentUrl from './currentUrl';

const rootReducer = combineReducers ({
  themeChange,
  colorChange,
  currentUrl,
});

export default rootReducer;
