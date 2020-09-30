import { Actions } from "../../constants/actions";

export const getGainers = () => {
  return {
    type: Actions.GET_GAINERS,
    payload: {
      client: "default",
      request: {
        url: "stable/stock/market/list/gainers",
      },
    },
  };
};
