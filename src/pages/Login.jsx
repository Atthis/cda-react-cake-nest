import React, { useState } from 'react';

function Login({ username, setUsername }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    e.preventDefault();

    setUsername(e.target.value);
  }

  function handleSubmit() {
    setUsername('');
    alert(`Bonjour ${username}`);
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' id='username' value={username} placeholder='Entrez votre prénom...' onChange={handleChange} required />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
}

export default Login;
