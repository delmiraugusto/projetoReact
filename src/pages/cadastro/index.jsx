/*
import { useState } from 'react'
import { Container, Form } from './style'
import axios from 'axios'
//import {PadraoTitulo} from '../../components/Titulo'
import Trash from '../../assets/trash.svg'


export const Cadastro = () => {
     const[formData,setFormData] = useState({email:"",password:""})
     const[error,setError] = useState(null)
     const[success, setSuccess] = useState(null)

     const handleSubmit = async (e) => {
         e.preventDefault()
         setError(null)
         setSuccess(null) 
         try {
             const response = await axios.post(`${import.meta.env.VITE_URL_USERS}/users`,formData)
         } catch (error) {
             setError("Erro ao cadastrar usuário!")
           }
     }
    
     const handleChange = (e) => {
        const{name,value}= e.target
         setFormData({...formData,[e.target.name]:e.target.value})
     }


    return(
        <Container>

             <Form onSubmit={handleSubmit}>
                {/* <PadraoTitulo>{'Cadastro de Usuários'}</PadraoTitulo> */
                /* <input placeholder="Nome" name='nome' type='text' /> */
                /*<Input 
                    type = 'email'
                    name= 'email'
                    placeholder = 'email'
                    value = {formData.email}
                    onChange = {handleChange}
                    required 
                    />
                <Input 
                    type = 'password'
                    name= 'password'
                    placeholder = 'password'
                    value = {formData.password}
                    onChange = {handleChange}
                    required 
                    />

                <button type="submit">Cadastrar</button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <p>{success}</p>}  

            </Form >
            <div>
                <div>
                    <p>Nome:</p>
                    <p>Idade:</p>
                    <p>Email:</p>
                </div>
                <button>
                <Trash />
                </button>
            </div>
        </Container>
    )
}*/

import React, { useState } from 'react';
import axios from 'axios';
import {Button,Container,ErrorMessage,Form,Input,SuccessMessage,Title} from './style'

 export const Cadastro = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!formData.email || !formData.password) {
            setError("Todos os campos são obrigatórios!");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_USERS}/users`, formData);
            setSuccess("Cadastro realizado com sucesso!");
            setFormData({ email: '', password: '' });
        } catch (error) {
            setError("Erro ao cadastrar usuário. Tente novamente.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Cadastro de Usuário</Title>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Cadastrar</Button>

                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <SuccessMessage>{success}</SuccessMessage>}
            </Form>
        </Container>
    );
};

