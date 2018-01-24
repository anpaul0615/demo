import React, { Component } from 'react';

import { connect } from 'react-redux';
import SimpleLineChart from '../components/SimpleLineChart';
import * as ChartColorService from '../services/ChartColor';
import * as LineChartAction from '../actions/LineChartAction';

class LineChartContainer extends Component {
  render() {
    let { lineChartData, handleChangeData } = this.props;
    return (
        <div className='LineChartContainer'>
          <SimpleLineChart data={lineChartData}
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
  return { ...state.LineChartState };
};
const mapDispatchToProps =  (dispatch)=>{
  return {
    handleChangeData: ()=>{
      // before
      dispatch(LineChartAction.fetchData());
      // get changeed-data
      let getRandom = ()=>{
        return Math.random()*10000;
      };
      let names = [
        'Page A','Page B','Page C','Page D',
        'Page E','Page F','Page G'];
      let data = names.map((name)=>{
        return {
          name, uv:getRandom(), pv:getRandom(), amt:getRandom()
        };
      });
      // after
      dispatch(LineChartAction.fetchDataSuccess(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChartContainer);
