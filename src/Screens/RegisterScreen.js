import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function RegisterScreen() {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [branch, setbranch] = useState("")
    const userLogin = useSelector(state => state.userLogin)
    const {user}=userLogin
    useEffect(() => {
        
        
    }, [])
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
                <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}></Form.Control>
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
            </Form>
          </Col>
        </Row>
        </div>
    )
}

export default RegisterScreen
