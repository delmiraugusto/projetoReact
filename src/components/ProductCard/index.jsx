import React from 'react';
import { Card, Image, Name, Price, AddButton } from './style';

export const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.name} />
    <Name>{product.name}</Name>
    <Price>R$ {product.price}</Price>
    <AddButton>Adicionar ao Carrinho</AddButton>
  </Card>
);

