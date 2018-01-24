import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    sayHello: PropTypes.func
}
const defaultProps = {
    // sayHello: ()=> console.log('hello!')
    sayHello: ()=> {
      alert('hello!');
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
