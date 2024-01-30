import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import UserInfos from './UserInfos';
import { theme } from '../utils';

const NavBarStyled = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
`;

function NavBar() {
  return (
    <NavBarStyled>
      <Logo fontSize={theme.fonts.size.P3} />
      <UserInfos />
    </NavBarStyled>
  );
}

export default NavBar;
