import React from 'react';
import { Element } from 'react-scroll';

const AboutPage = () => {
  return (
    <Element name="about" className="section">
      <h1>About Page</h1>
      <p>This is the content of the about page.</p>
      {/* <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="About" /> */}

      <h2>Our Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Mark Johnson - CFO</li>
        <li>Sarah Williams - Marketing Director</li>
      </ul>

      <h2>Company History</h2>
      <p>
        Our company was founded in 2005 with a mission to revolutionize the
        industry. Over the years, we have grown into a global leader,
        consistently delivering innovative solutions to our clients.
      </p>
    </Element>
  );
};

export default AboutPage;
