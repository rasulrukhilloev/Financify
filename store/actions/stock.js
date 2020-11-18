import { Actions } from "../../constants/actions";

export const getStock = (symbol, range) => {
  return {
    type: Actions.GET_STOCK,
    payload: {
      range: range,
      client: "default",
      request: {
        url: `stable/stock/${symbol}/batch?types=quote,news,chart&range=${range.query}&chartInterval=${range.interval}`,
      },
    },
  };
};

export const getStockChart = (symbol, range) => {
  return {
    type: Actions.GET_STOCK_CHART,
    payload: {
      range: range,
      client: "default",
      request: {
        url: `stable/stock/${symbol}/batch?types=quote,news,chart&range=${range.query}&chartInterval=${range.interval}`,
      },
    },
  };
};

export const getRecommendation = (symbol) => {
  return {
    type: Actions.GET_RECOMMENDATION,
    payload: {
      client: "finnhub",
      request: {
        url: `stock/recommendation/?symbol=${symbol}`
      },
    },
  };
};


