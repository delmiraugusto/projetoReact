import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d3d3d3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
`;

export const Paragraf = styled.p`
   text-align: center;
   padding: 10px;
`;

export const Title = styled.h2`
    text-align: center; 
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;
