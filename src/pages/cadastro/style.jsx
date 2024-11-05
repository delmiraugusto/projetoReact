// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   flex-direction: column;
//   padding-top: 80px;
// `;

// export const Div = styled.div`
//   font-size: 24px;
//   color: black;
//   text-align: center;
//   background-color: #f9f9f9;
//   padding-top: 100px;
//   flex-direction: column;
//   align-items: center;
//   width:70%;
// `;

// export const Form = styled.div`
//   background-color: #044706;
//   color: white;
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   border-radius: 10px;
//   max-width: 50%;
//   margin-bottom: 20px;
// `;

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #76bffc;
    
`;

export const Form = styled.form`
    background-color: #0868d475;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
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
    margin-top: 10px;
    text-align: center;
`;