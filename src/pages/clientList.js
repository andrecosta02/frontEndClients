// import React, { useState, useEffect } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import * as Icon from 'react-bootstrap-icons';
// import * as apiService from '../services/apiService';
// import ClientEditModal from './clientEditModal'

// function ClientList() {
//     const [clientData, setClientData] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [currentClient, setCurrentClient] = useState(null);

//     const fetchData = async () => {
//         const response = await apiService.getFunction()
//         setClientData(response);
//     };
    
//     const clientUpdate = (client) => {
//         setCurrentClient(client);
//         setShowEditModal(true);
//         fetchData();
//     };
    
//     const clientDelete = async (clientId) => {
//         await apiService.clientDelete(clientId);
//         fetchData();
//     };
    
//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         // <Container style={{ width: 800, height: 'auto' }}>
//         <Container style={{ height: 'auto' }}>
//             <h1 style={{ margin: 50 }}>Lista de Clientes</h1>
//             <ListGroup>
//                 <Row>
//                     <Col>Id</Col>
//                     <Col>Nome</Col>
//                     <Col>Email</Col>
//                     <Col>Endereço</Col>
//                     <Col>CPF</Col>
//                     <Col>Editar</Col>
//                     <Col>Excluir</Col>
//                 </Row>
//                 {clientData.map((client) => (
//                     <ListGroup.Item key={client.clientId}>
//                         <Row>
//                             <Col>{client.clientId}</Col>
//                             <Col>{client.clientName}</Col>
//                             <Col>{client.clientEmail}</Col>
//                             <Col>{client.clientAddress}</Col>
//                             <Col>{client.clientCpf}</Col>
//                             <Col>
//                                 <Icon.PencilFill onClick={() => clientUpdate(client)} />
//                             </Col>
//                             <Col><Icon.Trash onClick={() => clientDelete(client.clientId)} /></Col>
//                         </Row>
//                     </ListGroup.Item>
//                 ))}
//             </ListGroup>
//             {currentClient && (
//                 <ClientEditModal
//                     client={currentClient}
//                     show={showEditModal}
//                     onHide={() => setShowEditModal(false)}
//                     fetchData={fetchData}
//                 />
//             )}
//         </Container>
//     );
// }

// export default ClientList;



import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import * as Icon from 'react-bootstrap-icons';
import * as apiService from '../services/apiService';
import ClientEditModal from './clientEditModal';

function ClientList() {
    const [clientData, setClientData] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentClient, setCurrentClient] = useState(null);

    const fetchData = async () => {
        const response = await apiService.getFunction();
        setClientData(response);
    };
    
    const clientUpdate = (client) => {
        setCurrentClient(client);
        setShowEditModal(true);
        fetchData();
    };
    
    const clientDelete = async (clientId) => {
        await apiService.clientDelete(clientId);
        fetchData();
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container style={{ height: 'auto' }}>
            <h1 style={{ margin: 30 }}>Lista de Clientes</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid black', padding: '10px 0' }}>
                    <div style={{ flex: '1 1 20px' }}>Id</div>
                    <div style={{ flex: '1 1 100px' }}>Nome</div>
                    <div style={{ flex: '1 1 200px' }}>Email</div>
                    <div style={{ flex: '1 1 200px' }}>Endereço</div>
                    <div style={{ flex: '1 1 100px' }}>CPF</div>
                    <div style={{ flex: '1 1 50px' }}></div>
                    <div style={{ flex: '1 1 50px' }}></div>
                </div>
                {clientData.map((client) => (
                    <div key={client.clientId} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid black', padding: '10px 0' }}>
                        <div style={{ flex: '1 1 20px' }}>{client.clientId}</div>
                        <div style={{ flex: '1 1 100px' }}>{client.clientName}</div>
                        <div style={{ flex: '1 1 200px' }}>{client.clientEmail}</div>
                        <div style={{ flex: '1 1 200px' }}>{client.clientAddress}</div>
                        <div style={{ flex: '1 1 100px' }}>{client.clientCpf}</div>
                        <div style={{ flex: '1 1 50px' }}>
                            <Icon.PencilFill onClick={() => clientUpdate(client)} />
                        </div>
                        <div style={{ flex: '1 1 50px' }}>
                            <Icon.Trash onClick={() => clientDelete(client.clientId)} />
                        </div>
                    </div>
                ))}
            </div>
            {currentClient && (
                <ClientEditModal
                    client={currentClient}
                    show={showEditModal}
                    onHide={() => setShowEditModal(false)}
                    fetchData={fetchData}
                />
            )}
        </Container>
    );
}

export default ClientList;
