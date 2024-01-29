import React from 'react';
import { Link } from 'react-router-dom';

function OrderPage({ username, setUsername }) {
  function handleClick() {
    setUsername('');
  }

  return (
    <>
      <main>
        <h1>Bienvenue {username}</h1>
        <Link to='/' onClick={handleClick}>
          Déconnexion
        </Link>
      </main>
    </>
  );
}

export default OrderPage;
