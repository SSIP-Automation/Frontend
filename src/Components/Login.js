import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import LandingScreen from '../Screens/LandingScreen'

function Login() {
    return (
        <div>
            <Route path="/" exact>
                <LandingScreen/>
            </Route>
            <Route path>
                <Redirect to="/"/>
            </Route>
        </div>
    )
}

export default Login

