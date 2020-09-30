import { Actions } from "../../constants/actions";

export const getLosers = () => {
  return {
    type: Actions.GET_LOSERS,
    payload: {
      request: {
        client: "default",
        url: "stable/stock/market/list/losers",
      },
    },
  };
};
