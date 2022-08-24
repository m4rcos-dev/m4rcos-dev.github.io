import { CHANGE_THEME } from "../actions/actionsTypes";

const INITIAL_STATE = { currentTheme: '' };

const themeChange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        ...action.value
      }
    default:
      return state;
  }
}

export default themeChange;
