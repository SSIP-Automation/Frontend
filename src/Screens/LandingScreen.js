import React, { useEffect, useState } from 'react'
import {auth,provider} from  "../firebase";
import { Button, Card, Spinner } from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import db from "../firebase";
import logo from "./1.gif";
function LandingScreen() {
    let history=useHistory()
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {user}=userLogin
    useEffect(() => {
        if(user){
            history.push("/register")
        }
        if (auth.isSignInWithEmailLink(window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            var email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
              // User opened the link on a different device. To prevent session fixation
              // attacks, ask the user to provide the associated email again. For example:
            //   email = window.prompt('Please provide your email for confirmation');
            }
            // The client SDK will parse the code from the link for you.
            auth.signInWithEmailLink(email, window.location.href)
              .then((result) => {
                // Clear email from storage.
                console.log(result);
                db.collection("users").doc(result.user.uid).set({
                    displayName:result.user.displayName
                    })
                window.localStorage.removeItem('emailForSignIn');
                alert("User authenticated please Log in")
                history.push("/")
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
              })
              .catch((error) => {
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
                console.log(error);
              });
          }
        
        auth.getRedirectResult().then(result=>
            {
                let error=true
                if(result.user){
                    db.collection("users").onSnapshot(snapshot=>{
                        snapshot.docs.map((doc)=>{
                            console.log(doc.id)
                            if(doc.id===result?.user?.uid){
                                dispatch({type:"USER_LOGIN_SUCCESS",payload:result.user})
                                // localStorage.setItem("userLoginInfo",JSON.stringify(result.user))
                                error = false
                                history.push("/register")
                            }
                        })
                        if (error) {
                            alert("Not a user")
                        }
                    })
                }
            }
        )       
    }, [history,auth])
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
           console.log(result)
        })
        .catch((error)=>{
            alert(error.message)
        })
      }
    const signIn1=()=>{
        auth.signInWithRedirect(provider)
        .then((result)=>{
            console.log(result)
            dispatch({type:"USER_LOGIN_SUCCESS",payload:result.user})
         })

         setloading(true)
    }
    
   
    return (
        <div className="col d-flex justify-content-center vh-100 svbg ">
            <Card className="text-center p-5 rounded shadow m-auto bg-light">
                <Card.Img className="mb-4" style={{height:"125px",objectFit:"contain"}} src={logo}/>
                <h3>Sign in to SSIP Automation</h3>
                <p>Hello Friends Welcome to my Youtube Channel</p>
                <Button onClick={signIn} variant="success" className="mx-auto mb-2">Sign in with Pop Up Google</Button>
                <Button onClick={signIn1} variant="success" className="mx-auto mb-2">Sign in with Redirect Google</Button>
                {/* {error && error} */}
                {loading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>}
            </Card>
        </div>
    )
}

export default LandingScreen


// relate ate six 