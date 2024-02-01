import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

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

function Input({ icon, type, name, placeholder, required, autoComplete }) {
  return (
    <InputStyled>
      {icon && icon}
      <input type={type} name={name} id={name} placeholder={placeholder} required={required} autoComplete={autoComplete} />
    </InputStyled>
  );
}

export default Input;
