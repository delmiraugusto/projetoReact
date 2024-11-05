import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background-color: #ffffff;
`;

export const Title = styled.h1`
    font-size: 28px;
    color: #0F1111;
    margin-bottom: 20px;
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ProductItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
`;

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
`;

export const ProductInfo = styled.div`
    flex: 1;

    h3 {
        margin: 0 0 10px;
    }

    p {
        margin: 5px 0;
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    span {
        margin: 0 10px;
        font-size: 16px;
    }
`;

export const Button = styled.button`
    background-color: #FFA41C;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #F08804;
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Total = styled.h2`
    font-size: 24px;
    color: #0F1111;
`;

export const CheckoutButton = styled.button`
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }
`;
