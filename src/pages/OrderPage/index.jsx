import React, { useContext } from 'react';
import Type from '../../components/Type';
import { OrderContext } from '../../context/OrderContext';

const OrderPage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext);
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
          <h3>총액 : {orderData.totals.total}</h3>
          <button onClick={() => setStep(1)}>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
