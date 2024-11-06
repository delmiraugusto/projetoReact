import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #1a202c; 
  margin: 20px auto;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const CategoryButton = styled.button`
  padding: 10px 15px;
  background-color: #2d3748; 
  color: #e2e8f0; 
  font-size: 0.9em;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #4a5568; 
    transform: scale(1.05);
  }

  &.active {
    background-color: #63b3ed; 
    color: #1a202c; 
  }
`;
