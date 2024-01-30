import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/maths';

const ItemCardStyled = styled.article``;

function ItemCard({ item }) {
  return (
    <ItemCardStyled>
      <img src={item.imageSource} alt='cupcake à acheter' />
      <h1>{item.title}</h1>
      <section>
        <p className='price'>{formatPrice(item.price)}</p>
      </section>
    </ItemCardStyled>
  );
}

export default ItemCard;
