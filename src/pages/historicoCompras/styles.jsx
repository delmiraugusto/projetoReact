import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d3d3d3;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const OrderCard = styled.div`
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #007bff;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.5);
  }
`;

export const OrderDate = styled.p`
  font-size: 14px;
  color: #333;
  margin: 5px 0;
`;

export const OrderTotal = styled.p`
  font-size: 16px;
  color: #007bff;
  font-weight: bold;
  margin: 5px 0;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  margin-top: 20px;
`;
