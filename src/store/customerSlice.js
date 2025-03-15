import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/customers';

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const addCustomer = createAsyncThunk(
  'customers/addCustomer',
  async (customer) => {
    const response = await axios.post(API_URL, customer);
    return response.data;
  }
);

export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(customer => customer.id !== action.payload);
      });
  },
});

export default customerSlice.reducer;