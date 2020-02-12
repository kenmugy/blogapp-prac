import React from 'react';

const Posts = ({ posts }) => {
  let posts2 = posts.map(({ id, title, body }) => (
    <li key={id} className='card-panel purple accent-3 white-text'>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  ));
  return <ul>{posts2}</ul>;
};

export default Posts;
