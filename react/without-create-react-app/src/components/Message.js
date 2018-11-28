import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Style-Wrapper */
const MessageWrapper = styled.p`
  color: white;
  text-decoration: underline;
`;

/* Component */
const Message = ({ message }) => <MessageWrapper>{message}</MessageWrapper>;

/* Component PropTypes */
Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
