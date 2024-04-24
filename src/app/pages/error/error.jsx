import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <main className="error-main-container">
      <h1>404</h1>
      <p>Errore, sei fuori strada</p>
      <NavLink to="/">Torna alla pagina iniziale</NavLink>
    </main>
  );
}

export default Error;
