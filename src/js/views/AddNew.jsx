import React from 'react';
import { Link } from 'react-router-dom';

const AddNew = () => {
  return (
    <>
      <h2 className='col-12 text-center mt-5 mb-3'>Add a new contact</h2>
      <form action=''>
        <div className='form-group mb-2'>
          <label htmlFor='fullName' className='mb-1'>Full Name</label>
          <input type='text' id='fullName' className='form-control w-100' />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor='email' className='mb-1'>Email</label>
          <input type='text' id='email' className='form-control w-100' />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor='phone' className='mb-1'>Phone</label>
          <input type='text' id='phone' className='form-control w-100' />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='address' className='mb-1'>Address</label>
          <input type='text' id='address' className='form-control w-100' />
        </div>
        <button type='button' className='btn btn-primary w-100'>save</button>
      </form>
      <Link to={'/'} className=''>or get back to contacts</Link>
    </>
  );
};
export default AddNew;