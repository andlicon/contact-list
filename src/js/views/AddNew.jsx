import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const initialValues = {
  "full_name": '',
  "email": '',
  "phone": '',
  "address": ''
};

const AddNew = () => {
  // hooks
  const [state, setState] = useState({
    "full_name": initialValues.full_name,
    "email": initialValues.email,
    "phone": initialValues.phone,
    "agenda_slug": 'andreszabala',
    "address": initialValues.address
  });

  const { id } = useParams(id);
  const { actions } = useContext(Context);

  const handlerInputChange = ({ target }) => {
    const input = target.name;
    const newValue = target.value;

    setState({
      ...state,
      [input]: newValue
    });
  }

  const handlerOnClick = async () => {
    if (id) {
      actions.updateContact(id, state);
    }
    else {
      actions.createContact(state);
    }
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
            name='full_name'
            onChange={handlerInputChange}
            value={state.full_name}
            placeholder='Enter name'
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
            placeholder='Enter email'
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
            placeholder='Enter phone'
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
            placeholder='Enter address'
            onChange={handlerInputChange}
            value={state.address}
            className='form-control w-100' />
        </div>
        <button
          type='button'
          className='btn btn-primary w-100'
          onClick={handlerOnClick}>
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