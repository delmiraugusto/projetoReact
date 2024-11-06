import styled from 'styled-components';


export const Container = styled.div`
<<<<<<< Updated upstream
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
=======
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #57bafc, #043d77, #57bafc, #9dc9ff);
    background-size: 200% 200%;
    animation: auroraAnimation 12s ease-in-out infinite;

    @keyframes auroraAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 80%;
    max-width: 1200px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
        height: 700px;
        width: auto;

        @media screen and (max-width: 768px) {
            height: 80px;
        }
    }
`;

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;

    @media screen and (max-width: 600px) {
        max-width: 90%;
        padding: 2rem;
    }

    @media screen and (max-width: 768px) {
        max-width: 80%;
        padding: 2.5rem;
    }
`;

export const Title = styled.h2`
    font-family: Arial, sans-serif;
    font-size: 28px;
    color: #333;
    margin-bottom: 1.5rem;
`;

export const Paragraf = styled.p`
    text-align: center;
    padding: 10px;
    font-size: 16px;
    color: #666;
    font-family: Arial, sans-serif;
`;

export const Input = styled.input`
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;

    &:focus {
        outline: none;
        border-color: #007bff; 
    }

    @media screen and (max-width: 600px) {
        padding: 0.8rem;
        font-size: 14px; 
    }
`;

export const Button = styled.button`
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    background-color: #007bff; 
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3; 
    }

    @media screen and (max-width: 600px) {
        padding: 0.8rem;
        font-size: 16px; 
    }
`;
>>>>>>> Stashed changes
