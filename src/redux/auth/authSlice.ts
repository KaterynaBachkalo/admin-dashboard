import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  registerThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
} from "./operations";
import { toast } from "react-toastify";

export interface IState {
  token: string;
  user: {
    email: string | null;
    name: string | null;
  };
  authenticated: boolean;
  isLoading: boolean;
  error: any | null;
}

const handlePending = (state: IState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: IState, action: PayloadAction<any | null>) => {
  state.isLoading = false;
  state.error = action.payload;

  if (state.error === 400) {
    toast.error("The email or password are incorrect", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const handleFulfilled = (state: IState, action: PayloadAction<any>) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoading = false;
  state.authenticated = true;
  state.error = null;
};

const INITIAL_STATE: IState = {
  token: "",
  user: {
    email: null,
    name: null,
  },
  authenticated: true,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  reducers: {
    resetToken(state: IState, action) {
      return (state = { ...state, token: "", authenticated: false });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, handleFulfilled)

      .addCase(logInThunk.fulfilled, handleFulfilled)

      .addCase(refreshUserThunk.fulfilled, (state: IState, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
        state.error = null;
        if (state.token === null) return;
      })

      .addCase(logOutThunk.fulfilled, (state: IState) => {
        state.token = "";
        state.user = { email: null, name: null };
        state.isLoading = false;
        state.authenticated = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          logOutThunk.pending,
          logInThunk.pending,
          refreshUserThunk.pending,
          registerThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          logOutThunk.rejected,
          logInThunk.rejected,
          refreshUserThunk.rejected,
          registerThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
