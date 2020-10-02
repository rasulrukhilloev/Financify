import { Actions } from "../../../constants/actions";

const initialState = {
  data: {},
  latestUpdate: null,
  loading: null,
  error: false,
};

export const ipo = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CALENDAR_IPO:
      return { ...state, latestUpdate: null, loading: true, error: false };
    case Actions.GET_CALENDAR_IPO_SUCCESS:
      data = action.payload.data.ipoCalendar.reduce(
        (a, v) => ((a[v.date] = a[v.date] || []).push(v), a),
        {}
      );
      return { ...state, latestUpdate: new Date(), loading: false, data };
    case Actions.GET_CALENDAR_IPO_FAIL:
      return {
        ...state,
        latestUpdate: null,
        loading: false,
        error: "No results found.",
      };
    default:
      return { ...state };
  }
};
