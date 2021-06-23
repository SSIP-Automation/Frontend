import React from "react"
import {BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom"
import "./bootstrap.min (1).css"
import Header from "./Components/Header";
import RegisterScreen from "./Screens/RegisterScreen";
import { useAuth } from "./AuthContext";
import Main from "./Main";
import Login from "./Components/Login";
function App() {
  const { currentUser:user } = useAuth()
  // const user=null

return (
  <Router >
    <Switch>
        <Route path="/Register" exact>
        <Header/>
        <RegisterScreen />
        </Route>
      <Route path="/" >
        {!user ? 
          <Login />:
          <Main/>
        }
      </Route>

    </Switch>
  </Router>
);
}

export default App;
