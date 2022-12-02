import Home from './pages/Home';
import Hero from './components/Hero';
import style from './App.module.scss';
import ExoPlanets from './pages/ExoPlanets';
import AnimatedPlanet from './components/AnimatedPlanet';

const App = () => (
  <div className={style.main}>
    <Hero />
    <AnimatedPlanet />
    <Home />
    <ExoPlanets />
  </div>
);

export default App;
