import { combineReducers } from "redux";

import { stock } from "./stock";
import { symbol } from "./symbol";
import { symbols } from "./symbols";
import { favorites } from "./favorites";
import { autoSuggest } from "./autoSuggest";

import { gainers } from "./markets/gainers";
import { losers } from "./markets/losers";
import { mostActive } from "./markets/mostActive";

import { bloomberg } from "./news/bloomberg";
import { business_insider } from "./news/business_insider";
import { financial_post } from "./news/financial_post";
import { wall_street_journal } from "./news/wall_street_journal";
import { fortune } from "./news/fortune";

import { ipo } from "./calendars/ipo";

export default combineReducers({
  stock,
  symbol,
  symbols,
  favorites,
  autoSuggest,

  gainers,
  losers,
  mostActive,

  bloomberg,
  business_insider,
  financial_post,
  wall_street_journal,
  fortune,

  ipo,
});
