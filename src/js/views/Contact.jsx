import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/contact.css';

const Contact = () => {

  return (
    <>
      <Link
        className='btn btn-success my-3 to-right'
        to='./add'>
        Add new contact
      </Link>
      <div className="contact-list">

      </div>
    </>
  );
};
export default Contact;