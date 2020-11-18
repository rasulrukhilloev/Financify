import { Actions } from "../../../constants/actions";

const initialState = {
  data: [],
  latestUpdate: null,
  loading: null,
  error: false,
};

export const financial_post = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_NEWS_FINANCIAL_POST:
      return { ...state, latestUpdate: null, loading: true, error: false };
    case Actions.GET_NEWS_FINANCIAL_POST_SUCCESS:
      const data_string = JSON.stringify(action.payload.data);
      const clone = JSON.parse(data_string);
      const data = clone.articles;
      return { ...state, latestUpdate: new Date(), loading: false, data };
    case Actions.GET_NEWS_FINANCIAL_POST_FAIL:
      return {
        ...state,
        latestUpdate: null,
        loading: false,
        error: "No results found.",
      };
    default:
      return state;
  }
};
