import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { rootReducers } from "./reducers/index";

import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["apiProductSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
setupListeners(store.dispatch);
export { store };
