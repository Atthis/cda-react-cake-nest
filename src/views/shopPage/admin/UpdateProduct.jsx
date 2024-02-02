import React, { useContext } from 'react';
import ProductForm from './ProductForm';
import { AdminPanelContext } from '../../../context/AdminPanelContext';

import { HiCursorClick } from 'react-icons/hi';

function UpdateProduct({ handleUpdate }) {
  const { updatingItem } = useContext(AdminPanelContext);
  return (
    <>
      {!updatingItem ? (
        <p>
          Cliquer sur un produit pour le modifier <HiCursorClick />
        </p>
      ) : (
        <ProductForm formType='update' updatingItem={updatingItem} handleUpdate={handleUpdate} />
      )}
    </>
  );
}

export default UpdateProduct;
