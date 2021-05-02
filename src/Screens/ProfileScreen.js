import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function ProfileScreen() {
    const userDetails = useSelector(state => state.userDetails)
    const {CabinNo,RoomNo}=userDetails
    const [cabin, setcabin] = useState(CabinNo)
    const [roomNo, setroomNo] = useState("")
    useEffect(() => {
        if(!cabin){
            setcabin(CabinNo)
            setroomNo(RoomNo)
        }
    }, [])
    return (
        <Row className="mt-3">
            <Col md={3}>
            <Form>

            
              
                  <Form.Group controlId="CabinNo">
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

                  <Form.Group controlId="RoomNo">
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

                  
              {/* <Form.Group controlId="Branch">
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
              </Form.Group> */}
</Form>
            </Col>
        </Row>
    )
}

export default ProfileScreen
