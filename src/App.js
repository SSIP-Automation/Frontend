import React from "react"
import {BrowserRouter as Router, Route,Switch } from "react-router-dom"
import './bootstrap.min.css';
import Header from "./Components/Header";
import { Button, Container } from "react-bootstrap";
import RegisterScreen from "./Screens/RegisterScreen";
import {auth,provider} from  "./firebase";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import LandingScreen from "./Screens/LandingScreen";
function App() {
  
  return (
      <Router >

        <Switch>
        <Route path="/" exact><LandingScreen /></Route>
          <main >
        <Header></Header>
        <Container>
          <Route path="/Register"><RegisterScreen/></Route>
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
