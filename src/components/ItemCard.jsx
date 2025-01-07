import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/maths';
import { IsAdminContext } from '../context/IsAdminContext';
import { AdminPanelContext } from '../context/AdminPanelContext';

import { theme } from '../utils';
import { TiDelete } from 'react-icons/ti';
import ButtonBasic from './ButtonBasic';

const ItemCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 280px;
  height: 370px;
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
    width: 100%;
    height: 200px;
    margin-inline: auto;
    object-fit: contain;
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

  /* .update-layer { */
  > button {
    align-self: center;
    position: absolute;
    top: 50%;
    display: none;
    margin-inline: auto;
    background-color: ${theme.colors.primary_cake};
    border-radius: ${theme.borderRadius.extraRound};
    transform: translateY(-50%);
    box-shadow: 0px 0px 25px 30px hsla(0, 0%, 0%, 0.2);
  }

  &:hover {
    /* .update-layer { */
    > button {
      display: block;
    }
  }
`;

function ItemCard({ item, handleItemDeletion }) {
  const { isAdmin } = useContext(IsAdminContext);
  const { setAdminPanelState, setUpdatingItem } = useContext(AdminPanelContext);

  function handleDelete(id) {
    handleItemDeletion(id);
  }

  function handleUpdate() {
    setUpdatingItem(item);
    setAdminPanelState({ isCollapsed: false, formType: 'update' });
  }

  return (
    <ItemCardStyled>
      {isAdmin && <ButtonBasic label={'Modifier'} fontSize={theme.fonts.size.P0} width={'60%'} handleClick={handleUpdate} />}
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
