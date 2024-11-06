import styled from 'styled-components';

// Estilo aprimorado para o Container de Categorias
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #1e293b;
  border-radius: 16px;
  margin: 20px auto;
  max-width: 85%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  gap: 10px;
`;

// Estilo aprimorado para o Botão de Categoria
export const CategoryButton = styled.button`
  padding: 12px 18px;
  background-color: #334155;
  color: #e2e8f0;
  font-size: 0.95em;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #475569;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &.active {
    background-color: #38bdf8;
    color: #1e293b;
    box-shadow: 0 3px 8px rgba(56, 189, 248, 0.4);
  }
`;
