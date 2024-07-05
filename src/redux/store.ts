import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./admin/adminSlice";
import { filterReducer } from "./filterSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer, resetToken } from "./auth/authSlice";
import { adminInstance, refreshTokenThunk } from "./auth/operations";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  admin: adminReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

adminInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const { accessToken } = state.auth;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminInstance.interceptors.response.use(
  function (response): any {
    return response;
  },
  async function (error) {
    if (error.response.data.message === "Invalid refresh token") {
      store.dispatch(resetToken(store.getState()));
      return;
    }

    if (error.response.status === 401) {
      try {
        const refreshToken = store.getState().auth.refreshToken;

        if (!refreshToken) {
          return;
        }

        const isRefreshTokenFail = await store.dispatch(refreshTokenThunk());

        if (isRefreshTokenFail.payload.errorCode === 500) {
          store.dispatch(resetToken(store.getState()));

          return;
        }

        if (isRefreshTokenFail.type === "auth/refreshTokens/rejected") {
          // console.error("Refresh token Error");

          return;
        }

        const newToken = store.getState().auth.refreshToken;
        error.config.headers.Authorization = `Bearer ${newToken}`;

        return adminInstance(error.config);
      } catch (refreshError) {
        return refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
