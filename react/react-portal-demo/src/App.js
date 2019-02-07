import React, { Component } from 'react';
import ModalPortal from "./ModalPortal";
import MyModal from "./MyModal";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    modal: false
  };
  handleOpenModal = () => {
    this.setState({
      modal: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>React Portal Demo</p>

          <button onClick={this.handleOpenModal}>open</button>

          {this.state.modal && (
            <ModalPortal>
              <MyModal onClose={this.handleCloseModal} />
            </ModalPortal>
          )}

        </header>
      </div>
    );
  }
}

export default App;
