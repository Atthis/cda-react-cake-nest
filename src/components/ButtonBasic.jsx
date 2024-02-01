import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

const ButtonBasicStyled = styled.button`
  width: ${props => props.$width || '100%'};
  margin-block: 0.833em;
  padding-block: 0.9em;
  border: none;
  border-radius: ${theme.borderRadius.round};
  background-color: ${props => props.$bgColor || theme.colors.primary};
  font-size: ${props => props.$fontSize || theme.fonts.size.P3};
  font-weight: 700;
  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
  }

  .btn-icon {
    position: relative;
    top: 0.1em;
    left: 0.5em;
  }
`;

function ButtonBasic({ label, icon, fontSize = '1rem', width = 'auto', bgColor = theme.colors.primary }) {
  return (
    <ButtonBasicStyled $fontSize={fontSize} $width={width} $bgColor={bgColor}>
      {label} {icon && icon}
    </ButtonBasicStyled>
  );
}

export default ButtonBasic;
