import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './partials/Input';
import styled from 'styled-components';
import { theme } from '../assets';

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

function LoginForm({ setUsername }) {
  const navigateTo = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.username.value);
    navigateTo('/commandes');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input />
      <button>
        Mon espace <BsChevronRight className='btn-icon' />
      </button>
    </Form>
  );
}

export default LoginForm;
