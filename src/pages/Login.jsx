import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

import bgImg from '../assets/imgs/tarts.jpg';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${bgImg});
`;

function Login({ username, setUsername }) {
  return (
    <Wrapper>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <LoginForm username={username} setUsername={setUsername} />
    </Wrapper>
  );
}

export default Login;
