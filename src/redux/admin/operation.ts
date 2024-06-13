import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminInstance } from "../auth/operations";

export const fetchData = createAsyncThunk(
  "dashboard/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await adminInstance.get("/dashboard");

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
