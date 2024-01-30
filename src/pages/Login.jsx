import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import { theme } from '../assets/index.js';

import bgImg from '../assets/imgs/tarts.jpg';
import logo from '../assets/imgs/cupcake.png';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImg});
  background-position: center;

  font-family: 'Open Sans', sans-serif;
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

const Logo = styled.p`
  margin-block: ${theme.spacing.md};

  font-weight: 900;
  font-size: ${theme.fonts.size.P5};
  color: ${theme.colors.primary};
  text-transform: uppercase;

  img {
    position: relative;
    bottom: -15px;
    width: 75px;
  }
`;

function Login({ username, setUsername }) {
  return (
    <Wrapper>
      <div>
        <section>
          <Logo>
            cake <img src={logo} alt='' />
            nest
          </Logo>
          <h1>Bienvenue chez nous !</h1>
        </section>
        <section>
          <h2>Connectez-vous</h2>
          <LoginForm username={username} setUsername={setUsername} />
        </section>
      </div>
    </Wrapper>
  );
}

export default Login;
