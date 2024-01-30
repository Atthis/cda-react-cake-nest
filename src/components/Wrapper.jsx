import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.$background || '#353535'};
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

function Wrapper({ bgImg, children }) {
  return <WrapperStyled $background={bgImg}>{children}</WrapperStyled>;
}

export default Wrapper;
