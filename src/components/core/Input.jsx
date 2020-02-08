import React from 'react';

const Input = ({ title, handleChange }) => {
  return (
    <>
      <div className='input-field'>
        <input
          id='title'
          type='text'
          name='title'
          onChange={handleChange}
          value={title}
        />
        <label htmlFor='title'>Title</label>
      </div>
    </>
  );
};

export default Input;
