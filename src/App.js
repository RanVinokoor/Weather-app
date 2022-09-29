import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Forecast } from './Components/Forecast';
import { Favorites } from './Components/Favorites';
import { Icon } from 'react-icons-kit';
import { weatherSunny } from 'react-icons-kit/typicons/weatherSunny';
import {moonO} from 'react-icons-kit/fa/moonO';
import ReactSwitch from 'react-switch';
import Particles from './Components/particle';

export const ThemeContext = createContext('light');

function App() {

  const [theme, setTheme] = useState('dark');

  const ToggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, ToggleTheme}}>
        <div id={theme}>
        <div className='switch'>
          <ReactSwitch className='wipe' onChange={ToggleTheme} checked={theme === 'light'} uncheckedIcon={<Icon icon={weatherSunny} size={19}></Icon>}  checkedIcon={<Icon icon={moonO} size={19}></Icon>}/>
        </div>
          <Navbar />
          <Routes>
            <Route path='Weather-app/' element={<Forecast />}/>
            <Route path='Weather-app/forecast' element={<Forecast />}/>
            <Route path='Weather-app/favorites' element={<Favorites />}/>
          </Routes>
        </div>
        <Particles/>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
