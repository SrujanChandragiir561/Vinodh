





import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';





const Website = () => {
  return (
    <div className="Summary">


{/*   */}








      <h1>Hi, I am <span style={{ color: 'red', fontWeight: 'bold' }}>Srujan Chandragiri</span> </h1>
    <h2>A Software Engineer.</h2>
    <h3>"As a self-taught programmer with a dedication to lifelong learning, I possess proficiency in  web development. My strength lies in translating business requirements into efficient technical solutions. Eager to launch my career with a renowned tech-driven company, I am committed to delivering impactful contributions and embracing new challenges."</h3>
    
    
    <div class="about__contact center">
          <a  
            href="https://drive.google.com/file/d/1gX3f5YwIrE8x-gvn8UQfYWUvmXfzkLjM/view?usp=sharing"
            target="_blank">
          
            <span class="btn btn--outline">Resume</span>             
          </a>


          <a  
            href="https://github.com/SrujanChandragiir561"
            target="_blank"
          
            class="link link--icon"> 
             <FontAwesomeIcon icon={faGithub}    />
          </a>

          <a  
            href="https://www.linkedin.com/in/srujan-chandragiri-4160611b4/"
            target="_blank"
          
            class="link link--icon"> 
             <FontAwesomeIcon icon={faLinkedin}    />
          </a>

         
          {/* -----------------old github   <a   
            href="https://github.com/SrujanChandragiir561"
            aria-label="github"
            class="link link--icon">
          <FontAwesomeIcon icon={faGithub} /> {/*Render Font Awesome icon *//*}
           
          </a> */}

          {/* <a
            href="https://www.linkedin.com/in/srujan-chandragiri-4160611b4/"
            aria-label="linkedin"
            class="link link--icon">
          <FontAwesomeIcon icon={faLinkedin} /> 
           
          </a>*/}
        
        </div>
   {/*<!-- Skills -->*/}
 <section class="section skills" id="skills">
   <h2 class="section__title">Skills</h2>
   <ul class="skills__list">
     <li class="skills__list-item btn btn--plain">Core Java</li>
     <li class="skills__list-item btn btn--plain">HTML</li>
     <li class="skills__list-item btn btn--plain">CSS</li>
     <li class="skills__list-item btn btn--plain">JavaScript</li>
     <li class="skills__list-item btn btn--plain">Bootstrap</li>
     <li class="skills__list-item btn btn--plain">MYSQL</li>
     <li class="skills__list-item btn btn--plain">MongoDb</li>
     <li class="skills__list-item btn btn--plain">Express.js</li>
     <li class="skills__list-item btn btn--plain">React.js</li>
     <li class="skills__list-item btn btn--plain">Node.js</li>
     
    
     
   </ul>
 </section>
{/*-----------------This is for to link hyperLink to each div----------------------------*/ }
 {/* <div class='project-link' id='project'> 
    <div class='projects'>Projects</div>
    <div class='project-card'> 
        <a href="">
            <div class='project'>
                <h2>Proxy API Integration: Seamlessly Fetching and Displaying Product Data</h2>
                <p> Proxy API Integration: Enhancing User Experience with React and Express.js. Seamless retrieval of product data from a dummy API, facilitating browsing and detailed exploration of products. Frontend and backend synergy ensures efficient data delivery and presentation. <br /><span style={{ color: 'black', fontWeight: 'bold' }}> Applied - Skills – HTML, CSS, REACT, NODE JS, EXPRESS JS </span></p>
            </div>
        </a>
        <a href="#house-rental-application">
            <div class='project'>
                <h2>Develop a House Rental application with React Application</h2>
                <p>Developed a House Rental application with React.js, MongoDB, Node.js, and Express.js. Implemented a navigation bar for easy navigation, and dynamically displayed house cards on the Home page fetched from <br /><span style={{ color: 'black', fontWeight: 'bold' }}> MongoDB using Node.js and Express.js.</span></p>
            </div>
        </a>
        <a href="#account-opening-form">
            <div class='project'>
                <h2>Account Opening Form with API Integration</h2>
                <p>Crafted a sophisticated web-based account opening platform, facilitating seamless submission of user personal information, encompassing vital details such as name, email, date of birth, PAN, address, and income. Employing an API integration, the system efficiently processes the data, culminating in the generation of a distinct 10-digit account number alongside comprehensive account particulars.<br /><span style={{ color: 'black', fontWeight: 'bold' }}> Applied - Skills React.js for the frontend,Node.js, Express.js for backend API  and Mongo DB database for storing account details.</span></p>
            </div>
        </a>
    </div>
</div> */}




 <div class='project-link' id='project'> 
    <div class='projects'>Projects</div>
    <div class='project-card'> 
        <div class='project' >
            <h2>Proxy API Integration: Seamlessly Fetching and Displaying Product Data</h2>
            <p> Proxy API Integration: Enhancing User Experience with React and Express.js. Seamless retrieval of product data from a dummy API, facilitating browsing and detailed exploration of products. Frontend and backend synergy ensures efficient data delivery and presentation. <br /><span style={{ color: 'black', fontWeight: 'bold' }}> Applied - Skills – HTML, CSS, REACT, NODE JS, EXPRESS JS </span></p>
        </div>
        <div class='project'>
            <h2> Develop a House Rental application with React Application</h2>
            <p>Developed a House Rental application with React.js, MongoDB, Node.js, and Express.js. Implemented a navigation bar for easy navigation, and dynamically displayed house cards on the Home page fetched from <br /><span style={{ color: 'black', fontWeight: 'bold' }}> MongoDB using Node.js and Express.js.</span></p>
        </div>
         <div class='project'>
            <h2>Account Opening Form with API Integration</h2>
            <p>Crafted a sophisticated web-based account opening platform, facilitating seamless submission of user personal information, encompassing vital details such as name, email, date of birth, PAN, address, and income. Employing an API integration, the system efficiently processes the data, culminating in the generation of a distinct 10-digit account number alongside comprehensive account particulars.<br /><span style={{ color: 'black', fontWeight: 'bold' }}> Applied - Skills React.js for the frontend,Node.js, Express.js for backend API  and Mongo DB database for storing account details.</span>



</p>
        </div> 
    </div>
</div> 


     
     <div className='mail'>
     <h2 class="mail__title">Contact</h2>
   
        <a href="mailto:srujanchandragiri@gmail.com;" className='email-link-link-icon'   id='contact'>
  <FontAwesomeIcon icon={faEnvelope} size="2x"/>
</a>
       
     </div>
 
   


  
    </div>


 
  )
}

export default Website






// <div className='Projects'>
// {/*<!-- Projects -->*/}
// <section class="section projects" id="projects">
//    <h2 class="section__title">Projects</h2>
//    <ul class="projects__list">
//      <li class="projects__list-item btn btn--plain"><h2>Frontend Development for Product Display and Detail View Integration with Dummy API</h2>
     
//      <p>Implemented a button in the frontend labeled "Display Products." Upon clicking the button, an API call was made to retrieve product data, which in turn fetched data from the dummy API list at https://dummyjson.com/products. 
//         Subsequently, the retrieved products were displayed on the frontend interface. Additionally, implemented functionality where clicking on any product row would trigger another API call to fetch and display detailed information about the selected product from the endpoint https://dummyjson.com/product/:id.
//         By using – HTML, CSS, REACT, NODE JS, EXPRESS JS
// </p>
//      </li>

//      {/* project 2*/}
//      <li class="projects__list-item btn btn--plain"><h2>Frontend Development for Product Display and Detail View Integration with Dummy API</h2>
     
//      <p>Implemented a button in the frontend labeled "Display Products." Upon clicking the button, an API call was made to retrieve product data, which in turn fetched data from the dummy API list at https://dummyjson.com/products. 
//        Subsequently, the retrieved products were displayed on the frontend interface. Additionally, implemented functionality where clicking on any product row would trigger another API call to fetch and display detailed information about the selected product from the endpoint https://dummyjson.com/product/:id.
//        By using – HTML, CSS, REACT, NODE JS, EXPRESS JS
// </p>
//      </li>
     
//    </ul>
//  </section>
//  </div>


/* replace with projects <p></p>
1.
Developed a Product Display and Detail View web app using HTML, CSS, React, Node.js, and Express.js. Integrated functionality to fetch and display products from a dummy API endpoint upon button click, with further details fetched on clicking a product row.
 Technologies utilized: HTML, CSS, React, Node.js, Express.js.






- Crafted a Product Display and Detail View web application using HTML, CSS, React, Node.js, and Express.js.
- Implemented a button labeled "Display Products" that triggers an API call to retrieve product data from the dummy API endpoint at https://dummyjson.com/products.
- Upon clicking the button, the application fetches and displays the products on the frontend interface.
- Enhanced functionality enables users to click on any product row to trigger another API call for detailed information about the selected product, fetched from the endpoint https://dummyjson.com/product/:id.
- Technologies Applied: HTML, CSS, React, Node.js, Express.js.





2.

-Developed a House Rental application using React.js, MongoDB, Node.js, and Express.js.
-Implemented a navigation bar featuring links to Home, Contact, Services, and About pages for easy navigation within the application.
-The Home page dynamically displays cards containing images, prices, and locations of available houses. This data is fetched from a MongoDB database using Node.js and Express.js on the backend.
-Technologies Applied: MongoDB, Express.js, React.js, Node.js.

3.

-Created an Account Opening Form web application with API Integration using React.js for the frontend, Node.js, Express.js for backend API, and MongoDB database for storing account details.
-Implemented a user-friendly web-based system that allows users to submit their personal details, including first name, last name, email, date of birth (DOB), age, PAN (Permanent Account Number), address, and annual salary, for account creation.
-Upon form submission, the system invokes an API to process the data and generates a unique 10-digit account number along with other account details, providing users with a seamless account opening experience.
-Technologies Applied: React.js for the frontend, Node.js and Express.js for backend API, MongoDB for storing account details.

*/ 

