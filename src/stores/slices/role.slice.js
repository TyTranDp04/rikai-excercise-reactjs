import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roleState: {
    data: null,
    loading: false,
    error: null,
  },
};
const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    getRoleAction(state, action) {
      state.roleState = {
        ...state.roleState,
        loading: true,
      };
    },
    getRoleActionSuccess(state, action) {
      const data = action.payload;
      state.roleState = {
        ...state.roleState,
        loading: false,
        data,
      };
    },
    getRoleActionFailed(state, action) {
      state.roleState = {
        ...state.roleState,
        loading: false,
        error: action.payload,
      };
    },
  },
});
export const {
  getRoleAction,
  getRoleActionSuccess,
  getRoleActionFailed,
} = roleSlice.actions;
export const roleReducer = roleSlice.reducer;
