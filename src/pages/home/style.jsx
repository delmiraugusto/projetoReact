import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  background: #ff007f;
`;

export const CategoryButton = styled.button`
  padding: 12px 25px;
  border: 2px solid #ffcc00;
  background: #00ccff;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffcc00;
    color: #333;
  }
`;

export const Container = styled.div`
  padding: 25px;
  max-width: 1200px;
  margin: auto;
  background: #333;
  color: #fff;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  font-size: 1.1em;
  border: 2px solid #ff007f;
  background: #222;
  color: #fff;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
`;

export const Card = styled.div`
  padding: 20px;
  border: 2px solid #ffcc00;
  text-align: center;
  background: #444;
  color: #ffcc00;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #ff007f;
`;

export const Name = styled.h3`
  font-size: 1.4em;
  margin: 12px 0;
  color: #ffcc00;
`;

export const Price = styled.p`
  font-size: 1.1em;
  color: #00ff99;
  font-weight: bold;
`;

export const AddButton = styled.button`
  padding: 12px 20px;
  background: #ff007f;
  color: #fff;
  border: 2px solid #00ccff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #00ccff;
    color: #333;
  }
`;
