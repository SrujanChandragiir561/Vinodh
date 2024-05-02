

import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Website from '../Website';

function HomeScreen() {


const current_theme =localStorage.getItem('current_theme')

const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
useEffect(()=>{
  localStorage.setItem('current_theme', theme)

},[theme])

return (
    <div className={`container ${theme}`}>
      
      <Navbar theme={theme} setTheme={setTheme}/>
      <Website/>
    </div>
  );
}

export default HomeScreen;
