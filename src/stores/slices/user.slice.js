import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { USER_INFO_KEY } from "../../constants";

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY)
  ? JSON.parse(localStorage.getItem(USER_INFO_KEY))
  : null;

const initialState = {
  userInfoState: {
    data: userInfoFromStorage,
    loading: false,
    error: null,
  },
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginAction(state, action) {
      localStorage.removeItem(USER_INFO_KEY);
      state.userInfoState = {
        ...state.userInfoState,
        loading: true,
      };
    },
    loginActionSuccess(state, action) {
      const data = action.payload;
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(data));
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        data,
      };
    },
    loginActionFailed(state, action) {
      localStorage.removeItem(USER_INFO_KEY);
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        error: toast.error(action.payload),
      };
    },

    logoutAction(state, action) {
      localStorage.removeItem(USER_INFO_KEY);
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        data: null,
      };
    },
    registerAction(state, action) {
      state.userInfoState = {
        ...state.userInfoState,
        loading: true,
      }
    },
    registerActionSuccess(state, action) {
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        error: null,
        data: toast.success(action.payload)
      }
    },
    registerActionFailed(state, action) {
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        error: toast.error(action.payload),
      }
    },
    getUserAction(state, action) {
      state.userInfoState = {
        ...state.userInfoState,
        loading: true,
      };
    },
    getUserActionSuccess(state, action) {
      const data = action.payload;
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
        data,
      };
    },
    getUserActionFailed(state, action) {
      state.userInfoState = {
        ...state.userInfoState,
        loading: false,
      };
    },
  },
});
export const {
  loginAction,
  loginActionSuccess,
  loginActionFailed,
  logoutAction,
  getUserAction,
  getUserActionSuccess,
  getUserActionFailed,
  registerAction,
  registerActionSuccess,
  registerActionFailed
} = userSlice.actions;
export const userReducer = userSlice.reducer;
