import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../utils';
import { BsChevronUp, BsChevronDown, BsPlusLg, BsFillPencilFill } from 'react-icons/bs';

import PanelTab from '../../../components/PanelTab';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import { AdminPanelContext } from '../Menu';

const AdminPanelStyled = styled.aside`
  position: sticky;
  bottom: 0;

  align-self: flex-end;
  width: 100%;
  background-color: ${theme.colors.white};

  box-shadow: 0px 0px 5px 5px hsla(0, 0%, 15%, 0.1);
  ${props =>
    props.$isCollapsed
      ? `
      height: 0;
    `
      : `
    height: 200px;
  `}
`;

function AdminPanel() {
  const { adminPanelState, setAdminPanelState } = useContext(AdminPanelContext);

  function handleCollapse() {
    const newAdminPanelView = adminPanelState.isCollapsed ? false : true;
    const newAdminPanelState = { isCollapsed: newAdminPanelView, formType: adminPanelState.formType };
    setAdminPanelState(newAdminPanelState);
  }
  function handleCreateBtn() {
    const newAdminPanelState = { isCollapsed: false, formType: 'add' };
    setAdminPanelState(newAdminPanelState);
  }
  function handleUpdateBtn() {
    const newAdminPanelState = { isCollapsed: false, formType: 'update' };
    setAdminPanelState(newAdminPanelState);
  }

  return (
    <AdminPanelStyled $isCollapsed={adminPanelState.isCollapsed}>
      <nav>
        <PanelTab icon={adminPanelState.isCollapsed ? <BsChevronUp /> : <BsChevronDown />} action={handleCollapse} />
        <PanelTab icon={<BsPlusLg />} action={handleCreateBtn} />
        <PanelTab icon={<BsFillPencilFill />} action={handleUpdateBtn} />
      </nav>
      {adminPanelState.formType === 'add' ? <AddProduct /> : adminPanelState.formType === 'update' ? <UpdateProduct /> : <p>Erreur de type de formulaire</p>}
    </AdminPanelStyled>
  );
}

export default AdminPanel;
