import React, { useEffect } from "react"
import {BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom"
import "./bootstrap.min (1).css"
// import './bootstrap.min.css';
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import RegisterScreen from "./Screens/RegisterScreen";
import LandingScreen from "./Screens/LandingScreen";
import HomeScreen from "./Screens/HomeScreen";
import TestScreen from "./Screens/TestScreen";
import { useDispatch, useSelector } from "react-redux";
import db, { auth } from "./firebase";
function App() {
  const userLogin = useSelector(state => state.userLogin)
  const {user}=userLogin
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(()=>{
      dispatch({
        type:"USER_LOGIN_SUCCESS",
        payload:auth.currentUser
    })
    db.collection("users").doc(auth.currentUser.uid).onSnapshot(snapshot=>{
      
        dispatch({
          type:"USER_DETAILS_SUCCESS",
          payload:snapshot.data()
        })
      })
      
    
    })
  }, [])
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
          <Route path="/Register"><RegisterScreen/></Route>
          {!user ? <Redirect to="/"/>:
          <Route path="/home"><HomeScreen/></Route>
          }
          {/* <Route path="/test" component={TestScreen} /> */}
       </Container>
        </main>
        
              
        </Switch>
        
        {/* <FirebaseAuthProvider  >
            Hello
          </FirebaseAuthProvider> */}
        
      </Router>
      
  );
}

export default App;
