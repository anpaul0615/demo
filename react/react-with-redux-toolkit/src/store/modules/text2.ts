/* eslint-disable no-param-reassign */

import {
  createSlice, createAsyncThunk,
} from '@reduxjs/toolkit';

import { TextState } from '../types/text';

import { fetchText } from '../../services/text';

/**
 * Initial State
 */
const initialState: TextState = {
  fetching: false,
  error: false,
  content: '',
};

/**
 * Async Actions
 */
export const loadText2 = createAsyncThunk(
  'text2/loadText',
  async (arg, thunkAPI) => {
    const response = await fetchText();
    return response.data;
  }
);

/**
 * Slice
 */
const slice = createSlice({
  name: 'text2',
  initialState,
  reducers: {
    setFetchState: (state, { payload: fetchState }) => {
      state.fetching = fetchState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadText2.pending, (state) => {
        state.fetching = true;
        state.error = false;
      })
      .addCase(loadText2.fulfilled, (state, { payload: textContent }) => {
        state.fetching = false;
        state.error = false;
        state.content = textContent;
      })
      .addCase(loadText2.rejected, (state, { payload: error }) => {
        state.fetching = false;
        state.error = true; // todo: error handling
      });
  }
});

/**
 * Export
 */
export const reducer = slice.reducer;
export const actions = slice.actions;
