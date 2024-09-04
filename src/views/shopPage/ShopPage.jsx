import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/index.js';
import Wrapper from '../../components/Wrapper';
import NavBar from '../../components/NavBar';
import Menu from './Menu.jsx';
import { ToastContainer } from 'react-toastify';
import { IsAdminContext } from '../../context/IsAdminContext.jsx';

const ShopPageStyled = styled.div`
  --toastify-icon-color-info: ${theme.colors.green};
  --toastify-color-progress-info: ${theme.colors.green};

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
    <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      <Wrapper bgImg={theme.colors.primary}>
        <ShopPageStyled>
          <ToastContainer role='alert' position='bottom-right' autoClose={1500} theme='light' closeOnClick />
          <NavBar />
          <Menu />
        </ShopPageStyled>
      </Wrapper>
    </IsAdminContext.Provider>
  );
}

export default ShopPage;
