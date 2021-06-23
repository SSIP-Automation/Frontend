import React, { useEffect, useState } from 'react'
import './Css/HomeScreen.css'
import {  Switch, Container, Card } from '@material-ui/core'
import { Col, Image, Row, Carousel } from 'react-bootstrap'
import { useAuth } from '../AuthContext'
import db from '../firebase'
import vectorimg from "./Images/vectorimg.png"
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      height: 100,
    },
  });


function HomeScreen() {
    const [data, setdata] = useState("")
    const {cabinNo,roomNo}=useAuth()
    console.log(cabinNo,roomNo);
    useEffect(() => {
        db.collection("rooms").doc(roomNo).collection("Cabin").doc(cabinNo).collection("Appliances").onSnapshot(snapshot=>{
            setdata(snapshot.docs)
        })
       
    }, [cabinNo,roomNo])

    const classes = useStyles();

    return (
        <div className="homescreen">

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINx69r1kWQrjm6eWTs2cgLsn9i45p10BpaQ&usqp=CAU"
                    alt="First slide"
                    height="350"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAXWcsKmxly-QYiS0N6KTBhLQ5V3OAIE_wA&usqp=CAU"
                    alt="Second slide"
                    height="350"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTb8MUQ6uS07tDgL9TfkLxBaGPcH0yUUc3w&usqp=CAU"
                    alt="Third slide"
                    height="350"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <br /><br />

            <Container>
            <Row>
                <Col md={6}>

                    <Row>
                        <Col xs={6} md={4}>
                            <Card className="text-center card1">
                                <div>
                                    <h4 >Fan 1</h4>
                                    {/* <br /> */}
                                    <Row>
                                        <Col xs={6}>
                                            <div>
                                                <Switch
                                                    checked={true}
                                                    name="checkedA"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </Col>

                                        <Col xs={6}>
                                            <div className={classes.root}>
                                                <Slider
                                                    orientation="vertical"
                                                    // getAriaValueText={valuetext}
                                                    defaultValue={50}
                                                    aria-labelledby="vertical-slider"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    last seen time : 21min
                                </div>
                            </Card> 
                        </Col>

                        <Col xs={6} md={4}>

                            <Card className="text-center card1">
                                <div>
                                    <h4 >Fan 2</h4>
                                    {/* <br /> */}
                                    <Row>
                                        <Col xs={6}>
                                            <div>
                                                <Switch
                                                    checked={true}
                                                    name="checkedA"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </Col>

                                        <Col xs={6}>
                                            <div className={classes.root}>
                                                <Slider
                                                    orientation="vertical"
                                                    // getAriaValueText={valuetext}
                                                    defaultValue={50}
                                                    aria-labelledby="vertical-slider"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    last seen time : 21min
                                </div>
                            </Card> 

                        </Col>

                        <Col xs={6} md={4}>

                            <Card className="text-center card1">
                                <div>
                                    <h4 >Fan 3</h4>
                                    {/* <br /> */}
                                    <Row>
                                        <Col xs={6}>
                                            <div>
                                                <Switch
                                                    checked={true}
                                                    name="checkedA"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </Col>

                                        <Col xs={6}>
                                            <div className={classes.root}>
                                                <Slider
                                                    orientation="vertical"
                                                    // getAriaValueText={valuetext}
                                                    defaultValue={50}
                                                    aria-labelledby="vertical-slider"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    last seen time : 21min
                                </div>
                            </Card> 

                        </Col>                       
                    </Row>

                </Col>

                <Col md={6}>
                    <div className="d-none d-sm-block">
                        <Image fluid src={vectorimg} />
                    </div>
                </Col>
            </Row>


            </Container>
        </div>
    )
}

export default HomeScreen
