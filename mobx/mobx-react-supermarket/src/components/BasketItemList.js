import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

const BasketItemList = ({ items, onTake }) => {
  return (
    <div>
      {
        items.map(item => 
        <BasketItem item={item} key={item.name} onTake={onTake} />)
      }
    </div>
  );
};

export default inject(({ market }) => ({
  items: market.selectedItems,
  onTake: market.take,
}))(observer(BasketItemList));
