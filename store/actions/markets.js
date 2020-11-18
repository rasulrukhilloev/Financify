import { Actions } from "../../constants/actions";

export const getMostActive = () => {
  return {
    type: Actions.GET_MOST_ACTIVE,
    payload: {
      request: {
        client: "default",
        url: "stable/stock/market/list/mostactive",
      },
    },
  };
};

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
