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

export const getEarnings = (dateFrom, dateTo) => {
  return {
    type: Actions.GET_CALENDAR_EARNINGS,
    payload: {
      client: "finnhub",
      request: {
        url: `calendar/earnings?from=${dateFrom}&to=${dateTo}`,
      },
    },
  };
};

export const getEconomic = (dateFrom, dateTo) => {
  return {
    type: Actions.GET_CALENDAR_ECONOMIC,
    payload: {
      client: "finnhub",
      request: {
        url: `calendar/economic?from=${dateFrom}&to=${dateTo}`,
      },
    },
  };
};
