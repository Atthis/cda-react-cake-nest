import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

const InputStyled = styled.div`
  --input-height: 3.125em;
  --input-padd-left: 5em;

  position: relative;
  font-size: ${props => props.$fontSize};

  input {
    display: block;
    width: 100%;
    height: var(--input-height);
    margin-block: 1.25em;
    padding-block: 2em;
    padding-left: var(--input-padd-left);
    border: none;
    border-radius: ${theme.borderRadius.round};
    font-size: inherit;
  }

  .input-icon {
    position: absolute;
    top: calc(var(--input-height) / 4);
    left: 0;
    font-size: 2em;
    color: inherit;
    transform: translate(80%, -28%);
  }

  ${props => {
    const inputTheme = props.$theme;
    switch (inputTheme) {
      case 'light':
        return `
          color: ${theme.colors.greyBlue};
        
        input {
          background-color: ${theme.colors.white};
          &::placeholder {
            color: ${theme.colors.greyDark};
          }
        }`;
      case 'dark':
        return `
          color: ${theme.colors.greyDark};
          
          input {
            background-color: ${theme.colors.background_white};
            
            &::placeholder {
              color: ${theme.colors.greyDark};
            }
        }`;
    }
  }}
`;

function Input({ icon, type, name, placeholder, required = false, autoComplete = null, theme = 'light', fontSize = '1rem' }) {
  return (
    <InputStyled $theme={theme} $fontSize={fontSize}>
      {icon && icon}
      <input type={type} name={name} id={name} placeholder={placeholder} required={required} autoComplete={autoComplete} />
    </InputStyled>
  );
}

export default Input;
