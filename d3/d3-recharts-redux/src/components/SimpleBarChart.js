import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const SimpleBarChart = ({data,chartColorSet})=>{
  return (
    <BarChart width={600} height={300} data={data}
              style={{"margin": "auto"}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="5,5"/>
      <Tooltip/>
      <Legend />
      <Bar dataKey="pv" fill={chartColorSet[0]} />
      <Bar dataKey="uv" fill={chartColorSet[1]} />
      <Bar dataKey="amt" fill={chartColorSet[2]} />
    </BarChart>
  );
};

export default SimpleBarChart;
