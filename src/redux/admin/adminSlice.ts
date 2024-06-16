import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
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
import { toast } from "react-toastify";

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
      .addCase(fetchSuppliers.rejected, handleRejected)

      .addCase(addProduct.pending, handlePending)
      .addCase(
        addProduct.fulfilled,
        (state: IState, action: PayloadAction<IProducts>) => {
          state.isLoading = false;
          state.products.push(action.payload);
          state.error = null;
          toast.success("New product was successfully added");
        }
      )
      .addCase(
        addProduct.rejected,
        (state: IState, action: PayloadAction<any>): void => {
          state.isLoading = false;
          state.error = action.payload;

          if (state.error === "Request failed with status code 409") {
            toast.error("The product exists with this name");
          }
        }
      )

      .addCase(deleteProduct.pending, handlePending)
      .addCase(
        deleteProduct.fulfilled,
        (state: IState, action: PayloadAction<IProducts>) => {
          state.isLoading = false;
          state.products = state.products.filter(
            (product) => product.id !== action.payload.id
          );
          state.error = null;
        }
      )
      .addCase(deleteProduct.rejected, handleRejected);
  },
});

export const { clearState, setCurrentPage } = adminSlice.actions;

// Редюсер слайсу
export const adminReducer = adminSlice.reducer;
