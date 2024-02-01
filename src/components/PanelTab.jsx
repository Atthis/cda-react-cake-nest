import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

const PanelTabStyled = styled.button`
  display: inline-block;
  background-color: ${theme.colors.white};
  width: fit-content;
  padding-inline: ${theme.spacing.md};
  padding-block: ${theme.spacing.sm};

  border: none;
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};

  color: ${theme.colors.greyDark};
  box-shadow: 0px 0px 5px 1px hsla(0, 0%, 20%, 0.1);

  &.is-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.greyDark};
    color: ${theme.colors.white};
  }

  span {
    margin-left: ${theme.spacing.sm};
  }
`;

function PanelTab({ icon, label = '', action = () => console.log('aucune action définie'), className = '' }) {
  function handleClick(...params) {
    action(...params);
  }

  return (
    <PanelTabStyled onClick={handleClick} className={className}>
      {icon && icon}
      <span>{label && label}</span>
    </PanelTabStyled>
  );
}

export default PanelTab;
