import React, { useContext } from 'react';
import styled from 'styled-components';
import { AdminContext } from '../views/shopPage/ShopPage';

const AdminToggleStyled = styled.section``;

function AdminToggle() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  return (
    <AdminToggleStyled>
      <div className='toggle-thumb'></div>
      {isAdmin ? 'Mode admin activé' : 'Activer le mode Admin'}
    </AdminToggleStyled>
  );
}

export default AdminToggle;
