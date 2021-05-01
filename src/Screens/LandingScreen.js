import React, { useEffect, useState } from 'react'
import {auth,provider} from  "../firebase";
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import db from "../firebase";
import jwt from "jsonwebtoken"
import logo from "./1.gif";
import firebase from "firebase/app";
import { UserLoginAction } from '../actions/UserAction';
function LandingScreen() {
    let history=useHistory()
    let location=useLocation()
    const [token, settoken] = useState("")
    const [email1, setemail1] = useState("")
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (auth.isSignInWithEmailLink(window.location.href)) {
            settoken(window.location.search.split("=")[1].split("&")[0])
            try {
                console.log(token)
                const data=jwt.verify(token,"abc123")
                // console.log("yes",window.location.href)
                setloading(true)
            
            auth.signInWithEmailLink(data.email, window.location.href)
            .then((result) => {
                console.log(result);
                db.collection("users").doc(result.user.uid).set({
                    displayName:result.user.displayName,
                    CabinNo:data.cabin,
                    RoomNo:data.roomNo
                })
                alert("User registered")
                history.push("/home")
                setloading(false)
            })
            .catch((error) => {
                alert("Sign in link expired register again")
                console.log(error);
            });
            
        } catch (error) {
            console.log(error);
            
        }
          }
        
        auth.getRedirectResult().then(result=>
            {
                let error=true
                if(result.user){
                    setloading(true)
                    db.collection("users").onSnapshot(snapshot=>{
                        snapshot.docs.map((doc)=>{
                            console.log(doc.id)
                            if(doc.id===result?.user?.uid){
                                dispatch({
                                    type:"USER_LOGIN_SUCCESS",
                                    payload:result.user
                                })
                                localStorage.setItem("userLoginInfo",JSON.stringify(result.user))
                                error = false
                                history.push("/home")
                            }
                        })
                        if (error) {
                            alert("Not a user")
                        }
                        console.log(auth);
                    })
                }
            }
        )       
    }, [history,token])
   
    const signIn1=()=>{
        setloading(true)
        auth.signInWithRedirect(provider)
        .then((result)=>{
            console.log(result)
            dispatch({type:"USER_LOGIN_SUCCESS",payload:result.user})
         })
        

    }
    
    return (
        <div className="col d-flex justify-content-center vh-100 svbg ">
            <Card className="text-center p-5 rounded shadow m-auto bg-light">
                <Card.Img className="mb-4" style={{height:"125px",objectFit:"contain"}} src={logo}/>
                <h3>Sign in to SSIP Automation</h3>
                <p>Hello Friends Welcome to my Youtube Channel</p>
                <Button onClick={signIn1} disabled={loading} variant="success" className="mx-auto mb-2">Sign in with Google</Button>
                {/* {error && error} */}
                {loading && <Spinner className="mx-auto text-primary"  animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>}
                <Row>

                <Col>
                 New User? &nbsp;
                
                 <Link to="/register" className="text-primary">
                    Register
                </Link> 
                </Col>
                </Row>
            </Card>
        </div>
    )
}

export default LandingScreen


// relate ate six 


//http://localhost:3000/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWtpcmh1emFpZmE0MkBnbWFpbC5jb20iLCJyb29tTm8iOiJFLTEwNSIsImNhYmluIjoiMyIsImlhdCI6MTYxNzk3MTc2NywiZXhwIjoxNjE4MDU4MTY3fQ.b977nETn9LTUiwLx2rKVjZUlsUuk3iSuk0y7dhzD1yw&apiKey=AIzaSyDPaXupfaFnuQwoZRf2-LVYczJqFFjBCdI&oobCode=LG5p_ukTTFvmvedl2a3EXQNj9JIHxhkicagOW-DF8cQAAAF4tqHvYA&mode=signIn&lang=en