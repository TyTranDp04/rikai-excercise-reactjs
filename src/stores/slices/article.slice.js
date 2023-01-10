import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleState: {
    data: null,
    loading: false,
    error: null,
  },
};
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticleAction(state, action) {
      state.articleState = {
        ...state.articleState,
        loading: true,
      };
    },
    getArticleActionSuccess(state, action) {
      const data = action.payload;
      state.articleState = {
        ...state.articleState,
        loading: false,
        data,
      };
    },
    getArticleActionFailed(state, action) {
      state.articleState = {
        ...state.articleState,
        loading: false,
        error: action.payload,
      };
    },
  },
});
export const {
  getArticleAction,
  getArticleActionSuccess,
  getArticleActionFailed,
} = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
