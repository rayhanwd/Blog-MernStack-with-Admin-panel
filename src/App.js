import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home';
import LogIn from './Components/LogIn/LogIn';
import Admin from './Components/AdminPanel/Admin';
import BlogDetails from './Components/Blog/BlogDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import ManagePost from './Components/AdminPanel/ManagePost';
import DeletePost from './Components/AdminPanel/DeletePost';
import WritePost from './Components/AdminPanel/WritePost';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/managepost">
            <ManagePost />
          </PrivateRoute>
          <PrivateRoute path="/removepost">
            <DeletePost />
          </PrivateRoute>
          <PrivateRoute path="/writepost">
            <WritePost />
          </PrivateRoute>
          <Route path="/posts/:_id">
            <BlogDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
