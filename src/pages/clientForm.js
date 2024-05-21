import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { postFunction } from "../services/apiService";
import Container from 'react-bootstrap/Container';
import * as ClientList from './clientList'

function ClientForm() {
    // const [nome, setNome] = useState('');
    // const [email, setEmail] = useState('');
    // const [endereco, setEndereco] = useState('');
    // const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('André Victor');
    const [email, setEmail] = useState('andrevgcosta02@gmail.com');
    const [endereco, setEndereco] = useState('Rua André Temudo 135');
    const [cpf, setCpf] = useState('143121484');

    async function btnPostFunctionClick(event) {
        event.preventDefault();

        await postFunction(nome, email, endereco, cpf)
        // ClientList.fetchData();
    }

    return (
        <>
        {/* <Container style={{ width: 660}}> */}
        <Container>
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
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Endereço"
                        aria-label="endereco"
                        aria-describedby="basic-addon1"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="CPF"
                            aria-label="cpf"
                            aria-describedby="basic-addon1"
                            value={cpf}
                            minLength="11"
                            maxLength="11"
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </InputGroup>
                    <Button type="submit">Criar cadastro</Button>
                </Form>
            </Container>
        </>
    );
}

export default ClientForm;


