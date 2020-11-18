import { combineReducers } from "redux";

import { stock } from "./markets/stock";
import { symbol } from "./favorites/symbol";
import { symbols } from "./favorites/symbols";
import { favorites } from "./favorites/favorites";
import { autoSuggest } from "./favorites/autoSuggest";

import { gainers } from "./markets/gainers";
import { losers } from "./markets/losers";
import { mostActive } from "./markets/mostActive";

import { bloomberg } from "./news/bloomberg";
import { business_insider } from "./news/business_insider";
import { financial_post } from "./news/financial_post";
import { wall_street_journal } from "./news/wall_street_journal";
import { fortune } from "./news/fortune";

import { ipo } from "./calendars/ipo";
import { earnings } from "./calendars/earnings";
import { economic } from "./calendars/economic";

import { recommendation } from "./markets/recommendation";

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
  earnings,
  economic,

  recommendation
});
