import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

function LoginForm({ username, setUsername }) {
  const navigateTo = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handleSubmit() {
    navigateTo('/commandes');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' id='username' value={username} placeholder='Entrez votre prénom...' onChange={handleChange} required autoComplete='name' />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
