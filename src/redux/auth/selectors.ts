import { createSelector } from "@reduxjs/toolkit";
import { IState } from "./authSlice";

const selectAuth = (state: { auth: IState }) => state.auth;

export const selectAuthToken = createSelector(selectAuth, (auth) => auth.token);

export const selectCurrentUser = createSelector(
  selectAuth,
  (auth) => auth.user
);

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth) => auth.authenticated
);

export const selectAuthIsLoading = createSelector(
  selectAuth,
  (auth) => auth.isLoading
);
