import { useState, useEffect } from "react";

export default function Profile() {
  const [theme, setTheme] = useState("light");

  // Betöltéskor ellenőrizni a localStorage-t
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.dataset.theme = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <h1>Profil</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Sötét mód" : "Világos mód"}
      </button>

      <br />
      <a href="/profile/my-listings">Saját hirdetéseim</a>
    </div>
  );
}
