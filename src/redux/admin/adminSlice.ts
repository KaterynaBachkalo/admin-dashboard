import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  fetchCustomers,
  fetchData,
  fetchOrders,
  fetchProducts,
  fetchSuppliers,
} from "./operation";
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
  totalCustomers: number;
  totalProducts: number;
  totalSuppliers: number;
  totalOrders: number;
  isLoading: boolean;
  error: any | null;
  currentPage: number;
}

interface Payload {
  products: IProducts[];
  suppliers: ISuppliers[];
  customers: ICustomers[];
  incomeExpenses: IIncomeExpenses[];
  orders: IOrders[];
  totalCustomers: number;
  totalProducts: number;
  totalSuppliers: number;
  total: number;
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
  totalCustomers: 0,
  totalProducts: 0,
  totalSuppliers: 0,
  totalOrders: 0,
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
      state.totalCustomers = 0;
      state.totalProducts = 0;
      state.totalSuppliers = 0;
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
        (state: IState, action: PayloadAction<Payload>) => {
          state.products = action.payload.products;
          state.suppliers = action.payload.suppliers;
          state.customers = action.payload.customers;
          state.incomeExpenses = action.payload.incomeExpenses;
          state.totalCustomers = action.payload.totalCustomers;
          state.totalProducts = action.payload.totalProducts;
          state.totalSuppliers = action.payload.totalSuppliers;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchData.rejected, handleRejected)

      .addCase(fetchOrders.pending, handlePending)
      .addCase(
        fetchOrders.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.orders = action.payload.orders;
          state.totalOrders = action.payload.total;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchOrders.rejected, handleRejected)

      .addCase(fetchProducts.pending, handlePending)
      .addCase(
        fetchProducts.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.products = action.payload.products;
          state.totalProducts = action.payload.total;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchProducts.rejected, handleRejected)

      .addCase(fetchCustomers.pending, handlePending)
      .addCase(
        fetchCustomers.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.customers = action.payload.customers;
          state.totalCustomers = action.payload.total;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchCustomers.rejected, handleRejected)

      .addCase(fetchSuppliers.pending, handlePending)
      .addCase(
        fetchSuppliers.fulfilled,
        (state: IState, action: PayloadAction<Payload>) => {
          state.suppliers = action.payload.suppliers;
          state.totalSuppliers = action.payload.total;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchSuppliers.rejected, handleRejected);

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

export const { clearState, setCurrentPage, setNextPage } = adminSlice.actions;

// Редюсер слайсу
export const adminReducer = adminSlice.reducer;
