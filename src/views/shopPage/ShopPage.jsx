import React, { useState } from 'react';
import { createContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/index.js';
import Wrapper from '../../components/Wrapper';
import NavBar from '../../components/NavBar';
import Menu from './Menu.jsx';

export const AdminContext = createContext(null);

const ShopPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${theme.spacing.lg};

  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};

  overflow: hidden;
`;

function ShopPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      <Wrapper bgImg={theme.colors.primary}>
        <ShopPageStyled>
          <NavBar />
          <Menu />
        </ShopPageStyled>
      </Wrapper>
    </AdminContext.Provider>
  );
}

export default ShopPage;
