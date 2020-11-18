import { Actions } from "../../constants/actions";

export const setSymbol = (symbol) => {
  return {
    type: Actions.SET_SYMBOL,
    payload: symbol,
  };
};
