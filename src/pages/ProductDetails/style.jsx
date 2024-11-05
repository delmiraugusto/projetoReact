import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background-color: #ffffff;
`;

export const MainSection = styled.div`
    display: flex;
    gap: 40px;
    justify-content: space-between;
`;

export const ImageGallery = styled.div`
    position: relative;
    width: 50%;
`;

export const LargeImage = styled.div`
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    transition: background-size 0.3s;
    border: 1px solid #ddd;

    &:hover {
        background-size: 150%;
    }
`;


export const Thumbnails = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;

    img {
        width: 80px;
        height: 80px;
        cursor: pointer;
        border: 1px solid #ddd;
        transition: border 0.3s;

        &:hover {
            border-color: #FFA41C;
        }
    }
`;

export const ProductInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 28px;
        color: #0F1111;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        margin: 5px 0;
    }

    .price {
        font-size: 20px;
        color: #FFA41C;
        font-weight: bold;
        margin-bottom: 15px;
    }
`;

export const AddToCartButton = styled.button`
    background-color: #FFA41C;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #F08804;
    }
`;

export const QuantityInput = styled.input`
    width: 60px;
    padding: 8px;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #eee;
    margin: 40px 0;
`;

export const RecommendedProducts = styled.div`
    margin-top: 40px;

    h3 {
        font-size: 22px;
        color: #111;
        margin-bottom: 20px;
    }

    .products-list {
        display: flex;
        gap: 20px;
        justify-content: space-between;

        div {
            background-color: #f7f7f7;
            padding: 15px;
            width: 200px;
            text-align: center;
            cursor: pointer;
            border: 1px solid #ddd;
            transition: border 0.3s;

            &:hover {
                border-color: #FFA41C;
            }
        }
    }
`;

export const BestSellers = styled.div`
    margin-top: 40px;

    h3 {
        font-size: 22px;
        color: #111;
        margin-bottom: 20px;
    }

    .products-list {
        display: flex;
        gap: 20px;
        justify-content: space-between;

        div {
            background-color: #f7f7f7;
            padding: 15px;
            width: 200px;
            text-align: center;
            cursor: pointer;
            border: 1px solid #ddd;
            transition: border 0.3s;

            &:hover {
                border-color: #FFA41C;
            }
        }
    }
`;
