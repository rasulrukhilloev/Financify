import { Actions } from "../../../constants/actions";

const initialState = {
  data: {},
  latestUpdate: null,
  loading: null,
  error: false,
};

export const economic = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CALENDAR_ECONOMIC:
      return { ...state, latestUpdate: null, loading: true, error: false };
    case Actions.GET_CALENDAR_ECONOMIC_SUCCESS:
      data2 = action.payload.data.economicCalendar;
      for (var i = 0; i < data2.length; i++) {
        var datetime = data2[i].time.split(" ");
        var date = datetime[0];
        var time = datetime[1];
        data2[i].time = time;
        data2[i].date = date;
      }
      data = data2.reduce(
        (a, v) => ((a[v.date] = a[v.date] || []).push(v), a),
        {}
      );
      return {
        ...state,
        latestUpdate: new Date(),
        loading: false,
        data,
      };
    case Actions.GET_CALENDAR_ECONOMIC_FAIL:
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
