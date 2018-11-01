import React from 'react';
import { inject, observer } from 'mobx-react';

const TotalPrice  = ({ total }) => {
  return (
    <div>
      <hr />
      <p>
        <b>총합: </b> {total}원
      </p>
    </div>
  );
};

export default inject(({ market }) => ({
  total: market.total,
}))(observer(TotalPrice));
