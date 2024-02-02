import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

const ProductPreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  min-height: 120px;

  text-align: center;

  ${props =>
    props.$hasUrl
      ? `
      height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    `
      : `
    border: 1px dashed ${theme.colors.greyMedium};
    border-radius: ${theme.borderRadius.round};
    `}

  p {
    color: ${theme.colors.greyMedium};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function ProductPreview({ imgUrl }) {
  return <ProductPreviewStyled $hasUrl={imgUrl}>{imgUrl ? <img src={imgUrl} alt='aperçu image produit' /> : <p>Aucune image</p>}</ProductPreviewStyled>;
}

export default ProductPreview;
