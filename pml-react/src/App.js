import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Header from './Post/Components/organisms/header';
import TopPage from './Post/Components/pages/TopPage/TopPage';
import PostPage from './Post/Components/pages/PostPage/PostPage';
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
