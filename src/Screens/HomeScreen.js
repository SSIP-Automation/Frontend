import { Card, Switch } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import db from '../firebase'

function HomeScreen() {
    const [data, setdata] = useState("")
    const [fan125, setfan125] = useState(true)
    useEffect(() => {
        // db.collection("users").doc("Tof0LfqPPqTLoNMu0kvociWaAnF3").onSnapshot(snapshot=>{
        //      snapshot.data().refer.onSnapshot(snapshot=>{
        //         setdata(snapshot.data())
        //         console.log(snapshot.data())
        //     })
            
        // })
        db.collection("rooms").doc("E-105").collection("Cabin").doc("1").collection("Appliances").onSnapshot(snapshot=>{
            setdata(snapshot.docs)
        })
        console.log(data.docs)
       
    }, [fan125])
    return (
        <div>
            Home Screen 
            
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
                                                        onChange={()=>{db.collection("rooms").doc("E-105").collection("Cabin").doc("1").collection("Appliances").doc(deta.id).update({
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
        </div>
    )
}

export default HomeScreen
