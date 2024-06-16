import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminInstance } from "../auth/operations";

interface FetchOrdersParams {
  page: number;
  limit: number;
  name?: string;
}

interface IFormsProducts {
  name: string;
  category: string;
  suppliers: string;
  stock: string;
  price: string;
}

export const fetchData = createAsyncThunk(
  "/admin/dashboard/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await adminInstance.get("/admin/dashboard");

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchOrders = createAsyncThunk(
  "/admin/orders/fetchOrders",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await adminInstance.get("/admin/orders", {
        params: { page, limit, name },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "/admin/orders/fetchProducts",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await adminInstance.get("/admin/products", {
        params: { page, limit, name },
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCustomers = createAsyncThunk(
  "/admin/orders/fetchCustomers",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await adminInstance.get("/admin/customers", {
        params: { page, limit, name },
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSuppliers = createAsyncThunk(
  "/admin/orders/fetchSuppliers",
  async ({ page, limit, name }: FetchOrdersParams, thunkAPI) => {
    try {
      const response = await adminInstance.get("/admin/suppliers", {
        params: { page, limit, name },
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct: IFormsProducts, thunkAPI) => {
    try {
      const response = await adminInstance.post("/admin/products", newProduct);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: string, thunkAPI) => {
    try {
      const response = await adminInstance.delete(
        `/admin/products/${productId}`
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
