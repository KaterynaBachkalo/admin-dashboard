import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operation";
import {
  ICustomers,
  IIncomeExpenses,
  IOrders,
  IProducts,
  ISuppliers,
} from "../../types";

export interface IState {
  products: IProducts[];
  suppliers: ISuppliers[];
  customers: ICustomers[];
  incomeExpenses: IIncomeExpenses[];
  orders: IOrders[];
  isLoading: boolean;
  error: any | null;
  currentPage: number;
}

export const handlePending = (state: IState): void => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (
  state: IState,
  action: PayloadAction<any>
): void => {
  state.isLoading = false;
  state.error = action.payload;
};

const INITIAL_STATE = {
  products: [],
  suppliers: [],
  customers: [],
  incomeExpenses: [],
  orders: [],
  isLoading: false,
  error: null,
  currentPage: 1,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: INITIAL_STATE,

  reducers: {
    clearState(state: IState) {
      state.products = [];
      state.suppliers = [];
      state.customers = [];
      state.incomeExpenses = [];
      state.orders = [];
    },
    setCurrentPage(state: IState, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setNextPage(state: IState) {
      state.currentPage = state.currentPage + 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, handlePending)
      .addCase(
        fetchData.fulfilled,
        (state: IState, action: PayloadAction<[]>) => {
          state.products = action.payload;
          state.suppliers = action.payload;
          state.orders = action.payload;
          state.customers = action.payload;
          state.incomeExpenses = action.payload;

          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchData.rejected, handleRejected);

    // .addCase(addContact.pending, handlePending)
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items.push(action.payload);
    //   state.error = null;
    // })
    // .addCase(addContact.rejected, handleRejected)

    // .addCase(deleteContact.pending, handlePending)
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items = state.items.filter(
    //     (contact) => contact.id !== action.payload.id
    //   );
    //   state.error = null;
    // })
    // .addCase(deleteContact.rejected, handleRejected);
  },
});

// export const {
//   addToFavorites,
//   deleteFavorites,
//   clearState,
//   setCurrentPage,
//   setNannies,
//   setLoading,
//   setError,
//   setNextPage,
//   clearFavorites,
// } = adminSlice.actions;

// Редюсер слайсу
export const adminReducer = adminSlice.reducer;
