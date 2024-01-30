import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/maths';
import { theme } from '../utils';
import ButtonBasic from './ButtonBasic';

const ItemCardStyled = styled.article`
  width: 280px;
  margin: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    height: 200px;
    margin-inline: auto;
  }

  h1 {
    margin-top: ${theme.spacing.lg};
    font-family: 'Pacifico', cursive;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
  }
`;

function ItemCard({ item }) {
  return (
    <ItemCardStyled>
      <img src={item.imageSource} alt='cupcake à acheter' />
      <h1>{item.title}</h1>
      <section>
        <p className='price'>{formatPrice(item.price)}</p>
        <ButtonBasic label={'Ajouter'} fontSize={theme.fonts.size.XS} width={'50%'} />
      </section>
    </ItemCardStyled>
  );
}

export default ItemCard;
