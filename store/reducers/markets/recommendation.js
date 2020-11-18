import { Actions } from "../../../constants/actions";

const initialState = {
  data: {},
  latestUpdate: null,
  load: null,
  error: false,
};

export const recommendation = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_RECOMMENDATION:
      return { ...state, latestUpdate: null, load: true, error: false };
    case Actions.GET_RECOMMENDATION_SUCCESS:
      const data = action.payload.data[0]
      return { ...state, latestUpdate: new Date(), load: false, data };
    case Actions.GET_RECOMMENDATION_FAIL:
      return {
        ...state,
        latestUpdate: null,
        load: false,
        error: "No results found.",
      };
    default:
      return { ...state };
  }
};
