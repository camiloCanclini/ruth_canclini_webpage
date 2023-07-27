import './ServiceSection.css'
import Container from "react-bootstrap/Container";
import CardService from "./cards/card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ServiceSection(){
  return (
    <Container className='p-4' style={{minHeight: '100vh'}}>
      <Row style={{padding: '3em'}}>
        <h1 className='text-start'>Services</h1>
      </Row>
      <Row sm={1} md={3} style={{justifyContent:'center', rowGap:'2em'}}>
        <Col>
          <CardService></CardService>
        </Col>
        <Col>
          <CardService></CardService>
        </Col>
        <Col>
          <CardService></CardService>
        </Col>
        <Col>
          <CardService></CardService>
        </Col>
        <Col>
          <CardService></CardService>
        </Col>
      </Row>
    </Container>
  );
}