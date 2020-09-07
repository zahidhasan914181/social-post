import React from 'react';
import './App.css';
import {Button} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './component/Post/Post';
import NoMatch from './component/NoMatch/NoMatch';
import Comments from './component/Comments/Comments';
function App() {
  return (
     <div className="App">
        <Router>
        <Switch>
        <Route path="/post">
            <Post></Post>
          </Route>
          <Route path="/status/:statusId">
            <Comments/>
          </Route>
          <Route exact path="/">
            <Post/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
