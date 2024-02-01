import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

const ProductPreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  min-height: 120px;

  ${props =>
    props.imgUrl
      ? `
    border: none;
    border-radius: 0;
  `
      : `
    border: 1px dashed ${theme.colors.greyMedium};
    border-radius: ${theme.borderRadius.round};
  `}

  p {
    color: ${theme.colors.greyMedium};
  }
`;

function ProductPreview({ imgUrl }) {
  return <ProductPreviewStyled>{imgUrl ? <img src={imgUrl} alt='aperçu image produit' /> : <p>Aucune image</p>}</ProductPreviewStyled>;
}

export default ProductPreview;
