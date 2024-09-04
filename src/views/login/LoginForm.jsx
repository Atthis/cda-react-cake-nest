import React from 'react';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import styled from 'styled-components';
import { theme } from '../../utils';
import { UserContext } from '../../context/UserContext.jsx';
import ButtonBasic from '../../components/ButtonBasic.jsx';
import { BsPersonCircle, BsKey } from 'react-icons/bs';

import { BsChevronRight } from 'react-icons/bs';
import apiAxios from '../../../libs/axios.js';

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
  const { setuserData } = useContext(UserContext);
  const navigateTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    apiAxios.post('/login', {
      email: e.target.email.value,
      password: e.target.password.value
    })
      .then(res => {
        console.log(res);
        setuserData(res.data);
        navigateTo('/commandes');
      })
      .catch(err => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        icon={<BsPersonCircle className='input-icon' />}
        style={{ theme: 'light' }}
        attributesValues={{ type: 'email', name: 'email', placeholder: 'Entrez votre email...', required: true, autocomplete: 'email' }}
      />
      <Input
        icon={<BsKey className='input-icon' />}
        style={{ theme: 'light' }}
        attributesValues={{ type: 'password', name: 'password', placeholder: 'Entrez votre mot de passe...', required: true, autocomplete: 'password' }}
      />
      <ButtonBasic label={'Mon espace'} icon={<BsChevronRight className='btn-icon' />} fontSize={theme.fonts.size.P3} width={'100%'} />
    </Form>
  );
}

export default LoginForm;
