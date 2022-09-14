import { ACTIVE_TRANSITION } from "../actions/actionsTypes";

const INITIAL_STATE = {
  isTransition: false,
};

const activeTransition = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVE_TRANSITION:
      return {
        ...state,
        isTransition: action.value,
      };
    default:
      return state;
  }
}

export default activeTransition;
