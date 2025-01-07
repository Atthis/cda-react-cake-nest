import React, { useContext } from 'react';
import ProductForm from './ProductForm';
import { AdminPanelContext } from '../../../context/AdminPanelContext';
import styled from 'styled-components';
import { HiCursorClick } from 'react-icons/hi';
import { theme } from '../../../utils';

const UpdateProductStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  p {
    margin-left: ${theme.spacing.lg};
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.greyDark};
  }
`;

function UpdateProduct({ handleUpdate }) {
  const { updatingItem } = useContext(AdminPanelContext);
  return (
    <UpdateProductStyled>
      {!updatingItem ? (
        <p>
          Cliquer sur un produit pour le modifier <HiCursorClick />
        </p>
      ) : (
        <ProductForm formType='update' updatingItem={updatingItem} handleUpdate={handleUpdate} />
      )}
    </UpdateProductStyled>
  );
}

export default UpdateProduct;
