import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/ItemCard';
import { IsAdminContext } from '../../context/IsAdminContext.jsx';
import { CupcakeDataContext } from '../../context/CupcakeDataContext.jsx';
import AdminPanel from './admin/AdminPanel';
import { AdminPanelContext } from '../../context/AdminPanelContext.jsx';
import { theme } from '../../utils/index.js';
import ButtonBasic from '../../components/ButtonBasic.jsx';

const MenuStyled = styled.main`
  flex: 1;
  box-shadow: inset 0px 0px 10px 5px hsla(0, 0%, 15%, 0.3);

  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;

  align-items: flex-start;

  .empty-msg {
    position: relative;
    top: -5%;
    align-self: center;
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P4};
    text-align: center;
    color: ${theme.colors.greySemiDark};

    &.go-left {
      position: relative;
      top: 10%;
    }
  }
`;

function Menu() {
  const { isAdmin } = useContext(IsAdminContext);
  const { cupcakeData, setCupcakeData } = useContext(CupcakeDataContext);

  const [adminPanelState, setAdminPanelState] = useState({ isCollapsed: false, formType: 'add' });
  const [isEmpty, setIsEmpty] = useState(cupcakeData.length > 0 ? false : true);

  function handleItemDeletion(id) {
    const newCupcakeData = cupcakeData.filter(item => item.id !== id);
    setCupcakeData(newCupcakeData);
    if (newCupcakeData.length <= 0) setIsEmpty(true);
  }

  return (
    <AdminPanelContext.Provider value={{ adminPanelState, setAdminPanelState }}>
      <MenuStyled>
        {!isEmpty ? (
          cupcakeData.map(item => <ItemCard key={new Date().getTime() + item.id} item={item} handleItemDeletion={handleItemDeletion} />)
        ) : isAdmin ? (
          <div className='empty-msg go-left'>
            <p>Il n'y a plus de produits disponibles ?</p>
            <p>Cliquez ci-dessous pour les réinitialiser</p>
            <ButtonBasic label='Générer de nouveaux gâteaux' fontSize='1.2rem' width='60%' handleClick={() => setAdminPanelState({ isCollapsed: false, formType: 'add' })} />
          </div>
        ) : (
          <div className='empty-msg'>
            <p>Victime de notre succès</p>
            <p>De nouvelles recettes sont en préparation, revenez vite !</p>
          </div>
        )}
        {isAdmin && <AdminPanel setIsEmpty={setIsEmpty} />}
      </MenuStyled>
    </AdminPanelContext.Provider>
  );
}

export default Menu;
