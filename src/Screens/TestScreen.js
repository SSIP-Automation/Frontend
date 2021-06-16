import React, { useEffect, useState } from 'react'
import './Css/HomeScreen.css'
import {  Switch, Container, Card } from '@material-ui/core'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useAuth } from '../AuthContext'
import db from '../firebase'

function HomeScreen() {
    const [data, setdata] = useState("")
    const {cabinNo,roomNo}=useAuth()
    console.log(cabinNo,roomNo);
    useEffect(() => {
        db.collection("rooms").doc(roomNo).collection("Cabin").doc(cabinNo).collection("Appliances").onSnapshot(snapshot=>{
            setdata(snapshot.docs)
        })
       
    }, [cabinNo,roomNo])
    return (
        <div className="homescreen">
            <Container fluid>
            <h3 >Home Screen</h3>
            <div className="d-none d-sm-block">Hello frands </div>

                    <Row>
                        <Col md={6}>
                    
                            <Image fluid src="https://media.istockphoto.com/vectors/schoolboy-is-doing-homework-online-the-boy-sits-at-a-computer-table-vector-id1217321764?k=6&m=1217321764&s=612x612&w=0&h=mx13Fi41zTRuWybLKrlQHM4M4_mmmwP5MIuA1JIsJpM=">
                            </Image>

                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                {data && data.map(deta=>(
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    {deta.data().name}
                                                </Col>
                                                <Col>
                                                <Switch
                                                        checked={deta.data().power}
                                                        onChange={()=>{db.collection("rooms").doc(roomNo).collection("Cabin").doc(cabinNo).collection("Appliances").doc(deta.id).update({
                                                            power:!deta.data().power
                                                        })
                                                        
                                                    }}
                                                        name="checkedA"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                ))}
                                
                            </ListGroup>
                        </Col>
                    </Row> 
            </Container>
        </div>
    )
}

export default HomeScreen
