import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/index.js';
import logo from '../assets/imgs/cupcake.png';
import { reloadPage } from '../utils/window.js';

const LogoStyled = styled.p`
  margin-block: 0.3em;

  margin-inline: ${props => (props.$isAlignLeft ? '0 auto' : 'auto' || 'auto')};

  font-weight: 900;
  font-size: ${props => props.$fontSize || theme.fonts.size.P5};
  color: ${theme.colors.primary};
  text-transform: uppercase;

  img {
    position: relative;
    bottom: -0.3em;
    height: 1.56em;
    padding-right: 0.15em;
  }
`;

function Logo({ fontSize, isAlignLeft }) {
  return (
    <LogoStyled $fontSize={fontSize} $isAlignLeft={isAlignLeft} onClick={reloadPage}>
      cake <img src={logo} alt='' />
      nest
    </LogoStyled>
  );
}

export default Logo;
