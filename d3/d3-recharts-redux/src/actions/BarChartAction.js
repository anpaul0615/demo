import * as types from './ActionTypes';

export const fetchData = ()=>{
  return {
    type: types.FETCH_BARCHART_DATA,
    data: {
      fetching: true
    }
  };
};
export const fetchDataSuccess = (barChartData)=>{
  return {
    type: types.FETCH_BARCHART_DATA_SUCCESS,
    data: {
      fetching: false,
      barChartData
    }
  };
};
export const fetchDataFail = (error)=>{
  return {
    type: types.FETCH_BARCHART_DATA_FAIL,
    data: {
      fetching: false,
      error
    }
  };
};
