import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
<<<<<<< Updated upstream
    background-color: #76bffc;
    
`;

export const Form = styled.form`
    background-color: #0868d475;
=======
    background: linear-gradient(135deg, #57bafc, #57bafc, #043d77, #9dd6fc);
    background-size: 300% 300%;
    animation: auroraAnimation 15s ease-in-out infinite;

    @keyframes auroraAnimation {
        0% { background-position: 100% 0%; }
        25% { background-position: 0% 100%; }
        50% { background-position: 100% 0%; }
        75% { background-position: 0% 100%; }
        100% { background-position: 100% 0%; }
    }
`;

export const Form = styled.form`
    background-color: rgb(255, 255, 255); 
>>>>>>> Stashed changes
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
<<<<<<< Updated upstream
    max-width: 400px;
    padding: 40px;    
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 24px;
    color: #fafafc;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
`;

export const SuccessMessage = styled.p`
    color: green;
    font-size: 14px;
=======
    max-width: 500px;
    text-align: center;
    backdrop-filter: blur(10px);
    margin: 1rem;

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
    font-family: 'Press Start 2P', cursive;
    font-size: 32px;
    color: #000000;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 600px) {
        font-size: 26px;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const ErrorMessage = styled.p`
    color: #ff4444;
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

    @media screen and (max-width: 600px) {
        font-size: 14px;
        margin-top: 8px;
    }
`;

export const SuccessMessage = styled.p`
    color: #00ff99;
    font-size: 16px;
>>>>>>> Stashed changes
    margin-top: 10px;
    text-align: center;

<<<<<<< Updated upstream
`;
=======
    @media screen and (max-width: 600px) {
        font-size: 14px;
        margin-top: 8px;
    }
`;

export const Input = styled.input`
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    border: 1px solid #00f7ff;
    font-size: 16px;
    color: #fff;
    background-color: rgba(0, 0, 50, 0.5);

    &:focus {
        outline: none;
        border-color: #00ff99;
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
    background-color: #00f7ff;
    color: #000;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #00ff99;
    }

    @media screen and (max-width: 600px) {
        padding: 0.8rem;
        font-size: 16px;
    }
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
        height: 900px;
        width: auto;

        @media screen and (max-width: 768px) {
            height: 80px;
        }
    }
`;
>>>>>>> Stashed changes
