import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IForms } from "../../types";

export const adminInstance = axios.create({
  baseURL: "https://admin-dashboard-backend-d6oa.onrender.com/api",
});

const setAccessToken = (accessToken: string) => {
  adminInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const setRefreshToken = (refreshToken: string) => {
  adminInstance.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

export const refreshTokensApi = async (oldRefreshToken: string) => {
  const response = await adminInstance.post("user/refresh-token", {
    token: oldRefreshToken,
  });
  return response.data;
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

    const accessToken = state.auth.accessToken;
    const refreshToken = state.auth.refreshToken;
    try {
      accessToken && setAccessToken(accessToken);
      refreshToken && setRefreshToken(refreshToken);
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

      if (!accessToken || !refreshToken) return false;
      return true;
    },
  }
);

export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshTokens",
  async (_, thunkApi) => {
    try {
      const currentState = thunkApi.getState() as RootState;
      const oldRefreshToken = currentState.auth.refreshToken;

      if (oldRefreshToken) {
        const response = await refreshTokensApi(oldRefreshToken);
        const { accessToken, refreshToken } = response;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        return response;
      } else {
        throw new Error("Refresh token is missing");
      }
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message || "An error occurred");
    }
  }
);
