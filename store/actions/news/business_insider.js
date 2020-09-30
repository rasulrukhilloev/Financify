import { Actions } from "../../../constants/actions";

export const getNewsBusinessInsider = () => {
  return {
    type: Actions.GET_NEWS_BUSINESS_INSIDER,
    payload: {
      client: "newsClient",
      request: {
        url: "top-headlines?sources=business-insider",
      },
    },
  };
};
