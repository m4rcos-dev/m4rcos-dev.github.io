import { CURRENT_SCREEN } from "../actions/actionsTypes";

const INITIAL_STATE = {
  currentScreen: {
    width: window.screen.width, height: window.screen.height
  }
};

const currentScreen = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_SCREEN:
      return {
        ...state,
        ...action.value
      };
    default:
      return state;
  }
}

export default currentScreen;
