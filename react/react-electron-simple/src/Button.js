import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import ipcRenderer from 'electron'
// const ipcRenderer = require('electron').ipcRenderer;
const ipcRenderer = window.require("electron").ipcRenderer;
/*
 * 주의!!
 * window.require() 는 브라우저상에서 동작하지않음.
 * 따라서 npm start + npm run electron-dev 이후 브라우저에서 테스트 x
 */

const propTypes = {
    sayHello: PropTypes.func
}
const defaultProps = {
    // sayHello: ()=> console.log('hello!')
    sayHello: ()=> {
      alert('hello!');
      let returnValue = ipcRenderer.sendSync('sync');
      alert(JSON.stringify(returnValue));
    }
}

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.sayHello}>hello</button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
