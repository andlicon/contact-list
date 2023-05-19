import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/contact.css';
import { Context } from '../store/appContext';
import Item from '../component/Item.jsx';

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
              <Item key={element.id}
                fullName={element.full_name}
                address={element.address}
                email={element.email}
                phone={element.phone}
              />
            )
          })
        }
      </div >
    </>
  );
};
export default Contact;