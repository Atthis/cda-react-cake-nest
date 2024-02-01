import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/maths';
import { AdminContext } from '../views/shopPage/ShopPage';
import { theme } from '../utils';
import { TiDelete } from 'react-icons/ti';
import ButtonBasic from './ButtonBasic';

const ItemCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 280px;
  margin: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .delete-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${theme.colors.primary};
    font-size: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

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

function ItemCard({ item, handleItemDeletion }) {
  const { isAdmin } = useContext(AdminContext);

  function handleDelete(id) {
    handleItemDeletion(id);
  }

  return (
    <ItemCardStyled>
      {isAdmin && <TiDelete className='delete-btn' onClick={() => handleDelete(item.id)} />}
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
