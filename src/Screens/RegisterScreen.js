import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import db, { auth } from '../firebase'
import jwt from "jsonwebtoken"
function RegisterScreen() {
    const [email, setemail] = useState("")
    const [branch, setbranch] = useState("")
    const [cabin, setcabin] = useState("")
    const [roomNo, setroomNo] = useState("")
    const userLogin = useSelector(state => state.userLogin)
    const {user}=userLogin
    useEffect(() => {
      console.log(auth.app);
      
      
    }, [])
    
    const signIn2=()=>{
      const token=jwt.sign({email,roomNo,cabin},"abc123",{expiresIn:"1d"})
      var actionCodeSettings = {
          url: `http://localhost:3000?token=${token}`,
          handleCodeInApp: true,
          
        };
        auth.sendSignInLinkToEmail(email, actionCodeSettings)
          .then((response) => {
            
              window.localStorage.setItem('emailForSignIn', email);
              console.log(response,"yes");
          })
          .catch((error) => {
              console.log(error)
              
          });
  }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        
    }
    return (
        <div>
          {/* {user.uid} */}
            <Row className="justify-content-md-center mt-3">
                <Col sm={6}>
            <Form onSubmit={SubmitHandler} >
              <h1 >Register</h1>
              
              <Form.Group controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control required type="email" placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Row>
                  <Form.Group as={Col} controlId="CabinNo">
                    <Form.Label>Cabin No.</Form.Label>
                    <Form.Control required as="select" value={cabin} onChange={(e)=>setcabin(e.target.value)} >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="RoomNo">
                    <Form.Label>Room No</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." required value={roomNo} onChange={(e)=>setroomNo(e.target.value)} >
                      <option>Choose...</option>
                      <option>E-105</option>
                      <option>F-105</option>
                      <option>G-105</option>
                      <option>B-105</option>
                      <option>C-105</option>
                    </Form.Control>
                  </Form.Group>

                  
              </Form.Row>
              <Form.Group controlId="Branch">
                <Form.Label>Select Branch</Form.Label>
                <Form.Control required as="select" value={branch} onChange={(e)=>setbranch(e.target.value)} >
                    <option>Choose Branch</option>
                    <option>CO-Computer Engineering</option>
                    <option>CE-Civil Engineering</option>
                    <option>EE-Electrical Engineering</option>
                    <option>ME-Mechanical Engineering</option>
                    <option>IT-Information Technology</option>
                    <option>ICT-Information and Communication Technology</option>
                    </Form.Control>
              </Form.Group>
              <Row className="justify-content-center mt-3">

                  <Button type="submit" onClick={signIn2} className="mx-auto mt-3">Sign in with Email link </Button>
                
                
              </Row>
            </Form>
          </Col>
        </Row>
        </div>
    )
}

export default RegisterScreen
