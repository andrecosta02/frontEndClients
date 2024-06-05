import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientForm from './pages/clientForm';
import ClientList from './pages/clientList';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container style={{ width: 1400, marginTop: 50}}>
            <Row>
                <Col>
                    <ClientForm/>
                </Col>
                <Col xs="auto" className="d-flex align-items-center">
                    <div style={{ borderLeft: '1px solid black', height: '100%' }}></div>
                </Col>
                <Col>
                    <div style={{ width: 800 }}>
                        <ClientList/>
                    </div>
                </Col>
            </Row>
        </Container>
    </React.StrictMode>
);
