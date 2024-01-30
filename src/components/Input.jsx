import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';
import { BsPersonCircle } from 'react-icons/bs';

const InputStyled = styled.div`
  --input-height: 50px;
  --input-padd-left: 5em;

  position: relative;

  input {
    display: block;
    width: 100%;
    height: var(--input-height);
    margin-block: ${theme.spacing.md};
    padding-block: ${theme.spacing.lg};
    padding-left: var(--input-padd-left);
    border: none;
    border-radius: ${theme.borderRadius.round};
    font-size: inherit;
  }

  .input-icon {
    position: absolute;
    top: calc(var(--input-height) / 2);
    left: 0;
    font-size: 2em;
    color: ${theme.colors.greyMedium};
    transform: translate(80%, -30%);
  }
`;

function Input() {
  return (
    <InputStyled>
      <BsPersonCircle className='input-icon' />
      <input type='text' name='username' id='username' placeholder='Entrez votre prénom...' required autoComplete='name' />
    </InputStyled>
  );
}

export default Input;
