import React, { useState } from 'react';

function Login({ username, setUsername }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    e.preventDefault();

    setUsername(e.target.value);
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <p>Connectez-vous</p>
      <form onSubmit={setUsername}>
        <input type='text' name='username' id='username' value={username} onChange={handleChange} />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
}

export default Login;
