import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #1E40AF;
    margin-bottom: 20px;
    font-weight: bold;
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
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    background-color: #f8fafc;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #E0F2FE;
        transform: translateY(-5px);
    }
`;

export const ProductImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
    flex: 1;

    h3 {
        margin: 0 0 10px;
        font-size: 1.1em;
        font-weight: 600;
        color: #1E40AF;
    }

    p {
        margin: 5px 0;
        color: #374151;
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    span {
        margin: 0 10px;
        font-size: 16px;
        color: #374151;
    }
`;

export const Button = styled.button`
    background-color: #3B82F6;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px 14px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s ease;

    &:hover {
        background-color: #2563EB;
        transform: translateY(-2px);
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 2px solid #E5E7EB;
`;

export const Total = styled.h2`
    font-size: 24px;
    color: #1E40AF;
    font-weight: 600;
`;

export const CheckoutButton = styled.button`
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s ease;

    &:hover {
        background-color: #45a049;
        transform: translateY(-2px);
    }
`;
