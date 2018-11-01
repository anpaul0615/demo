import React from 'react';
import styled from 'styled-components'

const ShopItemWrapper = styled.div`
  background: white;
  border: 1px solid #495057;
  padding: 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  &:hover {
    background: #495057;
    color: white;
  }

  &+& {
    margin-top: 1rem;
  }
`;

const ShopItem = ({ name, price, onPut }) => {
  return (
    <ShopItemWrapper onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </ShopItemWrapper>
  );
};

export default ShopItem;
