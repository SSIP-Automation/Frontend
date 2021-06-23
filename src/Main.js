import React from "react"
import {Redirect, Route } from "react-router-dom"
import "./bootstrap.min (1).css"
import Header from "./Components/Header";
import SideBarScreen from "./Screens/SideBarScreen";
import DashBoardScreen from "./Screens/SideBarScreens/DashBoardScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingScreen from "./Screens/SideBarScreens/SettingScreen";
import PrivateRoute from "./Components/PrivateRoutes";
import HomeScreen from "./Screens/HomeScreen";
import TestScreen from "./Screens/TestScreen"
function Main() {
    return (
        <div>
            <main >
        <Header ></Header>

        <Route path="/" exact>
         <Redirect to="/home"/>
        </Route>
      <div className="d-flex">
        <SideBarScreen/>
        <div className="screens">
        <PrivateRoute path="/home" component={HomeScreen} ></PrivateRoute>
        <PrivateRoute path="/dashboard" component={DashBoardScreen} ></PrivateRoute>
        <PrivateRoute path="/profile" component={ProfileScreen} ></PrivateRoute>
        <PrivateRoute path="/setting" component={SettingScreen}></PrivateRoute>
        <PrivateRoute path="/test" component={TestScreen}></PrivateRoute>
        </div>
      </div>
      </main>
        </div>
    )
}

export default Main
