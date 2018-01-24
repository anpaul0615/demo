import React, { Component } from 'react';

import { connect } from 'react-redux';
import SimpleBarChart from '../components/SimpleBarChart';
import * as ChartColorService from '../services/ChartColor';
import * as BarChartAction from '../actions/BarChartAction';

class BarChartContainer extends Component {
  render() {
    let { barChartData, handleChangeData } = this.props;
    return (
        <div className='BarChartContainer'>
          <SimpleBarChart data={barChartData}
              chartColorSet={ChartColorService.getColorSet()} />
          <center>
            <button onClick={handleChangeData}>
              change-data
            </button>
          </center>
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return { ...state.BarChartState };
};
const mapDispatchToProps =  (dispatch)=>{
  return {
    handleChangeData: ()=>{
      // before
      dispatch(BarChartAction.fetchData());
      // get changeed-data
      let data = [
            {name: 'Page A', uv: 9999, pv: 9999, amt: 9999},
            {name: 'Page B', uv: 8888, pv: 8888, amt: 8888},
            {name: 'Page C', uv: 7777, pv: 7777, amt: 7777},
            {name: 'Page D', uv: 6666, pv: 6666, amt: 6666},
            {name: 'Page E', uv: 5555, pv: 5555, amt: 5555},
            {name: 'Page F', uv: 4444, pv: 4444, amt: 4444},
            {name: 'Page G', uv: 3333, pv: 3333, amt: 3333},
      ];
      // after
      dispatch(BarChartAction.fetchDataSuccess(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarChartContainer);
