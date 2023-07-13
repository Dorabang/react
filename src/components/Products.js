import React from 'react';

const Products = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
        style={{ width: '75%' }}
      />
      <form style={{ marginTop: '10px' }}>
        <label style={{ textAlign: 'right' }}>{name}</label>{' '}
        <input
          type='number'
          name='quantity'
          min='0'
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
