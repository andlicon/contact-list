import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  address: ''
};

const AddNew = () => {
  // hooks
  const [state, setState] = useState({
    fullName: initialValues.fullName,
    email: initialValues.email,
    phone: initialValues.phone,
    address: initialValues.address
  });

  const handlerInputChange = ({ target }) => {
    const input = target.name;
    const newValue = target.value;

    setState({
      ...state,
      [input]: newValue
    });
  }

  return (
    <>
      <h2 className='col-12 text-center mt-5 mb-3'>Add a new contact</h2>
      <form action=''>
        <div
          className='form-group mb-2'>
          <label
            htmlFor='fullName'
            className='mb-1'>
            Full Name
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            onChange={handlerInputChange}
            value={state.fullName}
            className='form-control w-100' />
        </div>
        <div className='form-group mb-2'>
          <label
            htmlFor='email'
            className='mb-1'>
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            onChange={handlerInputChange}
            value={state.email}
            className='form-control w-100' />
        </div>
        <div className='form-group mb-2'>
          <label
            htmlFor='phone'
            className='mb-1'>
            Phone
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            onChange={handlerInputChange}
            value={state.phone}
            className='form-control w-100' />
        </div>
        <div className='form-group mb-3'>
          <label
            htmlFor='address'
            className='mb-1'>
            Address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            onChange={handlerInputChange}
            value={state.address}
            className='form-control w-100' />
        </div>
        <button
          type='button'
          className='btn btn-primary w-100'>
          save
        </button>
      </form>
      <Link
        to={'/'}
        className=''>
        or get back to contacts
      </Link>
    </>
  );
};
export default AddNew;