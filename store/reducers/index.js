import { combineReducers } from "redux";

import { stock } from "./stock";
import { symbol } from "./symbol";
import { symbols } from "./symbols";
// import { tabs } from "./tabs";
import { favorites } from "./favorites";
import { autoSuggest } from "./autoSuggest";
// import { sectors } from './sectors'
import { gainers } from "./gainers";
import { losers } from "./losers";
import { mostActive } from "./mostActive";
// import { crypto } from './crypto'

import { bloomberg } from "./news/bloomberg";
import { business_insider } from "./news/business_insider";
import { financial_post } from "./news/financial_post";
import { wall_street_journal } from "./news/wall_street_journal";
import { fortune } from "./news/fortune";

export default combineReducers({
  stock,
  symbol,
  symbols,
  // tabs,
  favorites,
  autoSuggest,
  // sectors,
  gainers,
  losers,
  mostActive,
  // crypto
  bloomberg,
  business_insider,
  financial_post,
  wall_street_journal,
  fortune,
});
