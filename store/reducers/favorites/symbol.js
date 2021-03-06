import { Actions } from "../../../constants/actions";

const initialState = "";

export const symbol = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SYMBOL:
      return action.payload;
    default:
      return state;
  }
};
