import React, { Component } from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import styled from 'styled-components';
import Message from './Message';

/* Style-Wrapper */
const AppWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1rem;
`;

/* Component */
@inject('messageStore')
@observer
class App extends Component {
  /* Component PropTypes */
  static propTypes = {
    messageStore: PropTypes.objectOrObservableObject.isRequired,
  };

  appendWelcomeMessage() {
    const { messageStore } = this.props;
    messageStore.add('Wecome!!');
  }

  render() {
    const { messageStore } = this.props;
    const { messages } = messageStore;
    return (
      <AppWrapper>
        <h1>Without Create-React-App</h1>
        <button type="button" onClick={() => this.appendWelcomeMessage()}>
          Get Message
        </button>
        {messages.map((e, idx) => <Message key={idx.toString()} message={e} />)}
      </AppWrapper>
    );
  }
}

export default App;
