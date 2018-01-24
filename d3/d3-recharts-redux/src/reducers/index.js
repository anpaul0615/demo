import { combineReducers } from 'redux';
import BarChartReducer from './BarChartReducer';
import LineChartReducer from './LineChartReducer';

const rootReducer = combineReducers({
  BarChartState: BarChartReducer,
  LineChartState: LineChartReducer
});

export default rootReducer;
