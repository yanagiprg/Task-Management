import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Header from './Presentational/organisms/header';
import TopPage from './Presentational/pages/TopPage/TopPage';
import PostPage from './Presentational/pages/PostPage/PostPage';
import './App.scss';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={TopPage} />
      <Route path='/posts' component={PostPage} />
    </Switch>
  </>
);

export default App;
