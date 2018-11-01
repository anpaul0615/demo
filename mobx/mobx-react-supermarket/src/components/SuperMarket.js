import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import Basket from './BasketItemList';
import TotalPrice from './TotalPrice';


const SuperMarket = () => {
  return (
    <SuperMarketTemplate 
      items={<ShopItemList />}
      basket={<Basket />} 
      total={<TotalPrice />}
    />);
};

export default SuperMarket;
