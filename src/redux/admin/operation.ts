import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminInstance } from "../auth/operations";

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

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const response = await adminInstance.post("/contacts", {
//         name,
//         number,
//       });

//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await adminInstance.delete(`/contacts/${contactId}`);

//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
