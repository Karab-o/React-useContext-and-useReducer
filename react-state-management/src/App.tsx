import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LIGHT_THEME } from "./constants/theme";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import styles from "./App.module.css";

// Layout sits inside ThemeProvider so it can read the theme via useTheme()
const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.app} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <Navbar />
      <main>
        <TaskManager />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
