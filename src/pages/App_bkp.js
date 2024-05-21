// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import { getFunction, postFunction } from "../services/apiService";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'; 

function App() {
    const [validated, setValidated] = useState(false);

    const btnPostFunctionClick = (event) => {
        const form = event.currentTarget;
        console.log(form)
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };


    // function btnGetFunctionClick(){
    //   getFunction()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
    // }

    // function btnPostFunctionClick(){
    //     postFunction()
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    // }

    return (
        <>
        {/* <a href="#" className="btn btn-primary" onClick={btnGetFunctionClick}>GET</a> */}
        {/* <a href="#" className="btn btn-primary" onClick={btnPostFunctionClick}>POST</a> */}

        <Form noValidate onSubmit={btnPostFunctionClick}>
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Seu nome"
            aria-label="nome"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Endereço de e-mail"
            aria-label="e-mail"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@exemplo.com</InputGroup.Text>
        </InputGroup>


        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Endereço"
            aria-label="endereco"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <Button type="submit">Criar cadastro</Button>
        </Form>
        </>
    );
}

export default App;
