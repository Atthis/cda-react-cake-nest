import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/index.js';
import LoginForm from './LoginForm.jsx';
import Logo from '../../components/Logo.jsx';
import Wrapper from '../../components/Wrapper.jsx';

import bgImg from '../../assets/imgs/tarts.jpg';

const LoginStyled = styled.div`
  color: ${theme.colors.white};
  text-align: center;

  h1,
  h2 {
    font-family: 'Pacifico', cursive;
  }

  h1 {
    font-size: ${theme.fonts.size.P6};
  }

  h2 {
    font-size: ${theme.fonts.size.P5};
  }

  section {
    height: 50%;
    width: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section:first-of-type {
    justify-content: space-around;
    border-bottom: 2px solid ${theme.colors.primary_cake};
  }
`;

function Login() {
  return (
    <Wrapper bgImg={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(56, 34, 34, 0.4)), url(${bgImg});`}>
      <LoginStyled>
        <section>
          <Logo fontSize={theme.fonts.size.P5} />
          <h1>Bienvenue chez nous !</h1>
        </section>
        <section>
          <h2>Connectez-vous</h2>
          <LoginForm />
        </section>
      </LoginStyled>
    </Wrapper>
  );
}

export default Login;
