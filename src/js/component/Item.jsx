import React, { useContext } from 'react';
import { Context } from '../store/appContext';

import '../../styles/item.css';
import Modal from './Modal.jsx';

const Item = ({ fullName,
  address,
  email,
  phone,
  id }) => {

  const modalId = `modalItem${id}`;
  const { actions } = useContext(Context);

  return (
    <div className='item'>
      <img className='item__image' src="" alt="" />
      <div className="item__content">
        <h2 className='item__titulo'>{fullName}</h2>
        <p className="item__addres">{address}</p>
        <p className="item__phone">{phone}</p>
        <p className="item__email">{email}</p>
      </div>
      <div className="item__interact">
        <button
          className='item__button'
          data-toggle="modal"
          data-target={`#${modalId}`}>
          <i className="bi bi-trash3 delete"></i>
        </button>
        <button className='item__button'><i className="bi bi-pencil-fill edit"></i></button>
      </div>
      <Modal
        modalId={modalId}
        title='Are you sure?'
        body='If you delete this thing the entire universe will go down!'
        acceptAction={() => { actions.deleteContact(id) }} />
    </div>
  );
};
export default Item;