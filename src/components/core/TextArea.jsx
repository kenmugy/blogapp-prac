import React from 'react';

const TextArea = ({ body, handleChange }) => {
  return (
    <>
      <div className='input-field'>
        <textarea
          name='body'
          className='materialize-textarea'
          id='textarea'
          onChange={handleChange}
          value={body}></textarea>
        <label htmlFor='textarea'>Body</label>
      </div>
    </>
  );
};

export default TextArea;
