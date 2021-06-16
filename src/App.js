import React from "react"
import {BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom"
import "./bootstrap.min (1).css"
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import RegisterScreen from "./Screens/RegisterScreen";
import LandingScreen from "./Screens/LandingScreen";
import SideBarScreen from "./Screens/SideBarScreen";
import DashBoardScreen from "./Screens/SideBarScreens/DashBoardScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import AboutUsScreen from "./Screens/SideBarScreens/AboutUsScreen";
import SettingScreen from "./Screens/SideBarScreens/SettingScreen";
import { useAuth } from "./AuthContext";
import PrivateRoute from "./Components/PrivateRoutes";
import HomeScreen from "./Screens/HomeScreen";
import TestScreen from "./Screens/TestScreen"
function App() {
  const { currentUser:user } = useAuth()
  // const user=null

return (
  <Router >
    <Switch>
      <Route path="/" exact>
        {!user ? 
          <LandingScreen />:
          <Redirect to="/home" />
        }
      </Route>
    
      <main >
        <Header ></Header>

      {!user ? <LandingScreen /> :
        <div className="d-flex"> 
          <Route path="/home">
            <SideBarScreen />
            <HomeScreen />
          </Route>
        </div>
      }

      <div className="d-flex"> 
        <Route path="/DashBoard">
          <SideBarScreen />
          <DashBoardScreen />
        </Route>
      </div>

      <div className="d-flex"> 
        <Route path="/Profile">
          <SideBarScreen />
          <ProfileScreen />
        </Route>
      </div>

      <div className="d-flex"> 
        <Route path="/AboutUs">
          <SideBarScreen />
          <AboutUsScreen />
        </Route>
      </div>

      <div className="d-flex"> 
        <Route path="/Setting
        ">
          <SideBarScreen />
          <SettingScreen />
        </Route>
      </div>

        <Container>
          {/* <PrivateRoute exact path="/home" component={HomeScreen}></PrivateRoute> */}
          <Route path="/Register"><RegisterScreen/></Route>
          <Route path="/test"><TestScreen/></Route>
        </Container>
      </main>

    </Switch>
  </Router>
);
}

export default App;
