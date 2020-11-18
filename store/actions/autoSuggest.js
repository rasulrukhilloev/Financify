import { Actions } from "../../constants/actions";

export const showAutoSuggest = (symbol) => {
  return {
    type: Actions.SHOW_AUTOSUGGEST,
    payload: symbol,
  };
};
