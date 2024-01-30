import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils';
import ItemCard from '../../components/ItemCard';

import { fakeSmallMenu, fakeMenu } from '../../../fakeData/fakeMenu';

const MenuStyled = styled.main`
  flex: 1;

  display: flex;
  flex-wrap: wrap;

  box-shadow: inset 0px 0px 10px 5px hsla(0, 0%, 15%, 0.3);
`;

function Menu() {
  return (
    <MenuStyled>
      {fakeSmallMenu.map(item => (
        <ItemCard key={new Date().getTime() + item.id} />
      ))}
    </MenuStyled>
  );
}

export default Menu;
