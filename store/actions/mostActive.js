import { Actions } from "../../constants/actions";

export const getMostActive = () => {
  return {
    type: Actions.GET_MOST_ACTIVE,
    payload: {
      request: {
        client: "stockClient",
        url: "stable/stock/market/list/mostactive",
      },
    },
  };
};
