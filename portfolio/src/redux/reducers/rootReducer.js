import { combineReducers } from  'redux';
import themeChange from './themeChange';
import colorChange from './colorChange';
import currentUrl from './currentUrl';
import currentScreen from './currentScreen';
import activeTransition from './activeTransition';

const rootReducer = combineReducers ({
  themeChange,
  colorChange,
  currentUrl,
  currentScreen,
  activeTransition,
});

export default rootReducer;
