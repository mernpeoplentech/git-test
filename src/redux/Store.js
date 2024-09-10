import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./TodoSlice";
export default configureStore({
  reducer: {
    todo: todoReducers,
  },
});
