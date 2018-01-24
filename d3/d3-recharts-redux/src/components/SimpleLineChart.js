import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const SimpleLineChart = ({data,chartColorSet})=>{
  return (
    <LineChart width={600} height={300} data={data}
                style={{"margin": "auto"}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="5,5"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="pv" stroke={chartColorSet[0]} />
      <Line type="monotone" dataKey="uv" stroke={chartColorSet[1]} />
    </LineChart>
  );
};

export default SimpleLineChart;
