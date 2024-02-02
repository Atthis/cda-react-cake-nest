import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../utils';
import { IsAdminContext } from '../context/IsAdminContext';
import { toast } from 'react-toastify';

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
  border-radius: 50px;

  font-size: ${theme.fonts.size.XXS};
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  cursor: pointer;

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
      color: ${theme.colors.primary};
      
      
      .toggle-thumb {
        left: calc(100% - ${theme.spacing.xxs});
        transform: translateY(-50%) translateX(-100%);
      }
      `
      : `
      justify-content: flex-end;
    background-color: black;
    border-color: transparent;
    color: ${theme.colors.white};
    
    .toggle-thumb {
      left: ${theme.spacing.xxs}
    }
    `}
`;

function AdminToggle() {
  const { isAdmin, setIsAdmin } = useContext(IsAdminContext);

  const adminNotify = () => toast.info('Mode Admin actif');

  function handleClick() {
    if (isAdmin) setIsAdmin(false);
    else {
      setIsAdmin(true);
      adminNotify();
    }
  }

  return (
    <AdminToggleStyled onClick={handleClick} $isAdmin={isAdmin}>
      <span className='toggle-thumb'></span>
      {isAdmin ? 'Mode admin activé' : 'Activer le mode Admin'}
    </AdminToggleStyled>
  );
}

export default AdminToggle;
