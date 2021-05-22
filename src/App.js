import React from "react"
import {BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom"
import "./bootstrap.min (1).css"
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import RegisterScreen from "./Screens/RegisterScreen";
import LandingScreen from "./Screens/LandingScreen";
// import HomeScreen from "./Screens/HomeScreen";
import { useAuth } from "./AuthContext";
import PrivateRoute from "./Components/PrivateRoutes";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  const { currentUser:user } = useAuth()
  // const user=null

  return (
      <Router >
        <Switch>
        <Route path="/" exact>{!user ? 
        <LandingScreen />
        :
        <Redirect to="/home" />
      }
        </Route>
          <main >
        <Header ></Header>
        <Container>
        <PrivateRoute exact path="/home" component={HomeScreen}></PrivateRoute>
          <Route path="/Register"><RegisterScreen/></Route>
       </Container>
        </main>
        </Switch>
      </Router>
  );
}

export default App;
