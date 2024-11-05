import { useState } from 'react';
import { Container, Form, Button, Title } from './style';
import { InputStyle } from "../../components/InputField/style"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            alert("Preencha todos os campos");
        } else if (!emailRegex.test(email)) {
            alert("Insira um e-mail válido");
        } else {
            alert("Login Realizado com Sucesso")
        }
    };

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Title>Login</Title>
                <InputStyle
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputStyle
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