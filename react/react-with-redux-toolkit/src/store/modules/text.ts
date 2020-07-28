/* eslint-disable no-param-reassign */

import {
  createAction, createReducer,
  ThunkAction, Action,
} from '@reduxjs/toolkit';

import { RootState } from '../types';
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
 * Actions
 */
export const LOAD_TEXT_PENDING = createAction('text/LOAD_TEXT_PENDING');
export const LOAD_TEXT_SUCCESS = createAction<any>('text/LOAD_TEXT_SUCCESS');
export const LOAD_TEXT_FAILURE = createAction<any>('text/LOAD_TEXT_FAILURE');
export function loadText(): ThunkAction<void, RootState, unknown, Action<string>> {
  return async function(dispatch) {
    dispatch(LOAD_TEXT_PENDING());
    try {
      const response = await fetchText();
      const { data: textContent } = response;
      dispatch(LOAD_TEXT_SUCCESS(textContent));
    } catch (e) {
      dispatch(LOAD_TEXT_FAILURE(e));
      console.log(e);
    }
  }
}

/**
 * Reducers
 */
export default createReducer(initialState, {
  [LOAD_TEXT_PENDING.type]: (state) => {
    state.fetching = true;
    state.error = false;
  },
  [LOAD_TEXT_SUCCESS.type]: (state, { payload: textContent }) => {
    state.fetching = false;
    state.error = false;
    state.content = textContent;
  },
  [LOAD_TEXT_FAILURE.type]: (state, { payload: error }) => {
    state.fetching = false;
    state.error = true; // todo: error handling
  },
});
