
import { useState } from 'react'
import { Container, Form } from './style'
import axios from 'axios'
//import {PadraoTitulo} from '../../components/Titulo'


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
                {/* <PadraoTitulo>{'Cadastro de Usuários'}</PadraoTitulo> */}
                {/* <input placeholder="Nome" name='nome' type='text' /> */}
                <Input 
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
                    <img/>
                </button>
            </div>
        </Container>
    )
}

