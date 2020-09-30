import { Actions } from "../../../constants/actions";

export const getNewsFortune = () => {
  return {
    type: Actions.GET_NEWS_FORTUNE,
    payload: {
      client: "newsClient",
      request: {
        url: "top-headlines?sources=fortune",
      },
    },
  };
};
