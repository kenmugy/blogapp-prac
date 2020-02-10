import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostForm from './core/PostForm';
import Nav from './routes/Nav';
import Home from './routes/Home';
import Posts from './routes/Posts';
import About from './routes/About';

const App = () => {
  return (
    <Router>
      <Nav />
      <div className='container'>
        <h3>Welcome to Bblog</h3>
        <Switch>
          <Route path='/' exact='true'>
            <Home />
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/post'>
            <PostForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
