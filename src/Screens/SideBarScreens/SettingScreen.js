import React from 'react'
import "../Css/SettingScreen.css"
import { ListGroup, Row, Col, Container } from 'react-bootstrap'
import { Switch } from '@material-ui/core'
import { useState } from 'react'

function SettingScreen() {

    const [notification, setnotification] = useState(true)

    return (
        <div className="screens setting">
            <Container>
                <div className="mt-5 setting__notification">
                    <ListGroup>
                        <ListGroup.Item>
                            <Row >
                                <Col xs={6}>
                                <div className="list__text">
                                    Notification
                                </div>
                                </Col>
                                <Col xs={6}>
                                <div className="list__switch">
                                    <Switch
                                        checked={true}
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="setting__notif">
                    <ListGroup>
                        <ListGroup.Item>
                            <Row >
                                <Col xs={6}>
                                <div className="list__text">
                                    Notification
                                </div>
                                </Col>
                                <Col xs={6}>
                                <div className="list__switch">
                                    <Switch
                                        checked={true}
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

            </Container>
        </div>
    )
}

export default SettingScreen
