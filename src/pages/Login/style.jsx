import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
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

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;
