import React from 'react';

const PostForm = ({ handleChange, handleSubmit, blog }) => {
  console.log(blog);
  return (
    <div>
      <form action='/posts' onSubmit={handleSubmit} className='container'>
        <div className='input-field'>
          <input
            id='title'
            type='text'
            name='title'
            onChange={handleChange}
            value={blog.title}
          />
          <label htmlFor='title'>Title</label>
        </div>
        <div className='input-field'>
          <textarea
            name='body'
            className='materialize-textarea'
            id='textarea'
            onChange={handleChange}
            value={blog.body}></textarea>
          <label htmlFor='textarea'>Body</label>
        </div>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
