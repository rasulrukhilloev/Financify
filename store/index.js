import axios from "axios";
import axiosMiddleware, { multiClientMiddleware } from "redux-axios-middleware";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import reducers from "./reducers";
//import { API_KEY } from "react-native-dotenv";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

// const client = axios.create({
//   baseURL: "https://sandbox.iexapis.com",
//   responseType: "json",
//   params: {
//     token: "Tpk_276212fa09cb4b8c93b65c37fb9297cc",
//   },
// });
const clients = {
  default: {
    client: axios.create({
      baseURL: "https://sandbox.iexapis.com",
      responseType: "json",
      params: {
        token: "Tpk_276212fa09cb4b8c93b65c37fb9297cc",
      },
    }),
  },
  newsClient: {
    client: axios.create({
      baseURL: "https://newsapi.org/v2",
      responseType: "json",
      params: {
        apiKey: "c9e36bb4c6e74895985ceb146f80fa7c",
      },
    }),
  },
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(multiClientMiddleware(clients))
);
const persistor = persistStore(store);

export default { store, persistor };
