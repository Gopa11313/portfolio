import React from 'react';
import ME from "../assets/me.jpg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"

const HomePage = () => {
  return (
    <section class="body-section">
      <div class="grid1">
        <p>HELLO</p>
        <p className='myName'>I'm Gopal</p>
        <p>An Application Developer <br/>
          From Nepal</p>
        <p className='hireMeBtn'><button>Hire Me</button></p> 

        <ul>
          <li><img src={instagram}></img></li>
          <li><img src={github}></img></li>
          <li><img src={twitter}></img></li>
          <li><img src={linkedin}></img></li>
        </ul>
      </div>
      <div class="grid2">
        <img src={ME} alt='my image' />
        <div className='description'>
          <p>hi, I'am Gopal Thapa. Iam excited to present myself as a accomphlised app developer, known for my unwavering dedication and exceptional work ehic. With a calm and focused approach,
            consitently delivering innovative and user-friendly application that exceed expectations. </p>
          <button>View Resume</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
