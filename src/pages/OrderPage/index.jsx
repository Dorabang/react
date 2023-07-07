import React from 'react';
import Type from '../../components/Type';

const OrderPage = () => {
  return (
    <div>
      <h2>Travel Products</h2>
      <div>
        <Type orderType='products' />
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <div style={{ width: '50%' }}>
          <Type orderType='options' />
        </div>
        <div style={{ width: '50%' }}>
          <h3>총액 : </h3>
          <button>주문</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
