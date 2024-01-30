import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils';

const MainContentStyled = styled.main`
  flex: 1;

  box-shadow: inset 0px 0px 10px 5px hsla(0, 0%, 15%, 0.3);
`;

function MainContent() {
  return <MainContentStyled></MainContentStyled>;
}

export default MainContent;
