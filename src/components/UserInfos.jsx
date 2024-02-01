import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../App';
import Logo from './Logo';
import { BsPersonCircle } from 'react-icons/bs';
import { theme } from '../utils';
import { AdminContext } from '../views/shopPage/ShopPage';

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
  const { username, setUsername } = useContext(UserContext);
  const { setIsAdmin } = useContext(AdminContext);

  function handleClick() {
    setUsername('');
    setIsAdmin(false);
  }

  return (
    <UserInfosStyled>
      <div>
        <p>
          Salut <span>{username}</span>
        </p>
        <Link to='/' onClick={handleClick}>
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className='input-icon' />
    </UserInfosStyled>
  );
}

export default UserInfos;
