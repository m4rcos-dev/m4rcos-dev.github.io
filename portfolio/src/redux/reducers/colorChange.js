import { CHANGE_COLOR } from "../actions/actionsTypes";

const INITIAL_STATE = {
  colorChange: localStorage.getItem('currentColor') === null
  ? 'alternateColor.orange'
  : localStorage.getItem('currentColor')
};

const colorChange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        ...action.value
      };
    default:
      return state;
  }
}

export default colorChange;
