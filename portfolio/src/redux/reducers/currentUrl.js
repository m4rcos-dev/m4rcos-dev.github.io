import { CURRENT_URL } from "../actions/actionsTypes";

const INITIAL_STATE = { currentUrl: '/' };

const currentUrl = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_URL:
      return {
        ...state,
        ...action.value
      };
    default:
      return state;
  }
}

export default currentUrl;
