import React from 'react';
import ProductForm from './ProductForm';

function AddProduct({ addProduct }) {
  return (
    <div>
      <ProductForm handleOnSubmit={addProduct} formType='add' />
    </div>
  );
}

export default AddProduct;
