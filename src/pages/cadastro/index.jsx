
import { Container, Form } from './style'
//import {PadraoTitulo} from '../../components/Titulo'


export const Cadastro = () => {
    return(
        <Container>
            <Form>
                {/* <PadraoTitulo>{'Cadastro de Usuários'}</PadraoTitulo> */}
                <input placeholder="Nome" name='nome' type='text' />
                <input placeholder="idade"name='idade' type='text' />  
                <input placeholder="email"name='email' type='email' />
                <button type="submit">Cadastrar</button>
            </Form>
        </Container>
    )
}
