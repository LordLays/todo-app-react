import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Color.scss';
import NavBar from '../NavBar/NavBar';

const ColorUtilities = () => {
    return (
        <Container fluid>
          <Row>
            <Col lg={4}>
              <Card className="shadow mb-4">
                <Card.Header className="py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                </Card.Header>
                <Card.Body>
                  <p className="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
                  <p className="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
                  <p className="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
                  <p className="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
                  <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
                  <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
                  <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
                  <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
                  <p className="text-gray-900 p-3 m-0">.text-gray-900</p>
                </Card.Body>
              </Card>
    
              <Card className="shadow mb-4">
                <Card.Header className="py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                </Card.Header>
                <Card.Body>
                  <p className="text-xs">.text-xs</p>
                  <p className="text-lg mb-0">.text-lg</p>
                </Card.Body>
              </Card>
            </Col>
    
            <Col lg={4}>
              <Card className="shadow mb-4">
                <Card.Header className="py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities</h6>
                </Card.Header>
                <Card.Body>
                  <div className="px-3 py-5 bg-gradient-primary text-white">.bg-gradient-primary</div>
                  <div className="px-3 py-5 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
                  <div className="px-3 py-5 bg-gradient-success text-white">.bg-gradient-success</div>
                  <div className="px-3 py-5 bg-gradient-info text-white">.bg-gradient-info</div>
                  <div className="px-3 py-5 bg-gradient-warning text-white">.bg-gradient-warning</div>
                  <div className="px-3 py-5 bg-gradient-danger text-white">.bg-gradient-danger</div>
                  <div className="px-3 py-5 bg-gradient-light text-white">.bg-gradient-light</div>
                  <div className="px-3 py-5 bg-gradient-dark text-white">.bg-gradient-dark</div>
                </Card.Body>
              </Card>
            </Col>
    
            <Col lg={4}>
              <Card className="shadow mb-4">
                <Card.Header className="py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities</h6>
                </Card.Header>
                <Card.Body>
                  <div className="p-3 bg-gray-100">.bg-gray-100</div>
                  <div className="p-3 bg-gray-200">.bg-gray-200</div>
                  <div className="p-3 bg-gray-300">.bg-gray-300</div>
                  <div className="p-3 bg-gray-400">.bg-gray-400</div>
                  <div className="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                  <div className="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                  <div className="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                  <div className="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                  <div className="p-3 bg-gray-900 text-white">.bg-gray-900</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
};

export default ColorUtilities;
