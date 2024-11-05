import React, { useState } from 'react';
import { Container, Form, Input, Button, ErrorMessage } from './style';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogin(e) {
        e.preventDefault();

        if (!email || !password) {
            setError('Por favor, preencha todos os campos');
        } else {
            setError('');
            console.log('Logando com', { email, password });
        }
    };

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Logar</Button>
            </Form>
        </Container>
    );
}