import React from 'react';
import ProductForm from './ProductForm';

function AddProduct({ addProduct }) {
  return (
    <>
      <ProductForm handleOnSubmit={addProduct} formType='add' />
    </>
  );
}

export default AddProduct;
