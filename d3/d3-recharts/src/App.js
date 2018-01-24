import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleLineChart from './SimpleLineChart';
import SimpleBarChart from './SimpleBarChart';
import SimplePieChart from './SimplePieChart';
import SimpleAreaChart from './SimpleAreaChart';
import SimpleScatterChart from './SimpleScatterChart';
import SimpleRadarChart from './SimpleRadarChart';
import SimpleRadialBarChart from './SimpleRadialBarChart';
import SimpleTreemap from './SimpleTreemap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <hr/>
        <div className="Chart-header">
          <h2>LineChart Sample</h2>
          <SimpleLineChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>BarChart Sample</h2>
          <SimpleBarChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>PieChart Sample</h2>
          <SimplePieChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>AreaChart Sample</h2>
          <SimpleAreaChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>ScatterChart Sample</h2>
          <SimpleScatterChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>RadarChart Sample</h2>
          <SimpleRadarChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>RadialBarChart Sample</h2>
          <SimpleRadialBarChart />
        </div>

        <hr/>
        <div className="Chart-header">
          <h2>Treemap Sample</h2>
          <SimpleTreemap />
        </div>
        
        <hr/>

      </div>
    );
  }
}

export default App;
