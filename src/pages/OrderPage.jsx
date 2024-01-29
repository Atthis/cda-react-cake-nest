import React from 'react';

function OrderPage({ username, setUsername }) {
  function handleClick() {
    setUsername('');
  }

  return (
    <>
      <main>
        <h1>Bienvenue {username}</h1>
        <button onClick={handleClick}>Déconnexion</button>
      </main>
    </>
  );
}

export default OrderPage;
