import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ username, setUsername }) {
  const navigateTo = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handleSubmit() {
    navigateTo('/commandes');
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' id='username' value={username} placeholder='Entrez votre prénom...' onChange={handleChange} required autoComplete='name' />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
}

export default Login;
