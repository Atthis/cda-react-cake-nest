import React from 'react';

function OrderPage({ username, setUsername }) {
  function handleClick() {
    setUsername('');
  }

  return (
    <>
      <h1>Bienvenue {username}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </>
  );
}

export default OrderPage;
