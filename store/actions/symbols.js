import { Actions } from "../../constants/actions";

export const getSymbols = () => {
  return {
    type: Actions.GET_SYMBOLS,
    payload: {
      request: {
        client: "default",
        url: "stable/ref-data/symbols",
      },
    },
  };
};
