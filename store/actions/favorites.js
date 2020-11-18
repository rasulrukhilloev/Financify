import { Actions } from "../../constants/actions";

export const clearFavorites = () => {
  return {
    type: Actions.CLEAR_FAVORITES,
  };
};

export const getFavorites = (symbols) => {
  return {
    type: Actions.GET_FAVORITES,
    payload: {
      client: "default",
      request: {
        url: `stable/stock/market/batch?symbols=${symbols.join()}&types=quote`,
      },
    },
  };
};

export const toggleFavorite = (stock) => {
  return {
    type: Actions.TOGGLE_FAVORITE,
    payload: stock,
  };
};
