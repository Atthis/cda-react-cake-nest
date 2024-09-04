import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';
import Logo from './Logo';
import { BsPersonCircle } from 'react-icons/bs';
import { theme } from '../utils';
import { IsAdminContext } from '../context/IsAdminContext';
import ButtonBasic from './ButtonBasic';
import apiAxios from '../../libs/axios';

const UserInfosStyled = styled.section`
  display: flex;
  align-items: center;

  text-align: right;

  div {
    margin-right: 10px;

    p {
      font-size: ${theme.fonts.size.P1};
      margin-left: 0.5em;

      span {
        font-weight: 800;
        color: ${theme.colors.primary};
      }
    }
    a {
      font-size: ${theme.fonts.size.XS};
      text-decoration: none;
      color: inherit;
    }
  }

  .input-icon {
    font-size: 2em;
    color: ${theme.colors.greyDark};
  }
`;

function UserInfos() {
  const { userData, setuserData } = useContext(UserContext);
  const { setIsAdmin } = useContext(IsAdminContext);
  const navigateTo = useNavigate();

  function handleClick() {
    setuserData({});
    setIsAdmin(false);
    apiAxios.post('/logout');
    navigateTo('/');
  }

  return (
    <UserInfosStyled>
      <div>
        <p>
          Salut <span>{userData.name}</span>
        </p>
        <ButtonBasic label={'se déconnecter'} fontSize={theme.fonts.size.XS} handleClick={handleClick} />
      </div>
      <BsPersonCircle className='input-icon' />
    </UserInfosStyled>
  );
}

export default UserInfos;
