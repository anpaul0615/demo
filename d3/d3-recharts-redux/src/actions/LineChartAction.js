import * as types from './ActionTypes';

export const fetchData = ()=>{
  return {
    type: types.FETCH_LINECHART_DATA,
    data: {
      fetching: true
    }
  };
};
export const fetchDataSuccess = (lineChartData)=>{
  return {
    type: types.FETCH_LINECHART_DATA_SUCCESS,
    data: {
      fetching: false,
      lineChartData
    }
  };
};
export const fetchDataFail = (error)=>{
  return {
    type: types.FETCH_LINECHART_DATA_FAIL,
    data: {
      fetching: false,
      error
    }
  };
};
