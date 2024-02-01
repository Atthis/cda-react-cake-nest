import React from 'react';
import styled from 'styled-components';

const PanelTabStyled = styled.div`
  display: inline-block;
  background-color: red;
  width: min-content;

  transform: translateY(-100%);
`;

function PanelTab({ icon, label = '', action = () => console.log('aucune action définie') }) {
  function handleClick(...params) {
    action(...params);
  }

  return (
    <PanelTabStyled onClick={handleClick}>
      {icon && icon}
      {label && label}
    </PanelTabStyled>
  );
}

export default PanelTab;
