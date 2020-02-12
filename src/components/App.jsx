import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostForm from './core/PostForm';
import Nav from './routes/Nav';
import Home from './routes/Home';
import Posts from './routes/Posts';
import About from './routes/About';

class App extends Component {
  state = {
    blog: {
      title: '',
      body: ''
    },
    posts: [
      {
        id: 0,
        title: 'title 1',
        body: 'body 1'
      }
    ]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      blog: { ...this.state.blog, [name]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(preState => {
      const post = {
        id: preState.posts.length,
        title: preState.blog.title,
        body: preState.blog.body
      };
      const posts = [...preState.posts, post];
      return {
        blog: { body: '', title: '' },
        posts
      };
    });
  };
  render() {
    return (
      <Router>
        <Nav />
        <div className='container'>
          {/* <h3>Welcome to Bblog</h3> */}
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/posts'>
              <Posts posts={this.state.posts} />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/post'>
              <PostForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                blog={this.state.blog}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
