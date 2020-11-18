import { Actions } from "../../constants/actions";

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

export const getNewsWallStreetJournal = () => {
  return {
    type: Actions.GET_NEWS_WALL_STREET_JOURNAL,
    payload: {
      client: "newsClient",
      request: {
        url: "top-headlines?sources=the-wall-street-journal",
      },
    },
  };
};
