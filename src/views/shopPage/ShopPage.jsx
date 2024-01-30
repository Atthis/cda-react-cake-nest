import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/index.js';
import Wrapper from '../../components/Wrapper';
import NavBar from '../../components/NavBar';
import Menu from './Menu.jsx';

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
  return (
    <Wrapper bgImg={theme.colors.primary}>
      <ShopPageStyled>
        <NavBar />
        <Menu />
      </ShopPageStyled>
    </Wrapper>
  );
}

export default ShopPage;
