import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const propTypes = {
    sayHello: PropTypes.func
}
const defaultProps = {
    // sayHello: ()=> console.log('hello!');
    sayHello: ()=> {
      alert('hello!');
      axios({
        method: 'GET',
        url: 'http://localhost:5000/hello',
        withCredentials: true
      })
      .then((result)=>{
        let msg = 'success! \n';
        msg += 'message: ' + JSON.stringify(result.data);
        alert(msg);
      })
      .catch((error)=>{
        let msg = 'error! \n';
        msg += 'message: ' + JSON.stringify(error);
        alert(msg);
      });
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
