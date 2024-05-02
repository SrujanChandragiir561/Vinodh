// import React from 'react'
// import './Navbar.css'

// import toggle_dark from '../../assets/night.png'
// import toggle_light from '../../assets/day.png'


// const Navbar = ({theme,setTheme}) => {




// const toggle_mode =()=>{
//     theme == 'light' ? setTheme('dark'): setTheme('light');
// }


//   return (
//     <div className='navbar'>
//         <h1>My Profile</h1>
       

//         <ul>
//             <li className ="underline">Skills</li>
//             <li className ="underline">Projects</li>
//             <li className ="underline">Contact</li>
//         </ul>
//         <div className='underline'></div>

//         <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>



//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import './Navbar.css';

import toggle_dark from '../../assets/night.png';
import toggle_light from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });

    
  };


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });

    
  }; 


  const scrollToProjects = () => {
    const skillsProjects = document.getElementById('project');
    skillsProjects.scrollIntoView({ behavior: 'smooth' });

    
  };
  return (
    <div className='navbar'>
      

      <ul >
        <li className='underline' onClick={scrollToSkills}>
          Skills
        </li>


        <li className='underline'onClick={scrollToProjects} >Projects</li>
        <li className='underline'onClick={scrollToContact}>Contact</li>
      </ul>
      <div className='toggle-icon'></div>

      <img
        onClick={() => {
          toggleMode();
        }}
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt=""
        className='toggle-icon'
      />
    </div>
  );
};

export default Navbar;
