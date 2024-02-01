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
  const { cupcakeData } = useContext(CupcakeDataContext);

  const [adminPanelState, setAdminPanelState] = useState({ isCollapsed: false, formType: 'add' });

  return (
    <AdminPanelContext.Provider value={{ adminPanelState, setAdminPanelState }}>
      <MenuStyled>
        {cupcakeData.map(item => (
          <ItemCard key={new Date().getTime() + item.id} item={item} />
        ))}
        {isAdmin && <AdminPanel />}
      </MenuStyled>
    </AdminPanelContext.Provider>
  );
}

export default Menu;
