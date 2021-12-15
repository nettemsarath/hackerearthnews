import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "slices/news";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  devTools: true,
});
export default store;
