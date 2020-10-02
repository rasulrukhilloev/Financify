import { Actions } from "../../constants/actions";

export const getIPO = (dateFrom, dateTo) => {
  return {
    type: Actions.GET_CALENDAR_IPO,
    payload: {
      client: "finnhub",
      request: {
        url: `calendar/ipo?from=${dateFrom}&to=${dateTo}`,
      },
    },
  };
};
