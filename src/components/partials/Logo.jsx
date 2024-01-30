import React from 'react';
import styled from 'styled-components';
import { theme } from '../../assets/index.js';
import logo from '../../assets/imgs/cupcake.png';

const LogoStyled = styled.p`
  margin-block: ${theme.spacing.md};

  font-weight: 900;
  font-size: ${theme.fonts.size.P5};
  color: ${theme.colors.primary};
  text-transform: uppercase;

  img {
    position: relative;
    bottom: -15px;
    width: 75px;
  }
`;

function Logo() {
  return (
    <LogoStyled>
      cake <img src={logo} alt='' />
      nest
    </LogoStyled>
  );
}

export default Logo;
