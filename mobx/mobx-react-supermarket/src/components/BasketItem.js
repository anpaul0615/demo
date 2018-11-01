import React from 'react';
import styled from 'styled-components'
import { observer } from 'mobx-react';

const BasketItemWrapper = styled.div`
  display: flex;
  width: 100%;

  & .name { flex: 2; }
  & .price { flex: 1; }
  & .count { flex: 1; }
  & .return {
    margin-left: auto;
    color: #f06595;
    cursor: pointer;
  }

  & .return:hover {
    text-decoration: underline;
  }
  &+& {
    margin-top: 1rem;
  }
`;

const BasketItem = ({ item:{name, price, count}, onTake }) => {
  return (
    <BasketItemWrapper>
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>갖다놓기</div>
    </BasketItemWrapper>
  );
};

export default observer(BasketItem);
