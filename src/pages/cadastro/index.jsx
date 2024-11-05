import React, { useState } from 'react';
import axios from 'axios';
import { Container, ErrorMessage, Form, Input, SuccessMessage, Title } from './style'
import { ButtonComponents } from '../../components/Button/style';
import { InputStyle } from "../../components/InputField/style"

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
                <InputStyle
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <InputStyle
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <InputStyle
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <ButtonComponents type="submit">Cadastrar</ButtonComponents>

                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <SuccessMessage>{success}</SuccessMessage>}
            </Form>
        </Container>
    );
};


