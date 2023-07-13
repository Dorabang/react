import React, { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';

const SummaryPage = ({ setStep }) => {
  const [orderDetails] = useContext(OrderContext);
  const [checked, setChecked] = useState(false);

  const productArray = Array.from(orderDetails.products);
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {key}, {value}EA
    </li>
  ));

  const hasOptions = orderDetails.options.size > 0;
  let optionsDisplay = null;

  if (hasOptions) {
    const optionsArray = Array.from(orderDetails.options.keys());
    const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);
    optionsDisplay = (
      <>
        <h3>Option : {orderDetails.totals.options}</h3>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div>
      <h2>주문 확인</h2>
      <h3>Products : {orderDetails.totals.products}</h3>
      <ul>{productList}</ul>
      {optionsDisplay}

      <form onSubmit={handleSubmit}>
        <input
          type='checkbox'
          checked={checked}
          onChange={(e) => setChecked(e.target.value)}
          id='confirm-checkbox'
        />
        <label htmlFor='confirm-checkbox'>위의 사항들을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type='submit'>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
