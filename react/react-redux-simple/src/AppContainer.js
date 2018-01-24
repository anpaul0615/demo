import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';
import HelloAction from './HelloAction';

const mapStateToProps = (state)=>{
  console.log('[AppContainer.js] mapStateToProps() :: ');
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch)=>{
  console.log('[AppContainer.js] mapDispatchToProps() :: ');
  return bindActionCreators({onChange: HelloAction}, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
