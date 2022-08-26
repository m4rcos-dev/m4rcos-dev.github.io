import { combineReducers } from  'redux';
import themeChange from './themeChange';
import colorChange from './colorChange';
import currentUrl from './currentUrl';
import currentScreen from './currentScreen';

const rootReducer = combineReducers ({
  themeChange,
  colorChange,
  currentUrl,
  currentScreen,
});

export default rootReducer;
