import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/contact.css';

import { Context } from '../store/appContext';

const Contact = () => {
  const { store } = useContext(Context);

  return (
    <>
      <Link
        className='btn btn-success my-3 to-right'
        to='./add'>
        Add new contact
      </Link>
      <div className="contact-list">
        {
          store.contacts.map((element) => {
            return (
              <p key={element.id}>
                {element.full_name}
                {element.address}
                {element.email}
                {element.phone}
              </p>
            )
          })
        }
      </div >
    </>
  );
};
export default Contact;