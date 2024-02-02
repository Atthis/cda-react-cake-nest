import React from 'react';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import styled from 'styled-components';
import { theme } from '../../utils';
import { UserContext } from '../../context/UserContext.jsx';
import ButtonBasic from '../../components/ButtonBasic.jsx';
import { BsPersonCircle } from 'react-icons/bs';

import { BsChevronRight } from 'react-icons/bs';

const Form = styled.form`
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-block: ${theme.spacing.md};
    padding-block: ${theme.spacing.lg};
    border: none;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P3};
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
  }
`;

function LoginForm() {
  const { setUsername } = useContext(UserContext);
  const navigateTo = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.username.value);
    navigateTo('/commandes');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        icon={<BsPersonCircle className='input-icon' />}
        style={{ theme: 'light' }}
        attributesValues={{ type: 'text', name: 'username', placeholder: 'Entrez votre prénom...', required: true, autocomplete: 'name' }}
      />
      <ButtonBasic label={'Mon espace'} icon={<BsChevronRight className='btn-icon' />} fontSize={theme.fonts.size.P3} width={'100%'} />
    </Form>
  );
}

export default LoginForm;
