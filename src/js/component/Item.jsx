import React from 'react';

const Item = ({ fullName,
  address,
  email,
  phone,
  id }) => {
  return (
    <div className='item'>
      <img className='item__image' src="" alt="" />
      <div className="item__content">
        <h2 clasName='item__titulo'>{fullName}</h2>
        <p className="item__addres">{address}</p>
        <p className="item__phone">{phone}</p>
        <p className="item__email">{email}</p>
      </div>
      <div className="item__interact">
        <button clasName='item__button'><i className="bi bi-trash3"></i></button>
        <button clasName='item__button'><i className="bi bi-pencil-fill"></i></button>
      </div>

    </div>
  );
};
export default Item;