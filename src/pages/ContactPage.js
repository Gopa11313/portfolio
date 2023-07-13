import React from 'react';
import { Element } from 'react-scroll';

const ContactPage = () => {
  return (
    <Element name="contact" className="section">
      <h1>Contact Page</h1>
      <p>This is the content of the contact page.</p>
      <img src="https://example.com/contact-image.jpg" alt="Contact" />

      <h2>Contact Information</h2>
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>

      <h2>Get in Touch</h2>
      <p>
        If you have any questions or inquiries, feel free to reach out to us.
        Our team is always ready to assist you and provide the information you
        need. We look forward to hearing from you!
      </p>
    </Element>
  );
};

export default ContactPage;
