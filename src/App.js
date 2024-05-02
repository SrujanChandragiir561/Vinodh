/*
import './App.css';
import Navbar from './comonents/Navbar/Navbar';
import { useState, useEffect } from 'react';

function App() {


const current_theme =localStorage.getItem('current_theme')

const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
useEffect(()=>{
  localStorage.setItem('current_theme', theme)

},[theme])

return (
    <div className={`container ${theme}`}>
      
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
*/


import './App.css';

import Navbar from './comonents/Navbar/Navbar';
import HomeScreen from './comonents/Home/HomeScreen';
import Api from './comonents/Navbar/Api';



function App() {
  return (
    <div className="App">
    
   <HomeScreen/>
      {/* <Api/>*/}

    
      
     
    </div>
  );
}

export default App;