import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import style from './App.module.scss';
import ExoPlanets from './pages/ExoPlanets';
import SinglePlanet from './pages/SinglePlanet';

const App = () => (
  <BrowserRouter>
    <div className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exoplanets/:pl_name" element={<SinglePlanet />} />
        <Route path="/exoplanets" element={<ExoPlanets />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
