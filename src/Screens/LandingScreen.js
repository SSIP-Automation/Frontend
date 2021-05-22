import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from "./1.gif";
import { useAuth } from '../AuthContext';
function LandingScreen() {
    const [loading, setloading] = useState(false)
    const {login}=useAuth()
    useEffect(() => {
       
    }, [])
   
    const signIn1=async()=>{
        setloading(true)
        try {
            await login()
            
        } catch (error) {
            console.log("yo");
        } 

    }
    
    return (
        <div className="col d-flex justify-content-center vh-100 svbg ">
            <Card className="text-center p-5 rounded shadow m-auto bg-light">
                <Card.Img className="mb-4" style={{height:"125px",objectFit:"contain"}} src={logo}/>
                <h3>Sign in to SSIP Automation</h3>
                <p>Hello Friends Welcome to my Youtube Channel</p>
                <Button onClick={signIn1} disabled={loading} variant="success" className="mx-auto mb-2">Sign in with Google</Button>
                {/* {error && error} */}
                {loading && <Spinner className="mx-auto text-primary"  animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>}
                <Row>

                <Col>
                 New User? &nbsp;
                
                 <Link to="/register" className="text-primary">
                    Register
                </Link> 
                </Col>
                </Row>
            </Card>
        </div>
    )
}

export default LandingScreen




