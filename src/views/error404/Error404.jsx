import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link to='/'>Retourner à la page d'accueil</Link>
    </>
  );
}

export default Error404;
