import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../utils';
import { AdminContext } from '../views/shopPage/ShopPage';

const AdminToggleStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 180px;
  margin: ${theme.spacing.lg};
  padding-inline: ${theme.spacing.sm};
  border-width: 3px;
  border-style: solid;
  border-radius: 40px;

  font-size: ${theme.fonts.size.XXS};
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  .toggle-thumb {
    position: absolute;
    top: 50%;
    height: calc(100% - (${theme.spacing.xxs} * 2));
    aspect-ratio: 1/1;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.circle};
    transform: translateY(-50%);
    transition: all 0.5s ease-in-out;
  }

  ${({ $isAdmin }) =>
    $isAdmin
      ? `
      justify-content: flex-start;
      background-color: white;
      border-color: ${theme.colors.primary};
      color: black;
      
      
      .toggle-thumb {
        left: calc(100% - ${theme.spacing.xxs});
        transform: translateY(-50%) translateX(-100%);
      }
      `
      : `
      justify-content: flex-end;
    background-color: black;
    border-color: transparent;
    color: ${theme.colors.primary};
    
    .toggle-thumb {
      left: ${theme.spacing.xxs}
    }
    `}
`;

function AdminToggle() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  function handleClick() {
    isAdmin ? setIsAdmin(false) : setIsAdmin(true);
  }

  return (
    <AdminToggleStyled onClick={handleClick} $isAdmin={isAdmin}>
      <div className='toggle-thumb'></div>
      {isAdmin ? 'Mode admin activé' : 'Activer le mode Admin'}
    </AdminToggleStyled>
  );
}

export default AdminToggle;
