import AppRouter from "./router/AppRouter";
import { HeroesProvider } from "./context/HeroesContext";
import "./index.css"; // Asegúrate de tener Tailwind importado

function App() {
  return (
    <HeroesProvider>
      <AppRouter />
    </HeroesProvider>
  );
}

export default App;

