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
  font-size: 50px;
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
margin: 0 10px;
text-decoration: none;

&:hover img {
  transform: scale(1.1);
  transition: transform 0.2s;
}
`;

export const Icon = styled.img`
width: 40px;
height: auto;
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
`

export const Footer = styled.div`
  text-align: center;
  background-color: #6c5f5f;
  color: #e1d5d5;
  padding: 20px;
  font-size: 17.1px;
  width: 189.6vh;
  cursor: pointer;

  &:hover {
    background-color: #4c4c4c;
  }
`
export const Header = styled.div`
  width: 183vh;
  border-radius: 10px;
  background-color: #f8f9fa;
  border-bottom: 2px solid #d1d5db;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  background-color: transparent;
  color: #3182ce;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: color 0.3s;

  &:hover {
    color: #2563eb;
  }
`;
