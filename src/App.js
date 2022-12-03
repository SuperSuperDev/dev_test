import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import style from './App.module.scss';
import ExoPlanets from './pages/ExoPlanets';

const App = () => (
  <BrowserRouter>
    <div className={style.main}>
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exoplanets" element={<ExoPlanets />} />
      </Routes>
      <ExoPlanets />
    </div>
  </BrowserRouter>
);

export default App;
