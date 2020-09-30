import { Actions } from "../../../constants/actions";

export const getNewsFinancialPost = () => {
  return {
    type: Actions.GET_NEWS_FINANCIAL_POST,
    payload: {
      client: "newsClient",
      request: {
        url: "everything?sources=financial-post",
      },
    },
  };
};
