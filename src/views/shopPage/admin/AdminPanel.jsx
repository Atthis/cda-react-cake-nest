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
  transition: all 0.3s ease-in-out;

  ${props =>
    props.$isCollapsed
      ? `
    height: 0;
    `
      : `
    height: 300px;
    `}

  nav {
    position: absolute;
    top: 0;
    margin-left: ${theme.spacing.lg};

    border-bottom: 2px solid ${theme.colors.greyLight};
    transform: translateY(-100%);

    > :first-child {
      padding-right: ${theme.spacing.xs};
    }
  }
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

  function handleCreate(values) {
    console.log(values);
  }

  function handleUpdate(values) {}

  return (
    <AdminPanelStyled $isCollapsed={adminPanelState.isCollapsed}>
      <nav>
        <PanelTab icon={adminPanelState.isCollapsed ? <BsChevronUp /> : <BsChevronDown />} action={handleCollapse} />
        <PanelTab icon={<BsPlusLg />} label='Ajouter un produit' action={handleCreateBtn} className={adminPanelState.formType === 'add' ? 'is-active' : ''} />
        <PanelTab icon={<BsFillPencilFill />} label='Modifier un produit' action={handleUpdateBtn} className={adminPanelState.formType === 'update' ? 'is-active' : ''} />
      </nav>
      {adminPanelState.formType === 'add' ? (
        <AddProduct addProduct={handleCreate} />
      ) : adminPanelState.formType === 'update' ? (
        <UpdateProduct updateProduct={handleUpdate} />
      ) : (
        <p>Erreur de type de formulaire</p>
      )}
    </AdminPanelStyled>
  );
}

export default AdminPanel;
