import React from 'react';
import styled from 'styled-components'

const SuperMarketTemplateWrapper = styled.div`
  width: 768px;
  display: flex;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  
  h2 {
    margin-top: 0;
  }

  & > div {
    padding: 1rem;
    flex: 1;
  }

  & > div:first-child {
    background: #f8f9fa;
  }
`;

const SuperMarketTemplate = ({ items, basket, total }) => {
  return (
    <SuperMarketTemplateWrapper>
      <div>
        <h2>상품</h2>
        {items}
      </div>
      <div>
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </SuperMarketTemplateWrapper>
  );
};

export default SuperMarketTemplate;
