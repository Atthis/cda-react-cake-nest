import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/ItemCard';
import { AdminContext } from './ShopPage';
import { CupcakeDataContext } from '../../App.jsx';
import AdminPanel from './admin/AdminPanel';

export const AdminPanelContext = createContext(null);

const MenuStyled = styled.main`
  flex: 1;
  box-shadow: inset 0px 0px 10px 5px hsla(0, 0%, 15%, 0.3);

  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`;

function Menu() {
  const { isAdmin } = useContext(AdminContext);
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
          <>
            <p>Il n'y a plus de produits disponibles ?</p>
            <p>Cliquez ci-dessous pour les réinitialiser</p>
            <button onClick={() => setAdminPanelState({ isCollapsed: false, formType: 'add' })}>Générer de nouveaux gâteaux</button>
          </>
        ) : (
          <>
            <p>Victime de notre succès</p>
            <p>De nouvelles recettes sont en préparation, revenez vite !</p>
          </>
        )}
        {isAdmin && <AdminPanel setIsEmpty={setIsEmpty} />}
      </MenuStyled>
    </AdminPanelContext.Provider>
  );
}

export default Menu;
