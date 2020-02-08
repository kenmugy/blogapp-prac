import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

class PostForm extends Component {
  state = {
    blog: {
      title: '',
      body: ''
    },
    posts: [
      {
        title: 'title 1',
        body: 'body 1'
      }
    ]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(preState => {
      const post = {
        title: preState.title,
        body: preState.body
      };
      const posts = [...preState.posts, post];
      return {
        body: '',
        title: '',
        posts
      };
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input title={this.state.title} handleChange={this.handleChange} />
          <TextArea body={this.state.body} handleChange={this.handleChange} />
          <button className='btn'>Submit</button>
        </form>
        <ul className='collection'>
          {this.state.posts &&
            this.state.posts.map((post, i) => (
              <li key={i} className='collection-item orange'>
                <h5>Title: {post.title}</h5>
                <p>Body: {post.body}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default PostForm;
