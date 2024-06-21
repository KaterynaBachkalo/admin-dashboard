import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IForms } from "../../types";

export const adminInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Utility to add JWT
const setAccessToken = (accessToken: string) => {
  adminInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const setRefreshToken = (refreshToken: string) => {
  adminInstance.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

export const refreshTokensApi = async (oldRefreshToken: string) => {
  const { data } = await axios.post("user/refresh-token", {
    refreshToken: oldRefreshToken,
  });
  return data;
};

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (formData: IForms, thunkAPI) => {
    try {
      const response = await adminInstance.post("/user/login", formData);
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await adminInstance.post("/user/logout");
      // clearToken();
      return;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    // const token = state.auth.token;
    const accessToken = state.auth.accessToken;
    const refreshToken = state.auth.refreshToken;

    try {
      // setToken(token);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      const response = await adminInstance.get("/user/user-info");

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const accessToken = state.auth.accessToken;
      const refreshToken = state.auth.refreshToken;

      if (!accessToken) return false;
      if (!refreshToken) return false;
      return true;
    },
  }
);

export const refreshTokensThunk = createAsyncThunk(
  "auth/refreshTokens",
  async (_, thunkApi) => {
    try {
      const currentState: any = thunkApi.getState() as RootState;
      const oldRefreshToken = currentState.auth.refreshToken;

      if (oldRefreshToken !== null) {
        const response = await refreshTokensApi(oldRefreshToken);
        // const { token } = response;
        console.log(response);
        // setToken(token);
        // setAccessToken(accessToken);
        // setRefreshToken(refreshToken);
        // return response;
      }
    } catch (error) {
      // const errorObj = handleApiError(error);
      // return thunkApi.rejectWithValue(errorObj);
    }
  }
);
