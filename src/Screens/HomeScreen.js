import { Card, Switch } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import db, { auth } from '../firebase'

function HomeScreen() {
    const [data, setdata] = useState("")
    const [fan125, setfan125] = useState(true)
    const userDetails = useSelector(state => state.userDetails)
    const {CabinNo,RoomNo}=userDetails
    console.log(CabinNo,RoomNo);
    useEffect(() => {
        db.collection("rooms").doc(RoomNo).collection("Cabin").doc(CabinNo).collection("Appliances").onSnapshot(snapshot=>{
            setdata(snapshot.docs)
            console.log(data)
        })
       
    }, [fan125,CabinNo,RoomNo])
    return (
        <div>
            <h3 >Home Screen</h3>
            
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
                                                        onChange={()=>{db.collection("rooms").doc(RoomNo).collection("Cabin").doc(CabinNo).collection("Appliances").doc(deta.id).update({
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
