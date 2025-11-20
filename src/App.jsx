import AppRouter from "./router/AppRouter";
import { HeroesProvider } from "./context/HeroesContext";
import "./index.css"; 

function App() {
  return (
    <HeroesProvider>
      <AppRouter />
    </HeroesProvider>
  );
}

export default App;

