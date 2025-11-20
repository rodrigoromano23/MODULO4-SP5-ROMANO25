/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import HeroesList from "../pages/HeroesList.jsx";
import HeroDetail from "../pages/HeroDetail.jsx";
import HeroCreate from "../pages/HeroCreate.jsx";
import HeroEdit from "../pages/HeroEdit.jsx";
import Favorites from "../pages/Favorites.jsx";
import Filter from "../pages/Filter.jsx";
import NotFound from "../pages/NotFound.jsx";
import Header from "../components/header.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="/heroes/:id" element={<HeroDetail />} />
        <Route path="/heroes/create" element={<HeroCreate />} />
        <Route path="/heroes/:id/edit" element={<HeroEdit />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import HeroesList from "../pages/HeroesList.jsx";
import HeroDetail from "../pages/HeroDetail.jsx";
import HeroCreate from "../pages/HeroCreate.jsx";
import HeroEdit from "../pages/HeroEdit.jsx";
import Favorites from "../pages/Favorites.jsx";
import Filter from "../pages/Filter.jsx";
import NotFound from "../pages/NotFound.jsx";
import Header from "../components/header.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="/heroes/:id" element={<HeroDetail />} />
        <Route path="/heroes/create" element={<HeroCreate />} />
        <Route path="/heroes/:id/edit" element={<HeroEdit />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

