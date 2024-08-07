import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminInstance } from "../auth/operations";
import {
  IProducts,
  IProductsToBD,
  ISuppliers,
  ISuppliersToBD,
} from "../../types";

interface FetchOrdersParams {
  page: number;
  limit: number;
  name?: string;
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
  "/admin/products/fetchProducts",
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
  "/admin/suppliers/fetchSuppliers",
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
  async (newProduct: IProductsToBD, thunkAPI) => {
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
      await adminInstance.delete(`/admin/products/${productId}`);
      return { productId };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (updatedProduct: IProducts, thunkAPI) => {
    try {
      const response = await adminInstance.put(
        `/admin/products/${updatedProduct._id}`,
        updatedProduct
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSupplier = createAsyncThunk(
  "suppliers/addSupplier",
  async (newSupplier: ISuppliersToBD, thunkAPI) => {
    try {
      const response = await adminInstance.post(
        "/admin/suppliers",
        newSupplier
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSupplier = createAsyncThunk(
  "suppliers/editSupplier",
  async (updatedSupplier: ISuppliers, thunkAPI) => {
    try {
      const response = await adminInstance.put(
        `/admin/suppliers/${updatedSupplier._id}`,
        updatedSupplier
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
