import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "services/news";

export const fetchnewsData = createAsyncThunk("news/get", async () => {
  const newsdata = await getNews();
  return newsdata;
});

const initialData = {
  loading: false,
  AllNews: [],
  error: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchnewsData.pending, (state, action) => {
        console.log("HIIII pending");
        state.loading = true;
      })
      .addCase(fetchnewsData.fulfilled, (state, action) => {
        console.log("HIIII fulfilled", action.payload);
        state.loading = false;
        state.AllNews = action.payload;
      })
      .addCase(fetchnewsData.rejected, (state, action) => {
        console.log("HIIII fulfilled", action.payload);
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
