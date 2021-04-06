import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import db, { auth } from '../firebase'

function RegisterScreen() {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [branch, setbranch] = useState("")
    const userLogin = useSelector(state => state.userLogin)
    const {user}=userLogin
    useEffect(() => {
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
          email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        auth.signInWithEmailLink(email, window.location.href)
          .then((result) => {
            // Clear email from storage.
              
              db.collection("users").doc(result.user.uid).set({
              displayName:result.user.displayName
              })
            console.log(result);
            window.localStorage.removeItem('emailForSignIn');
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
        
    }, [])
    const signIn2=()=>{
      var actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be in the authorized domains list in the Firebase Console.
          url: 'https://ssip-fad50.web.app/',
          handleCodeInApp: true,
          // This must be true.
          
          // dynamicLinkDomain: 'https://dynamiclenk.page.link/'
        };
        auth.sendSignInLinkToEmail(email, actionCodeSettings)
          .then((response) => {
              // The link was successfully sent. Inform the user.
              // Save the email locally so you don't need to ask the user for it again
              // if they open the link on the same device.
              // ...
              window.localStorage.setItem('emailForSignIn', email);
              console.log(response,"yes");
          })
          .catch((error) => {
              console.log(error)
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
          });
  }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        if(confirmpassword===password){
            console.log("Yes",password,branch,username,email)
        }
        else{
            console.log("no");
        }
    }
    return (
        <div>
          {/* {user.uid} */}
            <Row className="justify-content-md-center mt-3">
                <Col sm={6}>
            <Form onSubmit={SubmitHandler} >
              <h1 >Register</h1>
              <Form.Group controlId="User Name">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>setusername(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control required type="email" placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" onChange={(e)=>setconfirmpassword(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId="Branch">
                <Form.Label>Select Branch</Form.Label>
                <Form.Control as="select" value={branch} onChange={(e)=>setbranch(e.target.value)} >
                    <option>Choose Branch</option>
                    <option>CO-Computer Engineering</option>
                    <option>CE-Civil Engineering</option>
                    <option>EE-Electrical Engineering</option>
                    <option>ME-Mechanical Engineering</option>
                    <option>IT-Information Technology</option>
                    <option>ICT-Information and Communication Technology</option>
                    </Form.Control>
              </Form.Group>
              <Button type="submit">Submit</Button>
              <Button onClick={signIn2} variant="success" className="mx-auto">Sign in with Email link </Button>
            </Form>
          </Col>
        </Row>
        </div>
    )
}

export default RegisterScreen
