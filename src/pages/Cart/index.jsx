// src/pages/Cart.jsx

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {
    Container,
    Title,
    ProductList,
    ProductItem,
    ProductImage,
    ProductInfo,
    ProductQuantity,
    Button,
    TotalContainer,
    Total,
    CheckoutButton
} from './style';

export const Cart = () => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const handleDecreaseQuantity = (product) => {
        removeFromCart(product); // Usa a função do contexto para diminuir a quantidade
    };

    const handleRemoveFromCart = (product) => {
        removeFromCart(product); // Também usa a função do contexto para remover
    };

    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <Container>
            <Title>Carrinho de Compras</Title>
            <ProductList>
                {cart.map((item) => (
                    <ProductItem key={item.product.id}>
                        <ProductImage src={item.product.image} alt={item.product.name} />
                        <ProductInfo>
                            <h3>{item.product.name}</h3>
                            <p>Preço: R$ {item.product.price.toFixed(2)}</p>
                            <ProductQuantity>
                                <Button onClick={() => handleDecreaseQuantity(item.product)}>-</Button>
                                <span>{item.quantity}</span>
                                <Button onClick={() => addToCart(item.product, 1)}>+</Button>
                            </ProductQuantity>
                            <Button onClick={() => handleRemoveFromCart(item.product)}>Remover</Button>
                        </ProductInfo>
                    </ProductItem>
                ))}
            </ProductList>
            <TotalContainer>
                <Total>Total: R$ {totalPrice.toFixed(2)}</Total>
                <CheckoutButton>Finalizar Compra</CheckoutButton>
            </TotalContainer>
        </Container>
    );
};
