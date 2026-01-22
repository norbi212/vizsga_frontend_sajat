import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

export default function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Profil</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Sötét mód" : "Világos mód"}
      </button>

      <br />
      <a href="/my-listings">Saját hirdetéseim</a>
    </div>
  );
}
