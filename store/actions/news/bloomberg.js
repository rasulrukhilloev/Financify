import { Actions } from "../../../constants/actions";

export const getNewsBloomberg = () => {
  return {
    type: Actions.GET_NEWS_BLOOMBERG,
    payload: {
      client: "newsClient",
      request: {
        url: "top-headlines?sources=bloomberg",
      },
    },
  };
};
