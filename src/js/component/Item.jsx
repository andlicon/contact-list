import React from 'react';

import '../../styles/item.css';

const Item = ({ fullName,
  address,
  email,
  phone,
  id }) => {
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
        <button className='item__button'><i className="bi bi-trash3 delete"></i></button>
        <button className='item__button'><i className="bi bi-pencil-fill edit"></i></button>
      </div>

    </div>
  );
};
export default Item;