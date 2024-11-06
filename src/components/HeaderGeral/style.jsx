import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  border-bottom: 1px solid #d1d5db; /* Diminui a espessura da borda */
  padding: 8px 0; /* Menos padding */
  position: sticky;
  top: 0;
  z-index: 10;
`;


export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 10px;
  background-color: #1E40AF; 
  color: #FFFFFF;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1D4ED8; 
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;  /* Menos espaço entre os itens */
  padding: 8px 0;  /* Menos padding */
  background-color: #E5E7EB;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Menor sombra */
`;


export const CategoryButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #3B82F6; 
  color: #FFFFFF;
  font-size: 0.85em;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #2563EB; 
    transform: scale(1.05);
  }
`;


export const Container = styled.div`
  padding: 30px;
  max-width: 1100px;
  margin: auto;
  background-color: #FFFFFF; 
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); 
  color: #374151;
`;

export const SearchInput = styled.input`
   width: 100%;
  max-width: 600px;
  padding: 12px;
  font-size: 1em;
  border: 1px solid #9CA3AF;
  border-radius: 8px;
  background-color: #E5E7EB;
  color: #374151;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4B5563;
    outline: none;
  }
`;


export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding-top: 15px;
`;

export const Card = styled.div`
  padding: 18px;
  border: 1px solid #E2E8F0; 
  background-color: #FFFFFF; 
  color: #1F2937; 
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); 

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;


export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
`;

export const Name = styled.h3`
  font-size: 1.1em;
  margin: 10px 0;
  color: #1E40AF; 
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 1em;
  color: #10B981; 
  margin-bottom: 12px;
  font-weight: bold;
`;

export const AddButton = styled.button`
  padding: 10px 16px;
  background-color: #3B82F6; 
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #2563EB;
    transform: translateY(-2px); 
  }
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;  /* Reduzir o espaçamento entre os itens */
  max-width: 1000px;
  margin: 0 auto;
  padding: 3px 0;  /* Menos padding */
`;


export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;  /* Reduzir o espaço entre ícones e texto */
  padding: 8px 14px;  /* Menor padding */
  background-color: transparent;
  color: #3182ce;
  font-weight: 500;
  border: none;

  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9em;  /* Fonte menor */
  transition: color 0.3s;

  &:hover {
    color: #0038b2;
  }
`;


export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none; 
  &:hover {
    color: #0056b3;
}
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const Nav = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 50px;
  background-color: #141414;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`
export const LogoContainer = styled.div`

  overflow-y: auto;
  padding: 5px 50px; /* Menos padding horizontal */

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  height: 80px; /* Logo menor */
  width: 80px;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;