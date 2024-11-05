import styled from "styled-components"

export const Container =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContentForms = styled.div`
  background-color: #f5d394;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`

export const Body = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 20px;
`

export const Title = styled.h1`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 20px;
`

export const Img = styled.img`
  width: 500px;
  padding: 20px;
`

export const ImgMaior = styled.img`
  width: 700px;
  padding: 20px;
`

export const ImgMenor = styled.img`
  width: 300px;
  padding: 20px;
`

export const Link = styled.a`
display: inline-block;
margin: 0 10px; /* Margem entre os ícones */
text-decoration: none; /* Remove underline */

&:hover img {
  transform: scale(1.1); /* Efeito de aumento ao passar o mouse */
  transition: transform 0.2s; /* Transição suave */
}
`;

// Estilizando o ícone
export const Icon = styled.img`
width: 40px; /* Defina o tamanho do ícone conforme necessário */
height: auto; /* Mantém a proporção da imagem */
`;

export const Block = styled.div`
  background-color: #F5F5DC;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #D3D3D3;
  }
`

export const Text = styled.text`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;  
  font-size: 18px;
  padding: 10px;
  color: #000000;
  transition: color 0.3s ease;
  
  &:hover {
    color: #008000;
  }
`

export const Footer = styled.div`
  text-align: center;
  background-color: #6c5f5f;
  color: #e1d5d5;
  padding: 20px;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    background-color: #4c4c4c;
  }
`
