// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import { postFunction } from "../services/apiService";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function ClientForm() {
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [endereco, setEndereco] = useState('');
//     const [cpf, setCpf] = useState('');

//     async function btnPostFunctionClick(event) {
//         event.preventDefault();
//         await postFunction(nome, email, endereco, cpf);
//     }

//     return (
//         <Container>
//             <h1 style={{ margin: 50 }}>Cadastro de Clientes</h1>
//             <Form noValidate onSubmit={btnPostFunctionClick}>
//                 <InputGroup className="mb-3">
//                     <Form.Control
//                         placeholder="Seu nome"
//                         aria-label="nome"
//                         aria-describedby="basic-addon1"
//                         value={nome}
//                         onChange={(e) => setNome(e.target.value)}
//                     />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                     <Form.Control
//                         placeholder="Endereço de e-mail"
//                         aria-label="e-mail"
//                         aria-describedby="basic-addon2"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <InputGroup.Text id="basic-addon2">@exemplo.com</InputGroup.Text>
//                 </InputGroup>
//                 <Row>
//                     <Col sm={8}>
//                         <InputGroup className="mb-3">
//                             <Form.Control
//                                 placeholder="Endereço"
//                                 aria-label="endereco"
//                                 aria-describedby="basic-addon1"
//                                 value={endereco}
//                                 onChange={(e) => setEndereco(e.target.value)}
//                             />
//                         </InputGroup>
//                     </Col>
//                     <Col sm={4}>
//                         <InputGroup className="mb-3">
//                             <Form.Control
//                                 placeholder="CPF"
//                                 aria-label="cpf"
//                                 aria-describedby="basic-addon1"
//                                 value={cpf}
//                                 minLength="11"
//                                 maxLength="11"
//                                 onChange={(e) => setCpf(e.target.value)}
//                             />
//                         </InputGroup>
//                     </Col>
//                 </Row>
//                 <Button type="submit">Criar cadastro</Button>
//             </Form>
//         </Container>
//     );
// }

// export default ClientForm;


import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { postFunction } from "../services/apiService";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputMask from 'react-input-mask';

function ClientForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');

    async function btnPostFunctionClick(event) {
        event.preventDefault();
        const cpfNumeros = cpf.replace(/\D/g, ''); // Remove a máscara, deixando apenas números
        await postFunction(nome, email, endereco, cpfNumeros);
    }

    return (
        <Container>
            <h1 style={{ margin: 30 }}>Cadastro de Clientes</h1>
            <Form noValidate onSubmit={btnPostFunctionClick}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Seu nome"
                        aria-label="nome"
                        aria-describedby="basic-addon1"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Endereço de e-mail"
                        aria-label="e-mail"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputGroup.Text id="basic-addon2">@exemplo.com</InputGroup.Text>
                </InputGroup>
                <Row>
                    <Col sm={8}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Endereço"
                                aria-label="endereco"
                                aria-describedby="basic-addon1"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={4}>
                        <InputGroup className="mb-3">
                            <InputMask
                                mask="999.999.999-99"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            >
                                {(inputProps) => (
                                    <Form.Control
                                        {...inputProps}
                                        placeholder="CPF"
                                        aria-label="cpf"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </InputMask>
                        </InputGroup>
                    </Col>
                </Row>
                <Button type="submit">Criar cadastro</Button>
            </Form>
        </Container>
    );
}

export default ClientForm;
