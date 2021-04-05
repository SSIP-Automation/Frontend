import React, { useEffect, useState } from 'react'
import {auth,provider} from  "../firebase";
import { Button, Card } from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import db from "../firebase";
import logo from "./1.gif";
function LandingScreen() {
    let history=useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {user}=userLogin
    useEffect(() => {
        if(user){
            history.push("/register")
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


         auth.getRedirectResult().then(result=>console.log(result))
    }
   
    return (
        <div className="col d-flex justify-content-center vh-100 svbg ">
            <Card className="text-center p-5 rounded shadow m-auto bg-light">
                <Card.Img className="mb-4" style={{height:"125px",objectFit:"contain"}} src={logo}/>
                <h3>Sign in to SSIP Automation</h3>
                <p>Hello Friends Welcome to my Youtube Channel</p>
                <Button onClick={signIn} variant="success" className="mx-auto mb-2">Sign in with Pop Up Google</Button>
                <Button onClick={signIn1} variant="success" className="mx-auto">Sign in with Redirect Google</Button>
                {/* {error && error} */}
            </Card>
        </div>
    )
}

export default LandingScreen


// relate ate six 