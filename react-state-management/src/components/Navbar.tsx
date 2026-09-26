import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";
import { DARK_THEME, LIGHT_THEME } from "../constants/theme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`${styles.navbar} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <span className={styles.brand}>React App</span>
      <button className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME} Mode
      </button>
    </nav>
  );
};

export default Navbar;
