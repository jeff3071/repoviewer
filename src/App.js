import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useRef  }  from "react";
import {
  useNavigate
} from "react-router-dom";
import AppRoute from './AppRoute';

function App() {
  let Ref = useRef("");
  let navigate = useNavigate()
  let handleclick = () => {
    if(Ref.current.value)
      navigate(`/users/${Ref.current.value}/repos`)
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <input placeholder="username" type="text" ref={Ref} className="form-control form-control-lg"></input>
        </Col>
        
        <Col xs={2}>
          <Button variant="outline-success" size="lg" onClick={handleclick}>查詢</Button>
        </Col>
      </Row>
      
      <AppRoute/>
    </Container>
  ) 
}

export default App;
