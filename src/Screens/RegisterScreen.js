import React, {useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import  { auth } from '../firebase'
import jwt from "jsonwebtoken"
function RegisterScreen() {
    const [email, setemail] = useState("")
    const [branch, setbranch] = useState("")
    const [cabin, setcabin] = useState("")
    const [roomNo, setroomNo] = useState("")
    
    const SubmitHandler=()=>{
      const token=jwt.sign({email,roomNo,cabin},"abc123",{expiresIn:"1d"})
      var actionCodeSettings = {
          url: `https://ssip-fad50.web.app?token=${token}`,
          handleCodeInApp: true,
          
        };
        auth.sendSignInLinkToEmail(email, actionCodeSettings)
          .then((response) => {
            
              console.log(response,"yes");
          })
          .catch((error) => {
              console.log(error)
              
          });
  }
    
    return (
        <div className="screens">
            <Row className="justify-content-sm-center mt-3">
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
                      <option value="">Choose...</option>
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
                      <option value="">Choose...</option>
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

                  <Button type="submit"  className="mx-auto mt-3">Sign in with Email link </Button>
                
                
              </Row>
            </Form>
          </Col>
        </Row>
        </div>
    )
}

export default RegisterScreen
