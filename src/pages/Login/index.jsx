import { useState } from 'react';
import { Container, Form, Button, Title, Paragraf } from './style';
import { InputStyle } from "../../components/InputField/style"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            alert("Preencha todos os campos");
            return;
        } else if (!emailRegex.test(email)) {
            alert("Insira um e-mail válido");
            return;
        }

        try {
            const response = await axios.get('https://672a5446976a834dd0230049.mockapi.io/users');

            // Verifica se existe algum usuário com o email e senha fornecidos
            const user = response.data.find((user) => user.email === email && user.password === password);

            if (user) {
                // Se o usuário existe, redireciona para a página desejada
                alert("Login Realizado com Sucesso");
                navigate('/cadastro');
            } else {
                alert('Dados inválidos');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Dados inválidos');
            }
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
                <Paragraf>
                    Não possui login?{' '}
                    <Link to="/cadastro">Cadastre-se</Link>
                </Paragraf>
            </Form>
        </Container>
    );
}