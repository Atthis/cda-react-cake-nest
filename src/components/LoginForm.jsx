import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../assets';

const Form = styled.form`
  width: 100%;

  input,
  button {
    display: block;
    width: 100%;
    height: 50px;
    margin-block: ${theme.spacing.md};
    padding-block: ${theme.spacing.lg};
    border: none;
    border-radius: ${theme.borderRadius.round};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P3};
    font-weight: 700;
    color: ${theme.colors.white};
  }
`;

function LoginForm({ setUsername }) {
  const navigateTo = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.username.value);
    navigateTo('/commandes');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input type='text' name='username' id='username' placeholder='Entrez votre prénom...' required autoComplete='name' />
      <button>Mon espace</button>
    </Form>
  );
}

export default LoginForm;
