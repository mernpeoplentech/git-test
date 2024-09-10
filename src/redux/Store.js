import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./TodoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, todoReducers);
export const store = configureStore({
  reducer: {
    todo: persistedReducer,
  },
});

export const persistor = persistStore(store);
